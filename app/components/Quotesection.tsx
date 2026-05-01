"use client";

import { useState } from "react";

interface QuoteFormData {
  firstName: string;
  lastName: string;
  phone: string;
  dob: string;
  coverage: string;
  tcpaConsent: boolean;
}

export default function QuoteSection() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const data: QuoteFormData = {
      firstName: (form.elements.namedItem("firstName") as HTMLInputElement).value,
      lastName: (form.elements.namedItem("lastName") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      dob: (form.elements.namedItem("dob") as HTMLInputElement).value,
      coverage: (form.elements.namedItem("coverage") as HTMLSelectElement).value,
      tcpaConsent: (form.elements.namedItem("tcpa") as HTMLInputElement).checked,
    };

    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await res.json();
      if (result.success) {
        setSubmitted(true);
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch {
      alert("Network error. Please try again.");
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
          <p className="mb-10 text-center text-base text-gray-500 dark:text-gray-400">
            No obligation, no spam. A licensed agent will contact you with options tailored to your needs.
          </p>

          {submitted ? (
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
              <p className="text-sm text-gray-500 dark:text-gray-400">
                A licensed agent will reach out within one business day with your personalized quote.
              </p>
            </div>
          ) : (
            <div className="rounded-2xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-950 p-8 shadow-sm">
              <form onSubmit={handleSubmit} className="grid gap-5">
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

                <div>
                  <label className="mb-1.5 block text-xs font-medium text-gray-700 dark:text-gray-300">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    placeholder="(555) 000-0000"
                    className="w-full rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 px-4 py-2.5 text-sm text-gray-900 dark:text-white placeholder:text-gray-400 focus:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-400/20 transition-all"
                  />
                </div>

                <div>
                 <label
  htmlFor="dob"                    // ← add this
  className="mb-1.5 block text-xs font-medium text-gray-700 dark:text-gray-300"
>
  Date of Birth
</label>
<input
  id="dob"                         // ← add this
  type="date"
  name="dob"
  required
  className="..."
/>
                  <input
                    type="date"
                    name="dob"
                    required
                    className="w-full rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 px-4 py-2.5 text-sm text-gray-900 dark:text-white focus:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-400/20 transition-all"
                  />
                </div>

                <div>
                 <label htmlFor="coverage" className="mb-1.5 block text-xs font-medium text-gray-700 dark:text-gray-300">
  Coverage Amount
</label>
<select
  id="coverage"     
  name="coverage"
  required
  className="..."
>
                    <option value="">Select an amount</option>
                    <option value="5000">$5,000</option>
                    <option value="10000">$10,000</option>
                    <option value="15000">$15,000</option>
                    <option value="20000">$20,000</option>
                    <option value="25000">$25,000</option>
                  </select>
                </div>

                {/* TCPA Consent */}
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

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full rounded-xl cursor-pointer bg-emerald-600 hover:bg-emerald-700 disabled:opacity-60 disabled:cursor-not-allowed py-3.5 text-sm font-medium text-white transition-all shadow-md shadow-emerald-600/20 hover:-translate-y-0.5 active:translate-y-0"
                >
                  {loading ? "Submitting..." : "Get My Free Quote →"}
                </button>

                <p className="text-center text-xs text-gray-400 dark:text-gray-500">
                  By submitting, you agree to be contacted by a licensed agent. No spam, ever.
                </p>
              </form>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}