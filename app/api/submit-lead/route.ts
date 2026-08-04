import { NextRequest, NextResponse } from "next/server";
import {
  getClientIp,
  checkRateLimit,
  rateLimitResponse,
  isAllowedOrigin,
  forbiddenOriginResponse,
  logRequest,
} from "@/lib/security";
import { sendLeadAutoReplyEmail, sendLeadNotificationEmail } from "@/lib/email";

const GOOGLE_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSd8lTKWb3ahBVrvbkBPXDgHU_oG-uVAd7PrCpuPXIZs61qfOw/formResponse";

const ENTRY_IDS = {
  campaign: "entry.542526956",
  firstName: "entry.1862210803",
  lastName: "entry.1549380775",
  address: "entry.219003485",
  city: "entry.297900501",
  state: "entry.110340468",
  zip: "entry.1795686712",
  phone: "entry.1824246880",
  dob: "entry.1079218925",
  jornaya: "entry.374167377",
  email: "entry.44866929",
  trustedLink: "entry.846729564",
  ipAddress: "entry.838952419",
  request: "entry.1488324304",
  response: "entry.522850628",
};

const ROUTE = "submit-lead";
const RATE_LIMIT = 10;
const RATE_WINDOW_MS = 10 * 60 * 1000;

export async function POST(req: NextRequest) {
  const ip = getClientIp(req);

  if (!isAllowedOrigin(req)) {
    logRequest({ route: ROUTE, ip, outcome: "blocked_origin" });
    return forbiddenOriginResponse();
  }

  const rl = checkRateLimit(`${ip}:${ROUTE}`, RATE_LIMIT, RATE_WINDOW_MS);
  if (!rl.allowed) {
    logRequest({ route: ROUTE, ip, outcome: "blocked_rate_limit" });
    return rateLimitResponse(rl.resetAt);
  }

  try {
    const body = await req.json();

    const phone = String(body.phone ?? "");
    const zip = String(body.zip ?? "");
    const state = String(body.state ?? "");
    const jornayaId = String(body.jornayaId ?? "");
    const trustedFormUrl = String(body.trustedFormUrl ?? "");

    if (!/^\d{10}$/.test(phone)) {
      logRequest({ route: ROUTE, ip, outcome: "validation_error", detail: "invalid_phone" });
      return NextResponse.json({ success: false, error: "Invalid phone" }, { status: 400 });
    }
    if (!/^\d{5}$/.test(zip)) {
      logRequest({ route: ROUTE, ip, outcome: "validation_error", detail: "invalid_zip" });
      return NextResponse.json({ success: false, error: "Invalid zip" }, { status: 400 });
    }
    if (!/^[A-Z]{2}$/.test(state)) {
      logRequest({ route: ROUTE, ip, outcome: "validation_error", detail: "invalid_state" });
      return NextResponse.json({ success: false, error: "Invalid state" }, { status: 400 });
    }
    if (!jornayaId || jornayaId.length < 10) {
      logRequest({ route: ROUTE, ip, outcome: "validation_error", detail: "missing_jornaya" });
      return NextResponse.json({ success: false, error: "Missing Jornaya token" }, { status: 400 });
    }
    if (!/^https:\/\/cert\.trustedform\.com\//.test(trustedFormUrl)) {
      logRequest({ route: ROUTE, ip, outcome: "validation_error", detail: "missing_trustedform" });
      return NextResponse.json({ success: false, error: "Missing TrustedForm cert" }, { status: 400 });
    }

    const dob = new Date(String(body.dob ?? ""));
    const now = new Date();
    if (isNaN(dob.getTime()) || dob > now || now.getFullYear() - dob.getFullYear() > 120) {
      logRequest({ route: ROUTE, ip, outcome: "validation_error", detail: "invalid_dob" });
      return NextResponse.json({ success: false, error: "Invalid DOB" }, { status: 400 });
    }

    const forwardedFor = req.headers.get("x-forwarded-for");
    const ipAddress = forwardedFor ? forwardedFor.split(",")[0].trim() : ip;

    const payload = new URLSearchParams();
    payload.append(ENTRY_IDS.campaign, "Final Expense");
    payload.append(ENTRY_IDS.firstName, body.firstName ?? "");
    payload.append(ENTRY_IDS.lastName, body.lastName ?? "");
    payload.append(ENTRY_IDS.address, body.address ?? "");
    payload.append(ENTRY_IDS.city, body.city ?? "");
    payload.append(ENTRY_IDS.state, body.state ?? "");
    payload.append(ENTRY_IDS.zip, body.zip ?? "");
    payload.append(ENTRY_IDS.phone, body.phone ?? "");
    payload.append(ENTRY_IDS.dob, body.dob ?? "");
    payload.append(ENTRY_IDS.email, body.email ?? "");
    payload.append(ENTRY_IDS.jornaya, body.jornayaId ?? "");
    payload.append(ENTRY_IDS.trustedLink, body.trustedFormUrl ?? "");
    payload.append(ENTRY_IDS.ipAddress, ipAddress);
    payload.append(ENTRY_IDS.request, body.hasInsurance ?? "");
    payload.append(ENTRY_IDS.response, body.preferredTime ?? "");

    const res = await fetch(GOOGLE_FORM_URL, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: payload.toString(),
    });

    if (!res.ok) {
      logRequest({
        route: ROUTE,
        ip,
        outcome: "upstream_error",
        detail: `google_forms_status_${res.status}`,
      });
      throw new Error(`Google Forms responded with status ${res.status}`);
    }

    const emailData = {
      firstName: String(body.firstName ?? ""),
      lastName: String(body.lastName ?? ""),
      phone: String(body.phone ?? ""),
      email: String(body.email ?? ""),
      address: String(body.address ?? ""),
      city: String(body.city ?? ""),
      state,
      zip,
      dob: String(body.dob ?? ""),
      hasInsurance: String(body.hasInsurance ?? ""),
      preferredTime: String(body.preferredTime ?? ""),
      ipAddress,
    };

    Promise.allSettled([
      sendLeadNotificationEmail(emailData),
      sendLeadAutoReplyEmail(emailData),
    ]).then((results) => {
      results.forEach((r, i) => {
        if (r.status === "rejected") {
          const label = i === 0 ? "lead notification" : "auto-reply";
          console.error(`Email send failed (${label}):`, r.reason);
        }
      });
    });

    logRequest({
      route: ROUTE,
      ip,
      outcome: "success",
      meta: { zip, state },
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Lead submission error:", err);
    logRequest({ route: ROUTE, ip, outcome: "error", detail: String(err) });
    return NextResponse.json(
      { success: false, error: "Failed to submit lead" },
      { status: 500 }
    );
  }
}