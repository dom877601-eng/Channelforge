import { Link, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/services")({
  component: Services,
});

const services = [
  {
    title: "Marketing strategy",
    tagline: "A roadmap that connects your goals to real results.",
    desc: "We learn your market, analyze your audience, study competitors, and build a channel-specific strategy with clear KPIs, timelines, and budget allocation. No jargon. No theory. Just a plan that works.",
    features: [
      "Audience & competitor research",
      "Channel strategy (SEO, paid, social, email)",
      "Content roadmap & calendar",
      "KPI framework & budget planning",
      "Monthly strategy reviews",
    ],
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Content production",
    tagline: "High-quality writing that ships on a consistent cadence.",
    desc: "We write the blog posts, social content, emails, and landing pages that keep your pipeline full. Every piece is SEO-optimized and aligned to your brand voice. You know what's shipping and when.",
    features: [
      "Blog posts & long-form articles",
      "Social media content calendars",
      "Email campaigns & newsletters",
      "Landing page copy",
      "SEO-optimized writing",
    ],
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
      </svg>
    ),
  },
  {
    title: "Campaign execution",
    tagline: "From concept to launch to optimization — we run it all.",
    desc: "Product launches, seasonal pushes, always-on campaigns. We handle the full lifecycle: creative, multi-channel deployment, A/B testing, and real-time optimization while the campaign is live.",
    features: [
      "Full campaign management",
      "Multi-channel deployment",
      "A/B testing & optimization",
      "Budget management & bid optimization",
      "Performance reporting",
    ],
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5" />
      </svg>
    ),
  },
  {
    title: "Analytics & reporting",
    tagline: "Clean data, clear insights, no vanity metrics.",
    desc: "We track every campaign, every channel, every dollar. Weekly dashboards, monthly deep dives, and real-time optimization — so you know exactly what's working and what to do next.",
    features: [
      "Campaign performance dashboards",
      "Cost-per-acquisition tracking by channel",
      "Conversion rate optimization",
      "Audience segmentation & insights",
      "Monthly strategy presentations",
    ],
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
  },
];

function Services() {
  return (
    <>
      {/* ─── Header ─── */}
      <section className="bg-gradient-to-br from-brand-950 via-brand-900 to-brand-800 py-20 sm:py-28">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <span className="inline-block rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-medium tracking-wider text-accent-300 uppercase">
            What we deliver
          </span>
          <h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Services
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-300">
            Everything you need to execute your marketing — from strategy to
            content to measurement — under one roof. No freelancer
            coordination. No agency runaround.
          </p>
        </div>
      </section>

      {/* ─── Pricing model ─── */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="card flex flex-col">
              <h3 className="text-lg font-semibold text-brand-900">Marketing retainer — Essential</h3>
              <p className="mt-1 text-3xl font-bold text-brand-800">
                $2,000<span className="text-base font-normal text-gray-500">/mo</span>
              </p>
              <p className="mt-2 text-sm text-gray-600 flex-1">
                Strategy, content, and measurement for one core channel. Best for startups getting started with consistent marketing.
              </p>
              <a
                href="https://buy.stripe.com/fZudR95s28wJfjIa9Z3sI00"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary mt-4 w-full text-center text-sm"
              >
                Subscribe
              </a>
            </div>
            <div className="card flex flex-col border-accent-200 bg-accent-50/50">
              <span className="inline-block self-start rounded-full bg-accent-100 px-3 py-0.5 text-xs font-semibold text-accent-700">
                Popular
              </span>
              <h3 className="mt-2 text-lg font-semibold text-brand-900">Marketing retainer — Growth</h3>
              <p className="mt-1 text-3xl font-bold text-brand-800">
                $4,000<span className="text-base font-normal text-gray-500">/mo</span>
              </p>
              <p className="mt-2 text-sm text-gray-600 flex-1">
                Multi-channel strategy with higher content volume. For growing teams that need pipeline across channels.
              </p>
              <a
                href="https://buy.stripe.com/6oU14n2fQ4gt1sSci73sI01"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary mt-4 w-full text-center text-sm"
              >
                Subscribe
              </a>
            </div>
            <div className="card flex flex-col">
              <h3 className="text-lg font-semibold text-brand-900">Campaign package — Launch Sprint</h3>
              <p className="mt-1 text-3xl font-bold text-brand-800">
                $2,500
              </p>
              <p className="mt-2 text-sm text-gray-600 flex-1">
                A full campaign, start to finish, in one focused sprint. Product launches, seasonal pushes, new channel tests.
              </p>
              <a
                href="https://buy.stripe.com/8x29ATg6GdR33B0eqf3sI02"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary mt-4 w-full text-center text-sm"
              >
                Buy now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Service cards ─── */}
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((svc, i) => (
              <div
                key={svc.title}
                className={`flex flex-col gap-8 ${
                  i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                <div className="flex-1">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                    {svc.icon}
                  </div>
                  <h2 className="mt-4 text-2xl font-bold text-brand-900">
                    {svc.title}
                  </h2>
                  <p className="mt-1 text-lg font-medium text-accent-600">
                    {svc.tagline}
                  </p>
                  <p className="mt-3 text-base leading-relaxed text-gray-600">
                    {svc.desc}
                  </p>
                </div>
                <div className="flex-1">
                  <div className="card h-full">
                    <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-500">
                      What's included
                    </h4>
                    <ul className="mt-4 space-y-3">
                      {svc.features.map((f) => (
                        <li key={f} className="flex items-start gap-3 text-sm text-gray-700">
                          <svg
                            className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-500"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M4.5 12.75l6 6 9-13.5"
                            />
                          </svg>
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="section-heading">Not sure which package fits?</h2>
          <p className="section-subheading mx-auto">
            Tell us about your business and goals. We'll recommend a mix that
            fits your budget and timeline.
          </p>
          <div className="mt-8">
            <Link to="/contact" className="btn-primary text-base">
              Get a recommendation
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}