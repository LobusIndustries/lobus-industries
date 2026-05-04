const items = [
  "Plumbing",
  "Electrical",
  "Landscaping",
  "Cleaning",
  "HVAC",
  "Roofing",
  "Detailing",
  "Tutoring",
  "Pest Control",
  "Painting",
  "Handyman",
  "Dog Grooming",
  "Personal Training",
  "Pressure Washing",
  "Pool Service",
  "Moving",
  "Photography",
  "Lawn Care",
  "Locksmith",
  "Tree Service",
  "Carpentry",
  "Flooring",
  "Window Cleaning",
  "Appliance Repair",
  "Bookkeeping",
];

export default function Logos() {
  const doubled = [...items, ...items];
  return (
    <section className="py-10 overflow-hidden" data-fade>
      <div className="mx-auto max-w-6xl px-6">
        <div className="divider-line mb-10" />
      </div>
      <p className="text-center text-[11px] uppercase tracking-[0.22em] text-[var(--muted)] mb-7 px-6">
        Built for service businesses of every kind
      </p>
      <div className="relative overflow-hidden">
        <div className="flex w-max marquee-track">
          {doubled.map((item, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-3 px-6 text-sm md:text-base font-medium tracking-tight text-[var(--muted-strong)] whitespace-nowrap hover:text-white transition-colors"
            >
              <span className="h-1 w-1 rounded-full bg-[var(--accent)] opacity-60 shrink-0" />
              {item}
            </span>
          ))}
        </div>
      </div>
      <div className="mx-auto max-w-6xl px-6">
        <div className="divider-line mt-10" />
      </div>
    </section>
  );
}
