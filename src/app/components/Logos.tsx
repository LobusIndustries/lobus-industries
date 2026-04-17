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
    <section className="border-y border-[var(--border)] bg-white">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <p className="text-center text-xs uppercase tracking-widest text-[var(--muted)] mb-6">
          Built for service businesses of every kind
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-[var(--muted)]">
          {items.map((i) => (
            <span
              key={i}
              className="text-sm md:text-base font-medium tracking-tight"
            >
              {i}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
