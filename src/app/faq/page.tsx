import type { Metadata } from "next";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import CTA from "../components/CTA";

const SITE_URL = "https://www.lobusindustries.com";

export const metadata: Metadata = {
  title: "FAQ — Pricing, Process, Hosting & Cancellation",
  description:
    "Answers to the most common questions about Lobus Industries: pricing, what's included in $100/month, how long it takes to launch, what happens if you cancel, who owns the domain, and more.",
  alternates: { canonical: `${SITE_URL}/faq` },
  openGraph: {
    title: "FAQ — Lobus Industries",
    description: "Plain-English answers to every common question about pricing, process, and hosting.",
    url: `${SITE_URL}/faq`,
    type: "website",
    siteName: "Lobus Industries",
  },
};

const sections: { heading: string; items: { q: string; a: string }[] }[] = [
  {
    heading: "Pricing",
    items: [
      {
        q: "How much does a Lobus Industries website cost?",
        a: "$0 to build. $100 per month for hosting, SSL, backups, and ongoing content updates. No build fee. No contract. Cancel any time.",
      },
      {
        q: "Are there any setup fees or hidden costs?",
        a: "No. The only cost is $100 per month after launch. No setup fees, no per-page fees, no add-ons for SSL or hosting. Domain registration (~$12/year) is the only thing you pay for outside of us.",
      },
      {
        q: "Why is the build free? What's the catch?",
        a: "There isn't one. Most service businesses can't justify a $3,000–$8,000 upfront agency fee, so they go without a website. We build for free and earn revenue from the $100/month hosting fee. The model only works if your site actually performs and you stay — so we're incentivized to do great work.",
      },
      {
        q: "Is the $100/month negotiable?",
        a: "It's a flat rate so we can keep things simple. Everyone pays the same, no awkward sales calls, no quotes.",
      },
    ],
  },
  {
    heading: "Process & timeline",
    items: [
      {
        q: "How long does it take to launch?",
        a: "Most sites are ready to preview in about a week from when we receive your info. Once you approve, we launch within a day or two.",
      },
      {
        q: "What do I need to give you to get started?",
        a: "Just basics: your business name, services, location, any logos or photos you have, and a few customer reviews if you've got them. If you don't have everything, we can work with placeholders and update as you go.",
      },
      {
        q: "How many revisions do I get?",
        a: "As many as you need before launch — and any time after. Send us a list, we make the changes. Included in the $100/month.",
      },
      {
        q: "Do I have to meet with you over Zoom?",
        a: "Only if you want to. Most of our customers prefer to handle everything by email. Faster, less friction, no scheduling.",
      },
    ],
  },
  {
    heading: "Hosting & ownership",
    items: [
      {
        q: "Where is my site hosted?",
        a: "On Vercel's global edge network — the same infrastructure used by companies like Stripe and Notion. Pages load in under a second from anywhere in the world.",
      },
      {
        q: "Is SSL included?",
        a: "Yes — every site has SSL (HTTPS) by default. We auto-renew it for you. No extra cost.",
      },
      {
        q: "Do I own my domain?",
        a: "Yes — always. The domain is registered in your name (not ours), and you can take it with you any time. If you don't have one yet, we help you pick and register one.",
      },
      {
        q: "Do I own the website code?",
        a: "You own everything related to your business and brand. If you cancel and want the code to host elsewhere, we hand it over.",
      },
      {
        q: "What's your uptime guarantee?",
        a: "99.9%+. Vercel's edge network has industry-leading reliability. We monitor uptime and get paged if anything goes wrong.",
      },
    ],
  },
  {
    heading: "Cancellation & changes",
    items: [
      {
        q: "What happens if I cancel?",
        a: "Cancel any time, no fees, no penalty. We take the site offline. If you want the code or domain to take elsewhere, we hand it over.",
      },
      {
        q: "Is there a contract or minimum term?",
        a: "No contract, no minimum. Month-to-month.",
      },
      {
        q: "Can I update my website content later?",
        a: "Yes — just email us what you want changed. Edits are included in the $100/month. No logging into a dashboard.",
      },
      {
        q: "How fast are content updates?",
        a: "Most updates are live within 1 business day. Urgent updates (broken phone number, wrong price) usually within hours.",
      },
    ],
  },
  {
    heading: "SEO & marketing",
    items: [
      {
        q: "Does Lobus Industries do SEO?",
        a: "We set up a strong on-page SEO foundation: structured data, fast page load, mobile optimization, semantic HTML, and Google Business Profile integration. We don't sell ongoing SEO retainers — just the foundation, done right.",
      },
      {
        q: "Will my site show up on Google?",
        a: "We give you the best technical foundation possible, but ranking depends on your industry, competition, and how much your business gets talked about online. Most of our customers see organic traffic within 1–3 months of launch.",
      },
      {
        q: "Do you help with Google Business Profile?",
        a: "Yes — we help you set up or optimize your Google Business Profile so you show up in local map results. This is one of the highest-leverage things you can do for local search.",
      },
      {
        q: "Can you run Google Ads or Facebook Ads for me?",
        a: "Ads aren't part of the $100/month. We can recommend an ads partner if you want one, or you can run them yourself — your Lobus site is designed to convert ad traffic well.",
      },
    ],
  },
  {
    heading: "Who it's for",
    items: [
      {
        q: "Who does Lobus Industries build websites for?",
        a: "Service-based businesses: plumbers, electricians, HVAC, roofing, contractors, landscapers, cleaners, auto mechanics, detailers, tutors, trainers, stylists, barbers, therapists, coaches, DJs, photographers, bookkeepers, consultants, attorneys, and real estate agents.",
      },
      {
        q: "Do you build e-commerce or SaaS sites?",
        a: "No. We focus exclusively on service businesses where the goal is generating leads and phone calls. E-commerce and SaaS need a different toolkit.",
      },
      {
        q: "What if my industry isn't on your list?",
        a: "If you're a service business and your customers find you online, we can help. Reach out — we'll tell you straight if it's not a fit.",
      },
      {
        q: "Do you work outside the United States?",
        a: "We focus on US service businesses right now. If you're outside the US and interested, email us and we'll talk.",
      },
    ],
  },
];

export default function FAQPage() {
  const allQuestions = sections.flatMap((s) => s.items);
  const faqSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "FAQPage",
        "@id": `${SITE_URL}/faq#faqpage`,
        mainEntity: allQuestions.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
          { "@type": "ListItem", position: 2, name: "FAQ", item: `${SITE_URL}/faq` },
        ],
      },
    ],
  };

  return (
    <>
      <Nav />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <main className="flex-1">
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-grid pointer-events-none" />
          <div className="relative mx-auto max-w-3xl px-6 pt-24 pb-12 md:pt-32 md:pb-16">
            <div className="text-[11px] uppercase tracking-[0.22em] text-[var(--accent)] font-semibold mb-4">
              Frequently asked questions
            </div>
            <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-white leading-[1.05]">
              Everything people ask us before signing up.
            </h1>
            <p className="mt-5 text-lg text-[var(--muted-strong)] leading-relaxed">
              Pricing, process, hosting, cancellation, SEO. If your question isn&apos;t here, email{" "}
              <a href="mailto:lobusindustries@gmail.com" className="text-[var(--accent)] hover:underline">
                lobusindustries@gmail.com
              </a>{" "}
              and we&apos;ll answer.
            </p>
          </div>
        </section>

        <section className="pb-24">
          <div className="mx-auto max-w-3xl px-6 space-y-14">
            {sections.map((sec) => (
              <div key={sec.heading}>
                <h2 className="text-xl md:text-2xl font-semibold text-white mb-6">
                  {sec.heading}
                </h2>
                <div className="divide-y divide-[var(--border)] border-y border-[var(--border)]">
                  {sec.items.map((f) => (
                    <details key={f.q} className="group py-5">
                      <summary className="flex items-start justify-between gap-6 cursor-pointer list-none">
                        <span className="text-base md:text-lg font-medium text-white">
                          {f.q}
                        </span>
                        <span className="mt-1 h-6 w-6 shrink-0 rounded-full border border-[var(--border-strong)] grid place-items-center text-[var(--muted-strong)] group-open:rotate-45 group-open:bg-[var(--accent-soft)] group-open:text-[var(--accent)] group-open:border-[var(--accent)] transition-all">
                          +
                        </span>
                      </summary>
                      <p className="mt-3 text-[var(--muted-strong)] leading-relaxed text-[15px]">
                        {f.a}
                      </p>
                    </details>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <CTA />
      </main>
      <Footer />
    </>
  );
}
