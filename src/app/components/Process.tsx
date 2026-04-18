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
    <section id="process" className="py-28 relative">
      <div
        className="glow-amber"
        style={{ bottom: "5%", right: "-160px", width: "440px", height: "440px" }}
      />
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="How it works"
          title="Three steps. No surprises."
        />
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {steps.map((s) => (
            <div key={s.n} className="card p-7 relative overflow-hidden">
              <div className="text-7xl font-semibold text-accent-gradient absolute top-2 right-5 select-none opacity-20">
                {s.n}
              </div>
              <div className="text-[11px] font-semibold tracking-[0.22em] uppercase text-[var(--accent)]">
                Step {s.n}
              </div>
              <h3 className="mt-2 text-xl font-semibold text-white">
                {s.title}
              </h3>
              <p className="mt-3 text-[var(--muted-strong)] leading-relaxed text-sm">
                {s.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
