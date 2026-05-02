import type { Metadata } from "next";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import CTA from "../components/CTA";
import { SectionHeading } from "../components/Services";

const SITE_URL = "https://www.lobusindustries.com";

export const metadata: Metadata = {
  title: "WordPress Alternative for Service Businesses — Managed, $100/mo",
  description:
    "WordPress requires hosting, plugins, updates, and constant maintenance. Lobus Industries handles everything — builds your site for $0, hosts it for $100/month, and keeps it updated.",
  alternates: { canonical: `${SITE_URL}/wordpress-alternative` },
  openGraph: {
    title: "WordPress Alternative for Service Businesses — Managed, $100/mo",
    description:
      "Skip the WordPress maintenance headache. Lobus Industries builds and manages your site for $100/month — $0 to get started.",
    url: `${SITE_URL}/wordpress-alternative`,
    type: "website",
    siteName: "Lobus Industries",
  },
  twitter: {
    card: "summary_large_image",
    title: "WordPress Alternative for Service Businesses",
    description: "$0 to build. $100/month. Zero maintenance required.",
  },
};

const comparisonRows = [
  { feature: "Build cost", wp: "$0 software, but you build it (or hire someone for $1,000–$5,000)", lobus: "$0 — we build it for you" },
  { feature: "Monthly cost", wp: "$20–$60/month hosting + plugins", lobus: "$100/month flat — everything included" },
  { feature: "Design work", wp: "You do it, or pay a developer", lobus: "We do it" },
  { feature: "Plugin updates", wp: "Manual, weekly — skip them and get hacked", lobus: "Not your problem" },
  { feature: "Security", wp: "#1 hacked CMS on the internet", lobus: "No CMS attack surface — static, secure" },
  { feature: "Content updates", wp: "Log into WP admin and do it yourself", lobus: "Email us — we handle it" },
  { feature: "Local SEO", wp: "Requires Yoast or RankMath setup", lobus: "Built in with structured data" },
  { feature: "Page speed", wp: "Slow by default — needs caching plugins", lobus: "Fast out of the box — global CDN" },
  { feature: "Time to launch", wp: "Weeks to months", lobus: "About 7 days, you do nothing" },
];

const faqs = [
  {
    q: "What's wrong with WordPress?",
    a: "Nothing, for the right use case. WordPress is a powerful platform for complex sites, blogs with many authors, or businesses that need custom functionality. For a service business that needs a 5-page website and occasional content updates, WordPress introduces maintenance overhead that most business owners aren't equipped to handle — plugin updates, security patches, backup management, and hosting configuration.",
  },
  {
    q: "Is WordPress really that risky for security?",
    a: "WordPress powers 43% of all websites, which makes it the #1 target for hackers. Outdated plugins are the most common entry point. A service business owner who doesn't update plugins regularly is genuinely at risk of having their site defaced or used for spam. With Lobus Industries, there's no WordPress instance to hack.",
  },
  {
    q: "I had a developer build my WordPress site. Can I switch?",
    a: "Yes. We build a new site from scratch and help you transition your domain. If you want any content from your old site preserved, we incorporate it into the new design.",
  },
  {
    q: "Is Lobus Industries really free to build?",
    a: "$0 upfront — no build fee, no setup fee. You pay $100/month starting when your site goes live. Cancel any time.",
  },
  {
    q: "What if I need a blog or custom functionality?",
    a: "Lobus Industries sites support blogs. Custom functionality beyond a standard service business site (e-commerce, member portals, complex booking systems) may require a different solution — we'll tell you upfront if that's the case.",
  },
  {
    q: "Who owns the site if I cancel?",
    a: "You do. Cancel any time — no fees. We take the site offline. If you want the source code to host elsewhere, we hand it over.",
  },
];

export default function WordPressAlternative() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "FAQPage",
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
    ],
  };

  return (
    <>
      <Nav />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-grid pointer-events-none" />
          <div className="relative mx-auto max-w-6xl px-6 pt-24 pb-28 md:pt-32 md:pb-40">
            <div className="max-w-4xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-[var(--border-strong)] bg-white/5 backdrop-blur px-3.5 py-1.5 text-xs font-medium text-[var(--muted-strong)] mb-7">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)] pulse-soft" />
                WordPress alternative &nbsp;·&nbsp; For service businesses
              </span>
              <h1 className="text-5xl md:text-7xl font-semibold tracking-tight leading-[1.02]">
                <span className="text-gradient">Zero maintenance.</span>
                <br />
                <span className="text-accent-gradient">Just results.</span>
              </h1>
              <p className="mt-7 text-lg md:text-xl text-[var(--muted-strong)] max-w-2xl leading-relaxed">
                WordPress is powerful — and a constant maintenance burden. Plugin updates, security patches, backups, hosting configuration. Lobus Industries handles all of it so you never have to log into a dashboard again.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-3">
                <a href="/#contact" className="btn-accent inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full text-base">
                  Get my free website <span aria-hidden>→</span>
                </a>
                <a href="/#pricing" className="btn-ghost inline-flex items-center justify-center px-7 py-4 rounded-full text-base">
                  See what&apos;s included
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Comparison table */}
        <section className="py-20">
          <div className="mx-auto max-w-6xl px-6">
            <SectionHeading
              eyebrow="Side by side"
              title="WordPress vs. Lobus Industries"
              subtitle="WordPress is a platform. Lobus Industries is a service."
            />
            <div className="mt-12 overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-[var(--border-strong)]">
                    <th className="text-left py-3 pr-6 text-[var(--muted)] font-medium w-1/3">Feature</th>
                    <th className="text-left py-3 pr-6 text-[var(--muted)] font-medium w-1/3">WordPress</th>
                    <th className="text-left py-3 text-[var(--accent)] font-semibold w-1/3">Lobus Industries</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[var(--border)]">
                  {comparisonRows.map((row) => (
                    <tr key={row.feature}>
                      <td className="py-4 pr-6 font-medium text-white">{row.feature}</td>
                      <td className="py-4 pr-6 text-[var(--muted-strong)]">{row.wp}</td>
                      <td className="py-4 text-white">{row.lobus}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Security callout */}
        <section className="py-16">
          <div className="mx-auto max-w-6xl px-6">
            <div className="rounded-2xl border border-[var(--border-strong)] bg-white/[0.03] backdrop-blur p-8 md:p-10 relative overflow-hidden">
              <div
                className="absolute inset-0 opacity-40 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(ellipse 500px 300px at 0% 50%, rgba(251,146,60,0.15), transparent 70%)",
                }}
              />
              <div className="relative max-w-3xl">
                <div className="text-[11px] uppercase tracking-[0.22em] text-[var(--accent)] font-semibold mb-3">
                  The maintenance reality
                </div>
                <p className="text-lg md:text-xl text-white leading-relaxed">
                  WordPress sites that aren&apos;t actively maintained get hacked. Outdated plugins are the #1 attack vector for small business websites. Most service business owners don&apos;t update their plugins — because they don&apos;t have time, or don&apos;t remember, or don&apos;t know they need to. Lobus Industries sites run on a modern stack with no WordPress attack surface at all.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* What's included */}
        <section className="py-20">
          <div className="mx-auto max-w-6xl px-6">
            <SectionHeading
              eyebrow="What you get"
              title="Everything included at $100/month."
              subtitle="No plugins to manage. No updates to run. No security headaches."
            />
            <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: "Custom design", body: "Built around your trade — not a WordPress theme with a different logo dropped in." },
                { title: "No CMS to learn", body: "No dashboard to log into. Email us a change, we make it. Usually within one business day." },
                { title: "Secure by default", body: "No WordPress, no plugins, no attack surface. Static files served from a global CDN." },
                { title: "Fast everywhere", body: "No database queries, no PHP rendering. Pages load in milliseconds on any device." },
                { title: "Local SEO built in", body: "Structured data markup, city-specific content, and Google Business Profile integration." },
                { title: "Daily backups", body: "Your site is versioned and backed up automatically. Nothing gets lost." },
              ].map((item) => (
                <div key={item.title} className="card p-6">
                  <h3 className="text-base font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-[var(--muted-strong)] leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20">
          <div className="mx-auto max-w-6xl px-6">
            <SectionHeading eyebrow="FAQ" title="Common questions about switching." />
            <div className="mt-12 max-w-3xl divide-y divide-[var(--border)] border-y border-[var(--border)]">
              {faqs.map((f) => (
                <details key={f.q} className="group py-5">
                  <summary className="flex items-start justify-between gap-6 cursor-pointer list-none">
                    <span className="text-base md:text-lg font-medium text-white">{f.q}</span>
                    <span className="mt-1 h-6 w-6 shrink-0 rounded-full border border-[var(--border-strong)] grid place-items-center text-[var(--muted-strong)] group-open:rotate-45 group-open:bg-[var(--accent-soft)] group-open:text-[var(--accent)] group-open:border-[var(--accent)] transition-all">
                      +
                    </span>
                  </summary>
                  <p className="mt-3 text-[var(--muted-strong)] leading-relaxed text-[15px]">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <CTA />
      </main>
      <Footer />
    </>
  );
}
