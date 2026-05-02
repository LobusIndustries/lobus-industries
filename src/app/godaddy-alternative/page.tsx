import type { Metadata } from "next";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import CTA from "../components/CTA";
import { SectionHeading } from "../components/Services";

const SITE_URL = "https://www.lobusindustries.com";

export const metadata: Metadata = {
  title: "GoDaddy Alternative for Service Businesses — Free to Build, $100/mo",
  description:
    "GoDaddy's website builder costs money every month and still makes you do all the work. Lobus Industries builds your site for $0 upfront, hosts it for $100/month, and handles all updates.",
  alternates: { canonical: `${SITE_URL}/godaddy-alternative` },
  openGraph: {
    title: "GoDaddy Alternative for Service Businesses — Free to Build, $100/mo",
    description:
      "A done-for-you website for your service business — $0 to build, $100/month for everything. No DIY required.",
    url: `${SITE_URL}/godaddy-alternative`,
    type: "website",
    siteName: "Lobus Industries",
  },
  twitter: {
    card: "summary_large_image",
    title: "GoDaddy Alternative for Service Businesses",
    description: "$0 to build. $100/month. We handle everything.",
  },
};

const comparisonRows = [
  { feature: "Build cost", godaddy: "$0 (you do all the work)", lobus: "$0 — we build it for you" },
  { feature: "Monthly cost", godaddy: "$10–$25/month (builder only)", lobus: "$100/month flat — everything included" },
  { feature: "Design quality", godaddy: "Template-based, generic", lobus: "Custom — built around your trade" },
  { feature: "Content updates", godaddy: "Log in and do it yourself", lobus: "Email us — we handle it" },
  { feature: "Local SEO", godaddy: "Basic, manual setup", lobus: "Built in — structured data, city pages" },
  { feature: "Mobile optimization", godaddy: "Template-dependent", lobus: "Designed mobile-first" },
  { feature: "Hosting speed", godaddy: "Shared servers, inconsistent", lobus: "Global CDN, fast everywhere" },
  { feature: "SSL / HTTPS", godaddy: "Often upsold separately", lobus: "Included, always" },
  { feature: "Time to launch", godaddy: "Weeks of your time", lobus: "About 7 days, you do nothing" },
  { feature: "Support", godaddy: "Phone / chat with reps", lobus: "Direct email to the person who built your site" },
];

const faqs = [
  {
    q: "Why would I pay $100/month when GoDaddy is only $10–$25?",
    a: "GoDaddy charges $10–$25 for hosting — but you still have to build the site yourself, write all the content, and make every update. When you account for your time, $100/month for a site that's built, maintained, and updated for you is significantly less expensive in practice.",
  },
  {
    q: "Is Lobus Industries really free to build?",
    a: "Yes — $0 upfront. No build fee, no setup fee. You pay $100/month starting when your site goes live. Cancel any time.",
  },
  {
    q: "I already have a GoDaddy domain. Can I keep it?",
    a: "Yes. Your domain stays wherever it's registered. We just point it to your new Lobus Industries site. You keep full ownership of your domain.",
  },
  {
    q: "What if I already have a GoDaddy website I built?",
    a: "We build you a better one from scratch and help you transition. Once the new site is live on your domain, you can let your GoDaddy website builder subscription lapse.",
  },
  {
    q: "What kinds of businesses do you build for?",
    a: "Service businesses — plumbers, electricians, landscapers, cleaners, HVAC, contractors, painters, roofers, auto detailers, personal trainers, photographers, and more.",
  },
  {
    q: "What happens if I cancel?",
    a: "Cancel any time — no fees. We take the site offline. If you want the code to host elsewhere, we hand it over.",
  },
];

export default function GoDaddyAlternative() {
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
                GoDaddy alternative &nbsp;·&nbsp; For service businesses
              </span>
              <h1 className="text-5xl md:text-7xl font-semibold tracking-tight leading-[1.02]">
                <span className="text-gradient">Done for you.</span>
                <br />
                <span className="text-accent-gradient">Not DIY.</span>
              </h1>
              <p className="mt-7 text-lg md:text-xl text-[var(--muted-strong)] max-w-2xl leading-relaxed">
                GoDaddy sells you hosting and a builder — then you&apos;re on your own. Lobus Industries builds your site, launches it, and keeps it updated. One flat monthly fee. No technical work required.
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
              title="GoDaddy vs. Lobus Industries"
              subtitle="GoDaddy sells tools. Lobus Industries delivers results."
            />
            <div className="mt-12 overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-[var(--border-strong)]">
                    <th className="text-left py-3 pr-6 text-[var(--muted)] font-medium w-1/3">Feature</th>
                    <th className="text-left py-3 pr-6 text-[var(--muted)] font-medium w-1/3">GoDaddy Website Builder</th>
                    <th className="text-left py-3 text-[var(--accent)] font-semibold w-1/3">Lobus Industries</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[var(--border)]">
                  {comparisonRows.map((row) => (
                    <tr key={row.feature}>
                      <td className="py-4 pr-6 font-medium text-white">{row.feature}</td>
                      <td className="py-4 pr-6 text-[var(--muted-strong)]">{row.godaddy}</td>
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
                  GoDaddy is a domain registrar and hosting company that added a website builder. It works fine if you&apos;re comfortable designing and writing your own site. If you&apos;re a plumber, electrician, HVAC tech, or landscaper who just wants a professional website without doing it yourself — Lobus Industries is the better answer.
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
                { title: "Custom design", body: "Built around your trade and business — not a GoDaddy template thousands of other contractors use." },
                { title: "We write the copy", body: "Your headline, services, and about section written to convert visitors into customers." },
                { title: "Local SEO built in", body: "Structured data, city-specific content, and Google Business Profile connection from day one." },
                { title: "Mobile-first", body: "Over 60% of service searches happen on phones. Your site is designed for that." },
                { title: "Fast global hosting", body: "Vercel's global CDN. Your site loads fast everywhere — faster than GoDaddy's shared servers." },
                { title: "Unlimited updates", body: "Email us whenever you need a change. We handle it — usually within one business day." },
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
