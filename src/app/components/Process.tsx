import { SectionHeading } from "./Services";

const steps = [
  {
    n: "01",
    title: "Tell us about your business",
    body: "A quick conversation: what you do, who you serve, and what makes you different. Send over any logos, photos, or content you already have.",
  },
  {
    n: "02",
    title: "We build it — at our cost",
    body: "Within about a week, you get a finished, professional website to review. Request changes. There's no charge for the build, period.",
  },
  {
    n: "03",
    title: "Go live for $100/month",
    body: "Once you approve, we launch on your domain with hosting, SSL, backups, and ongoing edits included. Cancel any time.",
  },
];

export default function Process() {
  return (
    <section id="process" className="py-24 relative">
      <div
        className="glow-navy"
        style={{ bottom: "10%", right: "-150px", width: "420px", height: "420px", opacity: 0.25 }}
      />
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="How it works"
          title="Three steps. No surprises."
        />
        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {steps.map((s) => (
            <div key={s.n} className="card p-7 relative overflow-hidden">
              <div className="text-5xl font-semibold text-[var(--accent)]/15 absolute top-4 right-5 select-none">
                {s.n}
              </div>
              <div className="text-sm font-semibold text-[var(--accent)]">
                Step {s.n}
              </div>
              <h3 className="mt-2 text-xl font-semibold text-[var(--navy)]">
                {s.title}
              </h3>
              <p className="mt-3 text-[var(--muted)] leading-relaxed text-sm">
                {s.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
