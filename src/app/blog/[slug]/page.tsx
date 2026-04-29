import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import { posts, getPost } from "../posts";

const SITE_URL = "https://www.lobusindustries.com";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  const url = `${SITE_URL}/blog/${slug}`;
  return {
    title: post.metaTitle,
    description: post.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      url,
      type: "article",
      siteName: "Lobus Industries",
      publishedTime: post.publishDate,
    },
  };
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.metaDescription,
    datePublished: post.publishDate,
    author: {
      "@type": "Organization",
      name: "Lobus Industries",
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: "Lobus Industries",
      url: SITE_URL,
      logo: { "@type": "ImageObject", url: `${SITE_URL}/icon.svg` },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE_URL}/blog/${slug}` },
  };

  const otherPosts = posts.filter((p) => p.slug !== slug).slice(0, 2);

  return (
    <>
      <Nav />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <main className="flex-1">
        {/* Header */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-grid pointer-events-none" />
          <div className="relative mx-auto max-w-3xl px-6 pt-24 pb-12 md:pt-32 md:pb-16">
            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 text-xs text-[var(--muted)] hover:text-white transition-colors mb-8"
            >
              ← All articles
            </Link>
            <div className="flex items-center gap-3 text-[11px] text-[var(--muted)] uppercase tracking-[0.18em] mb-5">
              <span>{post.publishDate}</span>
              <span>·</span>
              <span>{post.readTime}</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-semibold tracking-tight text-white leading-[1.1]">
              {post.title}
            </h1>
            <p className="mt-5 text-lg text-[var(--muted-strong)] leading-relaxed">
              {post.excerpt}
            </p>
          </div>
        </section>

        {/* Article body */}
        <article className="mx-auto max-w-3xl px-6 pb-16">
          <div className="divider-line mb-12" />
          <div className="prose-custom space-y-10">
            {post.sections.map((section, i) => (
              <div key={i}>
                {section.heading && (
                  <h2 className="text-xl md:text-2xl font-semibold text-white mb-4">
                    {section.heading}
                  </h2>
                )}
                {section.paragraphs?.map((p, j) => (
                  <p
                    key={j}
                    className="text-[var(--muted-strong)] leading-relaxed text-[17px] mb-4"
                  >
                    {p}
                  </p>
                ))}
                {section.list && (
                  <ul className="space-y-4 my-4">
                    {section.list.map((item) => (
                      <li
                        key={item.title}
                        className="flex gap-3 text-[15px]"
                      >
                        <span className="mt-1 h-5 w-5 shrink-0 rounded-full bg-[var(--accent-soft)] text-[var(--accent)] grid place-items-center text-xs font-bold">
                          ✓
                        </span>
                        <span className="text-[var(--muted-strong)] leading-relaxed">
                          <span className="text-white font-medium">
                            {item.title}:
                          </span>{" "}
                          {item.body}
                        </span>
                      </li>
                    ))}
                  </ul>
                )}
                {section.callout && (
                  <div className="mt-6 rounded-xl border border-[var(--accent)]/30 bg-[var(--accent-soft)] px-6 py-5">
                    <p className="text-sm text-white leading-relaxed">
                      {section.callout}
                    </p>
                    <a
                      href="/#contact"
                      className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-[var(--accent)] hover:underline"
                    >
                      Get started free →
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="divider-line mt-16 mb-12" />

          {/* More articles */}
          {otherPosts.length > 0 && (
            <div>
              <div className="text-[11px] uppercase tracking-[0.22em] text-[var(--muted)] font-semibold mb-6">
                More articles
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                {otherPosts.map((p) => (
                  <Link
                    key={p.slug}
                    href={`/blog/${p.slug}`}
                    className="card p-6 group hover:border-[var(--accent)]/40 transition-colors"
                  >
                    <div className="text-[10px] text-[var(--muted)] uppercase tracking-[0.18em] mb-2">
                      {p.readTime}
                    </div>
                    <div className="text-sm font-semibold text-white leading-snug group-hover:text-[var(--accent)] transition-colors">
                      {p.title}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </article>
      </main>
      <Footer />
    </>
  );
}
