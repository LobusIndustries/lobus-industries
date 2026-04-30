import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import Process from "../../components/Process";
import Pricing from "../../components/Pricing";
import CTA from "../../components/CTA";
import { SectionHeading } from "../../components/Services";
import { getCity, cities } from "../../website-design/cities";

const SITE_URL = "https://www.lobusindustries.com";

type TradeInfo = {
  name: string;
  singular: string;
  why: string;
  faqs: { q: string; a: string }[];
};

const TOP_TRADES: Record<string, TradeInfo> = {
  "plumber-websites": {
    name: "Plumbers",
    singular: "plumber",
    why: "Most customers search Google before calling a plumber — especially for non-emergency work. If you're not showing up, those jobs go to whoever is. A fast, professional site also builds the trust that wins emergency calls where customers decide in seconds.",
    faqs: [
      { q: "Do plumbers in [city] need a website?", a: "Yes — most people Google a plumber before calling, even when referred. A professional site with your services, service area, and contact info converts those searches into calls." },
      { q: "Can you help me rank in [city] Google searches?", a: "We set up your on-page local SEO and Google Business Profile so [city] customers can find you. We can't guarantee rankings, but we build the foundation most local plumbers are missing." },
    ],
  },
  "electrician-websites": {
    name: "Electricians",
    singular: "electrician",
    why: "Customers hiring an electrician want to see credentials before they let anyone in their panel. A professional website with your license number, services, and reviews builds that trust before they ever make contact — and beats unlicensed competitors who just have better-looking sites.",
    faqs: [
      { q: "Should I list my license number on my [city] website?", a: "Yes — it builds immediate trust. We include it prominently so [city] customers know you're licensed before they call." },
      { q: "Can my website show my [city] service area?", a: "Absolutely. A clear service area tells customers whether you cover their neighborhood and helps Google show you in local [city] searches." },
    ],
  },
  "landscaper-websites": {
    name: "Landscapers",
    singular: "landscaper",
    why: "Landscaping is a visual business. Before-and-after photos of your best jobs are your strongest selling tool — but only if people can see them. A website that showcases your work turns [city] search traffic into booked appointments.",
    faqs: [
      { q: "Can I show photos of jobs I've done in [city]?", a: "Yes — a photo gallery is essential for a landscaping site. Send us your best shots and we'll build a portfolio that sells your work." },
      { q: "Can I promote seasonal services to [city] customers?", a: "Yes — content updates are included. Email us when you want to add a spring cleanup special or seasonal service and we'll update the site." },
    ],
  },
  "cleaning-websites": {
    name: "Cleaning Services",
    singular: "cleaner",
    why: "Cleaning clients are letting you into their home. In [city]'s competitive cleaning market, a professional website with clear pricing, your process, and reviews builds the trust that gets you booked over the competition.",
    faqs: [
      { q: "Can I list my cleaning packages for [city] customers?", a: "Yes — clear service tiers and pricing reduce back-and-forth and attract [city] customers who are already ready to book." },
      { q: "How do I show reviews from [city] clients?", a: "We add a testimonials section. Send us your best quotes from happy [city] customers and we'll make them a centerpiece." },
    ],
  },
  "hvac-websites": {
    name: "HVAC Companies",
    singular: "HVAC technician",
    why: "When an AC goes out in summer or a furnace fails in winter, [city] customers search Google and call the first credible result. A fast-loading site with a visible phone number and clear service list wins those calls while competitors are still waiting to be found.",
    faqs: [
      { q: "Can [city] customers request emergency service through my site?", a: "Yes — we put your contact form and phone number front and center so [city] customers can reach you fast, even after hours." },
      { q: "Can my site cover both residential and commercial HVAC in [city]?", a: "Absolutely. We structure it clearly so both types of [city] customers know what you offer and how to get started." },
    ],
  },
  "contractor-websites": {
    name: "General Contractors",
    singular: "contractor",
    why: "Homeowners in [city] comparing contractors for a big job Google every name they consider. A professional portfolio site with project photos and clear services often decides the bid before you've even met. Most of your competition doesn't have one.",
    faqs: [
      { q: "Can I show photos of projects I've completed in [city]?", a: "Yes — project photos are the core of a great contractor site. Send your best [city] work and we'll build a portfolio around it." },
      { q: "What if I do multiple types of work in [city]?", a: "We organize your services clearly so every [city] visitor understands what you do and whether you're the right fit." },
    ],
  },
  "painter-websites": {
    name: "Painters",
    singular: "painter",
    why: "Painting jobs in [city] are won before the first call. Homeowners compare options online and choose whoever looks most professional. A site with before-and-after photos and a quote form puts you ahead of every [city] painter without one.",
    faqs: [
      { q: "Can I show before-and-after photos for [city] customers?", a: "Yes — photo galleries are the most persuasive content for a painting site. Send your best [city] work and we'll make it shine." },
      { q: "Can [city] customers request a quote online?", a: "Absolutely — a quote request form is one of the highest-converting things on a painting site. We make it easy to find." },
    ],
  },
  "roofer-websites": {
    name: "Roofers",
    singular: "roofer",
    why: "After a storm, [city] homeowners search online and call the first roofing company that looks credible. A professional site with your credentials, photos, and a clear contact form gets you that call while competitors are still waiting to be discovered.",
    faqs: [
      { q: "Can I feature storm damage and insurance work for [city] customers?", a: "Yes — we highlight whatever services matter most in your [city] market, including insurance claim assistance." },
      { q: "Can my website show my [city] service area?", a: "Absolutely. A clear service area helps [city] customers confirm you cover their neighborhood — and helps Google show you in local searches." },
    ],
  },
  "pressure-washing-websites": {
    name: "Pressure Washing",
    singular: "pressure washing company",
    why: "Before-and-after photos are impossible to argue with, and [city] customers know it. A website that leads with your best transformations and makes it easy to request a quote beats any [city] competitor who only has a Facebook page.",
    faqs: [
      { q: "Can I show before-and-after photos for [city] jobs?", a: "Yes — they're your most powerful content. Send us your best [city] work and we'll build a gallery that sells your service." },
      { q: "Can I list different services for [city] customers?", a: "Absolutely — driveways, decks, roofs, siding. We organize your services so [city] customers can quickly find what they need." },
    ],
  },
  "handyman-websites": {
    name: "Handymen",
    singular: "handyman",
    why: "In [city]'s competitive home services market, a professional website sets you apart immediately. Customers skeptical of handymen they don't know get instant confidence from a site that lists your services, shows your work, and makes it easy to reach you.",
    faqs: [
      { q: "Can I list all the jobs I do for [city] customers?", a: "Yes — a clear service list helps [city] customers confirm you handle their specific task and makes it more likely they reach out." },
      { q: "Is a website worth it for a one-person handyman in [city]?", a: "Absolutely — especially in [city] where customers have options. A professional site builds the trust that gets you the call over someone with no web presence." },
    ],
  },
  "auto-detailing-websites": {
    name: "Auto Detailers",
    singular: "auto detailer",
    why: "Car owners in [city] are choosy about who touches their vehicle. A professional website with before-and-after photos of your best details and clear service packages builds the credibility that turns searchers into bookings — before anyone else gets the call.",
    faqs: [
      { q: "Can I show before-and-after photos for [city] customers?", a: "Yes — detailing is all about the visual transformation. Send us your best work and we'll build a gallery that sells your skills to [city] car owners." },
      { q: "Can I list mobile and in-shop options for [city] customers?", a: "Absolutely. We make it clear whether you're mobile, shop-based, or both so [city] customers know exactly what to expect when they book." },
    ],
  },
  "personal-trainer-websites": {
    name: "Personal Trainers",
    singular: "personal trainer",
    why: "People searching for a personal trainer in [city] want to feel confident before they commit. A professional site that shows your credentials, training philosophy, and client transformations builds that trust online — before a single consultation.",
    faqs: [
      { q: "Can I show client results and testimonials for [city] visitors?", a: "Yes — transformation stories and testimonials are your most powerful content. We make them prominent so [city] prospects connect with your results." },
      { q: "Can I offer online and in-person training on the same site?", a: "Absolutely. We structure your services clearly so [city] visitors know their options — whether they want to train at a gym, at home, or remotely." },
    ],
  },
  "pest-control-websites": {
    name: "Pest Control Companies",
    singular: "pest control company",
    why: "When [city] homeowners have a pest problem, they search Google immediately and call whoever looks most trustworthy. A fast, professional site with clear service options and a visible phone number wins those calls while competitors wait to be discovered.",
    faqs: [
      { q: "Can I list the specific pests I treat in [city]?", a: "Yes — a detailed service list helps [city] customers confirm you handle their exact problem and reduces time-wasting inquiries." },
      { q: "Can [city] customers request emergency or same-day service?", a: "Absolutely. We make your contact options prominent so [city] customers can reach you fast when they have an urgent pest problem." },
    ],
  },
  "moving-company-websites": {
    name: "Moving Companies",
    singular: "moving company",
    why: "People moving in [city] compare multiple companies before committing to someone handling their belongings. A professional website with clear pricing, service areas, and reviews closes that comparison in your favor before you've spoken to them.",
    faqs: [
      { q: "Can I list my service areas in and around [city]?", a: "Yes — a clear service area helps [city] customers confirm you cover their move and helps Google show you for local searches." },
      { q: "Can I offer flat-rate and hourly options on my [city] website?", a: "Absolutely. We present your pricing clearly so [city] customers understand their options without having to ask — which builds trust and reduces friction." },
    ],
  },
  "pool-service-websites": {
    name: "Pool Service Companies",
    singular: "pool service company",
    why: "Pool owners in [city] want a reliable, trustworthy company maintaining something they've invested heavily in. A professional website with your certifications, service plans, and customer reviews builds that confidence before they ever make contact.",
    faqs: [
      { q: "Can I list my pool service plans for [city] homeowners?", a: "Yes — clear service tiers (weekly cleaning, repairs, openings/closings) help [city] customers find the right plan and come to you ready to commit." },
      { q: "Can I show my certifications on my [city] pool service site?", a: "Absolutely. Your CPO certification and experience are trust signals that matter. We make them prominent so [city] homeowners know you're the real deal." },
    ],
  },
  "dog-grooming-websites": {
    name: "Dog Groomers",
    singular: "dog groomer",
    why: "Pet owners in [city] are protective — they want to know their dog is in good hands before booking. A professional website with your grooming style, before-and-after photos, and reviews builds that confidence and brings in bookings without relying on referrals alone.",
    faqs: [
      { q: "Can I show before-and-after grooming photos for [city] customers?", a: "Yes — they're your most persuasive content. Send your cutest transformations and we'll make them the centerpiece of your [city] grooming site." },
      { q: "Can [city] customers book appointments through my website?", a: "We can integrate with booking tools like Vagaro, GlossGenius, or a simple contact form so [city] pet owners can request appointments directly." },
    ],
  },
};

const TOP_CITY_SLUGS = [
  "new-york-ny", "los-angeles-ca", "chicago-il", "houston-tx", "phoenix-az",
  "philadelphia-pa", "san-antonio-tx", "san-diego-ca", "dallas-tx", "austin-tx",
  "jacksonville-fl", "fort-worth-tx", "columbus-oh", "charlotte-nc", "indianapolis-in",
  "san-francisco-ca", "seattle-wa", "denver-co", "nashville-tn", "las-vegas-nv",
  "portland-or", "atlanta-ga", "kansas-city-mo", "raleigh-nc", "minneapolis-mn",
  "tampa-fl", "miami-fl", "orlando-fl", "sacramento-ca", "st-louis-mo",
  "pittsburgh-pa", "cincinnati-oh", "cleveland-oh", "colorado-springs-co", "omaha-ne",
  "louisville-ky", "virginia-beach-va", "memphis-tn", "tucson-az", "washington-dc",
  "baltimore-md", "milwaukee-wi", "albuquerque-nm", "oklahoma-city-ok", "salt-lake-city-ut",
  "boise-id", "richmond-va", "spokane-wa", "fresno-ca", "new-orleans-la",
];

const GENERAL_FAQS = [
  { q: "What's the catch? Why is the build free?", a: "There isn't one. Most service businesses can't justify a $3,000 upfront website, so they end up with nothing. We build for free, host you for a fair monthly fee, and earn that fee by keeping your site running well." },
  { q: "How long does it take to launch?", a: "Most sites are ready to review in about a week. Once you approve, we go live within a day or two." },
  { q: "Do I own my domain?", a: "Yes — always. The domain is registered in your name. If you don't have one, we'll help you register one." },
  { q: "What happens if I cancel?", a: "Cancel any time, no fees. We take the site offline and hand over the code if you want it." },
];

function fillCity(text: string, city: string) {
  return text.replace(/\[city\]/g, city);
}

export function generateStaticParams() {
  return Object.keys(TOP_TRADES).flatMap((trade) =>
    TOP_CITY_SLUGS.map((city) => ({ trade, city }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ trade: string; city: string }>;
}): Promise<Metadata> {
  const { trade, city: citySlug } = await params;
  const tradeInfo = TOP_TRADES[trade];
  const cityInfo = getCity(citySlug);
  if (!tradeInfo || !cityInfo) return {};
  const location = `${cityInfo.city}, ${cityInfo.stateAbbr}`;
  const title = `Websites for ${tradeInfo.name} in ${location} — Free to Build, $100/mo`;
  const description = `Professional websites for ${tradeInfo.name.toLowerCase()} in ${location}. $0 upfront, $100/month flat. Local SEO, mobile-ready, and built to generate leads. Launch in about a week.`;
  const url = `${SITE_URL}/${trade}/${citySlug}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url, type: "website", siteName: "Lobus Industries" },
    twitter: { card: "summary_large_image", title, description },
  };
}

export default async function TradeCity({
  params,
}: {
  params: Promise<{ trade: string; city: string }>;
}) {
  const { trade, city: citySlug } = await params;
  const tradeInfo = TOP_TRADES[trade];
  const cityInfo = getCity(citySlug);
  if (!tradeInfo || !cityInfo) notFound();

  const location = `${cityInfo.city}, ${cityInfo.stateAbbr}`;
  const allFaqs = [
    ...tradeInfo.faqs.map((f) => ({
      q: fillCity(f.q, cityInfo.city),
      a: fillCity(f.a, cityInfo.city),
    })),
    ...GENERAL_FAQS,
  ];

  const otherTrades = Object.entries(TOP_TRADES)
    .filter(([slug]) => slug !== trade)
    .slice(0, 4);

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: `Website Design for ${tradeInfo.name} in ${location}`,
        description: `Professional websites for ${tradeInfo.name.toLowerCase()} in ${location}. $0 upfront, $100/month.`,
        provider: { "@type": "ProfessionalService", name: "Lobus Industries", url: SITE_URL },
        areaServed: { "@type": "City", name: cityInfo.city },
        offers: { "@type": "Offer", price: "100", priceCurrency: "USD", description: "$0 build cost. $100/month for hosting, SSL, backups, and updates." },
        url: `${SITE_URL}/${trade}/${citySlug}`,
      },
      {
        "@type": "FAQPage",
        mainEntity: allFaqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
          { "@type": "ListItem", position: 2, name: tradeInfo.name, item: `${SITE_URL}/${trade}` },
          { "@type": "ListItem", position: 3, name: location, item: `${SITE_URL}/${trade}/${citySlug}` },
        ],
      },
    ],
  };

  return (
    <>
      <Nav />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <main className="flex-1">

        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-grid pointer-events-none" />
          <div className="relative mx-auto max-w-6xl px-6 pt-24 pb-28 md:pt-32 md:pb-40">
            <div className="max-w-4xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-[var(--border-strong)] bg-white/5 backdrop-blur px-3.5 py-1.5 text-xs font-medium text-[var(--muted-strong)] mb-7">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)] pulse-soft" />
                {location} &nbsp;·&nbsp; {tradeInfo.name} &nbsp;·&nbsp; $0 to build
              </span>
              <h1 className="text-5xl md:text-7xl lg:text-[5rem] font-semibold tracking-tight leading-[1.02]">
                <span className="text-gradient">Websites for {cityInfo.city}</span>
                <br />
                <span className="text-accent-gradient">{tradeInfo.name.toLowerCase()}.</span>
              </h1>
              <p className="mt-7 text-lg md:text-xl text-[var(--muted-strong)] max-w-2xl leading-relaxed">
                We build professional websites for {tradeInfo.name.toLowerCase()} in {location} — for $0 upfront. You only pay $100/month to keep it live, ranking, and generating leads.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-3">
                <a href="#contact" className="btn-accent inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full text-base">
                  Start your website — free <span aria-hidden>→</span>
                </a>
                <a href={`/${trade}`} className="btn-ghost inline-flex items-center justify-center px-7 py-4 rounded-full text-base">
                  More for {tradeInfo.name.toLowerCase()}
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

        {/* Why callout */}
        <section className="py-16">
          <div className="mx-auto max-w-6xl px-6">
            <div className="rounded-2xl border border-[var(--border-strong)] bg-white/[0.03] backdrop-blur p-8 md:p-10 relative overflow-hidden">
              <div className="absolute inset-0 opacity-40 pointer-events-none" style={{ background: "radial-gradient(ellipse 500px 300px at 0% 50%, rgba(251,146,60,0.15), transparent 70%)" }} />
              <div className="relative max-w-3xl">
                <div className="text-[11px] uppercase tracking-[0.22em] text-[var(--accent)] font-semibold mb-3">
                  Why it matters in {cityInfo.city}
                </div>
                <p className="text-lg md:text-xl text-white leading-relaxed">
                  {fillCity(tradeInfo.why, cityInfo.city)}
                </p>
              </div>
            </div>
          </div>
        </section>

        <Process />
        <Pricing />

        {/* FAQ */}
        <section id="faq" className="py-28 relative">
          <div className="glow-amber" style={{ top: "30%", right: "-180px", width: "400px", height: "400px" }} />
          <div className="mx-auto max-w-6xl px-6">
            <SectionHeading eyebrow="FAQ" title={`Questions about ${tradeInfo.name.toLowerCase()} websites in ${cityInfo.city}.`} />
            <div className="mt-12 max-w-3xl divide-y divide-[var(--border)] border-y border-[var(--border)]">
              {allFaqs.map((f) => (
                <details key={f.q} className="group py-5">
                  <summary className="flex items-start justify-between gap-6 cursor-pointer list-none">
                    <span className="text-base md:text-lg font-medium text-white">{f.q}</span>
                    <span className="mt-1 h-6 w-6 shrink-0 rounded-full border border-[var(--border-strong)] grid place-items-center text-[var(--muted-strong)] group-open:rotate-45 group-open:bg-[var(--accent-soft)] group-open:text-[var(--accent)] group-open:border-[var(--accent)] transition-all">+</span>
                  </summary>
                  <p className="mt-3 text-[var(--muted-strong)] leading-relaxed text-[15px]">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Other trades in this city */}
        <section className="py-8 pb-20">
          <div className="mx-auto max-w-6xl px-6">
            <div className="text-[11px] uppercase tracking-[0.22em] text-[var(--muted)] font-semibold mb-5">
              Other service businesses in {cityInfo.city} we build for
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {otherTrades.map(([slug, info]) => (
                <a key={slug} href={`/${slug}/${citySlug}`} className="card p-5 hover:border-[var(--accent)]/40 transition-colors group">
                  <div className="text-sm font-semibold text-white group-hover:text-[var(--accent)] transition-colors">{info.name}</div>
                  <div className="text-[11px] text-[var(--muted)] mt-1">in {cityInfo.city} →</div>
                </a>
              ))}
            </div>
            <div className="mt-6 flex gap-4 text-sm">
              <a href={`/${trade}`} className="text-[var(--muted-strong)] hover:text-white transition-colors">
                All cities for {tradeInfo.name.toLowerCase()} →
              </a>
              <span className="text-[var(--border-strong)]">·</span>
              <a href={`/website-design/${citySlug}`} className="text-[var(--muted-strong)] hover:text-white transition-colors">
                All trades in {cityInfo.city} →
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
