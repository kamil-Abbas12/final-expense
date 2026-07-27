"use client";

import { useEffect, useState } from "react";
import { Phone, Lock, Loader2, User, Mail, Home, Building2, MapPin, Calendar } from "lucide-react";
import { useRtbQuote } from "@/lib/hooks/useRtbQuote";

interface QuoteFormData {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  dob: string;
  coverage: string;
  preferredTime: string; // add this
  tcpaConsent: boolean;
}

const FALLBACK_CALL_DISPLAY = "(680) 225-1305";
const FALLBACK_CALL_TEL = "tel:+16802251305";

function formatPhoneDisplay(digits: string) {
  if (digits.length <= 3) return digits;
  if (digits.length <= 6) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
  return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6, 10)}`;
}

// Same capture pattern as your other forms
function captureTrackingTokens(): boolean {
  const leadidToken = document.querySelector<HTMLInputElement>(
    "#leadid_token, input[name='universal_leadid']"
  );
  const hidLeadid = document.getElementById("Hidleadid") as HTMLInputElement | null;
  const hidTrusted = document.getElementById("hidTrusted") as HTMLInputElement | null;
  const trustedToken = document.querySelector<HTMLInputElement>(
    "input[name^='xxTrustedFormCertUrl'], input[id^='xxTrustedFormCertUrl']"
  );

  let jornayaReady = false;

  if (leadidToken && hidLeadid && leadidToken.value) {
    hidLeadid.value = leadidToken.value;
    jornayaReady = true;
  }
  if (trustedToken && hidTrusted && trustedToken.value) {
    hidTrusted.value = trustedToken.value;
  }

  return jornayaReady;
}

function CallNowCard() {
  const { getQuote, loading } = useRtbQuote();
  const [zip, setZip] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState<string | null>(null);

  const canCall = zip.length === 5 && phone.length === 10;

  const handleCallNow = async () => {
    setError(null);
    let callTel = FALLBACK_CALL_TEL;

    try {
      const res = await getQuote(`+1${phone}`, zip);
      if (res.success && res.accepted && res.trackingNumber) {
        const digits = res.trackingNumber.replace(/\D/g, "").slice(-10);
        callTel = `tel:+1${digits}`;
      }
    } catch {
      // fall through to fallback number
    }

    window.location.href = callTel;
  };

  return (
    <div className="rounded-2xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-950 p-8 shadow-sm text-center">
      <p className="mb-5 text-sm text-gray-500 dark:text-gray-400">
        Enter your ZIP and number so we can connect you with a licensed agent right now.
      </p>

      <div className="mb-4 grid gap-3 text-left">
        <div>
          <label className="mb-1.5 block text-xs font-medium text-gray-700 dark:text-gray-300">
            ZIP Code
          </label>
          <input
            type="text"
            inputMode="numeric"
            maxLength={5}
            value={zip}
            onChange={(e) => setZip(e.target.value.replace(/\D/g, ""))}
            placeholder="e.g. 90210"
            className="w-full rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 px-4 py-2.5 text-sm text-gray-900 dark:text-white placeholder:text-gray-400 focus:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-400/20 transition-all"
          />
        </div>
        <div>
          <label className="mb-1.5 block text-xs font-medium text-gray-700 dark:text-gray-300">
            Phone Number
          </label>
          <input
            type="tel"
            inputMode="numeric"
            value={formatPhoneDisplay(phone)}
            onChange={(e) => setPhone(e.target.value.replace(/\D/g, "").slice(0, 10))}
            placeholder="(555) 000-0000"
            className="w-full rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 px-4 py-2.5 text-sm text-gray-900 dark:text-white placeholder:text-gray-400 focus:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-400/20 transition-all"
          />
        </div>
      </div>

      <button
        type="button"
        onClick={handleCallNow}
        disabled={!canCall || loading}
        className="w-full flex items-center justify-center gap-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 disabled:opacity-40 disabled:cursor-not-allowed py-4 transition-all shadow-lg shadow-emerald-600/20 hover:-translate-y-0.5 active:translate-y-0"
      >
        {loading ? (
          <span className="flex items-center gap-2 text-sm font-semibold text-white">
            <Loader2 size={18} className="animate-spin" />
            Connecting you to an agent...
          </span>
        ) : (
          <span className="flex flex-col items-center">
            <span className="block text-xs font-medium text-emerald-100 mb-0.5">
              Call now — speak with a licensed agent
            </span>
            <span className="flex items-center justify-center gap-2 text-xl font-bold text-white">
              <Phone size={18} strokeWidth={2.5} />
              Call Now
            </span>
          </span>
        )}
      </button>

      {error && <p className="mt-3 text-xs text-red-500">{error}</p>}

      <div className="mt-4 flex items-center justify-center gap-1.5 text-xs text-gray-400 dark:text-gray-500">
        <Lock size={11} />
        Your call is completely free and confidential
      </div>
    </div>
  );
}

export default function QuoteSection() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [mode, setMode] = useState<"call" | "form">("call");
  const [jornayaReady, setJornayaReady] = useState(false);
  const [formError, setFormError] = useState("");
  const [resultCall, setResultCall] = useState<{ display: string; tel: string }>({
    display: FALLBACK_CALL_DISPLAY,
    tel: FALLBACK_CALL_TEL,
  });

  const { getQuote } = useRtbQuote();

  useEffect(() => {
    const poll = () => {
      const ready = captureTrackingTokens();
      if (ready) setJornayaReady(true);
    };

    poll();
    const polling = window.setInterval(poll, 500);

    if (!document.querySelector('script[src*="trustedform.js"]')) {
      const trustedFormField = "xxTrustedFormCertUrl";
      const provideReferrer = false;
      const trustedScript = document.createElement("script");
      trustedScript.type = "text/javascript";
      trustedScript.async = true;
      trustedScript.src =
        "http" +
        (document.location.protocol === "https:" ? "s" : "") +
        "://api.trustedform.com/trustedform.js?provide_referrer=" +
        encodeURIComponent(String(provideReferrer)) +
        "&field=" +
        encodeURIComponent(trustedFormField) +
        "&l=" +
        new Date().getTime() +
        Math.random();
      document.head.appendChild(trustedScript);
    }

    if (!document.getElementById("LeadiDscript_campaign")) {
      const leadidScript = document.createElement("script");
      leadidScript.id = "LeadiDscript_campaign";
      leadidScript.type = "text/javascript";
      leadidScript.async = true;
      leadidScript.src =
        "//create.lidstatic.com/campaign/372b9fce-b1fd-68e6-0d81-5286de90f4f0.js?snippet_version=2";

      const placeholder = document.getElementById("LeadiDscript");
      if (placeholder?.parentNode) {
        placeholder.parentNode.insertBefore(leadidScript, placeholder);
      } else {
        document.body.appendChild(leadidScript);
      }
    }

    return () => {
      window.clearInterval(polling);
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const readyNow = captureTrackingTokens();
    if (!jornayaReady && !readyNow) {
      setFormError("Still verifying your session — please wait a moment.");
      return;
    }
    setFormError("");
    setLoading(true);

    const phoneDigits = (form.elements.namedItem("phone") as HTMLInputElement).value.replace(/\D/g, "");
    const zip = (form.elements.namedItem("zip") as HTMLInputElement).value;
    const state = (form.elements.namedItem("state") as HTMLInputElement).value.toUpperCase();

    if (!/^\d{10}$/.test(phoneDigits)) {
      setFormError("Phone number must be exactly 10 digits.");
      setLoading(false);
      return;
    }
    if (!/^\d{5}$/.test(zip)) {
      setFormError("ZIP code must be exactly 5 digits.");
      setLoading(false);
      return;
    }
    if (!/^[A-Z]{2}$/.test(state)) {
      setFormError("State must be a 2-letter abbreviation (e.g. NY, CA).");
      setLoading(false);
      return;
    }

    const hidLeadid = form.querySelector<HTMLInputElement>("#Hidleadid");
    const hidTrusted = form.querySelector<HTMLInputElement>("#hidTrusted");

   const data: QuoteFormData = {
  firstName: (form.elements.namedItem("firstName") as HTMLInputElement).value,
  lastName: (form.elements.namedItem("lastName") as HTMLInputElement).value,
  phone: phoneDigits,
  email: (form.elements.namedItem("email") as HTMLInputElement).value,
  address: (form.elements.namedItem("address") as HTMLInputElement).value,
  city: (form.elements.namedItem("city") as HTMLInputElement).value,
  state,
  zip,
  dob: (form.elements.namedItem("dob") as HTMLInputElement).value,
  coverage: (form.elements.namedItem("coverage") as HTMLSelectElement).value,
  preferredTime: (form.elements.namedItem("preferredTime") as HTMLSelectElement).value, // add this
  tcpaConsent: (form.elements.namedItem("tcpa") as HTMLInputElement).checked,
};

    try {
      const res = await fetch("/api/submit-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
       body: JSON.stringify({
  campaign: "Final Expense",
  firstName: data.firstName,
  lastName: data.lastName,
  phone: data.phone,
  email: data.email,
  address: data.address,
  city: data.city,
  state: data.state,
  zip: data.zip,
  dob: data.dob,
  hasInsurance: data.coverage,
  preferredTime: data.preferredTime, // was: ""
  jornayaId: hidLeadid?.value ?? "",
  trustedFormUrl: hidTrusted?.value ?? "",
}),
      });
      const result = await res.json();

      if (result.success) {
        try {
          const rtbRes = await getQuote(`+1${phoneDigits}`, zip);
          if (rtbRes.success && rtbRes.accepted && rtbRes.trackingNumber) {
            const digits = rtbRes.trackingNumber.replace(/\D/g, "").slice(-10);
            setResultCall({
              display: formatPhoneDisplay(digits),
              tel: `tel:+1${digits}`,
            });
          }
        } catch {
          // keep fallback number
        }
        setSubmitted(true);
      } else {
        console.error("Submit failed:", result.error);
        setFormError("Something went wrong. Please try again.");
      }
    } catch {
      setFormError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="quote-form" className="bg-gray-50 dark:bg-gray-900 py-20 px-5">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl">
          <div className="mb-4 text-center text-xs font-semibold uppercase tracking-widest text-emerald-600 dark:text-emerald-400">
            Free Quote
          </div>
          <h2 className="mb-3 text-center text-3xl font-semibold tracking-tight text-gray-900 dark:text-white md:text-4xl">
            Get your personalized plan in minutes
          </h2>
          <p className="mb-8 text-center text-base text-gray-500 dark:text-gray-400">
            No obligation, no spam. Call now to speak with a licensed agent, or fill out the form and we&apos;ll reach out.
          </p>

          <div className="mb-6 flex justify-center gap-2 rounded-full bg-gray-100 dark:bg-gray-800 p-1 max-w-sm mx-auto">
            <button
              type="button"
              onClick={() => setMode("call")}
              className={`flex-1 rounded-full py-2 text-sm font-semibold transition-all ${
                mode === "call"
                  ? "bg-white dark:bg-gray-950 text-emerald-700 dark:text-emerald-400 shadow-sm"
                  : "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
              }`}
            >
              Call Now
            </button>
            <button
              type="button"
              onClick={() => setMode("form")}
              className={`flex-1 rounded-full py-2 text-sm font-semibold transition-all ${
                mode === "form"
                  ? "bg-white dark:bg-gray-950 text-emerald-700 dark:text-emerald-400 shadow-sm"
                  : "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
              }`}
            >
              Fill Out Form
            </button>
          </div>

          {mode === "call" ? (
            <CallNowCard />
          ) : submitted ? (
            <div className="rounded-2xl border border-emerald-200 dark:border-emerald-800 bg-emerald-50 dark:bg-emerald-950/40 p-10 text-center">
              <div className="mb-3 flex justify-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-900">
                  <svg
                    className="h-6 w-6 text-emerald-600 dark:text-emerald-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">You&apos;re all set!</h3>
              <p className="mb-5 text-sm text-gray-500 dark:text-gray-400">
                Want your quote faster? Speak with a licensed agent right now.
              </p>

              <a href={resultCall.tel} className="block">
                <button className="w-full rounded-xl bg-emerald-600 hover:bg-emerald-700 py-4 transition-all shadow-lg shadow-emerald-600/20">
                  <span className="block text-xs font-medium text-emerald-100 mb-0.5">
                    Call now — speak with a licensed agent
                  </span>
                  <span className="flex items-center justify-center gap-2 text-xl font-bold text-white">
                    <Phone size={18} strokeWidth={2.5} />
                    {resultCall.display}
                  </span>
                </button>
              </a>

              <div className="mt-4 flex items-center justify-center gap-1.5 text-xs text-gray-400 dark:text-gray-500">
                <Lock size={11} />
                Your call is completely free and confidential
              </div>
            </div>
          ) : (
            <div className="rounded-2xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-950 p-8 shadow-sm">
              <form onSubmit={handleSubmit} className="grid gap-5" noValidate>
                <input id="leadid_token" name="universal_leadid" type="hidden" defaultValue="" />
                <input id="Hidleadid" name="Hidleadid" type="hidden" defaultValue="" />
                <input id="hidTrusted" name="hidTrusted" type="hidden" defaultValue="" />
                <input id="xxTrustedFormToken_0" name="xxTrustedFormToken_0" type="hidden" defaultValue="" />

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-xs font-medium text-gray-700 dark:text-gray-300">
                      First Name
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      required
                      placeholder="Jane"
                      className="w-full rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 px-4 py-2.5 text-sm text-gray-900 dark:text-white placeholder:text-gray-400 focus:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-400/20 transition-all"
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-xs font-medium text-gray-700 dark:text-gray-300">
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      required
                      placeholder="Smith"
                      className="w-full rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 px-4 py-2.5 text-sm text-gray-900 dark:text-white placeholder:text-gray-400 focus:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-400/20 transition-all"
                    />
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-xs font-medium text-gray-700 dark:text-gray-300">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      inputMode="numeric"
                      maxLength={10}
                      placeholder="10 digit number"
                      className="w-full rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 px-4 py-2.5 text-sm text-gray-900 dark:text-white placeholder:text-gray-400 focus:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-400/20 transition-all"
                      onInput={(e) => {
                        const t = e.target as HTMLInputElement;
                        t.value = t.value.replace(/\D/g, "").slice(0, 10);
                      }}
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-xs font-medium text-gray-700 dark:text-gray-300">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="jane@email.com"
                      className="w-full rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 px-4 py-2.5 text-sm text-gray-900 dark:text-white placeholder:text-gray-400 focus:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-400/20 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-1.5 block text-xs font-medium text-gray-700 dark:text-gray-300">
                    Street Address
                  </label>
                  <input
                    type="text"
                    name="address"
                    required
                    placeholder="123 Main St"
                    className="w-full rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 px-4 py-2.5 text-sm text-gray-900 dark:text-white placeholder:text-gray-400 focus:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-400/20 transition-all"
                  />
                </div>

                <div className="grid gap-5 sm:grid-cols-3">
                  <div>
                    <label className="mb-1.5 block text-xs font-medium text-gray-700 dark:text-gray-300">
                      City
                    </label>
                    <input
                      type="text"
                      name="city"
                      required
                      placeholder="Springfield"
                      className="w-full rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 px-4 py-2.5 text-sm text-gray-900 dark:text-white placeholder:text-gray-400 focus:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-400/20 transition-all"
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-xs font-medium text-gray-700 dark:text-gray-300">
                      State
                    </label>
                    <input
                      type="text"
                      name="state"
                      required
                      maxLength={2}
                      placeholder="e.g. NY"
                      className="w-full rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 px-4 py-2.5 text-sm text-gray-900 dark:text-white placeholder:text-gray-400 focus:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-400/20 transition-all uppercase"
                      onInput={(e) => {
                        const t = e.target as HTMLInputElement;
                        t.value = t.value.replace(/[^a-zA-Z]/g, "").toUpperCase().slice(0, 2);
                      }}
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-xs font-medium text-gray-700 dark:text-gray-300">
                      ZIP Code
                    </label>
                    <input
                      type="text"
                      name="zip"
                      required
                      inputMode="numeric"
                      maxLength={5}
                      placeholder="e.g. 90210"
                      className="w-full rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 px-4 py-2.5 text-sm text-gray-900 dark:text-white placeholder:text-gray-400 focus:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-400/20 transition-all"
                      onInput={(e) => {
                        const t = e.target as HTMLInputElement;
                        t.value = t.value.replace(/\D/g, "").slice(0, 5);
                      }}
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="dob"
                    className="mb-1.5 block text-xs font-medium text-gray-700 dark:text-gray-300"
                  >
                    Date of Birth
                  </label>
                  <input
                    id="dob"
                    type="date"
                    name="dob"
                    required
                    className="w-full rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 px-4 py-2.5 text-sm text-gray-900 dark:text-white focus:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-400/20 transition-all"
                  />
                </div>

                <div>
                  <label
                    htmlFor="coverage"
                    className="mb-1.5 block text-xs font-medium text-gray-700 dark:text-gray-300"
                  >
                    Coverage Amount
                  </label>
                  <select
                    id="coverage"
                    name="coverage"
                    required
                    className="w-full rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 px-4 py-2.5 text-sm text-gray-900 dark:text-white focus:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-400/20 transition-all"
                  >
                    <option value="">Select an amount</option>
                    <option value="5000">$5,000</option>
                    <option value="10000">$10,000</option>
                    <option value="15000">$15,000</option>
                    <option value="20000">$20,000</option>
                    <option value="25000">$25,000</option>
                  </select>
                </div>
<div>
  <label
    htmlFor="preferredTime"
    className="mb-1.5 block text-xs font-medium text-gray-700 dark:text-gray-300"
  >
    Preferred Time to Receive a Call
  </label>
  <select
    id="preferredTime"
    name="preferredTime"
    required
    defaultValue=""
    className="w-full rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 px-4 py-2.5 text-sm text-gray-900 dark:text-white focus:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-400/20 transition-all"
  >
    <option value="" disabled>Select a time</option>
    <option value="Morning (8am - 12pm)">Morning (8am - 12pm)</option>
    <option value="Afternoon (12pm - 4pm)">Afternoon (12pm - 4pm)</option>
    <option value="Evening (4pm - 8pm)">Evening (4pm - 8pm)</option>
  </select>
</div>
                <label className="flex items-start gap-3 text-xs text-gray-500 dark:text-gray-500 cursor-pointer">
                  <input
                    id="tcpa"
                    name="tcpa"
                    type="checkbox"
                    required
                    className="mt-1 h-4 w-4 accent-emerald-600 shrink-0"
                  />
                  <span>
                    By clicking &ldquo;Get My Free Quote&rdquo;, you consent and request to be contacted by{" "}
                    <strong className="text-gray-500 dark:text-gray-400">topinstantquotes.com</strong>, its
                    affiliates, and partners via phone, email, and SMS, including automated technology and
                    prerecorded messages, even if your number is on a national or state Do Not Call list. Consent
                    is not required as a condition of purchase. View our{" "}
                    <a href="/privacy-policy" className="underline text-emerald-500 hover:text-emerald-600">
                      Privacy Policy
                    </a>{" "}
                    and{" "}
                    <a href="/terms-of-service" className="underline text-emerald-500 hover:text-emerald-600">
                      Terms of Service
                    </a>
                    .
                  </span>
                </label>

                {formError && <p className="text-xs text-red-500 -mt-2">{formError}</p>}

                <button
                  type="submit"
                  disabled={loading || !jornayaReady}
                  className="w-full rounded-xl cursor-pointer bg-emerald-600 hover:bg-emerald-700 disabled:opacity-60 disabled:cursor-not-allowed py-3.5 text-sm font-medium text-white transition-all shadow-md shadow-emerald-600/20 hover:-translate-y-0.5 active:translate-y-0"
                >
                  {loading ? "Submitting..." : !jornayaReady ? "Preparing form..." : "Get My Free Quote →"}
                </button>

                {!jornayaReady && !loading && (
                  <p className="text-center text-xs text-gray-400 dark:text-gray-500 -mt-3">
                    Verifying your session — this usually only takes a second or two.
                  </p>
                )}

                <p className="text-center text-xs text-gray-400 dark:text-gray-500">
                  By submitting, you agree to be contacted by a licensed agent. No spam, ever.
                </p>
              </form>
            </div>
          )}
        </div>
      </div>
      <div id="LeadiDscript" />
    </section>
  );
}