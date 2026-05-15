"use client";

import { useEffect, useState, useRef } from "react";
import { createPortal } from "react-dom";
import { sendGAEvent } from "@next/third-parties/google";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mqewqdod";
const STORAGE_KEY = "li_popup_dismissed";

type Status = "idle" | "submitting" | "success" | "error";

export default function LeadPopup() {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const triggered = useRef(false);

  function dismiss() {
    setOpen(false);
    try { localStorage.setItem(STORAGE_KEY, "1"); } catch {}
  }

  function trigger() {
    if (triggered.current) return;
    try { if (localStorage.getItem(STORAGE_KEY)) return; } catch {}
    triggered.current = true;
    setOpen(true);
    sendGAEvent("event", "popup_shown", { event_category: "lead_popup" });
  }

  useEffect(() => {
    // 30-second timer
    const timer = setTimeout(trigger, 30_000);

    // Exit-intent: mouse leaves viewport upward
    function onMouseLeave(e: MouseEvent) {
      if (e.clientY <= 0) trigger();
    }
    document.addEventListener("mouseleave", onMouseLeave);

    return () => {
      clearTimeout(timer);
      document.removeEventListener("mouseleave", onMouseLeave);
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = new FormData(form);
    data.append("_source", "popup");

    if (data.get("_gotcha")) { setStatus("success"); return; }

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus("success");
        sendGAEvent("event", "generate_lead", { event_category: "lead_popup" });
        setTimeout(dismiss, 3000);
      } else {
        const json = await res.json().catch(() => null);
        setErrorMsg(json?.errors?.[0]?.message || "Something went wrong.");
        setStatus("error");
      }
    } catch {
      setErrorMsg("Network error. Try emailing us directly.");
      setStatus("error");
    }
  }

  if (!open) return null;

  return createPortal(
    <div
      style={{ position: "fixed", inset: 0, zIndex: 9999, display: "flex", alignItems: "center", justifyContent: "center", padding: "1rem" }}
      role="dialog"
      aria-modal="true"
      aria-label="Free website audit offer"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={dismiss}
      />

      {/* Panel */}
      <div className="relative w-full max-w-md rounded-2xl border border-[var(--border-strong)] bg-[#0d0f18] shadow-2xl overflow-hidden">
        {/* Aurora accent */}
        <div
          className="absolute inset-0 pointer-events-none opacity-50"
          style={{
            backgroundImage:
              "radial-gradient(ellipse 400px 300px at 80% 0%, rgba(251,146,60,0.2), transparent 70%), radial-gradient(ellipse 300px 250px at 10% 100%, rgba(99,102,241,0.15), transparent 70%)",
          }}
        />

        <div className="relative p-7">
          <button
            onClick={dismiss}
            className="absolute top-4 right-4 text-[var(--muted)] hover:text-white transition text-xl leading-none"
            aria-label="Close"
          >
            ×
          </button>

          {status === "success" ? (
            <div className="py-6 text-center">
              <div className="mx-auto h-12 w-12 rounded-full bg-[var(--accent-soft)] text-[var(--accent)] grid place-items-center text-xl font-bold">
                ✓
              </div>
              <h3 className="mt-4 text-xl font-semibold text-white">You&apos;re on the list!</h3>
              <p className="mt-2 text-[var(--muted-strong)] text-sm">
                We&apos;ll reach out within one business day with your free audit.
              </p>
            </div>
          ) : (
            <>
              <div className="mb-5">
                <span className="inline-block text-[10px] font-semibold tracking-widest uppercase text-[var(--accent)] mb-2">
                  Free offer
                </span>
                <h2 className="text-2xl font-semibold text-white leading-snug">
                  Get a free website audit for your business
                </h2>
                <p className="mt-2 text-sm text-[var(--muted-strong)]">
                  We&apos;ll review your current online presence and tell you exactly what&apos;s costing you customers — no pitch, no pressure.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-3" noValidate>
                <input type="text" name="_gotcha" tabIndex={-1} aria-hidden="true" className="hidden" autoComplete="off" />
                <PopupField name="name" placeholder="Your name" required />
                <PopupField name="email" type="email" placeholder="Email address" required />
                <PopupField name="phone" type="tel" placeholder="Phone (optional)" />
                <PopupField name="business" placeholder="Business name" required />
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="btn-accent w-full py-3 rounded-full text-sm font-semibold disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === "submitting" ? "Sending…" : "Get my free audit →"}
                </button>
                {status === "error" && (
                  <p className="text-xs text-red-400 text-center">{errorMsg}</p>
                )}
                <p className="text-[10px] text-[var(--muted)] text-center">
                  No spam. We reply within one business day.
                </p>
              </form>
            </>
          )}
        </div>
      </div>
    </div>,
    document.body
  );
}

function PopupField({
  name,
  type = "text",
  placeholder,
  required,
}: {
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      required={required}
      className="w-full rounded-lg border border-[var(--border-strong)] bg-white/[0.03] text-white placeholder:text-white/30 px-3.5 py-2.5 text-sm focus:outline-none focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent)]/30 transition"
    />
  );
}
