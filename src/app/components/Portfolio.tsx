import { SectionHeading } from "./Services";

const features = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>
      </svg>
    ),
    title: "Mobile-first design",
    desc: "Over 70% of local searches happen on a phone. Every site looks and works perfectly on any screen size.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/><path d="M11 8v6M8 11h6"/>
      </svg>
    ),
    title: "Local SEO built in",
    desc: "Structured data, city-specific keywords, and Google Business Profile guidance so you rank when locals search your trade.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z"/>
      </svg>
    ),
    title: "Fast load times",
    desc: "Built on Next.js and deployed on a global CDN. Pages load in under a second — slow sites lose customers.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.15 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.07 1.18h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6.18 6.18l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
      </svg>
    ),
    title: "Lead-generating contact forms",
    desc: "Quote request forms, click-to-call buttons, and clear CTAs designed to turn visitors into actual phone calls.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    title: "SSL + daily backups",
    desc: "Your site runs on HTTPS and is backed up every day. Hosting, security, and uptime are all handled for you.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
      </svg>
    ),
    title: "Unlimited content updates",
    desc: "New service? Changed hours? Just email us. Updates are included — no per-change fees, ever.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
    title: "Live in about a week",
    desc: "You send us your info, we build everything. Most sites are live within 7 days — no back-and-forth, no delays.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
      </svg>
    ),
    title: "Built for your trade",
    desc: "Not a generic template. Every page is written and designed around your specific business, services, and city.",
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
          eyebrow="What you get"
          title="Everything your site needs to win local customers."
          subtitle="Every Lobus site ships with the same core stack — the things that actually move the needle for service businesses."
        />

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((f) => (
            <div
              key={f.title}
              data-fade
              className="card p-6 flex flex-col gap-4"
            >
              <div className="h-10 w-10 rounded-xl bg-[var(--accent-soft)] text-[var(--accent)] grid place-items-center shrink-0">
                {f.icon}
              </div>
              <div>
                <h3 className="text-sm font-semibold text-white mb-1.5">{f.title}</h3>
                <p className="text-[13px] text-[var(--muted-strong)] leading-relaxed">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
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
