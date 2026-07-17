declare global {
  interface Window {
    posthog?: {
      capture: (event: string, properties?: Record<string, unknown>) => void;
      init: (key: string, config?: Record<string, unknown>) => void;
      debug: () => void;
    };
  }
}

/**
 * Capture a custom PostHog event. Safe to call on the server — no-ops gracefully.
 */
export function capturePostHog(
  event: string,
  properties?: Record<string, unknown>,
): void {
  if (typeof window !== "undefined" && window.posthog) {
    window.posthog.capture(event, properties);
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
