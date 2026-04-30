"use client";

import { useState } from "react";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mqewqdod";

export default function CTA() {
  return (
    <section id="contact" className="py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="rounded-3xl border border-[var(--border-strong)] bg-gradient-to-br from-white/[0.04] to-white/[0.02] backdrop-blur-xl px-8 py-14 md:px-16 md:py-20 relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-60 pointer-events-none"
            style={{
              backgroundImage:
                "radial-gradient(ellipse 600px 400px at 15% 20%, rgba(251,146,60,0.18), transparent 70%), radial-gradient(ellipse 500px 400px at 85% 90%, rgba(99,102,241,0.16), transparent 70%)",
            }}
          />

          <div className="relative grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-semibold tracking-tight leading-[1.1]">
                <span className="text-gradient">Let&apos;s build the</span>{" "}
                <span className="text-accent-gradient">
                  website your business deserves.
                </span>
              </h2>
              <p className="mt-6 text-[var(--muted-strong)] text-lg max-w-md">
                Tell us a bit about what you do. We&apos;ll come back with a
                proposal — at no cost.
              </p>
              <div className="mt-8 space-y-2 text-sm">
                <div>
                  <span className="text-[var(--muted)]">Email — </span>
                  <a
                    href="mailto:lobusindustries@gmail.com"
                    className="text-[var(--accent)] hover:underline"
                  >
                    lobusindustries@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}

type Status = "idle" | "submitting" | "success" | "error";

function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState<string>("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = new FormData(form);

    // Honeypot: bots fill hidden fields, humans don't
    if (data.get("_gotcha")) {
      setStatus("success");
      return;
    }

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        const json = await res.json().catch(() => null);
        setErrorMsg(
          json?.errors?.[0]?.message ||
            "Something went wrong. Please email us directly."
        );
        setStatus("error");
      }
    } catch {
      setErrorMsg("Network error. Please email us directly.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="card p-10 text-center">
        <div className="mx-auto h-12 w-12 rounded-full bg-[var(--accent-soft)] text-[var(--accent)] grid place-items-center text-xl font-bold">
          ✓
        </div>
        <h3 className="mt-4 text-xl font-semibold text-white">
          Got it — thank you.
        </h3>
        <p className="mt-2 text-[var(--muted-strong)] text-sm leading-relaxed">
          We&apos;ll review your info and reply within one business day at the
          email you provided.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="card p-7" noValidate>
      {/* Honeypot field — hidden from real users, bots fill it */}
      <input type="text" name="_gotcha" tabIndex={-1} aria-hidden="true" className="hidden" autoComplete="off" />
      <div className="grid gap-4">
        <Field label="Your name" name="name" placeholder="Jane Smith" required />
        <Field
          label="Business name"
          name="business"
          placeholder="Smith Plumbing Co."
          required
        />
        <Field
          label="Email"
          name="email"
          type="email"
          placeholder="jane@smithplumbing.com"
          required
        />
        <Field
          label="Phone (optional)"
          name="phone"
          type="tel"
          placeholder="(208) 555-0192"
        />
        <Field
          label="What does your business do?"
          name="about"
          placeholder="Residential plumbing in Boise, ID"
          textarea
          required
        />
        <button
          type="submit"
          disabled={status === "submitting"}
          className="btn-accent w-full py-3.5 rounded-full mt-1 disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {status === "submitting" ? "Sending…" : "Request my free proposal"}
        </button>
        {status === "error" && (
          <p className="text-xs text-red-400 text-center -mt-1">{errorMsg}</p>
        )}
        <p className="text-xs text-[var(--muted)] text-center">
          We typically reply within one business day.
        </p>
      </div>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  textarea,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  textarea?: boolean;
  required?: boolean;
}) {
  const base =
    "w-full rounded-lg border border-[var(--border-strong)] bg-white/[0.03] text-white placeholder:text-white/30 px-3.5 py-2.5 text-sm focus:outline-none focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent)]/30 transition";
  return (
    <label className="block">
      <span className="block text-[10px] font-medium text-[var(--muted)] mb-1.5 uppercase tracking-[0.2em]">
        {label}
      </span>
      {textarea ? (
        <textarea
          name={name}
          rows={3}
          placeholder={placeholder}
          required={required}
          className={base}
        />
      ) : (
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          required={required}
          className={base}
        />
      )}
    </label>
  );
}
