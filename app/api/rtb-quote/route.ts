import { NextRequest, NextResponse } from "next/server";

// Server-only env vars — set these in .env.local (never NEXT_PUBLIC_*)
const RTB_ENDPOINT =
  process.env.CALLSCALER_RTB_ENDPOINT ||
  "https://v3.callscaler.com/api/v1/rtb/ping/e9ba4792-b830-440e-8b9c-fdd49fdd059a";
const RTB_SECRET = process.env.CALLSCALER_RTB_SECRET;

interface RtbRequestBody {
  caller: string; // E.164 format, e.g. "+15551234567"
  zip: string;
  ref_id?: string;
}

// Basic E.164-ish check — adjust to your actual phone capture format
function isValidPhone(phone: string) {
  return /^\+1\d{10}$/.test(phone);
}

function isValidZip(zip: string) {
  return /^\d{5}$/.test(zip);
}

export async function POST(req: NextRequest) {
  if (!RTB_SECRET) {
    console.error("CALLSCALER_RTB_SECRET is not set");
    return NextResponse.json(
      { success: false, error: "Server misconfiguration" },
      { status: 500 }
    );
  }

  let body: RtbRequestBody;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json(
      { success: false, error: "Invalid JSON body" },
      { status: 400 }
    );
  }

  const { caller, zip, ref_id } = body;

  if (!caller || !isValidPhone(caller)) {
    return NextResponse.json(
      { success: false, error: "caller must be E.164 format, e.g. +15551234567" },
      { status: 400 }
    );
  }

  if (!zip || !isValidZip(zip)) {
    return NextResponse.json(
      { success: false, error: "zip must be a 5-digit ZIP code" },
      { status: 400 }
    );
  }

  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 8000); // 8s safety timeout

    const rtbRes = await fetch(RTB_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-RTB-Secret": RTB_SECRET,
      },
      body: JSON.stringify({
        caller,
        zip,
        ref_id: ref_id || crypto.randomUUID(),
      }),
      signal: controller.signal,
    });

    clearTimeout(timeout);

    if (!rtbRes.ok) {
      const text = await rtbRes.text().catch(() => "");
      console.error("RTB ping failed", rtbRes.status, text);
      return NextResponse.json(
        { success: false, error: "No bid available" },
        { status: 200 } // treat as "no offer," not a hard failure, to keep UX graceful
      );
    }

    const data = await rtbRes.json();

    // Pass through only what the client needs — don't leak the whole upstream payload
    return NextResponse.json({
      success: true,
      accepted: Boolean(data.accept ?? data.accepted ?? true),
      bid: data.bid ?? null,
      trackingNumber: data.tracking_number ?? data.trackingNumber ?? null,
    });
  } catch (err) {
    console.error("RTB request error", err);
    return NextResponse.json(
      { success: false, error: "Unable to reach bidding service" },
      { status: 502 }
    );
  }
}