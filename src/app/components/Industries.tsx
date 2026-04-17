import { SectionHeading } from "./Services";

const industries = [
  { name: "Trades", examples: "Plumbers, electricians, HVAC, roofing, contractors" },
  { name: "Home services", examples: "Landscaping, cleaning, pest control, painting" },
  { name: "Auto", examples: "Mechanics, detailers, mobile repair, tire shops" },
  { name: "Personal services", examples: "Tutors, trainers, stylists, therapists, coaches" },
  { name: "Events & rentals", examples: "DJs, photographers, equipment rental, catering" },
  { name: "Pro services", examples: "Bookkeepers, consultants, attorneys, agents" },
];

export default function Industries() {
  return (
    <section id="industries" className="py-24 bg-white border-y border-[var(--border)]">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Who we serve"
          title="If you sell time, expertise, or a trade — we build for you."
          subtitle="Service businesses don't need a 50-page e-commerce site. They need to look credible, get found, and convert. That's all we build."
        />
        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {industries.map((i) => (
            <div
              key={i.name}
              className="rounded-2xl border border-[var(--border)] bg-[var(--background)] p-6 hover:border-[var(--navy)] transition-colors"
            >
              <div className="text-base font-semibold text-[var(--navy)]">
                {i.name}
              </div>
              <p className="mt-1.5 text-sm text-[var(--muted)] leading-relaxed">
                {i.examples}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
