import {
  HeadContent,
  Scripts,
  createRootRoute,
} from "@tanstack/react-router";
import { useRouter } from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "~/styles/app.css?url";
import { Layout } from "~/components/Layout";

const POSTHOG_KEY = import.meta.env.VITE_PUBLIC_POSTHOG_KEY || "";
const POSTHOG_HOST =
  import.meta.env.VITE_PUBLIC_POSTHOG_HOST || "https://app.posthog.com";

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
        {POSTHOG_KEY ? (
          <script
            suppressHydrationWarning
            dangerouslySetInnerHTML={{
              __html: `
!function(t,e){var o,n,p,r;e.__SV||(window.posthog=e,e._i=[],e.init=function(i,s,a){function g(t,e){var o=e.split(".");2==o.length&&(t=t[o[0]],e=o[1]),t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}}(p=t.createElement("script")).type="text/javascript",p.async=!0,p.src=s.api_host+"/static/array.js",(r=t.getElementsByTagName("script")[0]).parentNode.insertBefore(p,r);var u=e;for(void 0!==a?u=e[a]=[]:a="posthog",u.people=u.people||[],u.toString=function(t){var e="posthog";return"posthog"!==a&&(e+="."+a),t||(e+=" (stub)"),e},u.people.toString=function(){return u.toString(1)+".people (stub)"},o="capture identify alias people.set people.set_once set_config register register_once unregister opt_out_capturing has_opted_out_capturing opt_in_capturing reset isFeatureEnabled onFeatureFlags getFeatureFlag getFeatureFlagPayload reloadFeatureFlags group updateEarlyAccessFeatureEnrollment getEarlyAccessFeatures getActiveMatchingSurveys getSurveys onSessionId".split(" "),n=0;n<o.length;n++)g(u,o[n]);e._i.push([i,s,a])}(document,window.posthog||[]);
posthog.init('${POSTHOG_KEY}', {
  api_host: '${POSTHOG_HOST}',
  person_profiles: 'identified_only',
})`,
            }}
          />
        ) : null}
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

/**
 * Fires a PostHog $pageview on every client-side route navigation.
 * The initial page load is captured automatically by the PostHog snippet.
 */
function PostHogPageTracker() {
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = router.subscribe("onLoad", () => {
      if (typeof window !== "undefined" && window.posthog) {
        window.posthog.capture("$pageview", {
          $pathname: window.location.pathname,
          $referrer: document.referrer || undefined,
        });
      }
    });
    return unsubscribe;
  }, [router]);

  return null;
}
