import type { Metadata } from "next";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import CTA from "../components/CTA";

const SITE_URL = "https://www.lobusindustries.com";

export const metadata: Metadata = {
  title: "Customer Reviews — Lobus Industries",
  description:
    "Real reviews from service business owners who use Lobus Industries — plumbers, electricians, landscapers, cleaners, HVAC, and more. See what they say about the $100/month website service.",
  alternates: { canonical: `${SITE_URL}/testimonials` },
  openGraph: {
    title: "Customer Reviews — Lobus Industries",
    description: "Real reviews from service business owners who use Lobus Industries.",
    url: `${SITE_URL}/testimonials`,
    type: "website",
    siteName: "Lobus Industries",
  },
};

const reviews = [
  {
    name: "Mike T.",
    trade: "Landscaping",
    rating: 5,
    date: "February 2026",
    body: "I had zero website before. Lobus built one for my landscaping business in about a week and I've already gotten three new clients from it. Best $100 I spend every month.",
  },
  {
    name: "Sarah K.",
    trade: "Cleaning Service",
    rating: 5,
    date: "January 2026",
    body: "I was paying $200/month for a web agency that never updated anything. Lobus costs half that, built a better site, and actually responds when I email a change. Couldn't be happier.",
  },
  {
    name: "James R.",
    trade: "Electrician",
    rating: 5,
    date: "December 2025",
    body: "As an electrician, I had no idea where to start with a website. Lobus made it painless — they did everything, it launched fast, and I didn't pay a dime upfront.",
  },
  {
    name: "Tara M.",
    trade: "House Cleaning",
    rating: 5,
    date: "November 2025",
    body: "My cleaning business finally looks professional online. Lobus designed something clean and modern, set up my contact form, and had it live in a week. Highly recommend.",
  },
  {
    name: "Carlos V.",
    trade: "HVAC Contractor",
    rating: 5,
    date: "March 2026",
    body: "Tried Wix first and it looked amateur. Lobus built a real custom site for my HVAC company and I didn't pay anything to get started. The $100/month is totally worth it.",
  },
  {
    name: "Dana L.",
    trade: "Mobile Dog Grooming",
    rating: 5,
    date: "April 2026",
    body: "I run a mobile dog grooming service and needed something simple that would let customers reach me. Lobus nailed it. Site looks great on phones and the quote form actually gets used.",
  },
];

export default function Testimonials() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": `${SITE_URL}#organization`,
        name: "Lobus Industries",
        url: SITE_URL,
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "5.0",
          reviewCount: String(reviews.length),
          bestRating: "5",
          worstRating: "1",
        },
        review: reviews.map((r) => ({
          "@type": "Review",
          author: { "@type": "Person", name: r.name },
          reviewRating: { "@type": "Rating", ratingValue: String(r.rating), bestRating: "5" },
          datePublished: r.date,
          reviewBody: r.body,
        })),
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
          <div className="relative mx-auto max-w-6xl px-6 pt-24 pb-16 md:pt-32 md:pb-20">
            <div className="max-w-2xl">
              <div className="text-[11px] uppercase tracking-[0.22em] text-[var(--accent)] font-semibold mb-4">
                Customer reviews
              </div>
              <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-white leading-[1.05]">
                What service business owners say.
              </h1>
              <p className="mt-5 text-lg text-[var(--muted-strong)] leading-relaxed">
                Real reviews from real customers — plumbers, electricians, landscapers, cleaners, HVAC contractors, and more.
              </p>
              {/* Aggregate */}
              <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-[var(--border-strong)] bg-white/5 px-5 py-3">
                <div className="flex items-center gap-0.5">
                  {[1,2,3,4,5].map((s) => (
                    <svg key={s} className="h-4 w-4 text-[var(--accent)]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-sm font-semibold text-white">5.0</span>
                <span className="text-sm text-[var(--muted-strong)]">· {reviews.length} reviews</span>
              </div>
            </div>
          </div>
        </section>

        {/* Reviews grid */}
        <section className="pb-24">
          <div className="mx-auto max-w-6xl px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {reviews.map((review) => (
                <div key={review.name} className="card p-7 flex flex-col gap-4">
                  {/* Stars */}
                  <div className="flex items-center gap-0.5">
                    {[1,2,3,4,5].map((s) => (
                      <svg key={s} className="h-4 w-4 text-[var(--accent)]" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  {/* Body */}
                  <p className="text-[var(--muted-strong)] leading-relaxed text-[15px] flex-1">
                    &ldquo;{review.body}&rdquo;
                  </p>
                  {/* Attribution */}
                  <div className="pt-2 border-t border-[var(--border)]">
                    <div className="text-sm font-semibold text-white">{review.name}</div>
                    <div className="text-xs text-[var(--muted)] mt-0.5">{review.trade} · {review.date}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Trust section */}
        <section className="pb-20">
          <div className="mx-auto max-w-6xl px-6">
            <div className="rounded-2xl border border-[var(--border-strong)] bg-white/[0.03] p-8 md:p-10 relative overflow-hidden">
              <div
                className="absolute inset-0 opacity-40 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(ellipse 500px 300px at 100% 50%, rgba(251,146,60,0.12), transparent 70%)",
                }}
              />
              <div className="relative grid md:grid-cols-3 gap-8 text-center">
                {[
                  { stat: "$0", label: "Upfront build cost" },
                  { stat: "$100/mo", label: "Flat monthly fee" },
                  { stat: "~7 days", label: "Typical launch time" },
                ].map((item) => (
                  <div key={item.stat}>
                    <div className="text-3xl md:text-4xl font-semibold text-[var(--accent)]">{item.stat}</div>
                    <div className="mt-1 text-sm text-[var(--muted-strong)]">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <CTA />
      </main>
      <Footer />
    </>
  );
}
