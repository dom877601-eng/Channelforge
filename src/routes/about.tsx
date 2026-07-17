import { Link, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  component: About,
});

function About() {
  return (
    <>
      {/* ─── Header ─── */}
      <section className="bg-gradient-to-br from-brand-950 via-brand-900 to-brand-800 py-20 sm:py-28">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <span className="inline-block rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-medium tracking-wider text-accent-300 uppercase">
            Who we are
          </span>
          <h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            About ChannelForge
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-300">
            We built ChannelForge because most startups we talked to had
            product-market fit but couldn't keep up with marketing. That's
            the whole reason we exist.
          </p>
        </div>
      </section>

      {/* ─── Story ─── */}
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="section-heading">Our story</h2>
          <div className="mt-8 space-y-4 text-base leading-relaxed text-gray-600">
            <p>
              Most marketing agencies hand you a strategy deck and disappear.
              Freelancers are hard to coordinate. Hiring in-house takes months
              and costs six figures before you've run a single campaign.
            </p>
            <p>
              We saw founders and SMB leaders stuck in the same pattern: they
              knew their product, they had product-market fit, but they couldn't
              get consistent marketing throughput. A blog post here, a social
              post there — no strategy, no measurement, no real results.
            </p>
            <p>
              So we built ChannelForge — an end-to-end marketing execution
              engine. Strategy, content, and measurement, delivered as a
              seamless service. One team, one retainer, one source of truth for
              your marketing.
            </p>
            <p className="font-medium text-brand-900">
              We're not a consultancy. We don't just advise — we execute. Your
              campaigns, your channels, your growth — we do the work.
            </p>
          </div>
        </div>
      </section>

      {/* ─── Values ─── */}
      <section className="bg-gray-50 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="section-heading">How we work</h2>
            <p className="section-subheading">
              Three principles guide everything we do.
            </p>
          </div>
          <div className="mt-16 grid gap-8 sm:grid-cols-3">
            {[
              {
                title: "Execute, don't just advise",
                desc: "We don't hand you a plan and walk away. We produce the content, run the campaigns, and track the metrics. We're in the trenches with you.",
                icon: (
                  <svg className="h-8 w-8 text-brand-600" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                  </svg>
                ),
              },
              {
                title: "Measure everything",
                desc: "Every piece of content, every campaign, every dollar is tracked. If it doesn't perform, we pivot. Data drives our decisions, not hunches.",
                icon: (
                  <svg className="h-8 w-8 text-brand-600" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 3v18h18" />
                  </svg>
                ),
              },
              {
                title: "Be transparent",
                desc: "You get weekly updates, open dashboards, and direct access to your team. No black boxes, no surprises, no runaround.",
                icon: (
                  <svg className="h-8 w-8 text-brand-600" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                ),
              },
            ].map((v) => (
              <div key={v.title} className="card text-center">
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-brand-50">
                  {v.icon}
                </div>
                <h3 className="mt-4 text-lg font-semibold text-brand-900">
                  {v.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Team ─── */}
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="section-heading">Your team</h2>
            <p className="section-subheading">
              Every ChannelForge client gets a dedicated crew of marketing
              professionals who know your business inside and out. One point
              of contact — not a rotating cast of account managers.
            </p>
          </div>
          <div className="mt-16 grid gap-8 sm:grid-cols-3">
            {[
              {
                role: "Marketing strategist",
                desc: "Your campaign architect. Researches your market, plans your channels, and keeps your strategy on track.",
              },
              {
                role: "Content writer",
                desc: "Your brand voice. Produces blog posts, social content, emails, and landing pages that convert.",
              },
              {
                role: "Data analyst",
                desc: "Your numbers person. Tracks performance, runs analyses, and makes sure every dollar is working hard.",
              },
            ].map((member) => (
              <div key={member.role} className="card text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-brand-100 text-brand-700">
                  <span className="text-lg font-bold">
                    {member.role.split(" ").map((w) => w[0]).join("")}
                  </span>
                </div>
                <h3 className="mt-4 text-base font-semibold text-brand-900">
                  {member.role}
                </h3>
                <p className="mt-2 text-sm text-gray-600">{member.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="bg-gradient-to-r from-brand-900 to-brand-800 py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Let's build your marketing engine
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-gray-300">
            Tell us about your business and we'll put together a plan.
          </p>
          <div className="mt-8">
            <Link to="/contact" className="btn-primary text-base">
              Get started
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}