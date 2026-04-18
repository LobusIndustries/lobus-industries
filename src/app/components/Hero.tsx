export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-grid pointer-events-none" />
      <Dot className="top-28 left-[10%]" />
      <Dot className="top-44 right-[14%]" />
      <Dot className="bottom-24 left-[42%]" />

      <div className="relative mx-auto max-w-6xl px-6 pt-24 pb-28 md:pt-32 md:pb-40">
        <div className="max-w-4xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-[var(--border-strong)] bg-white/5 backdrop-blur px-3.5 py-1.5 text-xs font-medium text-[var(--muted-strong)] mb-7">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)] pulse-soft" />
            $0 to build &nbsp;·&nbsp; $100/mo to host
          </span>

          <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-semibold tracking-tight leading-[1.02]">
            <span className="text-gradient">Websites that win</span>
            <br />
            <span className="text-accent-gradient">customers for you.</span>
          </h1>

          <p className="mt-7 text-lg md:text-xl text-[var(--muted-strong)] max-w-2xl leading-relaxed">
            Lobus Industries builds professional websites for service-based
            businesses. We don&apos;t charge you to build it. You only pay
            <span className="text-white font-semibold"> $100/month </span>
            for hosting. Save yourself money.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-3">
            <a
              href="#contact"
              className="btn-accent inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full text-base"
            >
              Start your website — free
              <span aria-hidden>→</span>
            </a>
            <a
              href="#pricing"
              className="btn-ghost inline-flex items-center justify-center px-7 py-4 rounded-full text-base"
            >
              See how it works
            </a>
          </div>

          <div className="mt-14 flex flex-wrap items-center gap-x-10 gap-y-6 text-sm">
            <Stat value="$0" label="Build cost" />
            <Divider />
            <Stat value="$100" label="Monthly hosting" />
            <Divider />
            <Stat value="7 days" label="Typical launch" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div className="text-3xl font-semibold text-white tracking-tight">
        {value}
      </div>
      <div className="text-[11px] uppercase tracking-[0.18em] mt-1 text-[var(--muted)]">
        {label}
      </div>
    </div>
  );
}

function Divider() {
  return <div className="hidden sm:block h-10 w-px bg-[var(--border-strong)]" />;
}

function Dot({ className = "" }: { className?: string }) {
  return (
    <span
      aria-hidden
      className={`absolute h-1.5 w-1.5 rounded-full bg-[var(--accent)] shadow-[0_0_24px_rgba(251,146,60,0.9)] ${className}`}
    />
  );
}
