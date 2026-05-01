"use client";

import { useEffect, useRef, useState } from "react";

interface CounterProps {
  value: string;
  label: string;
}

function parseTarget(value: string): { prefix: string; num: number; suffix: string } {
  const match = value.match(/^([^0-9]*)([0-9]+)(.*)$/);
  if (!match) return { prefix: "", num: 0, suffix: value };
  return { prefix: match[1], num: parseInt(match[2], 10), suffix: match[3] };
}

export default function Counter({ value, label }: CounterProps) {
  const { prefix, num, suffix } = parseTarget(value);
  const [display, setDisplay] = useState(num === 0 ? 0 : 0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    if (num === 0) return;
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1200;
          const startTime = performance.now();
          const tick = (now: number) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // ease-out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            setDisplay(Math.round(eased * num));
            if (progress < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [num]);

  const shown = num === 0 ? value : `${prefix}${display}${suffix}`;

  return (
    <div ref={ref}>
      <div className="text-3xl font-semibold text-white tracking-tight tabular-nums">
        {shown}
      </div>
      <div className="text-[11px] uppercase tracking-[0.18em] mt-1 text-[var(--muted)]">
        {label}
      </div>
    </div>
  );
}
