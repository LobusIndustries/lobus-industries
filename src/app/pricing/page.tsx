import type { Metadata } from "next";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import CTA from "../components/CTA";
import { SectionHeading } from "../components/Services";

const SITE_URL = "https://www.lobusindustries.com";

export const metadata: Metadata = {
  title: "Pricing — $0 to Build, $100/Month · Lobus Industries",
  description:
    "Lobus Industries builds your service business website for $0 upfront. You pay $100/month flat for hosting, SSL, backups, and unlimited content updates. No contracts.",
  alternates: { canonical: `${SITE_URL}/pricing` },
  openGraph: {
    title: "Pricing — $0 to Build, $100/Month · Lobus Industries",
    description: "$0 upfront. $100/month for everything. No contracts.",
    url: `${SITE_URL}/pricing`,
    type: "website",
    siteName: "Lobus Industries",
  },
};

const included = [
  "Custom-designed website (not a template)",
  "Mobile-first, fast-loading build",
  "Local SEO foundation + structured data",
  "Lead-generating contact & quote forms",
  "Reliable global hosting + CDN",
  "SSL certificate (HTTPS)",
  "Automatic daily backups",
  "Unlimited content updates via email",
  "Google Business Profile guidance",
  "99.9% uptime SLA",
  "Domain setup & connection",
  "Launch in about 7 days",
];

const notIncluded = [
  "Build fee — $0 upfront, always",
  "Setup fees",
  "Contracts or commitments",
  "Per-update charges",
  "Hidden renewal costs",
];

const faqs = [
  { q: "Is the build really free?", a: "Yes. $0 upfront. We design, write, and launch your site at no initial cost. You start paying $100/month when it goes live." },
  { q: "What counts as a content update?", a: "Anything you'd typically update on a website — phone number, service list, pricing, hours, photos, a new team member, seasonal promotions. Just email us and we handle it." },
  { q: "Is there a limit to how many updates I can request?", a: "No. Updates are included in your plan. We don't count them, cap them, or charge extra." },
  { q: "What happens if I cancel?", a: "Cancel anytime, no fees, no questions. We take the site offline. If you want the code to host elsewhere, we hand it over." },
  { q: "Do I own my domain?", a: "Yes — always. Your domain is registered in your name from day one. We never hold it." },
  { q: "Is there a contract or minimum commitment?", a: "None. Month-to-month. You can cancel after your first month if it's not working for you." },
  { q: "What do I need to provide to get started?", a: "Your trade, your location, a description of your services, your phone number and email, and any photos of your work you have. That's it. We handle the rest." },
  { q: "Do you build for any type of service business?", a: "Yes — plumbers, electricians, HVAC, landscapers, cleaners, contractors, painters, roofers, handymen, auto detailers, personal trainers, pest control, moving companies, pool services, dog groomers, and more." },
];

export default function Pricing() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-grid pointer-events-none" />
          <div className="relative mx-auto max-w-6xl px-6 pt-24 pb-20 md:pt-32 md:pb-28 text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-[var(--border-strong)] bg-white/5 backdrop-blur px-3.5 py-1.5 text-xs font-medium text-[var(--muted-strong)] mb-7">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)] pulse-soft" />
              Simple, transparent pricing
            </span>
            <h1 className="text-5xl md:text-7xl font-semibold tracking-tight leading-[1.02] max-w-3xl mx-auto">
              <span className="text-gradient">One plan.</span>
              <br />
              <span className="text-accent-gradient">Everything included.</span>
            </h1>
            <p className="mt-7 text-lg md:text-xl text-[var(--muted-strong)] max-w-xl mx-auto leading-relaxed">
              No tiers. No add-ons. No build fee. Pay $100/month after your site goes live — and cancel anytime.
            </p>
          </div>
        </section>

        {/* Price card */}
        <section className="py-4 pb-20">
          <div className="mx-auto max-w-6xl px-6">
            <div className="grid lg:grid-cols-2 gap-8 items-start max-w-4xl mx-auto">
              {/* Price */}
              <div className="card p-10">
                <div className="text-[11px] uppercase tracking-[0.22em] text-[var(--accent)] font-semibold mb-6">The Lobus Plan</div>
                <div className="flex items-start gap-2 mb-2">
                  <div className="text-7xl font-semibold text-white tracking-tight leading-none">$100</div>
                  <div className="text-[var(--muted)] text-base mt-4">/month</div>
                </div>
                <div className="flex items-center gap-2 mb-8">
                  <span className="text-[var(--muted)] line-through text-sm">$2,500+ build fee</span>
                  <span className="rounded-full bg-[var(--accent-soft)] text-[var(--accent)] text-xs font-semibold px-2.5 py-1">$0 upfront</span>
                </div>
                <a href="#contact" className="btn-accent w-full py-4 rounded-full text-center block font-semibold">
                  Start your free build →
                </a>
                <p className="text-xs text-[var(--muted)] text-center mt-4">No credit card until your site is live. Cancel anytime.</p>
              </div>

              {/* What's included */}
              <div>
                <div className="text-[11px] uppercase tracking-[0.22em] text-[var(--muted)] font-semibold mb-4">What&apos;s included</div>
                <ul className="space-y-3 mb-8">
                  {included.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-[var(--muted-strong)]">
                      <div className="h-5 w-5 rounded-full bg-[var(--accent-soft)] text-[var(--accent)] grid place-items-center shrink-0 mt-0.5 text-[10px] font-bold">✓</div>
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="text-[11px] uppercase tracking-[0.22em] text-[var(--muted)] font-semibold mb-4">What you&apos;ll never pay</div>
                <ul className="space-y-2.5">
                  {notIncluded.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-[var(--muted-strong)]">
                      <div className="h-5 w-5 rounded-full border border-[var(--border-strong)] grid place-items-center shrink-0 mt-0.5 text-[10px] text-[var(--muted)]">✕</div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* vs alternatives */}
        <section className="py-20">
          <div className="mx-auto max-w-6xl px-6">
            <SectionHeading eyebrow="How it compares" title="The honest comparison." />
            <div className="mt-12 overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-[var(--border-strong)]">
                    <th className="text-left py-3 pr-6 text-[var(--muted)] font-medium"></th>
                    <th className="text-left py-3 pr-6 text-[var(--muted)] font-medium">DIY (Wix/Squarespace)</th>
                    <th className="text-left py-3 pr-6 text-[var(--muted)] font-medium">Freelancer</th>
                    <th className="text-left py-3 text-[var(--accent)] font-semibold">Lobus Industries</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[var(--border)]">
                  {[
                    ["Build cost", "$0 (you do all the work)", "$800–$3,500", "$0"],
                    ["Monthly cost", "$17–$65/mo", "$50–$150/mo hosting", "$100/mo everything"],
                    ["Who builds it", "You", "Them (once)", "Us — ongoing"],
                    ["Updates", "You log in", "$50–$150 per change", "Email us — included"],
                    ["Local SEO", "Manual, limited", "Sometimes", "Built in"],
                    ["Time to launch", "2–8 weeks of your time", "4–10 weeks", "~7 days, hands-off"],
                  ].map(([feature, diy, freelancer, lobus]) => (
                    <tr key={feature}>
                      <td className="py-4 pr-6 font-medium text-white">{feature}</td>
                      <td className="py-4 pr-6 text-[var(--muted-strong)]">{diy}</td>
                      <td className="py-4 pr-6 text-[var(--muted-strong)]">{freelancer}</td>
                      <td className="py-4 text-white font-medium">{lobus}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20">
          <div className="mx-auto max-w-6xl px-6">
            <SectionHeading eyebrow="FAQ" title="Pricing questions answered." />
            <div className="mt-12 max-w-3xl divide-y divide-[var(--border)] border-y border-[var(--border)]">
              {faqs.map((f) => (
                <details key={f.q} className="group py-5">
                  <summary className="flex items-start justify-between gap-6 cursor-pointer list-none">
                    <span className="text-base font-medium text-white">{f.q}</span>
                    <span className="mt-1 h-6 w-6 shrink-0 rounded-full border border-[var(--border-strong)] grid place-items-center text-[var(--muted-strong)] group-open:rotate-45 group-open:bg-[var(--accent-soft)] group-open:text-[var(--accent)] group-open:border-[var(--accent)] transition-all">+</span>
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
