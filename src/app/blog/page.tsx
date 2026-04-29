import type { Metadata } from "next";
import Link from "next/link";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { posts } from "./posts";

const SITE_URL = "https://www.lobusindustries.com";

export const metadata: Metadata = {
  title: "Blog — Website Tips for Service Businesses",
  description:
    "Practical advice on websites, SEO, and getting found online for plumbers, electricians, landscapers, cleaners, and other service businesses.",
  alternates: { canonical: `${SITE_URL}/blog` },
  openGraph: {
    title: "Blog — Lobus Industries",
    description: "Practical website and SEO advice for service businesses.",
    url: `${SITE_URL}/blog`,
    type: "website",
    siteName: "Lobus Industries",
  },
};

export default function BlogIndex() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-grid pointer-events-none" />
          <div className="relative mx-auto max-w-6xl px-6 pt-24 pb-16 md:pt-32 md:pb-20">
            <div className="max-w-2xl">
              <div className="text-[11px] uppercase tracking-[0.22em] text-[var(--accent)] font-semibold mb-4">
                Blog
              </div>
              <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-white leading-[1.05]">
                Advice for service businesses trying to win online.
              </h1>
              <p className="mt-5 text-lg text-[var(--muted-strong)] leading-relaxed">
                Plain-English guides on websites, local SEO, and getting found by customers who don&apos;t know you yet.
              </p>
            </div>
          </div>
        </section>

        <section className="pb-28">
          <div className="mx-auto max-w-6xl px-6">
            <div className="grid md:grid-cols-2 gap-6">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="card p-8 flex flex-col gap-4 hover:border-[var(--accent)]/40 transition-colors group"
                >
                  <div className="flex items-center gap-3 text-[11px] text-[var(--muted)] uppercase tracking-[0.18em]">
                    <span>{post.publishDate}</span>
                    <span>·</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h2 className="text-xl font-semibold text-white leading-snug group-hover:text-[var(--accent)] transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-[var(--muted-strong)] text-sm leading-relaxed flex-1">
                    {post.excerpt}
                  </p>
                  <span className="text-sm text-[var(--accent)] font-medium">
                    Read article →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA strip */}
        <section className="pb-28">
          <div className="mx-auto max-w-6xl px-6">
            <div className="rounded-2xl border border-[var(--border-strong)] bg-white/[0.03] p-10 flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <div className="text-lg font-semibold text-white">
                  Ready to get your business online?
                </div>
                <p className="mt-1 text-[var(--muted-strong)] text-sm">
                  $0 to build. $100/month to host. Launch in about a week.
                </p>
              </div>
              <a
                href="/#contact"
                className="btn-accent shrink-0 inline-flex items-center gap-2 px-7 py-4 rounded-full"
              >
                Start for free →
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
