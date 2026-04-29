import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import Process from "../../components/Process";
import Pricing from "../../components/Pricing";
import CTA from "../../components/CTA";
import { SectionHeading } from "../../components/Services";
import { cities, getCity } from "../cities";

const SITE_URL = "https://www.lobusindustries.com";

const trades = [
  { slug: "plumber-websites", label: "Plumbers" },
  { slug: "electrician-websites", label: "Electricians" },
  { slug: "landscaper-websites", label: "Landscapers" },
  { slug: "cleaning-websites", label: "Cleaning Services" },
  { slug: "hvac-websites", label: "HVAC" },
  { slug: "contractor-websites", label: "Contractors" },
  { slug: "painter-websites", label: "Painters" },
  { slug: "roofer-websites", label: "Roofers" },
  { slug: "pest-control-websites", label: "Pest Control" },
  { slug: "pressure-washing-websites", label: "Pressure Washing" },
  { slug: "handyman-websites", label: "Handymen" },
  { slug: "moving-company-websites", label: "Movers" },
  { slug: "auto-detailing-websites", label: "Auto Detailers" },
  { slug: "personal-trainer-websites", label: "Personal Trainers" },
  { slug: "pool-service-websites", label: "Pool Services" },
  { slug: "dog-grooming-websites", label: "Dog Groomers" },
];

const faqs = [
  {
    q: "Do you work with businesses in my city remotely?",
    a: "Yes — 100% remote. We handle everything over email. You send us your info, photos, and content; we build the site and send you a link to review. No in-person meetings required.",
  },
  {
    q: "What's the catch? Why is the build free?",
    a: "There isn't one. Most service businesses can't justify a $3,000 upfront website, so they end up with nothing. We build for free, host you for $100/month, and earn that fee by keeping your site running.",
  },
  {
    q: "How long does it take to launch?",
    a: "Most sites are ready to review in about a week. Once you approve, we go live within a day or two.",
  },
  {
    q: "Do I own my domain?",
    a: "Yes — always. The domain is registered in your name. If you don't have one yet, we'll help you pick and register one.",
  },
  {
    q: "Can I update my site after it's live?",
    a: "Yes — just email us. Updates are included in the $100/month plan. No dashboard, no learning curve.",
  },
  {
    q: "What happens if I cancel?",
    a: "Cancel any time with no fees. We take the site offline and hand over the code if you want it.",
  },
];

export function generateStaticParams() {
  return cities.map((c) => ({ city: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string }>;
}): Promise<Metadata> {
  const { city: citySlug } = await params;
  const c = getCity(citySlug);
  if (!c) return {};
  const location = `${c.city}, ${c.stateAbbr}`;
  const url = `${SITE_URL}/website-design/${citySlug}`;
  const title = `Website Design in ${location} — Free to Build, $100/mo`;
  const description = `Professional website design for service businesses in ${location}. Plumbers, electricians, landscapers, cleaners, and more. $0 upfront, $100/month flat. Launch in about a week.`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url, type: "website", siteName: "Lobus Industries" },
    twitter: { card: "summary_large_image", title, description },
  };
}

export default async function CityPage({
  params,
}: {
  params: Promise<{ city: string }>;
}) {
  const { city: citySlug } = await params;
  const c = getCity(citySlug);
  if (!c) notFound();

  const location = `${c.city}, ${c.stateAbbr}`;
  const locationFull = `${c.city}, ${c.state}`;

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        name: "Lobus Industries",
        url: SITE_URL,
        description: `Professional website design for service businesses in ${location}. $0 upfront, $100/month.`,
        areaServed: {
          "@type": "City",
          name: c.city,
          containedInPlace: { "@type": "State", name: c.state },
        },
        offers: {
          "@type": "Offer",
          price: "100",
          priceCurrency: "USD",
          description: "$0 build cost. $100/month for hosting, SSL, backups, and updates.",
        },
        priceRange: "$100/month",
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
          { "@type": "ListItem", position: 2, name: "Locations", item: `${SITE_URL}/website-design` },
          { "@type": "ListItem", position: 3, name: location, item: `${SITE_URL}/website-design/${citySlug}` },
        ],
      },
    ],
  };

  return (
    <>
      <Nav />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <main className="flex-1">

        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-grid pointer-events-none" />
          <div className="relative mx-auto max-w-6xl px-6 pt-24 pb-28 md:pt-32 md:pb-40">
            <div className="max-w-4xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-[var(--border-strong)] bg-white/5 backdrop-blur px-3.5 py-1.5 text-xs font-medium text-[var(--muted-strong)] mb-7">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)] pulse-soft" />
                Serving {location} &nbsp;·&nbsp; $0 to build &nbsp;·&nbsp; $100/mo
              </span>
              <h1 className="text-5xl md:text-7xl lg:text-[5rem] font-semibold tracking-tight leading-[1.02]">
                <span className="text-gradient">Website design for</span>
                <br />
                <span className="text-accent-gradient">{c.city} service businesses.</span>
              </h1>
              <p className="mt-7 text-lg md:text-xl text-[var(--muted-strong)] max-w-2xl leading-relaxed">
                We build professional websites for plumbers, electricians, landscapers, cleaners, and other service businesses in {locationFull} — for $0 upfront. You only pay $100/month to keep it live.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-3">
                <a
                  href="#contact"
                  className="btn-accent inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full text-base"
                >
                  Start your {c.city} website — free
                  <span aria-hidden>→</span>
                </a>
                <a
                  href="/website-design"
                  className="btn-ghost inline-flex items-center justify-center px-7 py-4 rounded-full text-base"
                >
                  View all cities
                </a>
              </div>
              <div className="mt-14 flex flex-wrap items-center gap-x-10 gap-y-6 text-sm">
                <Stat value="$0" label="Build cost" />
                <div className="hidden sm:block h-10 w-px bg-[var(--border-strong)]" />
                <Stat value="$100" label="Monthly hosting" />
                <div className="hidden sm:block h-10 w-px bg-[var(--border-strong)]" />
                <Stat value="7 days" label="Typical launch" />
              </div>
            </div>
          </div>
        </section>

        {/* Who we build for */}
        <section className="py-20">
          <div className="mx-auto max-w-6xl px-6">
            <SectionHeading
              eyebrow={`${c.city} service businesses`}
              title={`Built for every trade in ${c.city}.`}
              subtitle={`Whether you're a plumber in ${c.city} or a landscaper in ${locationFull}, we build a site tailored to your business — not a template.`}
            />
            <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {trades.map((t) => (
                <a
                  key={t.slug}
                  href={`/${t.slug}`}
                  className="card px-5 py-4 hover:border-[var(--accent)]/40 transition-colors group"
                >
                  <div className="text-sm font-medium text-white group-hover:text-[var(--accent)] transition-colors">
                    {t.label}
                  </div>
                  <div className="text-[11px] text-[var(--muted)] mt-0.5">
                    View page →
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Why callout */}
        <section className="py-8 pb-20">
          <div className="mx-auto max-w-6xl px-6">
            <div className="rounded-2xl border border-[var(--border-strong)] bg-white/[0.03] backdrop-blur p-8 md:p-10 relative overflow-hidden">
              <div
                className="absolute inset-0 opacity-40 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(ellipse 500px 300px at 0% 50%, rgba(251,146,60,0.15), transparent 70%)",
                }}
              />
              <div className="relative max-w-3xl">
                <div className="text-[11px] uppercase tracking-[0.22em] text-[var(--accent)] font-semibold mb-3">
                  Why it matters in {c.city}
                </div>
                <p className="text-lg md:text-xl text-white leading-relaxed">
                  {c.city} customers search online before they call. If your service business doesn&apos;t have a fast, professional website, those jobs go to competitors who do — even if your work is better. A site built for local search puts your name in front of {c.city} customers at exactly the moment they&apos;re ready to hire.
                </p>
              </div>
            </div>
          </div>
        </section>

        <Process />
        <Pricing />

        {/* FAQ */}
        <section id="faq" className="py-28 relative">
          <div
            className="glow-amber"
            style={{ top: "30%", right: "-180px", width: "400px", height: "400px" }}
          />
          <div className="mx-auto max-w-6xl px-6">
            <SectionHeading eyebrow="FAQ" title="Questions about getting started." />
            <div className="mt-12 max-w-3xl divide-y divide-[var(--border)] border-y border-[var(--border)]">
              {faqs.map((f) => (
                <details key={f.q} className="group py-5">
                  <summary className="flex items-start justify-between gap-6 cursor-pointer list-none">
                    <span className="text-base md:text-lg font-medium text-white">{f.q}</span>
                    <span className="mt-1 h-6 w-6 shrink-0 rounded-full border border-[var(--border-strong)] grid place-items-center text-[var(--muted-strong)] group-open:rotate-45 group-open:bg-[var(--accent-soft)] group-open:text-[var(--accent)] group-open:border-[var(--accent)] transition-all">
                      +
                    </span>
                  </summary>
                  <p className="mt-3 text-[var(--muted-strong)] leading-relaxed text-[15px]">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Nearby cities */}
        <section className="py-8 pb-20">
          <div className="mx-auto max-w-6xl px-6">
            <div className="text-[11px] uppercase tracking-[0.22em] text-[var(--muted)] font-semibold mb-5">
              Other cities we serve
            </div>
            <div className="flex flex-wrap gap-2">
              {cities
                .filter((city) => city.slug !== citySlug)
                .slice(0, 16)
                .map((city) => (
                  <a
                    key={city.slug}
                    href={`/website-design/${city.slug}`}
                    className="text-xs text-[var(--muted-strong)] hover:text-white border border-[var(--border)] hover:border-[var(--border-strong)] rounded-full px-3 py-1.5 transition-colors"
                  >
                    {city.city}, {city.stateAbbr}
                  </a>
                ))}
              <a
                href="/website-design"
                className="text-xs text-[var(--accent)] hover:underline border border-[var(--accent)]/30 rounded-full px-3 py-1.5 transition-colors"
              >
                View all →
              </a>
            </div>
          </div>
        </section>

        <CTA />
      </main>
      <Footer />
    </>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div className="text-3xl font-semibold text-white tracking-tight">{value}</div>
      <div className="text-[11px] uppercase tracking-[0.18em] mt-1 text-[var(--muted)]">{label}</div>
    </div>
  );
}
