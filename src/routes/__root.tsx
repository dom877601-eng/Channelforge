import { HeadContent, Scripts, createRootRoute } from "@tanstack/react-router";
import { useRouter } from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";
import posthog from "posthog-js";
import { PostHogProvider } from "posthog-js/react";

const POSTHOG_KEY = import.meta.env.VITE_PUBLIC_POSTHOG_KEY ?? "";
const POSTHOG_HOST =
  import.meta.env.VITE_PUBLIC_POSTHOG_HOST ?? "https://us.posthog.com";

import appCss from "~/styles/app.css?url";
import { Layout } from "~/components/Layout";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "ChannelForge — Marketing that ships." },
      {
        name: "description",
        content:
          "End-to-end marketing execution — strategy, content, and measurement — so you can launch campaigns without hiring a full in-house team.",
      },
    ],
    links: [{ rel: "stylesheet", href: appCss }],
  }),
  notFoundComponent: () => <div>Page not found</div>,
  component: RootComponent,
});

function RootComponent() {
  return (
    <RootDocument>
      <Layout />
      <PostHogPageTracker />
    </RootDocument>
  );
}

function RootDocument({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        <PostHogProvider
          apiKey={POSTHOG_KEY}
          options={{
            api_host: "/ingest",
            ui_host: POSTHOG_HOST,
            defaults: "2025-05-24",
            capture_exceptions: true,
            person_profiles: "identified_only",
            debug: import.meta.env.DEV,
          }}
        >
          {children}
        </PostHogProvider>
        <Scripts />
      </body>
    </html>
  );
}

/**
 * Fires a PostHog $pageview on every client-side route navigation.
 */
function PostHogPageTracker() {
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = router.subscribe("onLoad", () => {
      posthog.capture("$pageview", {
        $current_url: window.location.href,
      });
    });
    return unsubscribe;
  }, [router]);

  return null;
}
