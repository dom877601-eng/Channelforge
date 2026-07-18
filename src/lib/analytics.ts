import posthog from "posthog-js";

/**
 * Capture a custom PostHog event. Safe to call on the server — no-ops gracefully.
 */
export function capturePostHog(
  event: string,
  properties?: Record<string, unknown>,
): void {
  if (typeof window !== "undefined") {
    posthog.capture(event, properties);
  }
}

/**
 * Identify a user in PostHog. Call after a user provides their info (e.g. contact form submit).
 */
export function identifyPostHog(
  distinctId: string,
  properties?: Record<string, unknown>,
): void {
  if (typeof window !== "undefined") {
    posthog.identify(distinctId, properties);
  }
}

/**
 * Extract UTM parameters from the current URL.
 * Returns an empty object on the server.
 */
export function getUtmParams(): Record<string, string> {
  if (typeof window === "undefined") return {};
  const params = new URLSearchParams(window.location.search);
  const utm: Record<string, string> = {};
  for (const key of [
    "utm_source",
    "utm_medium",
    "utm_campaign",
    "utm_term",
    "utm_content",
  ]) {
    const val = params.get(key);
    if (val) utm[key] = val;
  }
  return utm;
}
