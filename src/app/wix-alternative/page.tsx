import type { Metadata } from "next";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import CTA from "../components/CTA";
import { SectionHeading } from "../components/Services";

const SITE_URL = "https://www.lobusindustries.com";

export const metadata: Metadata = {
  title: "Wix Alternative for Service Businesses — Free to Build, $100/mo",
  description:
    "Tired of paying Wix monthly and still doing all the work yourself? Lobus Industries builds your site for $0 upfront, hosts it for $100/month, and handles all updates for you.",
  alternates: { canonical: `${SITE_URL}/wix-alternative` },
  openGraph: {
    title: "Wix Alternative for Service Businesses — Free to Build, $100/mo",
    description:
      "A done-for-you website for your service business — $0 to build, $100/month for everything. No DIY required.",
    url: `${SITE_URL}/wix-alternative`,
    type: "website",
    siteName: "Lobus Industries",
  },
  twitter: {
    card: "summary_large_image",
    title: "Wix Alternative for Service Businesses",
    description: "$0 to build. $100/month. We handle everything.",
  },
};

const comparisonRows = [
  { feature: "Build cost", wix: "$0 (you do all the work)", lobus: "$0 — we build it for you" },
  { feature: "Monthly cost", wix: "$17–$36/month", lobus: "$100/month flat" },
  { feature: "Design work", wix: "You do it", lobus: "We do it" },
  { feature: "Copywriting", wix: "You write it", lobus: "We help write it" },
  { feature: "Updates & changes", wix: "You log in and do it", lobus: "Email us — we handle it" },
  { feature: "Local SEO setup", wix: "Limited, manual", lobus: "Built in from day one" },
  { feature: "Mobile optimization", wix: "Template-dependent", lobus: "Designed mobile-first" },
  { feature: "Hosting & SSL", wix: "Included (shared)", lobus: "Fast global CDN, included" },
  { feature: "Time to launch", wix: "2–8 weeks of your time", lobus: "About 7 days, hands-off" },
];

const faqs = [
  {
    q: "Is Lobus Industries really free to build?",
    a: "Yes — $0 upfront. You pay $100/month starting when your site goes live. No build fee, no setup fee, no contract.",
  },
  {
    q: "Why is $100/month more than Wix's plan?",
    a: "Because Wix's plan doesn't include someone building and maintaining your site. When you account for the hours it takes to design, write copy, and update a Wix site yourself, $100/month for a fully managed professional site is a significant discount.",
  },
  {
    q: "What happens if I cancel?",
    a: "Cancel any time — no fees. We take the site offline. If you want the code, we hand it over. Your domain is always yours.",
  },
  {
    q: "Do I need any technical knowledge?",
    a: "None. You tell us about your business, we build it, we keep it updated. The most technical thing you'll do is send us an email.",
  },
  {
    q: "Can I move from Wix to Lobus Industries?",
    a: "Yes. If you have a Wix site, we'll build you a better one and help you transition. Your new domain or existing domain will point to the new site.",
  },
  {
    q: "What kinds of businesses do you build for?",
    a: "Service businesses — plumbers, electricians, landscapers, cleaners, HVAC, contractors, painters, roofers, handymen, auto detailers, and more.",
  },
];

export default function WixAlternative() {
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
                Wix alternative &nbsp;·&nbsp; For service businesses
              </span>
              <h1 className="text-5xl md:text-7xl font-semibold tracking-tight leading-[1.02]">
                <span className="text-gradient">Skip the DIY.</span>
                <br />
                <span className="text-accent-gradient">We build it for you.</span>
              </h1>
              <p className="mt-7 text-lg md:text-xl text-[var(--muted-strong)] max-w-2xl leading-relaxed">
                Wix lets you build a website yourself. Lobus Industries builds it for you — for the same price you&apos;d pay Wix to host a site you built yourself. Professional design, local SEO, and ongoing updates. $0 upfront.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-3">
                <a href="#contact" className="btn-accent inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full text-base">
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
              title="Wix vs. Lobus Industries"
              subtitle="Both cost money every month. Only one does the work for you."
            />
            <div className="mt-12 overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-[var(--border-strong)]">
                    <th className="text-left py-3 pr-6 text-[var(--muted)] font-medium w-1/3">Feature</th>
                    <th className="text-left py-3 pr-6 text-[var(--muted)] font-medium w-1/3">Wix (Business Plan)</th>
                    <th className="text-left py-3 text-[var(--accent)] font-semibold w-1/3">Lobus Industries</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[var(--border)]">
                  {comparisonRows.map((row) => (
                    <tr key={row.feature}>
                      <td className="py-4 pr-6 font-medium text-white">{row.feature}</td>
                      <td className="py-4 pr-6 text-[var(--muted-strong)]">{row.wix}</td>
                      <td className="py-4 text-white">{row.lobus}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Why section */}
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
                  The honest comparison
                </div>
                <p className="text-lg md:text-xl text-white leading-relaxed">
                  Wix is a great product — for people who want to build their own website. If you&apos;re a plumber, electrician, landscaper, or any other service business owner, you didn&apos;t go into business to build websites. We handle all of it for you, so you can focus on the work you actually do.
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
              subtitle="No add-ons. No surprise charges. One flat monthly fee."
            />
            <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: "Custom design", body: "Built around your trade and brand — not a Wix template that thousands of others use." },
                { title: "Professional copy", body: "We help write your headline, services, and about section so it actually sounds good." },
                { title: "Local SEO", body: "On-page optimization, schema markup, and city-specific content built in from day one." },
                { title: "Mobile-first", body: "Designed to look and work great on phones — where most of your customers are searching." },
                { title: "Fast hosting & SSL", body: "Global CDN, automatic HTTPS, and 99.9% uptime. Faster than any shared Wix server." },
                { title: "Unlimited updates", body: "Phone number changed? New service added? Email us. We handle all content changes." },
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
