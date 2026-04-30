import { SectionHeading } from "./Services";

const examples = [
  {
    trade: "Plumber",
    city: "Denver, CO",
    accentColor: "#6366f1",
    accentBg: "rgba(99,102,241,0.12)",
    badge: "Licensed & Insured",
    headline: "Fast, Reliable Plumbing in Denver.",
    sub: "Same-day service · Upfront pricing · 20+ years experience",
    services: ["Drain Clearing", "Water Heater Install", "Leak Repair", "Emergency Calls"],
    phone: "(720) 555-0100",
    rating: "4.9",
    reviewCount: "112",
    cta: "Get a Free Quote",
    heroGradient: "from-[#1a1b2e] to-[#0d0e17]",
    navLinks: ["Services", "About", "Reviews", "Contact"],
  },
  {
    trade: "Landscaper",
    city: "Austin, TX",
    accentColor: "#16a34a",
    accentBg: "rgba(22,163,74,0.12)",
    badge: "Free Estimates",
    headline: "Curb Appeal That Gets Noticed.",
    sub: "Residential & commercial · Austin-based since 2015",
    services: ["Lawn Care", "Landscape Design", "Irrigation", "Seasonal Cleanup"],
    phone: "(512) 555-0184",
    rating: "5.0",
    reviewCount: "87",
    cta: "Request a Quote",
    heroGradient: "from-[#0d1a10] to-[#0d0e17]",
    navLinks: ["Services", "Gallery", "Reviews", "Contact"],
  },
  {
    trade: "Electrician",
    city: "Nashville, TN",
    accentColor: "#fb923c",
    accentBg: "rgba(251,146,60,0.12)",
    badge: "TN License #E-12345",
    headline: "Licensed Electrical Work. Done Right.",
    sub: "Residential & commercial · 24/7 emergency · Fully insured",
    services: ["Panel Upgrades", "EV Charger Install", "Rewiring", "Code Inspections"],
    phone: "(615) 555-0237",
    rating: "4.8",
    reviewCount: "143",
    cta: "Schedule Service",
    heroGradient: "from-[#1f1408] to-[#0d0e17]",
    navLinks: ["Services", "About", "Reviews", "Contact"],
  },
];

function StarIcon({ color }: { color: string }) {
  return (
    <svg width="9" height="9" viewBox="0 0 10 10" fill={color} aria-hidden="true">
      <path d="M5 0.5l1.18 2.39 2.64.38-1.91 1.86.45 2.63L5 6.5l-2.36 1.26.45-2.63L1.18 3.27l2.64-.38L5 .5z" />
    </svg>
  );
}

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
            <div key={ex.trade} data-fade>
              {/* Browser chrome shell */}
              <div className="rounded-2xl overflow-hidden border border-white/[0.1] shadow-2xl shadow-black/60 ring-1 ring-white/[0.04]">

                {/* Title bar — no URL, just chrome */}
                <div className="bg-[#18191f] border-b border-white/[0.07] px-4 py-3 flex items-center gap-3">
                  <div className="flex gap-1.5 shrink-0">
                    <div className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                    <div className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
                    <div className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
                  </div>
                  {/* address bar — neutral, no domain */}
                  <div className="flex-1 bg-white/[0.06] rounded-md px-3 h-5 flex items-center gap-1.5">
                    <svg width="8" height="8" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                      <path d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zm0 12.5A5.5 5.5 0 1 1 8 2.5a5.5 5.5 0 0 1 0 11zm0-8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5zM7.25 7v4.5h1.5V7h-1.5z" fill="rgba(255,255,255,0.25)" />
                    </svg>
                    <div className="h-1.5 w-24 rounded-full bg-white/10" />
                  </div>
                </div>

                {/* Page content */}
                <div className="bg-[#0d0e17]">

                  {/* Nav */}
                  <div className="flex items-center justify-between px-5 py-3.5 border-b border-white/[0.05]">
                    <div className="flex items-center gap-1.5">
                      <div
                        className="h-5 w-5 rounded"
                        style={{ background: `linear-gradient(135deg, ${ex.accentColor}, ${ex.accentColor}99)` }}
                      />
                      <div className="h-2 w-14 rounded-full bg-white/20" />
                    </div>
                    <div className="hidden sm:flex items-center gap-3">
                      {ex.navLinks.map((l) => (
                        <div key={l} className="h-1.5 rounded-full bg-white/15" style={{ width: `${l.length * 4.5}px` }} />
                      ))}
                    </div>
                    <div
                      className="rounded-full px-3 py-1 text-[10px] font-semibold text-white shrink-0"
                      style={{ backgroundColor: ex.accentColor }}
                    >
                      {ex.cta}
                    </div>
                  </div>

                  {/* Hero section */}
                  <div className="px-5 pt-5 pb-4">
                    {/* Badge */}
                    <div
                      className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[9px] font-semibold mb-3"
                      style={{ backgroundColor: ex.accentBg, color: ex.accentColor }}
                    >
                      <div
                        className="h-1.5 w-1.5 rounded-full"
                        style={{ backgroundColor: ex.accentColor }}
                      />
                      {ex.badge}
                    </div>

                    {/* Headline */}
                    <h3 className="text-white font-bold text-[15px] leading-snug mb-1.5">
                      {ex.headline}
                    </h3>
                    <p className="text-[10px] text-white/50 leading-relaxed mb-4">
                      {ex.sub}
                    </p>

                    {/* CTA buttons */}
                    <div className="flex gap-2 mb-4">
                      <div
                        className="flex-1 rounded-lg py-2 text-center text-[10px] font-semibold text-white"
                        style={{ backgroundColor: ex.accentColor }}
                      >
                        {ex.cta} →
                      </div>
                      <div className="flex-1 rounded-lg py-2 text-center text-[10px] font-medium text-white/60 border border-white/10">
                        Call {ex.phone}
                      </div>
                    </div>

                    {/* Social proof strip */}
                    <div className="flex items-center gap-1.5 mb-5">
                      <div className="flex gap-0.5">
                        {[...Array(5)].map((_, i) => (
                          <StarIcon key={i} color={ex.accentColor} />
                        ))}
                      </div>
                      <span className="text-[10px] font-semibold text-white">{ex.rating}</span>
                      <span className="text-[10px] text-white/40">· {ex.reviewCount} Google reviews</span>
                    </div>
                  </div>

                  {/* Services grid */}
                  <div className="px-5 pb-5">
                    <div className="text-[8.5px] uppercase tracking-[0.2em] text-white/30 font-medium mb-2">
                      Services
                    </div>
                    <div className="grid grid-cols-2 gap-1.5">
                      {ex.services.map((s) => (
                        <div
                          key={s}
                          className="rounded-lg border border-white/[0.07] bg-white/[0.03] px-3 py-2.5 flex items-center gap-2"
                        >
                          <div
                            className="h-1.5 w-1.5 rounded-full shrink-0"
                            style={{ backgroundColor: ex.accentColor }}
                          />
                          <span className="text-[10px] text-white/75 font-medium">{s}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Footer strip */}
                  <div className="border-t border-white/[0.05] px-5 py-3 flex items-center justify-between">
                    <span className="text-[9px] text-white/25">{ex.trade} · {ex.city}</span>
                    <div className="flex gap-3">
                      {["Services", "Contact"].map((l) => (
                        <span key={l} className="text-[9px] text-white/25">{l}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <p className="mt-3 text-center text-[11px] text-[var(--muted)]">
                {ex.trade} website · {ex.city}
              </p>
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
