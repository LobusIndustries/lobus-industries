import type { Metadata } from "next";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import CTA from "../components/CTA";
import { SectionHeading } from "../components/Services";

const SITE_URL = "https://www.lobusindustries.com";

export const metadata: Metadata = {
  title: "Squarespace Alternative for Service Businesses — Free to Build, $100/mo",
  description:
    "Squarespace looks great but still requires you to do all the work. Lobus Industries builds your service business website for $0 upfront and handles everything at $100/month.",
  alternates: { canonical: `${SITE_URL}/squarespace-alternative` },
  openGraph: {
    title: "Squarespace Alternative for Service Businesses — Free to Build, $100/mo",
    description:
      "A done-for-you website for your service business — $0 to build, $100/month for everything. No DIY required.",
    url: `${SITE_URL}/squarespace-alternative`,
    type: "website",
    siteName: "Lobus Industries",
  },
  twitter: {
    card: "summary_large_image",
    title: "Squarespace Alternative for Service Businesses",
    description: "$0 to build. $100/month. We handle everything.",
  },
};

const comparisonRows = [
  { feature: "Build cost", sq: "$0 (you do all the work)", lobus: "$0 — we build it for you" },
  { feature: "Monthly cost", sq: "$23–$65/month", lobus: "$100/month flat" },
  { feature: "Design work", sq: "You do it", lobus: "We do it" },
  { feature: "Copywriting", sq: "You write it", lobus: "We help write it" },
  { feature: "Updates & changes", sq: "You log in and do it", lobus: "Email us — we handle it" },
  { feature: "Local SEO setup", sq: "Basic tools, manual", lobus: "Built in from day one" },
  { feature: "Mobile optimization", sq: "Template-dependent", lobus: "Designed mobile-first" },
  { feature: "Hosting & SSL", sq: "Included (shared)", lobus: "Fast global CDN, included" },
  { feature: "Time to launch", sq: "2–8 weeks of your time", lobus: "About 7 days, hands-off" },
];

const faqs = [
  {
    q: "Is Squarespace really that hard to use?",
    a: "Squarespace is well-designed and genuinely easier than many alternatives. But 'easier' doesn't mean 'done.' You still have to choose templates, write all your own copy, upload photos, set up contact forms, and configure SEO settings. That takes time most service business owners don't have.",
  },
  {
    q: "Why would I pay $100/month when Squarespace is cheaper?",
    a: "Squarespace charges you to use their builder — you still do all the work. Lobus Industries charges you for a done-for-you service: we design it, write it, host it, and update it. Most clients get a better result in less total time for less combined cost.",
  },
  {
    q: "Will my site look as good as a Squarespace site?",
    a: "Yes — and it will be customized to your specific business rather than a template designed for photographers or restaurants. Our sites are clean, fast, and professional.",
  },
  {
    q: "What if I already have a Squarespace site?",
    a: "We'll build you a better one. Once it's live and you're happy, you cancel Squarespace. Your domain transfers to point to your new site.",
  },
  {
    q: "Can I cancel if I'm not happy?",
    a: "Yes — no contracts, no cancellation fees. If it's not working for you, cancel any time. Your domain is always yours.",
  },
  {
    q: "What trades do you build for?",
    a: "Service businesses — plumbers, electricians, landscapers, cleaners, HVAC companies, contractors, painters, roofers, handymen, auto detailers, personal trainers, and more.",
  },
];

export default function SquarespaceAlternative() {
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
                Squarespace alternative &nbsp;·&nbsp; For service businesses
              </span>
              <h1 className="text-5xl md:text-7xl font-semibold tracking-tight leading-[1.02]">
                <span className="text-gradient">Great templates.</span>
                <br />
                <span className="text-accent-gradient">Still your problem.</span>
              </h1>
              <p className="mt-7 text-lg md:text-xl text-[var(--muted-strong)] max-w-2xl leading-relaxed">
                Squarespace builds beautiful templates. You build the site. Lobus Industries builds everything — design, copy, SEO, and hosting — so you don&apos;t have to. $0 upfront, $100/month.
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
              title="Squarespace vs. Lobus Industries"
              subtitle="Both cost money every month. Only one does the work for you."
            />
            <div className="mt-12 overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-[var(--border-strong)]">
                    <th className="text-left py-3 pr-6 text-[var(--muted)] font-medium w-1/3">Feature</th>
                    <th className="text-left py-3 pr-6 text-[var(--muted)] font-medium w-1/3">Squarespace (Business)</th>
                    <th className="text-left py-3 text-[var(--accent)] font-semibold w-1/3">Lobus Industries</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[var(--border)]">
                  {comparisonRows.map((row) => (
                    <tr key={row.feature}>
                      <td className="py-4 pr-6 font-medium text-white">{row.feature}</td>
                      <td className="py-4 pr-6 text-[var(--muted-strong)]">{row.sq}</td>
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
                  The real difference
                </div>
                <p className="text-lg md:text-xl text-white leading-relaxed">
                  Squarespace is designed for people who want to be their own web designer. If you&apos;re a contractor, plumber, or landscaper, that&apos;s not why you started your business. We handle the design and maintenance so you can focus on the work that actually pays.
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
              subtitle="No templates to wrestle with. No plugins to configure. Done for you."
            />
            <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: "Custom design", body: "Built for your trade and business — not a portfolio template repurposed for a plumber." },
                { title: "Professional copy", body: "We write your headline, services section, and about blurb so it sounds credible and clear." },
                { title: "Local SEO", body: "On-page optimization and schema markup baked in — not an afterthought you configure yourself." },
                { title: "Mobile-first build", body: "Designed for phones from the ground up, where 70%+ of your customers are searching." },
                { title: "Fast hosting & SSL", body: "Global CDN, HTTPS, and automatic backups — faster and more reliable than shared hosting." },
                { title: "Ongoing updates", body: "New service? New number? Changed pricing? Just email us — no login required." },
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
            <SectionHeading eyebrow="FAQ" title="Common questions." />
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
