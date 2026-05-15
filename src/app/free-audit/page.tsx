"use client";

import { useState } from "react";
import { sendGAEvent } from "@next/third-parties/google";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mqewqdod";

const auditItems = [
  { icon: "🔍", title: "SEO & Discoverability", desc: "Are you showing up when someone searches for your trade in your city?" },
  { icon: "📱", title: "Mobile Experience", desc: "Does your site work on phones? Over 70% of local searches happen on mobile." },
  { icon: "⚡", title: "Page Speed", desc: "Slow sites lose customers. We'll tell you where yours stands." },
  { icon: "📞", title: "Call-to-Action Clarity", desc: "Is it easy for visitors to call you, fill out a form, or get a quote?" },
  { icon: "🗺️", title: "Google Business Profile", desc: "Is your Google listing claimed, complete, and optimized?" },
  { icon: "🏆", title: "Competitive Positioning", desc: "How do you stack up against the top results in your area?" },
];

type Status = "idle" | "submitting" | "success" | "error";

export default function FreeAuditPage() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = new FormData(form);
    data.append("_source", "free-audit-page");

    if (data.get("_gotcha")) { setStatus("success"); return; }

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
        sendGAEvent("event", "generate_lead", { event_category: "free_audit_page" });
      } else {
        const json = await res.json().catch(() => null);
        setErrorMsg(json?.errors?.[0]?.message || "Something went wrong. Please email us.");
        setStatus("error");
      }
    } catch {
      setErrorMsg("Network error. Please email lobusindustries@gmail.com.");
      setStatus("error");
    }
  }

  return (
    <>
      <Nav />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-grid pointer-events-none" />
          <div
            className="absolute inset-0 pointer-events-none opacity-60"
            style={{
              backgroundImage:
                "radial-gradient(ellipse 800px 500px at 60% 0%, rgba(251,146,60,0.15), transparent 70%), radial-gradient(ellipse 600px 400px at 10% 80%, rgba(99,102,241,0.12), transparent 70%)",
            }}
          />
          <div className="relative mx-auto max-w-6xl px-6 pt-24 pb-16 md:pt-32 md:pb-20 text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-[var(--border-strong)] bg-white/5 backdrop-blur px-3.5 py-1.5 text-xs font-medium text-[var(--muted-strong)] mb-7">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              100% free — no strings attached
            </span>
            <h1 className="text-5xl md:text-7xl font-semibold tracking-tight leading-[1.02] max-w-4xl mx-auto">
              <span className="text-gradient">Find out what&apos;s costing</span>
              <br />
              <span className="text-accent-gradient">your business customers.</span>
            </h1>
            <p className="mt-7 text-lg md:text-xl text-[var(--muted-strong)] max-w-2xl mx-auto leading-relaxed">
              We&apos;ll review your online presence and send you a plain-English report — no pitch, no pressure. Just honest feedback on what&apos;s working and what&apos;s not.
            </p>
          </div>
        </section>

        {/* Two-column: what's covered + form */}
        <section className="pb-24">
          <div className="mx-auto max-w-6xl px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* What we audit */}
              <div>
                <h2 className="text-2xl font-semibold text-white mb-2">What we cover</h2>
                <p className="text-[var(--muted-strong)] text-sm mb-8">
                  We check the six things that actually determine whether local customers find you — and call you.
                </p>
                <div className="space-y-5">
                  {auditItems.map((item) => (
                    <div key={item.title} className="flex items-start gap-4">
                      <div className="h-10 w-10 rounded-xl bg-white/[0.04] border border-[var(--border-strong)] grid place-items-center text-lg shrink-0">
                        {item.icon}
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-white">{item.title}</div>
                        <div className="text-sm text-[var(--muted-strong)] mt-0.5">{item.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-10 rounded-2xl border border-[var(--border-strong)] bg-white/[0.02] p-6">
                  <p className="text-sm text-[var(--muted-strong)] leading-relaxed">
                    <span className="text-white font-medium">Who this is for:</span> Service-based businesses — plumbers, electricians, HVAC, landscapers, cleaners, painters, roofers, contractors, handymen, salons, tutors, and more — who want more customers from the web.
                  </p>
                </div>
              </div>

              {/* Form */}
              <div className="card p-8">
                {status === "success" ? (
                  <div className="py-10 text-center">
                    <div className="mx-auto h-14 w-14 rounded-full bg-[var(--accent-soft)] text-[var(--accent)] grid place-items-center text-2xl font-bold mb-4">
                      ✓
                    </div>
                    <h3 className="text-xl font-semibold text-white">Request received!</h3>
                    <p className="mt-3 text-[var(--muted-strong)] text-sm leading-relaxed max-w-xs mx-auto">
                      We&apos;ll review your info and send your audit within one business day. Check your inbox.
                    </p>
                  </div>
                ) : (
                  <>
                    <h2 className="text-xl font-semibold text-white mb-1">Request your free audit</h2>
                    <p className="text-sm text-[var(--muted-strong)] mb-6">Takes 30 seconds. We&apos;ll do all the work.</p>
                    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                      <input type="text" name="_gotcha" tabIndex={-1} aria-hidden="true" className="hidden" autoComplete="off" />
                      <AuditField name="name" label="Your name" placeholder="Jane Smith" required />
                      <AuditField name="business" label="Business name" placeholder="Smith Plumbing Co." required />
                      <AuditField name="email" label="Email address" type="email" placeholder="jane@smithplumbing.com" required />
                      <AuditField name="phone" label="Phone number" type="tel" placeholder="(208) 555-0192" />
                      <AuditField name="website" label="Current website (if you have one)" placeholder="https://yoursite.com" />
                      <AuditSelectField
                        name="business_type"
                        label="Type of business"
                        required
                        options={[
                          "Plumber", "Electrician", "HVAC / Heating & Cooling",
                          "Landscaper / Lawn Care", "Cleaning Service", "Painter",
                          "Roofer", "General Contractor", "Handyman", "Salon / Barber",
                          "Tutor / Instructor", "Other",
                        ]}
                      />
                      <AuditField name="location" label="City / Service area" placeholder="Boise, ID" required />
                      <button
                        type="submit"
                        disabled={status === "submitting"}
                        className="btn-accent w-full py-3.5 rounded-full font-semibold disabled:opacity-60 disabled:cursor-not-allowed mt-2"
                      >
                        {status === "submitting" ? "Sending…" : "Send me my free audit →"}
                      </button>
                      {status === "error" && (
                        <p className="text-xs text-red-400 text-center">{errorMsg}</p>
                      )}
                      <p className="text-[10px] text-[var(--muted)] text-center">
                        No spam. No sales call unless you want one. Reply within 1 business day.
                      </p>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Trust strip */}
        <section className="border-t border-[var(--border)] py-14">
          <div className="mx-auto max-w-6xl px-6">
            <div className="grid sm:grid-cols-3 gap-8 text-center">
              {[
                { stat: "$0", label: "Cost to you — always free" },
                { stat: "1 day", label: "Turnaround time" },
                { stat: "0", label: "Strings attached" },
              ].map((item) => (
                <div key={item.stat}>
                  <div className="text-4xl font-semibold text-accent-gradient mb-1">{item.stat}</div>
                  <div className="text-sm text-[var(--muted-strong)]">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function AuditField({
  name, label, type = "text", placeholder, required,
}: { name: string; label: string; type?: string; placeholder?: string; required?: boolean }) {
  const base = "w-full rounded-lg border border-[var(--border-strong)] bg-white/[0.03] text-white placeholder:text-white/30 px-3.5 py-2.5 text-sm focus:outline-none focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent)]/30 transition";
  return (
    <label className="block">
      <span className="block text-[10px] font-medium text-[var(--muted)] mb-1.5 uppercase tracking-[0.2em]">{label}</span>
      <input type={type} name={name} placeholder={placeholder} required={required} className={base} />
    </label>
  );
}

function AuditSelectField({
  name, label, options, required,
}: { name: string; label: string; options: string[]; required?: boolean }) {
  const base = "w-full rounded-lg border border-[var(--border-strong)] bg-white/[0.03] text-white px-3.5 py-2.5 text-sm focus:outline-none focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent)]/30 transition appearance-none";
  return (
    <label className="block">
      <span className="block text-[10px] font-medium text-[var(--muted)] mb-1.5 uppercase tracking-[0.2em]">{label}</span>
      <select name={name} required={required} defaultValue="" className={base}>
        <option value="" disabled className="bg-[#07080d]">Select one…</option>
        {options.map((o) => <option key={o} value={o} className="bg-[#07080d]">{o}</option>)}
      </select>
    </label>
  );
}
