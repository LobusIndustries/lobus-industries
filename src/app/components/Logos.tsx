export default function Logos() {
  const items = [
    "Plumbing",
    "Electrical",
    "Landscaping",
    "Cleaning",
    "HVAC",
    "Roofing",
    "Detailing",
    "Tutoring",
  ];
  return (
    <section className="py-10" data-fade>
      <div className="mx-auto max-w-6xl px-6">
        <div className="divider-line mb-10" />
        <p className="text-center text-[11px] uppercase tracking-[0.22em] text-[var(--muted)] mb-7">
          Built for service businesses of every kind
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-[var(--muted-strong)]">
          {items.map((i) => (
            <span
              key={i}
              className="text-sm md:text-base font-medium tracking-tight hover:text-white transition-colors"
            >
              {i}
            </span>
          ))}
        </div>
        <div className="divider-line mt-10" />
      </div>
    </section>
  );
}
