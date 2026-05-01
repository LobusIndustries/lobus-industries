import type { Metadata } from "next";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import CTA from "../components/CTA";
import { SectionHeading } from "../components/Services";

const SITE_URL = "https://www.lobusindustries.com";

export const metadata: Metadata = {
  title: "About Lobus Industries — Who We Are and Why We Do This",
  description:
    "Lobus Industries was built to solve a specific problem: great service businesses losing customers because they have no website. Here's the story.",
  alternates: { canonical: `${SITE_URL}/about` },
  openGraph: {
    title: "About Lobus Industries",
    description: "The story behind $0 builds and $100/month hosting for service businesses.",
    url: `${SITE_URL}/about`,
    type: "website",
    siteName: "Lobus Industries",
  },
};

const values = [
  {
    title: "No upfront cost. Ever.",
    body: "We built the business around eliminating the biggest barrier for service businesses: a $2,000–$5,000 check before they've seen a single page. You pay monthly, and only after your site is live.",
  },
  {
    title: "Simple pricing. One plan.",
    body: "$100/month. Everything included — design, hosting, SSL, backups, and content updates. No tiers, no add-ons, no surprise renewal fees.",
  },
  {
    title: "We do the work.",
    body: "You're not getting a template to fill in yourself. We design it, write it, set up the SEO, and launch it. Your job is to tell us about your business.",
  },
  {
    title: "You own everything.",
    body: "Your domain is registered in your name. If you cancel, we hand over the code. No lock-in, no hostage-taking, no 'we own the site' clauses.",
  },
];

const process = [
  { step: "01", title: "Tell us about your business", body: "Fill out the contact form with your trade, location, services, and any photos you have. That's all we need to get started." },
  { step: "02", title: "We build your site", body: "Our team designs and writes your website from scratch — custom to your trade and city. No templates, no AI-generated filler." },
  { step: "03", title: "You review and approve", body: "We send you a preview link. You request any changes — copy, layout, photos — until it's exactly right." },
  { step: "04", title: "We go live", body: "Once you approve, we connect your domain and launch. Your site is live, indexed, and ready to generate leads — typically within a week of your first message." },
  { step: "05", title: "We keep it updated", body: "Phone number changed? New service added? Just email us. Updates are included in your $100/month with no cap on requests." },
];

export default function About() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-grid pointer-events-none" />
          <div className="relative mx-auto max-w-6xl px-6 pt-24 pb-20 md:pt-32 md:pb-28">
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-[var(--border-strong)] bg-white/5 backdrop-blur px-3.5 py-1.5 text-xs font-medium text-[var(--muted-strong)] mb-7">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)] pulse-soft" />
                About Lobus Industries
              </span>
              <h1 className="text-5xl md:text-6xl font-semibold tracking-tight leading-[1.05]">
                <span className="text-gradient">Built for the businesses</span>
                <br />
                <span className="text-accent-gradient">that keep everything running.</span>
              </h1>
              <p className="mt-7 text-lg md:text-xl text-[var(--muted-strong)] max-w-2xl leading-relaxed">
                Plumbers, electricians, landscapers, cleaners — the people who fix what's broken and build what lasts. They deserved better websites than what they were getting. So we built a model that makes it possible.
              </p>
            </div>
          </div>
        </section>

        {/* The problem we saw */}
        <section className="py-16">
          <div className="mx-auto max-w-6xl px-6">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <div className="text-[11px] uppercase tracking-[0.22em] text-[var(--accent)] font-semibold mb-4">
                  Why we exist
                </div>
                <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight leading-tight mb-6">
                  Great service businesses were losing jobs to worse ones — just because of websites.
                </h2>
                <div className="space-y-4 text-[var(--muted-strong)] leading-relaxed">
                  <p>
                    A plumber with 15 years of experience, a spotless reputation, and a full schedule of happy customers — losing new business to a competitor with half the skill and twice the online presence. Just because they had a better website.
                  </p>
                  <p>
                    We saw this over and over. Service business owners who were genuinely excellent at their trade but invisible online. The barrier wasn't effort or desire — it was cost. A $3,000 upfront website build was simply out of reach for most.
                  </p>
                  <p>
                    So we flipped the model. We build for free, host for a fair monthly fee, and handle all the maintenance. The website earns its keep in new business — usually within the first customer it brings in.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { num: "$0", label: "Build cost" },
                  { num: "$100", label: "Per month" },
                  { num: "7", label: "Days to launch" },
                  { num: "16+", label: "Trades served" },
                ].map((s) => (
                  <div key={s.label} className="card p-6 text-center">
                    <div className="text-4xl font-semibold text-accent-gradient mb-1">{s.num}</div>
                    <div className="text-xs text-[var(--muted)] uppercase tracking-[0.18em]">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20">
          <div className="mx-auto max-w-6xl px-6">
            <SectionHeading
              eyebrow="What we stand for"
              title="The commitments behind the business."
            />
            <div className="mt-12 grid sm:grid-cols-2 gap-6">
              {values.map((v) => (
                <div key={v.title} className="card p-7">
                  <h3 className="text-base font-semibold text-white mb-2">{v.title}</h3>
                  <p className="text-sm text-[var(--muted-strong)] leading-relaxed">{v.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="py-20 relative">
          <div className="glow-cool" style={{ top: "30%", right: "-200px", width: "450px", height: "450px" }} />
          <div className="mx-auto max-w-6xl px-6 relative">
            <SectionHeading
              eyebrow="The process"
              title="From first message to live website."
              subtitle="Most clients are live within 7–10 days of reaching out."
            />
            <div className="mt-12 space-y-0 max-w-2xl">
              {process.map((p, i) => (
                <div key={p.step} className="flex gap-6 pb-10 relative">
                  {i < process.length - 1 && (
                    <div className="absolute left-5 top-10 bottom-0 w-px bg-[var(--border-strong)]" />
                  )}
                  <div className="shrink-0 h-10 w-10 rounded-full border border-[var(--border-strong)] bg-[var(--accent-soft)] text-[var(--accent)] text-xs font-bold grid place-items-center z-10">
                    {p.step}
                  </div>
                  <div className="pt-1.5">
                    <h3 className="text-base font-semibold text-white mb-1.5">{p.title}</h3>
                    <p className="text-sm text-[var(--muted-strong)] leading-relaxed">{p.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Who we build for */}
        <section className="py-16">
          <div className="mx-auto max-w-6xl px-6">
            <div className="rounded-2xl border border-[var(--border-strong)] bg-white/[0.03] p-8 md:p-12">
              <div className="text-[11px] uppercase tracking-[0.22em] text-[var(--accent)] font-semibold mb-4">
                Who we build for
              </div>
              <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">
                Any service business. Any city in the US.
              </h2>
              <p className="text-[var(--muted-strong)] leading-relaxed mb-6 max-w-2xl">
                Plumbers, electricians, landscapers, cleaners, HVAC companies, general contractors, painters, roofers, handymen, auto detailers, personal trainers, pest control, moving companies, pool services, dog groomers — if you run a service business, we build for you.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Plumbers", "Electricians", "Landscapers", "Cleaners", "HVAC", "Contractors", "Painters", "Roofers", "Handymen", "Auto Detailers", "Personal Trainers", "Pest Control", "Moving Companies", "Pool Services", "Dog Groomers"].map((t) => (
                  <span key={t} className="rounded-full border border-[var(--border-strong)] bg-white/[0.04] px-3 py-1 text-xs text-[var(--muted-strong)]">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <CTA />
      </main>
      <Footer />
    </>
  );
}
