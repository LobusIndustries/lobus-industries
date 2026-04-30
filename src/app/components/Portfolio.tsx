import { SectionHeading } from "./Services";

const examples = [
  {
    trade: "Plumber",
    city: "Denver, CO",
    color: "#6366f1",
    name: "Apex Plumbing Co.",
    headline: "Fast, Reliable Plumbing in Denver.",
    tagline: "Licensed & Insured · Same-Day Service · Upfront Pricing",
    services: ["Drain Clearing", "Water Heater Install", "Leak Repair", "Emergency Service"],
    cta: "Get a Free Quote",
  },
  {
    trade: "Landscaper",
    city: "Austin, TX",
    color: "#22c55e",
    name: "Green Edge Landscaping",
    headline: "Your Yard. Our Specialty.",
    tagline: "Residential & Commercial · Free Estimates · Austin-Based",
    services: ["Lawn Maintenance", "Landscaping Design", "Irrigation", "Seasonal Cleanups"],
    cta: "Request a Quote",
  },
  {
    trade: "Electrician",
    city: "Atlanta, GA",
    color: "#fb923c",
    name: "Volt Pro Electric",
    headline: "Licensed Electrical. Done Right.",
    tagline: "GA License #123456 · Residential & Commercial · 24/7 Emergency",
    services: ["Panel Upgrades", "EV Charger Install", "Wiring & Rewiring", "Inspections"],
    cta: "Schedule Service",
  },
];

export default function Portfolio() {
  return (
    <section className="py-28 relative overflow-hidden" id="examples">
      <div
        className="glow-amber"
        style={{ top: "20%", left: "-200px", width: "500px", height: "500px", opacity: 0.35 }}
      />
      <div className="mx-auto max-w-6xl px-6 relative">
        <SectionHeading
          eyebrow="Example sites"
          title="What your website looks like."
          subtitle="Every site is custom-built for your specific trade and city — not a template filled in with your name."
        />

        <div className="mt-14 grid md:grid-cols-3 gap-7">
          {examples.map((ex) => (
            <div key={ex.trade} className="group" data-fade>
              {/* Browser chrome */}
              <div className="rounded-xl overflow-hidden border border-[var(--border-strong)] shadow-xl shadow-black/40">
                {/* Title bar */}
                <div className="bg-white/[0.06] border-b border-[var(--border)] px-3 py-2.5 flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="h-2.5 w-2.5 rounded-full bg-red-500/70" />
                    <div className="h-2.5 w-2.5 rounded-full bg-amber-400/70" />
                    <div className="h-2.5 w-2.5 rounded-full bg-green-500/70" />
                  </div>
                  <div className="ml-2 flex-1 bg-white/[0.05] rounded-md px-3 py-1 text-[10px] text-[var(--muted)] truncate">
                    www.{ex.name.toLowerCase().replace(/\s+/g, "").replace(/[^a-z0-9]/g, "")}.com
                  </div>
                </div>

                {/* Site content mockup */}
                <div className="bg-[#0d0e17] p-5 min-h-[300px]">
                  {/* Nav bar */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="text-white font-semibold text-xs">{ex.name}</div>
                    <div
                      className="text-xs px-2.5 py-1 rounded-full text-white font-medium"
                      style={{ backgroundColor: ex.color }}
                    >
                      {ex.cta}
                    </div>
                  </div>

                  {/* Hero */}
                  <div className="mb-5">
                    <div
                      className="text-[11px] font-semibold mb-0.5"
                      style={{ color: ex.color }}
                    >
                      {ex.trade} · {ex.city}
                    </div>
                    <div className="text-white font-bold text-base leading-tight mb-1.5">
                      {ex.headline}
                    </div>
                    <div className="text-[10px] text-[var(--muted-strong)] leading-relaxed">
                      {ex.tagline}
                    </div>
                  </div>

                  {/* Services */}
                  <div className="mb-5">
                    <div className="text-[9px] uppercase tracking-[0.18em] text-[var(--muted)] mb-2">
                      Services
                    </div>
                    <div className="grid grid-cols-2 gap-1.5">
                      {ex.services.map((s) => (
                        <div
                          key={s}
                          className="rounded-md bg-white/[0.05] border border-white/[0.07] px-2 py-1.5 text-[10px] text-white"
                        >
                          {s}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA row */}
                  <button
                    className="w-full rounded-lg py-2 text-[11px] font-semibold text-white transition-opacity"
                    style={{ backgroundColor: ex.color }}
                    tabIndex={-1}
                    aria-hidden="true"
                  >
                    {ex.cta} →
                  </button>
                </div>
              </div>

              <div className="mt-3 text-center text-xs text-[var(--muted)]">
                Example: {ex.trade} website · {ex.city}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-[var(--muted-strong)] mb-5">
            Every site is built from scratch around your business, trade, and city.
          </p>
          <a
            href="#contact"
            className="btn-accent inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm"
          >
            Get your free site built <span aria-hidden>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
