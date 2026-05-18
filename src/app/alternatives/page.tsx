import type { Metadata } from "next";
import Link from "next/link";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import CTA from "../components/CTA";

const SITE_URL = "https://www.lobusindustries.com";

export const metadata: Metadata = {
  title: "Best Wix, Squarespace, GoDaddy & WordPress Alternative for Service Businesses",
  description:
    "Compare Lobus Industries vs Wix, Squarespace, GoDaddy, and WordPress for service businesses. No upfront cost, custom design, hosting, and ongoing updates included for $100/month.",
  alternates: { canonical: `${SITE_URL}/alternatives` },
  openGraph: {
    title: "Alternatives — Lobus Industries vs Wix, Squarespace, GoDaddy, WordPress",
    description: "Side-by-side comparison of website options for service businesses.",
    url: `${SITE_URL}/alternatives`,
    type: "website",
    siteName: "Lobus Industries",
  },
};

const alternatives = [
  {
    href: "/wix-alternative",
    name: "Wix",
    tag: "DIY template builder",
    summary:
      "Wix is fine if you have time to design, write, and maintain a site yourself. Most service-business owners don't. Lobus handles all of that for $100/month.",
    pros: ["Cheap monthly fee", "Lots of templates"],
    cons: ["You build it", "Generic look", "Updates are on you", "Slow on mobile"],
  },
  {
    href: "/squarespace-alternative",
    name: "Squarespace",
    tag: "Polished templates, DIY",
    summary:
      "Squarespace looks better than Wix but you're still doing the work. Templates show through, and editing means re-learning their UI every time you need a change.",
    pros: ["Nice templates", "Built-in blog"],
    cons: ["DIY design", "Templates look templated", "$23–$65/month", "Updates are on you"],
  },
  {
    href: "/godaddy-alternative",
    name: "GoDaddy Website Builder",
    tag: "Bundled with domain",
    summary:
      "GoDaddy's builder is convenient because you might already have a domain there. The sites look it. For a service business that needs to compete on first impression, it's a hard no.",
    pros: ["Integrated with their domains", "Cheap"],
    cons: ["Dated design", "Slow load times", "Limited customization", "Templates"],
  },
  {
    href: "/wordpress-alternative",
    name: "WordPress",
    tag: "Powerful but high-maintenance",
    summary:
      "WordPress is the most flexible option — and the most work. Plugins break. Themes get hacked. Updates require attention. Great for tinkerers, brutal for busy operators.",
    pros: ["Infinitely flexible", "Big ecosystem"],
    cons: ["Steep learning curve", "Security upkeep", "Plugin conflicts", "Slow without optimization"],
  },
];

const comparisonRows = [
  { label: "Upfront cost", lobus: "$0", wix: "$0", sq: "$0", gd: "$0", wp: "$0–$500+" },
  { label: "Monthly cost", lobus: "$100", wix: "$17–$45", sq: "$23–$65", gd: "$10–$25", wp: "$10–$50+" },
  { label: "Custom design", lobus: "Yes", wix: "No", sq: "No", gd: "No", wp: "Sometimes" },
  { label: "Mobile-optimized", lobus: "Yes (first)", wix: "Sometimes", sq: "Sometimes", gd: "Sometimes", wp: "Depends on theme" },
  { label: "Hosting included", lobus: "Yes", wix: "Yes", sq: "Yes", gd: "Yes", wp: "No (extra)" },
  { label: "SSL included", lobus: "Yes", wix: "Yes", sq: "Yes", gd: "Yes", wp: "Sometimes" },
  { label: "Managed updates", lobus: "Yes (email us)", wix: "DIY", sq: "DIY", gd: "DIY", wp: "DIY or paid" },
  { label: "Local SEO setup", lobus: "Yes (included)", wix: "Basic", sq: "Basic", gd: "Basic", wp: "Plugin needed" },
  { label: "Lock-in", lobus: "None — code is yours", wix: "Yes", sq: "Yes", gd: "Yes", wp: "None" },
  { label: "Typical launch time", lobus: "~1 week", wix: "Weeks (DIY)", sq: "Weeks (DIY)", gd: "Days (DIY)", wp: "Weeks–months" },
];

export default function AlternativesHub() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        name: "Website Builder Alternatives Compared",
        url: `${SITE_URL}/alternatives`,
        description: "Side-by-side comparison of Lobus Industries vs Wix, Squarespace, GoDaddy, and WordPress for service businesses.",
        inLanguage: "en-US",
        isPartOf: { "@id": `${SITE_URL}#website` },
      },
      {
        "@type": "ItemList",
        name: "Website builder alternatives for service businesses",
        numberOfItems: alternatives.length,
        itemListElement: alternatives.map((a, i) => ({
          "@type": "ListItem",
          position: i + 1,
          url: `${SITE_URL}${a.href}`,
          name: `Lobus Industries vs ${a.name}`,
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
          { "@type": "ListItem", position: 2, name: "Alternatives", item: `${SITE_URL}/alternatives` },
        ],
      },
    ],
  };

  return (
    <>
      <Nav />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <main className="flex-1">
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-grid pointer-events-none" />
          <div className="relative mx-auto max-w-6xl px-6 pt-24 pb-16 md:pt-32 md:pb-20">
            <div className="max-w-3xl">
              <div className="text-[11px] uppercase tracking-[0.22em] text-[var(--accent)] font-semibold mb-4">
                Alternatives
              </div>
              <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-white leading-[1.05]">
                Why service businesses pick Lobus over Wix, Squarespace, GoDaddy, and WordPress.
              </h1>
              <p className="mt-5 text-lg text-[var(--muted-strong)] leading-relaxed">
                Honest, side-by-side comparisons. We&apos;ll tell you when something else makes more sense.
              </p>
              <a
                href="/#contact"
                className="mt-8 btn-accent inline-flex items-center gap-2 px-7 py-4 rounded-full"
              >
                Start your website — free →
              </a>
            </div>
          </div>
        </section>

        {/* Comparison table */}
        <section className="pb-20">
          <div className="mx-auto max-w-6xl px-6">
            <div className="overflow-x-auto rounded-2xl border border-[var(--border-strong)]">
              <table className="w-full text-sm">
                <thead className="bg-white/[0.04] text-[10px] uppercase tracking-[0.16em] text-[var(--muted)]">
                  <tr>
                    <th className="text-left p-4 font-semibold">Feature</th>
                    <th className="text-left p-4 font-semibold text-[var(--accent)]">Lobus</th>
                    <th className="text-left p-4 font-semibold">Wix</th>
                    <th className="text-left p-4 font-semibold">Squarespace</th>
                    <th className="text-left p-4 font-semibold">GoDaddy</th>
                    <th className="text-left p-4 font-semibold">WordPress</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[var(--border)]">
                  {comparisonRows.map((row) => (
                    <tr key={row.label}>
                      <td className="p-4 text-white font-medium">{row.label}</td>
                      <td className="p-4 text-[var(--accent)]">{row.lobus}</td>
                      <td className="p-4 text-[var(--muted-strong)]">{row.wix}</td>
                      <td className="p-4 text-[var(--muted-strong)]">{row.sq}</td>
                      <td className="p-4 text-[var(--muted-strong)]">{row.gd}</td>
                      <td className="p-4 text-[var(--muted-strong)]">{row.wp}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Detail cards */}
        <section className="pb-20">
          <div className="mx-auto max-w-6xl px-6">
            <div className="text-[11px] uppercase tracking-[0.22em] text-[var(--muted)] font-semibold mb-6">
              Detailed comparisons
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              {alternatives.map((a) => (
                <Link
                  key={a.href}
                  href={a.href}
                  className="card p-7 group hover:border-[var(--accent)]/40 transition-colors"
                >
                  <div className="text-[10px] uppercase tracking-[0.18em] text-[var(--muted)] mb-2">
                    {a.tag}
                  </div>
                  <div className="text-xl font-semibold text-white group-hover:text-[var(--accent)] transition-colors">
                    Lobus Industries vs {a.name}
                  </div>
                  <p className="mt-3 text-sm text-[var(--muted-strong)] leading-relaxed">
                    {a.summary}
                  </p>
                  <div className="mt-4 grid grid-cols-2 gap-3 text-xs">
                    <div>
                      <div className="text-[var(--muted)] mb-1">Pros</div>
                      <ul className="space-y-1 text-[var(--muted-strong)]">
                        {a.pros.map((p) => (
                          <li key={p}>+ {p}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <div className="text-[var(--muted)] mb-1">Cons</div>
                      <ul className="space-y-1 text-[var(--muted-strong)]">
                        {a.cons.map((c) => (
                          <li key={c}>– {c}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="mt-5 text-sm text-[var(--accent)] font-medium">
                    Read full comparison →
                  </div>
                </Link>
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
