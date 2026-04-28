"use client";

import { useState } from "react";
import Link from "next/link";
import Logo from "./Logo";

const links = [
  { href: "#services", label: "Services" },
  { href: "#industries", label: "Who we serve" },
  { href: "#process", label: "Process" },
  { href: "#pricing", label: "Pricing" },
  { href: "#faq", label: "FAQ" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-[var(--background)]/60 border-b border-[var(--border)]">
      <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5">
          <Logo className="h-7 w-7" />
          <span className="font-semibold tracking-tight text-white">
            Lobus Industries
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm text-[var(--muted)]">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="hover:text-white transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="btn-accent text-sm px-4 py-2 rounded-full"
          >
            Get started
          </a>
          <button
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? "Close menu" : "Open menu"}
            className="md:hidden flex flex-col justify-center items-center h-9 w-9 gap-1.5 rounded-lg border border-[var(--border-strong)] bg-white/5 hover:bg-white/10 transition-colors"
          >
            <span
              className={`block h-px w-4 bg-white transition-all duration-200 ${open ? "rotate-45 translate-y-[5px]" : ""}`}
            />
            <span
              className={`block h-px w-4 bg-white transition-all duration-200 ${open ? "opacity-0" : ""}`}
            />
            <span
              className={`block h-px w-4 bg-white transition-all duration-200 ${open ? "-rotate-45 -translate-y-[5px]" : ""}`}
            />
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-[var(--border)] bg-[var(--background)]/95 backdrop-blur-xl">
          <nav className="mx-auto max-w-6xl px-6 py-4 flex flex-col gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-sm text-[var(--muted-strong)] hover:text-white transition-colors py-2.5 border-b border-[var(--border)] last:border-0"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="btn-accent text-sm text-center py-3 rounded-full mt-3"
            >
              Get started — free
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
