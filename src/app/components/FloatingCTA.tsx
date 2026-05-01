"use client";

import { useEffect, useState } from "react";

export default function FloatingCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-40 md:hidden transition-transform duration-300 ease-in-out ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
      aria-hidden={!visible}
    >
      <div className="bg-[var(--background)]/95 backdrop-blur-xl border-t border-[var(--border-strong)] px-4 py-3 flex items-center gap-3 shadow-[0_-8px_32px_rgba(0,0,0,0.5)]">
        <div className="flex-1 min-w-0">
          <p className="text-xs font-semibold text-white leading-tight">$0 to build · $100/mo to host</p>
          <p className="text-[10px] text-[var(--muted)] leading-tight mt-0.5">Launch in about a week. No contract.</p>
        </div>
        <a
          href="#contact"
          className="btn-accent shrink-0 px-5 py-2.5 rounded-full text-sm font-semibold whitespace-nowrap"
        >
          Get started →
        </a>
      </div>
    </div>
  );
}
