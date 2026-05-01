"use client";

import { useState } from "react";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mqewqdod";

type Status = "idle" | "submitting" | "success" | "error";

export default function BlogNewsletter() {
  const [status, setStatus] = useState<Status>("idle");
  const [email, setEmail] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("submitting");

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ email, _subject: "Newsletter signup", source: "blog" }),
      });
      setStatus(res.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="rounded-2xl border border-[var(--border-strong)] bg-white/[0.03] backdrop-blur px-7 py-8 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-40 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 400px 250px at 0% 100%, rgba(251,146,60,0.2), transparent 70%)" }}
      />
      <div className="relative">
        <div className="text-[10px] uppercase tracking-[0.22em] text-[var(--accent)] font-semibold mb-2">
          Free tips
        </div>
        <h3 className="text-lg font-semibold text-white mb-1">
          Get weekly advice for growing your service business.
        </h3>
        <p className="text-sm text-[var(--muted-strong)] mb-5">
          Practical tips on websites, local SEO, and getting more customers. No fluff, no spam.
        </p>

        {status === "success" ? (
          <div className="flex items-center gap-3 text-sm text-white">
            <div className="h-8 w-8 rounded-full bg-[var(--accent-soft)] text-[var(--accent)] grid place-items-center font-bold shrink-0">✓</div>
            <span>You&apos;re in — tips coming your way.</span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex gap-2">
            {/* honeypot */}
            <input type="text" name="_gotcha" className="hidden" tabIndex={-1} aria-hidden="true" autoComplete="off" />
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              className="flex-1 min-w-0 rounded-lg border border-[var(--border-strong)] bg-white/[0.03] text-white placeholder:text-white/30 px-3.5 py-2.5 text-sm focus:outline-none focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent)]/30 transition"
            />
            <button
              type="submit"
              disabled={status === "submitting"}
              className="btn-accent px-5 py-2.5 rounded-lg text-sm shrink-0 disabled:opacity-60"
            >
              {status === "submitting" ? "…" : "Subscribe"}
            </button>
          </form>
        )}
        {status === "error" && (
          <p className="text-xs text-red-400 mt-2">Something went wrong — email us directly.</p>
        )}
      </div>
    </div>
  );
}
