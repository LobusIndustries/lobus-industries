import type { Metadata } from "next";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { cities } from "./cities";

const SITE_URL = "https://www.lobusindustries.com";

export const metadata: Metadata = {
  title: "Website Design for Service Businesses — Cities We Serve",
  description:
    "Lobus Industries builds professional websites for service businesses across the US. $0 upfront, $100/month. Find your city and get started.",
  alternates: { canonical: `${SITE_URL}/website-design` },
  openGraph: {
    title: "Website Design for Service Businesses — Cities We Serve",
    description: "Professional websites for service businesses in cities across the US. Free to build, $100/month.",
    url: `${SITE_URL}/website-design`,
    type: "website",
    siteName: "Lobus Industries",
  },
};

export default function LocationsIndex() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-grid pointer-events-none" />
          <div className="relative mx-auto max-w-6xl px-6 pt-24 pb-16 md:pt-32 md:pb-20">
            <div className="max-w-3xl">
              <div className="text-[11px] uppercase tracking-[0.22em] text-[var(--accent)] font-semibold mb-4">
                Locations
              </div>
              <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-white leading-[1.05]">
                We build websites for service businesses across the US.
              </h1>
              <p className="mt-5 text-lg text-[var(--muted-strong)] leading-relaxed max-w-2xl">
                Doesn&apos;t matter where you are — we work remotely with businesses in every state.
                $0 to build, $100/month to host. Find your city below.
              </p>
              <a
                href="/#contact"
                className="mt-8 btn-accent inline-flex items-center gap-2 px-7 py-4 rounded-full"
              >
                Start your website — free →
              </a>
            </div>
          </div>
        </section>

        <section className="pb-28">
          <div className="mx-auto max-w-6xl px-6">
            <div className="text-[11px] uppercase tracking-[0.22em] text-[var(--muted)] font-semibold mb-6">
              {cities.length} cities and growing
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
              {cities.map((c) => (
                <a
                  key={c.slug}
                  href={`/website-design/${c.slug}`}
                  className="card px-4 py-3 hover:border-[var(--accent)]/40 transition-colors group"
                >
                  <div className="text-sm font-medium text-white group-hover:text-[var(--accent)] transition-colors">
                    {c.city}
                  </div>
                  <div className="text-[11px] text-[var(--muted)] mt-0.5">{c.stateAbbr}</div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* CTA strip */}
        <section className="pb-28">
          <div className="mx-auto max-w-6xl px-6">
            <div className="rounded-2xl border border-[var(--border-strong)] bg-white/[0.03] p-10 flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <div className="text-lg font-semibold text-white">
                  Don&apos;t see your city?
                </div>
                <p className="mt-1 text-[var(--muted-strong)] text-sm">
                  We serve all 50 states. Reach out and we&apos;ll get you started.
                </p>
              </div>
              <a
                href="/#contact"
                className="btn-accent shrink-0 inline-flex items-center gap-2 px-7 py-4 rounded-full"
              >
                Get in touch →
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
