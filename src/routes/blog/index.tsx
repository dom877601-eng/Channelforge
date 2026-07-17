import { Link, createFileRoute } from "@tanstack/react-router";
import { blogPosts } from "~/data/blog-posts";

export const Route = createFileRoute("/blog/")({
  component: BlogIndex,
});

function BlogIndex() {
  return (
    <>
      {/* ─── Header ─── */}
      <section className="bg-gradient-to-br from-brand-950 via-brand-900 to-brand-800 py-20 sm:py-28">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <span className="inline-block rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-medium tracking-wider text-accent-300 uppercase">
            Insights
          </span>
          <h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Blog
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-300">
            Practical insights on marketing execution, growth strategy, and
            building a pipeline that actually delivers.
          </p>
        </div>
      </section>

      {/* ─── Blog Posts ─── */}
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {blogPosts.map((post) => (
              <article key={post.slug} className="card group">
                <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500">
                  <time dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                  <span className="text-gray-300">·</span>
                  <span>{post.author}</span>
                  <span className="text-gray-300">·</span>
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-brand-50 px-2.5 py-0.5 text-xs font-medium text-brand-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h2 className="mt-3 text-xl font-bold text-brand-900 transition-colors group-hover:text-accent-600 sm:text-2xl">
                  <Link to="/blog/$slug" params={{ slug: post.slug }}>
                    {post.title}
                  </Link>
                </h2>
                <p className="mt-2 text-base leading-relaxed text-gray-600">
                  {post.excerpt}
                </p>
                <div className="mt-4">
                  <Link
                    to="/blog/$slug"
                    params={{ slug: post.slug }}
                    className="inline-flex items-center gap-1 text-sm font-semibold text-accent-600 transition-colors hover:text-accent-700"
                  >
                    Read more
                    <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}