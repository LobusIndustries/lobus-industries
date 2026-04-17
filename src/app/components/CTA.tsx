export default function CTA() {
  return (
    <section id="contact" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="rounded-3xl bg-[var(--navy)] text-white px-8 py-14 md:px-16 md:py-20 relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-[0.06] pointer-events-none"
            style={{
              backgroundImage:
                "radial-gradient(circle at 25% 30%, #d97706 0, transparent 40%), radial-gradient(circle at 75% 70%, #d97706 0, transparent 40%)",
            }}
          />
          <div className="relative grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-semibold tracking-tight leading-tight">
                Let&apos;s build the website your business actually deserves.
              </h2>
              <p className="mt-5 text-white/70 text-lg max-w-md">
                Tell us a bit about what you do. We&apos;ll come back with a
                proposal — at no cost.
              </p>
              <div className="mt-8 space-y-2 text-sm text-white/60">
                <div>
                  <span className="text-white/40">Email — </span>
                  <a
                    href="mailto:hello@lobusindustries.com"
                    className="text-[var(--accent)] hover:underline"
                  >
                    hello@lobusindustries.com
                  </a>
                </div>
              </div>
            </div>

            <form
              action="mailto:hello@lobusindustries.com"
              method="post"
              encType="text/plain"
              className="card p-6 md:p-7 text-[var(--foreground)]"
            >
              <div className="grid gap-4">
                <Field label="Your name" name="name" placeholder="Jane Smith" />
                <Field
                  label="Business name"
                  name="business"
                  placeholder="Smith Plumbing Co."
                />
                <Field
                  label="Email"
                  name="email"
                  type="email"
                  placeholder="jane@smithplumbing.com"
                />
                <Field
                  label="What does your business do?"
                  name="about"
                  placeholder="Residential plumbing in Boise, ID"
                  textarea
                />
                <button
                  type="submit"
                  className="btn-accent w-full py-3.5 rounded-full font-medium mt-1"
                >
                  Request my free proposal
                </button>
                <p className="text-xs text-[var(--muted)] text-center">
                  We typically reply within one business day.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  textarea,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  textarea?: boolean;
}) {
  const base =
    "w-full rounded-lg border border-[var(--border)] bg-white px-3.5 py-2.5 text-sm focus:outline-none focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent)]/20 transition";
  return (
    <label className="block">
      <span className="block text-xs font-medium text-[var(--muted)] mb-1.5 uppercase tracking-wider">
        {label}
      </span>
      {textarea ? (
        <textarea
          name={name}
          rows={3}
          placeholder={placeholder}
          className={base}
        />
      ) : (
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          className={base}
        />
      )}
    </label>
  );
}
