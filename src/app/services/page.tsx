import type { Metadata } from "next";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Services from "../components/Services";
import Pricing from "../components/Pricing";
import Process from "../components/Process";
import CTA from "../components/CTA";

const SITE_URL = "https://www.lobusindustries.com";

export const metadata: Metadata = {
  title: "Services — Website Design, Hosting & Local SEO",
  description:
    "Everything Lobus Industries does for service businesses: custom website design, mobile-first builds, local SEO, lead-generating forms, hosting, SSL, backups, and ongoing content updates — all in one $100/month plan.",
  alternates: { canonical: `${SITE_URL}/services` },
  openGraph: {
    title: "Services — Lobus Industries",
    description: "Custom website design, local SEO, hosting, and ongoing updates for service businesses.",
    url: `${SITE_URL}/services`,
    type: "website",
    siteName: "Lobus Industries",
  },
};

const services = [
  {
    name: "Custom website design & build",
    body: "No templates, no drag-and-drop slop. Every site is designed around the way your specific customers find, judge, and book service providers like you.",
  },
  {
    name: "Mobile-first development",
    body: "Most service-business traffic is mobile. Your site is built for phones first, then scales up — fast load times, clean tap targets, no janky zoom-and-pan.",
  },
  {
    name: "Lead-generating contact forms",
    body: "Quote requests, booking forms, callbacks. We design the form to capture exactly the info you need to qualify a lead — and we wire it to your email.",
  },
  {
    name: "Local SEO foundation",
    body: "On-page SEO, structured data (the same kind Google uses for rich results), and Google Business Profile integration so local customers actually find you.",
  },
  {
    name: "Hosting on the edge",
    body: "Sites are deployed on Vercel's global edge network. Pages load in under a second from anywhere in the world. SSL is included, always.",
  },
  {
    name: "Daily backups & 99.9% uptime",
    body: "Automatic daily backups, monitored uptime, and zero downtime deploys. If something breaks, we restore.",
  },
  {
    name: "Ongoing content updates",
    body: "Email us when you change phone numbers, add a service, or want to swap a photo. Updates happen within 1 business day — included in the $100/month fee.",
  },
  {
    name: "Domain setup & ownership",
    body: "We help you pick and register a domain — and it's always registered in your name. You own it forever, even if you leave us.",
  },
  {
    name: "Analytics & visitor tracking",
    body: "Privacy-friendly analytics so you can see what's working: where visitors come from, what pages they read, and what generates leads.",
  },
];

export default function ServicesPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ItemList",
        name: "Lobus Industries Services",
        url: `${SITE_URL}/services`,
        numberOfItems: services.length,
        itemListElement: services.map((s, i) => ({
          "@type": "ListItem",
          position: i + 1,
          item: {
            "@type": "Service",
            name: s.name,
            description: s.body,
            provider: { "@id": `${SITE_URL}#organization` },
          },
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
          { "@type": "ListItem", position: 2, name: "Services", item: `${SITE_URL}/services` },
        ],
      },
    ],
  };

  return (
    <>
      <Nav />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <main className="flex-1">
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-grid pointer-events-none" />
          <div className="relative mx-auto max-w-6xl px-6 pt-24 pb-16 md:pt-32 md:pb-20">
            <div className="max-w-3xl">
              <div className="text-[11px] uppercase tracking-[0.22em] text-[var(--accent)] font-semibold mb-4">
                Services
              </div>
              <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-white leading-[1.05]">
                Everything your business needs to win online — in one flat fee.
              </h1>
              <p className="mt-5 text-lg text-[var(--muted-strong)] leading-relaxed">
                Design, development, hosting, SEO, and ongoing updates. No upfront cost. $100/month. Cancel any time.
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

        <Services />

        <section className="py-20">
          <div className="mx-auto max-w-6xl px-6">
            <div className="text-[11px] uppercase tracking-[0.22em] text-[var(--muted)] font-semibold mb-8">
              The full list
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {services.map((s) => (
                <div key={s.name} className="card p-6">
                  <div className="text-base font-semibold text-white">{s.name}</div>
                  <p className="mt-2 text-sm text-[var(--muted-strong)] leading-relaxed">
                    {s.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Process />
        <Pricing />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
