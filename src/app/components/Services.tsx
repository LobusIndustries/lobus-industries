const services = [
  {
    title: "Custom-designed website",
    body: "A clean, fast, mobile-ready site designed around your specific service and the customers you want.",
    icon: "✦",
  },
  {
    title: "Lead-generating contact forms",
    body: "Quote requests, booking forms, and call-to-action buttons that turn visitors into paying customers.",
    icon: "✉",
  },
  {
    title: "Local SEO foundation",
    body: "On-page SEO, structured data, and Google Business integration so customers in your area can find you.",
    icon: "◎",
  },
  {
    title: "Photo & content polish",
    body: "We work with the photos and info you have. No copywriter required — we make it sound like you on a great day.",
    icon: "✎",
  },
  {
    title: "Reliable hosting & SSL",
    body: "Fast global hosting, automatic backups, and HTTPS included. No surprise renewal bills.",
    icon: "⌁",
  },
  {
    title: "Updates included",
    body: "Need to swap a phone number, add a service, or change pricing? Send us a note. It's part of the plan.",
    icon: "↻",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-28 relative">
      <div
        className="glow-amber"
        style={{ top: "10%", left: "-180px", width: "460px", height: "460px" }}
      />
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="What you get"
          title="Everything you need to look serious online."
          subtitle="No template-of-the-month. Every site is built around your business and the way your customers actually find you."
        />
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s) => (
            <div key={s.title} className="card p-7">
              <div className="h-11 w-11 rounded-xl bg-gradient-to-br from-[var(--accent)] to-[var(--accent-strong)] text-white grid place-items-center text-lg font-semibold shadow-[0_8px_24px_-8px_rgba(251,146,60,0.6)]">
                {s.icon}
              </div>
              <h3 className="mt-5 text-lg font-semibold text-white">
                {s.title}
              </h3>
              <p className="mt-2 text-[var(--muted-strong)] leading-relaxed text-sm">
                {s.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="max-w-2xl">
      <div className="text-[11px] uppercase tracking-[0.22em] text-[var(--accent)] font-semibold">
        {eyebrow}
      </div>
      <h2 className="mt-3 text-3xl md:text-5xl font-semibold tracking-tight text-white leading-[1.1]">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-5 text-[var(--muted-strong)] text-lg leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
