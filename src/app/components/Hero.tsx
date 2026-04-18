export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Decorative background layers */}
      <div className="absolute inset-0 bg-grid pointer-events-none" />
      <div
        className="glow-amber float-slow"
        style={{ top: "-120px", right: "-120px", width: "560px", height: "560px" }}
      />
      <div
        className="glow-navy float-slower"
        style={{ bottom: "-160px", left: "-100px", width: "480px", height: "480px" }}
      />

      {/* Floating accent dots */}
      <Dot className="top-24 left-[12%]" />
      <Dot className="top-40 right-[18%] !bg-[var(--navy)]" />
      <Dot className="bottom-20 left-[40%]" />

      <div className="relative mx-auto max-w-6xl px-6 pt-20 pb-24 md:pt-28 md:pb-32">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-white/70 backdrop-blur px-3 py-1 text-xs font-medium text-[var(--muted)] mb-6 shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)] animate-pulse" />
            $0 to build · $100/mo to host
          </span>
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-[var(--navy)] leading-[1.05]">
            Websites that win
            <br />
            <span className="relative inline-block">
              <span className="relative z-10 text-[var(--accent)]">
                customers for you.
              </span>
              <span
                className="absolute inset-x-0 bottom-1.5 h-3 bg-[var(--accent)]/15 -z-0 rounded-sm"
                aria-hidden
              />
            </span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-[var(--muted)] max-w-2xl leading-relaxed">
            Lobus Industries builds professional websites for service-based
            businesses. We don&apos;t charge you to build it. You only pay
            $100/month for hosting. Save yourself money.
          </p>
          <div className="mt-9 flex flex-col sm:flex-row gap-3">
            <a
              href="#contact"
              className="btn-accent inline-flex items-center justify-center px-6 py-3.5 rounded-full font-medium text-base"
            >
              Start your website — free
            </a>
            <a
              href="#pricing"
              className="inline-flex items-center justify-center px-6 py-3.5 rounded-full font-medium text-base border border-[var(--border)] bg-white/80 backdrop-blur hover:bg-white text-[var(--navy)] transition-colors"
            >
              See how it works
            </a>
          </div>
          <div className="mt-10 flex items-center gap-6 text-sm text-[var(--muted)]">
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
      <div className="text-2xl font-semibold text-[var(--navy)]">{value}</div>
      <div className="text-xs uppercase tracking-wider mt-0.5">{label}</div>
    </div>
  );
}

function Divider() {
  return <div className="h-10 w-px bg-[var(--border)]" />;
}

function Dot({ className = "" }: { className?: string }) {
  return (
    <span
      aria-hidden
      className={`absolute h-2 w-2 rounded-full bg-[var(--accent)] opacity-70 shadow-[0_0_18px_rgba(217,119,6,0.6)] ${className}`}
    />
  );
}
