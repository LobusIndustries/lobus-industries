import { SectionHeading } from "./Services";

const included = [
  "Custom design tailored to your business",
  "Up to 5 pages (Home, Services, About, Contact, etc.)",
  "Mobile-optimized & fast",
  "Contact / quote-request forms",
  "Local SEO setup & Google Business integration",
  "SSL certificate & secure global hosting",
  "Daily backups & 99.9% uptime",
  "Ongoing content updates — just email us",
  "Cancel anytime. We'll hand off the code if you go.",
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-28 relative" data-fade>
      <div
        className="glow-cool"
        style={{ top: "20%", left: "-150px", width: "420px", height: "420px" }}
      />
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Pricing"
          title="One price. Everything included."
          subtitle="Most agencies charge thousands to build, then hundreds to host. We flipped the model. Build is on us. You only pay to keep the lights on."
        />

        <div className="mt-16 grid md:grid-cols-5 gap-8 items-stretch">
          <div className="md:col-span-2 flex flex-col justify-between">
            <div>
              <div className="text-[11px] font-semibold tracking-[0.22em] uppercase text-[var(--accent)]">
                The Lobus Plan
              </div>
              <div className="mt-3 flex items-baseline gap-2">
                <span className="text-7xl font-semibold tracking-tight text-white">
                  $100
                </span>
                <span className="text-[var(--muted-strong)] text-lg">/month</span>
              </div>
              <div className="mt-2 text-[var(--muted-strong)]">
                <span className="line-through opacity-50">$2,500+ build fee</span>{" "}
                <span className="ml-1 font-semibold text-accent-gradient">$0</span>
              </div>
              <p className="mt-6 text-[var(--muted-strong)] leading-relaxed">
                We only make money if your site keeps serving you. That keeps us
                accountable — and saves you the upfront hit that kills most small
                business websites before they launch.
              </p>
              <a
                href="#contact"
                className="btn-accent mt-8 inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full"
              >
                Start your website — free
                <span aria-hidden>→</span>
              </a>
              <p className="mt-3 text-xs text-[var(--muted)]">
                No contract. Cancel any time.
              </p>
            </div>
          </div>

          <div className="md:col-span-3 card p-8 relative overflow-hidden">
            <div
              className="absolute inset-0 opacity-30 pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse at top right, rgba(251,146,60,0.18), transparent 60%)",
              }}
            />
            <div className="relative">
              <div className="text-sm font-semibold text-white mb-5">
                What&apos;s included
              </div>
              <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-3.5">
                {included.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm">
                    <span className="mt-0.5 h-5 w-5 shrink-0 rounded-full bg-[var(--accent-soft)] text-[var(--accent)] grid place-items-center text-xs font-bold">
                      ✓
                    </span>
                    <span className="text-[var(--muted-strong)] leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
