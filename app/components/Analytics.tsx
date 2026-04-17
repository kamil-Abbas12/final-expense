"use client";

// Replace these with your real IDs from Google Analytics and Google Ads dashboards.
// GA4_ID   → Google Analytics 4  → analytics.google.com
// GADS_ID  → Google Ads          → ads.google.com → Tools → Conversions
const GA4_ID = "G-XXXXXXXXXX";
const GADS_ID = "AW-XXXXXXXXX";
const GADS_CONVERSION_LABEL = "XXXXXXXXXXX"; // from your conversion action

import Script from "next/script";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
    dataLayer: unknown[];
  }
}

// ── Helper: fire a Google Ads conversion event ────────────────────────────────
// Call this from your QuoteSection after a successful form submit:
//   import { trackConversion } from "@/components/Analytics";
//   trackConversion();
export function trackConversion(value?: number) {
  if (typeof window === "undefined" || !window.gtag) return;
  window.gtag("event", "conversion", {
    send_to: `${GADS_ID}/${GADS_CONVERSION_LABEL}`,
    value: value ?? 1.0,
    currency: "USD",
  });
}

// ── Helper: fire a GA4 custom event ──────────────────────────────────────────
export function trackEvent(
  eventName: string,
  params?: Record<string, string | number | boolean>
) {
  if (typeof window === "undefined" || !window.gtag) return;
  window.gtag("event", eventName, params);
}

export default function Analytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Send a pageview on every client-side navigation
  useEffect(() => {
    if (!window.gtag) return;
    const url = pathname + (searchParams.toString() ? `?${searchParams}` : "");
    window.gtag("config", GA4_ID, { page_path: url });
    window.gtag("config", GADS_ID, { page_path: url });
  }, [pathname, searchParams]);

  return (
    <>
      {/* Google Tag Manager / gtag.js */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`}
        strategy="afterInteractive"
      />
      <Script id="gtag-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA4_ID}', { page_path: window.location.pathname });
          gtag('config', '${GADS_ID}');
        `}
      </Script>
    </>
  );
}