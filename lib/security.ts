import { NextRequest, NextResponse } from "next/server";

/**
 * ------------------------------------------------------------------
 * NOTE ON SCALING
 * ------------------------------------------------------------------
 * This rate limiter stores counts in memory (a plain Map). That's fine
 * for a single server instance (e.g. one Coolify container, one
 * Vercel serverless region acting consistently, a single VPS).
 *
 * If you deploy multiple instances/regions behind a load balancer,
 * each instance has its own memory, so limits become "N requests per
 * instance" rather than truly global. If that becomes a problem,
 * swap the Map below for Upstash Redis (`@upstash/ratelimit`) — the
 * function signatures here are written so that swap only touches
 * this file, not the routes that call it.
 * ------------------------------------------------------------------
 */

interface Bucket {
  count: number;
  resetAt: number; // epoch ms
}

const buckets = new Map<string, Bucket>();

// Periodically clear stale buckets so memory doesn't grow forever.
setInterval(() => {
  const now = Date.now();
  for (const [key, bucket] of buckets.entries()) {
    if (bucket.resetAt < now) buckets.delete(key);
  }
}, 5 * 60 * 1000).unref?.();

/**
 * Returns the best-guess client IP from standard proxy headers.
 * Works behind Vercel, Coolify/Traefik/Nginx, Cloudflare, etc.
 */
export function getClientIp(req: NextRequest): string {
  const cf = req.headers.get("cf-connecting-ip");
  if (cf) return cf.trim();

  const forwardedFor = req.headers.get("x-forwarded-for");
  if (forwardedFor) return forwardedFor.split(",")[0].trim();

  const realIp = req.headers.get("x-real-ip");
  if (realIp) return realIp.trim();

  return "unknown";
}

/**
 * Fixed-window rate limiter.
 *
 * @param key       Unique bucket key, e.g. `${ip}:${route}`
 * @param limit     Max requests allowed within the window
 * @param windowMs  Window length in milliseconds
 * @returns         { allowed, remaining, resetAt }
 */
export function checkRateLimit(key: string, limit: number, windowMs: number) {
  const now = Date.now();
  const existing = buckets.get(key);

  if (!existing || existing.resetAt < now) {
    const resetAt = now + windowMs;
    buckets.set(key, { count: 1, resetAt });
    return { allowed: true, remaining: limit - 1, resetAt };
  }

  if (existing.count >= limit) {
    return { allowed: false, remaining: 0, resetAt: existing.resetAt };
  }

  existing.count += 1;
  return { allowed: true, remaining: limit - existing.count, resetAt: existing.resetAt };
}

/**
 * Standard "too many requests" response with Retry-After header.
 */
export function rateLimitResponse(resetAt: number) {
  const retryAfterSeconds = Math.max(1, Math.ceil((resetAt - Date.now()) / 1000));
  return NextResponse.json(
    { success: false, error: "Too many requests. Please try again shortly." },
    {
      status: 429,
      headers: { "Retry-After": String(retryAfterSeconds) },
    }
  );
}

/**
 * ------------------------------------------------------------------
 * ORIGIN / REFERER VALIDATION
 * ------------------------------------------------------------------
 * Set ALLOWED_ORIGINS in your env, comma-separated, e.g.:
 *   ALLOWED_ORIGINS=https://topinstantquotes.com,https://www.topinstantquotes.com
 *
 * In local dev, if ALLOWED_ORIGINS isn't set, this check is skipped
 * so you're not blocked on localhost. Always set it in production.
 * ------------------------------------------------------------------
 */
export function isAllowedOrigin(req: NextRequest): boolean {
  const allowedEnv = process.env.ALLOWED_ORIGINS;
  if (!allowedEnv) {
    // Not configured — don't block requests, but this should be set in production.
    return true;
  }

  const allowedOrigins = allowedEnv.split(",").map((s) => s.trim().toLowerCase());

  const origin = req.headers.get("origin");
  const referer = req.headers.get("referer");

  const candidate = (origin || referer || "").toLowerCase();
  if (!candidate) return false; // no origin/referer at all — likely a direct script/curl call

  return allowedOrigins.some((allowed) => candidate.startsWith(allowed));
}

export function forbiddenOriginResponse() {
  return NextResponse.json(
    { success: false, error: "Request origin not allowed." },
    { status: 403 }
  );
}

/**
 * ------------------------------------------------------------------
 * STRUCTURED LOGGING
 * ------------------------------------------------------------------
 * Every call (success, failure, and blocked) gets a single-line JSON
 * log so it's easy to grep/ship to a log aggregator later (Logtail,
 * Datadog, Axiom, etc.) without changing calling code.
 * ------------------------------------------------------------------
 */
export interface RequestLogEntry {
  route: string;
  ip: string;
  outcome: "success" | "blocked_rate_limit" | "blocked_origin" | "validation_error" | "upstream_error" | "error";
  detail?: string;
  meta?: Record<string, unknown>;
}

export function logRequest(entry: RequestLogEntry) {
  const line = {
    ts: new Date().toISOString(),
    ...entry,
  };
  // eslint-disable-next-line no-console
  console.log(JSON.stringify(line));
}