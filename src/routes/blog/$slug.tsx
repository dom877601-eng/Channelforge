import { Link, createFileRoute, notFound } from "@tanstack/react-router";
import { blogPosts } from "~/data/blog-posts";

export const Route = createFileRoute("/blog/$slug")({
  component: BlogArticle,
  notFoundComponent: () => (
    <div className="flex min-h-[50vh] items-center justify-center">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-brand-900">Post not found</h2>
        <p className="mt-2 text-gray-600">
          That blog post doesn't exist. (Neither did half our early campaigns.
          We fixed those, too.)
        </p>
        <Link to="/blog" className="btn-primary mt-6 inline-flex text-sm">
          Back to blog
        </Link>
      </div>
    </div>
  ),
});

function BlogArticle() {
  const { slug } = Route.useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) throw notFound();

  return (
    <>
      {/* ─── Header ─── */}
      <section className="bg-gradient-to-br from-brand-950 via-brand-900 to-brand-800 py-20 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Link
            to="/blog"
            className="inline-flex items-center gap-1 text-sm font-medium text-gray-400 transition-colors hover:text-white"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
            Back to blog
          </Link>

          <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-gray-400">
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
            <span className="text-gray-600">·</span>
            <span>{post.author}</span>
          </div>

          <h1 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {post.title}
          </h1>

          {post.tags.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium text-accent-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ─── Article Content ─── */}
      <article className="bg-white py-16 sm:py-20">
        <div className="prose-custom mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          {post.content.split("\n").map((line, i) => {
            // Handle section headings (##)
            if (line.startsWith("## ")) {
              return (
                <h2
                  key={i}
                  className="mb-4 mt-12 text-2xl font-bold text-brand-900 first:mt-0"
                >
                  {line.replace("## ", "")}
                </h2>
              );
            }
            // Handle blockquotes (>)
            if (line.startsWith("> ")) {
              return (
                <blockquote
                  key={i}
                  className="my-6 border-l-4 border-accent-400 bg-accent-50/50 py-4 pl-6 pr-4 text-lg font-medium italic leading-relaxed text-brand-800"
                >
                  {line.replace("> ", "")}
                </blockquote>
              );
            }
            // Handle bold headings (**)
            if (line.startsWith("**") && line.endsWith("**")) {
              return (
                <p key={i} className="mb-2 mt-6 text-base font-bold text-brand-900">
                  {line.replace(/\*\*/g, "")}
                </p>
              );
            }
            // Handle bold inline text
            if (line.includes("**")) {
              const parts = line.split(/(\*\*[^*]+\*\*)/g);
              return (
                <p key={i} className="mb-4 text-base leading-relaxed text-gray-700">
                  {parts.map((part, j) => {
                    if (part.startsWith("**") && part.endsWith("**")) {
                      return (
                        <strong key={j} className="font-semibold text-brand-900">
                          {part.slice(2, -2)}
                        </strong>
                      );
                    }
                    return part;
                  })}
                </p>
              );
            }
            // Empty line = paragraph break
            if (line.trim() === "") {
              return <div key={i} className="h-4" />;
            }
            // Regular paragraph
            return (
              <p key={i} className="mb-4 text-base leading-relaxed text-gray-700">
                {line}
              </p>
            );
          })}
        </div>
      </article>

      {/* ─── CTA ─── */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="section-heading">
            Ready to stop being the hub?
          </h2>
          <p className="section-subheading mx-auto">
            If marketing keeps slipping to next week, let's talk. We'll show
            you what a month with ChannelForge looks like.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link to="/contact" className="btn-primary text-base">
              Get started
            </Link>
            <Link to="/services" className="btn-secondary text-base">
              See our services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}