import type { Metadata } from "next";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import CTA from "../components/CTA";

const SITE_URL = "https://www.lobusindustries.com";

export const metadata: Metadata = {
  title: "Refer a Business, Get a Month Free · Lobus Industries",
  description:
    "Know a service business that needs a professional website? Refer them to Lobus Industries and get one month of hosting free when they sign up.",
  alternates: { canonical: `${SITE_URL}/referral` },
  openGraph: {
    title: "Refer a Business, Get a Month Free · Lobus Industries",
    description: "Refer a service business. Get one month free when they sign up.",
    url: `${SITE_URL}/referral`,
    type: "website",
    siteName: "Lobus Industries",
  },
};

const steps = [
  { num: "01", title: "Tell us who you're referring", body: "Email us at lobusindustries@gmail.com with the name and contact info of the business you're referring. Let them know to mention your name." },
  { num: "02", title: "They sign up and go live", body: "When the business you referred launches their site with us, we mark your referral as complete." },
  { num: "03", title: "You get a free month", body: "We credit your next invoice with one month free ($100 off). No codes, no forms — just a thank-you on your bill." },
];

const goodCandidates = [
  "A plumber, electrician, or HVAC tech you've worked with",
  "A landscaper or cleaning service you use or know",
  "A contractor, painter, or roofer in your network",
  "A handyman or pressure washing company in your area",
  "Any service business that mentions they don't have a good website",
];

export default function Referral() {
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
                Referral program
              </span>
              <h1 className="text-5xl md:text-6xl font-semibold tracking-tight leading-[1.05]">
                <span className="text-gradient">Know a business</span>
                <br />
                <span className="text-accent-gradient">that needs a website?</span>
              </h1>
              <p className="mt-7 text-lg md:text-xl text-[var(--muted-strong)] max-w-2xl leading-relaxed">
                Refer them to Lobus Industries. When they sign up and go live, we&apos;ll give you one month of hosting free — $100 off your next bill.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-3">
                <a
                  href="mailto:lobusindustries@gmail.com?subject=Referral"
                  className="btn-accent inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full text-base"
                >
                  Send a referral →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="py-20">
          <div className="mx-auto max-w-6xl px-6">
            <div className="text-[11px] uppercase tracking-[0.22em] text-[var(--accent)] font-semibold mb-8">How it works</div>
            <div className="grid md:grid-cols-3 gap-6">
              {steps.map((s) => (
                <div key={s.num} className="card p-7 relative overflow-hidden">
                  <div className="absolute top-4 right-5 text-6xl font-bold text-white/[0.04] leading-none select-none">{s.num}</div>
                  <div className="text-[var(--accent)] text-xs font-bold mb-3">{s.num}</div>
                  <h3 className="text-base font-semibold text-white mb-2">{s.title}</h3>
                  <p className="text-sm text-[var(--muted-strong)] leading-relaxed">{s.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Who's a good fit */}
        <section className="py-8 pb-20">
          <div className="mx-auto max-w-6xl px-6">
            <div className="rounded-2xl border border-[var(--border-strong)] bg-white/[0.03] p-8 md:p-12 relative overflow-hidden">
              <div className="absolute inset-0 opacity-30 pointer-events-none" style={{ background: "radial-gradient(ellipse 500px 300px at 100% 0%, rgba(251,146,60,0.2), transparent 70%)" }} />
              <div className="relative">
                <div className="text-[11px] uppercase tracking-[0.22em] text-[var(--accent)] font-semibold mb-4">Good referral candidates</div>
                <h2 className="text-2xl font-semibold text-white mb-6">Anyone you know who runs a service business.</h2>
                <ul className="space-y-3">
                  {goodCandidates.map((c) => (
                    <li key={c} className="flex items-start gap-3 text-sm text-[var(--muted-strong)]">
                      <div className="h-5 w-5 rounded-full bg-[var(--accent-soft)] text-[var(--accent)] grid place-items-center shrink-0 mt-0.5 text-[10px] font-bold">✓</div>
                      {c}
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <a
                    href="mailto:lobusindustries@gmail.com?subject=Referral"
                    className="btn-accent inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm"
                  >
                    Email us a referral →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Fine print */}
        <section className="pb-20">
          <div className="mx-auto max-w-6xl px-6">
            <div className="max-w-xl">
              <div className="text-[11px] uppercase tracking-[0.22em] text-[var(--muted)] font-semibold mb-3">The details</div>
              <ul className="space-y-2 text-xs text-[var(--muted)] leading-relaxed">
                <li>· One free month credit per referral that signs up and goes live.</li>
                <li>· No limit on how many referrals you can make.</li>
                <li>· Referral must mention your name when they reach out.</li>
                <li>· Credit applied to your next billing cycle after their site launches.</li>
                <li>· Both you and the person you refer must be active customers to apply the credit.</li>
              </ul>
            </div>
          </div>
        </section>

        <CTA />
      </main>
      <Footer />
    </>
  );
}
