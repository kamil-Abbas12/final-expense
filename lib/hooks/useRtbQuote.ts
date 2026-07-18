"use client";

import { useState } from "react";

interface RtbResult {
  success: boolean;
  accepted?: boolean;
  bid?: number | null;
  trackingNumber?: string | null;
  error?: string;
}

export function useRtbQuote() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<RtbResult | null>(null);

  const getQuote = async (phoneE164: string, zip: string) => {
    setLoading(true);
    setResult(null);
    try {
      const res = await fetch("/api/rtb-quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ caller: phoneE164, zip }),
      });
      const data: RtbResult = await res.json();
      setResult(data);
      return data;
    } catch {
      const fallback: RtbResult = { success: false, error: "Network error" };
      setResult(fallback);
      return fallback;
    } finally {
      setLoading(false);
    }
  };

  return { getQuote, loading, result };
}