import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Process from "../components/Process";
import Pricing from "../components/Pricing";
import CTA from "../components/CTA";
import { SectionHeading } from "../components/Services";

const SITE_URL = "https://www.lobusindustries.com";

type TradeConfig = {
  name: string;
  metaTitle: string;
  metaDescription: string;
  headline: string;
  sub: string;
  why: string;
  faqs: { q: string; a: string }[];
};

const TRADES: Record<string, TradeConfig> = {
  "plumber-websites": {
    name: "Plumbers",
    metaTitle: "Websites for Plumbers — Free to Build, $100/mo to Host",
    metaDescription:
      "Professional websites built for plumbers and plumbing companies. $0 upfront, $100/month flat. Mobile-ready, local SEO included. Launch in about a week.",
    headline: "A website that brings in plumbing calls while you're on the job.",
    sub: "You're under sinks, not behind a screen. We build your site for free — you pay $100/month to keep it running and ranking on Google.",
    why: "Most customers Google a plumber before they call, especially for non-emergency work. If you don't show up, the job goes to whoever does. A professional site also builds trust for emergency calls where customers are choosing fast.",
    faqs: [
      {
        q: "Do plumbers really need a website?",
        a: "Yes — most people Google a plumber before calling, especially for non-emergency work. If you don't show up, the job goes to whoever does. A professional site also builds trust for emergency calls where customers are choosing fast.",
      },
      {
        q: "Can you help me show up on Google Maps?",
        a: "We set up your on-page SEO and Google Business Profile so local customers can find you. We can't guarantee rankings, but we set the foundation most plumbers are missing.",
      },
    ],
  },
  "electrician-websites": {
    name: "Electricians",
    metaTitle: "Websites for Electricians — Free to Build, $100/mo to Host",
    metaDescription:
      "Professional websites for electricians and electrical contractors. $0 upfront, $100/month flat. Licensing, services, and lead-generating contact forms.",
    headline: "Show customers you're licensed and legit before they even call.",
    sub: "Unlicensed guys win jobs from licensed electricians all the time — because they have a better website. We fix that. Free to build, $100/month to host.",
    why: "Electrical work is high-stakes. Customers want to see credentials, reviews, and a professional presence before they let anyone in their panel. Your website either builds that trust or loses the job.",
    faqs: [
      {
        q: "Should I list my license number on my website?",
        a: "Yes — it builds immediate trust. We include it prominently so customers know you're the real deal before they call.",
      },
      {
        q: "Can you show my service area on the site?",
        a: "Absolutely. We list your service area clearly so customers know right away if you cover their location — and so Google knows to show you in local searches.",
      },
    ],
  },
  "landscaper-websites": {
    name: "Landscapers",
    metaTitle: "Websites for Landscapers — Free to Build, $100/mo to Host",
    metaDescription:
      "Professional websites for landscaping companies. Show off your work, get found on Google, and turn visitors into clients. $0 upfront, $100/month flat.",
    headline: "Let your work sell itself — online.",
    sub: "Landscaping is a visual business. A site that shows your best jobs turns curious visitors into paying clients. We build it for free, you host for $100/month.",
    why: "Before-and-after photos are your best salesperson. Without a website to show them off, all that work you're proud of is invisible to the people searching for it.",
    faqs: [
      {
        q: "Can I show photos of my past work?",
        a: "Yes — a photo gallery is one of the most important parts of a landscaping site. Send us your best shots and we'll make them look sharp.",
      },
      {
        q: "Do you help with seasonal promotions?",
        a: "Yes — content updates are included in your plan. Just email us when you want to update pricing, promote a spring special, or add a new service.",
      },
    ],
  },
  "cleaning-websites": {
    name: "Cleaning Services",
    metaTitle: "Websites for Cleaning Services — Free to Build, $100/mo to Host",
    metaDescription:
      "Professional websites for cleaning companies and house cleaners. Build trust, get found locally, and fill your schedule. $0 upfront, $100/month flat.",
    headline: "A website that earns trust before you knock on the door.",
    sub: "Cleaning clients are letting you into their home. A professional site with clear pricing and reviews builds the trust that gets you booked over the competition.",
    why: "People are handing you a key to their house. A polished website — with reviews, your process, and clear pricing — is often the difference between a call and a pass.",
    faqs: [
      {
        q: "Can I list my services and pricing on the site?",
        a: "Yes — and it's a good idea. Customers who can see what you offer and roughly what it costs are more likely to reach out than ones left guessing.",
      },
      {
        q: "How do I get reviews onto the site?",
        a: "We can add a dedicated testimonials section. Just send us the quotes from happy customers and we'll handle the rest.",
      },
    ],
  },
  "hvac-websites": {
    name: "HVAC Companies",
    metaTitle: "Websites for HVAC Companies — Free to Build, $100/mo to Host",
    metaDescription:
      "Professional websites for HVAC contractors and technicians. Get found when customers need you most. $0 upfront, $100/month flat.",
    headline: "Be the first HVAC company they call — not the fourth.",
    sub: "Most HVAC calls are urgent. If your website doesn't load fast and look professional, customers move on in seconds. We fix that for free — $100/month to keep it live.",
    why: "When an AC goes out in July, customers Google and call the first credible result. If that's not you, it's your competitor. A fast, professional website with a visible phone number wins those calls.",
    faqs: [
      {
        q: "Can customers request emergency service through the site?",
        a: "Yes — we set up a prominent contact form and call-to-action so customers can reach you fast, even after hours.",
      },
      {
        q: "Do you cover both residential and commercial HVAC?",
        a: "Your site can clearly list both. We structure it so each type of customer knows exactly what you offer them.",
      },
    ],
  },
  "contractor-websites": {
    name: "General Contractors",
    metaTitle: "Websites for Contractors — Free to Build, $100/mo to Host",
    metaDescription:
      "Professional websites for general contractors and construction companies. Showcase your projects and win more bids. $0 upfront, $100/month flat.",
    headline: "Turn your best projects into your best sales tool.",
    sub: "A portfolio site that shows your work, your process, and why you're worth hiring. We build it for free — $100/month to keep it running.",
    why: "Homeowners comparing contractors for a $20,000 job will Google every name they consider. A professional site with real project photos often decides the bid before you even meet.",
    faqs: [
      {
        q: "Can I show a portfolio of past projects?",
        a: "Yes — project photos are the centerpiece of a good contractor site. Send us your best work and we'll build a portfolio that makes it stand out.",
      },
      {
        q: "What if I do multiple types of work?",
        a: "We organize your services clearly so every visitor quickly understands what you do and whether you're the right fit for their job.",
      },
    ],
  },
  "auto-detailing-websites": {
    name: "Auto Detailers",
    metaTitle: "Websites for Auto Detailers — Free to Build, $100/mo to Host",
    metaDescription:
      "Professional websites for auto detailers and car care businesses. Show your best work and get found locally. $0 upfront, $100/month flat.",
    headline: "Your detail work deserves a website as sharp as your finish.",
    sub: "Instagram gets you followers. A real website gets you bookings. We build it for free — $100/month to keep it live and ranking on Google.",
    why: "Before-and-after photos are pure gold in detailing. A website lets you own that content, show it to Google, and turn search traffic into booked appointments — something Instagram alone can't do.",
    faqs: [
      {
        q: "Can I list my detailing packages and prices?",
        a: "Absolutely — service menus with clear pricing reduce back-and-forth and attract customers who are already ready to book.",
      },
      {
        q: "Can customers book through the site?",
        a: "We include a contact form for booking requests. If you want a full online booking system, we can discuss integrating one.",
      },
    ],
  },
  "personal-trainer-websites": {
    name: "Personal Trainers",
    metaTitle: "Websites for Personal Trainers — Free to Build, $100/mo to Host",
    metaDescription:
      "Professional websites for personal trainers and fitness coaches. Attract new clients and fill your schedule. $0 upfront, $100/month flat.",
    headline: "A website that keeps your calendar full.",
    sub: "Clients search for trainers online every day. A professional site that shows your method, results, and availability gets them booking — not just browsing.",
    why: "Most trainers rely on gym referrals or word of mouth. A website means people can find you on Google, see your background and philosophy, and reach out directly — without a warm intro.",
    faqs: [
      {
        q: "Can I show client testimonials and results?",
        a: "Yes — with client permission, results and testimonials are the most persuasive thing on a trainer's site. We make them a centerpiece.",
      },
      {
        q: "I train both online and in-person. Can the site cover both?",
        a: "Absolutely. We structure it so both options are clear and both types of clients know exactly how to get started with you.",
      },
    ],
  },
  "painter-websites": {
    name: "Painters",
    metaTitle: "Websites for Painters — Free to Build, $100/mo to Host",
    metaDescription:
      "Professional websites for house painters and painting contractors. Showcase your work, get found locally, and win more quotes. $0 upfront, $100/month flat.",
    headline: "A website that keeps your schedule painted solid.",
    sub: "Most painting jobs are won before the first call. A professional site with photos of your work and a simple quote form puts you ahead of every painter without one.",
    why: "Homeowners searching for a painter compare several options online before reaching out to anyone. A site that shows clean, finished work and makes it easy to request a quote consistently wins that comparison.",
    faqs: [
      {
        q: "Can I show before-and-after photos of my paint jobs?",
        a: "Yes — photo galleries are the centerpiece of a great painting site. Send us your best shots and we'll make them shine.",
      },
      {
        q: "Can customers request a quote directly from the site?",
        a: "Absolutely. We build a quote-request form so leads can describe their project and you can follow up — no phone tag required.",
      },
    ],
  },
  "roofer-websites": {
    name: "Roofers",
    metaTitle: "Websites for Roofers — Free to Build, $100/mo to Host",
    metaDescription:
      "Professional websites for roofing contractors and companies. Get found after storms, build trust, and generate more estimates. $0 upfront, $100/month flat.",
    headline: "Win more roofing jobs before a competitor even calls back.",
    sub: "After a storm, homeowners search online first. A fast, professional site with a clear contact form gets you the call while your competition is still driving around.",
    why: "Roofing is a high-ticket, high-trust purchase. Homeowners need to feel confident before inviting anyone onto their roof. A professional website with photos, credentials, and reviews builds that confidence instantly.",
    faqs: [
      {
        q: "Can I feature insurance and storm damage services?",
        a: "Yes — we highlight whatever services matter most to your market, including insurance claim assistance if that's part of what you offer.",
      },
      {
        q: "Can you show the areas I service?",
        a: "Absolutely. A clear service area helps both customers and Google understand exactly where you work.",
      },
    ],
  },
  "pest-control-websites": {
    name: "Pest Control",
    metaTitle: "Websites for Pest Control Companies — Free to Build, $100/mo to Host",
    metaDescription:
      "Professional websites for pest control and exterminator businesses. Get found locally and turn searches into service calls. $0 upfront, $100/month flat.",
    headline: "When bugs show up, make sure you do too — on Google.",
    sub: "Pest problems are urgent. Customers search, click the first credible result, and call. A professional website makes sure that first result is you.",
    why: "Most pest calls happen fast — people aren't comparing options for days. They search, land on a site that looks legit and has a phone number, and call. If your site is slow or looks outdated, they move on in seconds.",
    faqs: [
      {
        q: "Can I list the pests and treatments I cover?",
        a: "Yes — a clear service list helps customers quickly confirm you handle their specific problem, which increases the chance they call.",
      },
      {
        q: "Can I offer a free inspection offer on the site?",
        a: "Absolutely. A free inspection CTA is one of the highest-converting offers in pest control. We make it prominent.",
      },
    ],
  },
  "pressure-washing-websites": {
    name: "Pressure Washing",
    metaTitle: "Websites for Pressure Washing Companies — Free to Build, $100/mo to Host",
    metaDescription:
      "Professional websites for pressure washing and power washing businesses. Show your results, get found locally, and fill your schedule. $0 upfront, $100/month flat.",
    headline: "Show the results. Book the job.",
    sub: "Pressure washing sells itself visually. A site with your before-and-after photos and a quick quote form turns search traffic into booked jobs — no chasing required.",
    why: "Before-and-after photos are impossible to argue with. A website that leads with your best transformations and makes it easy to get a quote consistently beats competitors who only have a Facebook page.",
    faqs: [
      {
        q: "Can I show before-and-after photos?",
        a: "Yes — they're the most powerful content for pressure washing. Send us your best shots and we'll build a gallery that does the selling for you.",
      },
      {
        q: "Can I list different services like driveways, decks, and roofs?",
        a: "Absolutely. We organize your services clearly so every visitor knows exactly what you offer and can request a quote for their specific job.",
      },
    ],
  },
  "handyman-websites": {
    name: "Handymen",
    metaTitle: "Websites for Handymen — Free to Build, $100/mo to Host",
    metaDescription:
      "Professional websites for handymen and home repair services. Build credibility, get found locally, and keep your schedule full. $0 upfront, $100/month flat.",
    headline: "Look like the pro you are — online.",
    sub: "Handymen live and die by referrals — until they have a website. A professional site keeps you booked even when word of mouth slows down.",
    why: "People are skeptical of handymen they don't know. A clean, professional website with a list of services, photos, and a simple way to reach you instantly sets you apart from the guys with no web presence at all.",
    faqs: [
      {
        q: "Can I list all the different jobs I do?",
        a: "Yes — a clear services list helps customers confirm you handle their specific task and makes it more likely they reach out.",
      },
      {
        q: "I work alone. Is this worth it for a one-person operation?",
        a: "Absolutely — in fact, a great website matters more for solo operators because you don't have a team or big brand doing the trust-building for you.",
      },
    ],
  },
  "moving-company-websites": {
    name: "Moving Companies",
    metaTitle: "Websites for Moving Companies — Free to Build, $100/mo to Host",
    metaDescription:
      "Professional websites for moving companies and movers. Generate more quote requests and build trust before the big day. $0 upfront, $100/month flat.",
    headline: "Be the moving company people trust before they've met you.",
    sub: "People moving homes are anxious and doing a lot of research. A professional website with clear pricing, services, and reviews puts them at ease — and gets you the booking.",
    why: "Moving is stressful and high-stakes. Customers are trusting you with everything they own. A polished website that clearly explains your process, pricing, and service area converts far better than one that makes them guess.",
    faqs: [
      {
        q: "Can I show local and long-distance moving separately?",
        a: "Yes — we structure your services clearly so both types of customers land in the right place and know what to expect.",
      },
      {
        q: "Can customers request a quote through the site?",
        a: "Absolutely. A quote-request form is one of the most important parts of a moving company site. We make it front and center.",
      },
    ],
  },
  "pool-service-websites": {
    name: "Pool Services",
    metaTitle: "Websites for Pool Service Companies — Free to Build, $100/mo to Host",
    metaDescription:
      "Professional websites for pool service and maintenance businesses. Get found by local pool owners and keep your route full. $0 upfront, $100/month flat.",
    headline: "Keep your route full all season long.",
    sub: "Pool owners search for reliable service online every spring. A professional website makes sure you're the first name they find — and the one they stick with.",
    why: "Most pool service customers want a company they can set up once and forget. A professional website that clearly explains your services, frequency, and pricing helps them say yes quickly and stay long-term.",
    faqs: [
      {
        q: "Can I list weekly, bi-weekly, and one-time services?",
        a: "Yes — clear service tiers help customers pick what fits their needs and make it easier for you to quote accurately.",
      },
      {
        q: "Can I show my service area on the site?",
        a: "Absolutely. A clear service area map or list helps customers know instantly whether you cover their neighborhood.",
      },
    ],
  },
  "dog-grooming-websites": {
    name: "Dog Groomers",
    metaTitle: "Websites for Dog Groomers — Free to Build, $100/mo to Host",
    metaDescription:
      "Professional websites for dog groomers and pet grooming salons. Attract new clients, show your work, and fill your appointment book. $0 upfront, $100/month flat.",
    headline: "Fill your appointment book with the right clients.",
    sub: "Pet owners are picky about who touches their dog. A professional website with photos of your work and a simple booking form builds the trust that gets them through the door.",
    why: "Dog owners search for groomers the same way they search for their own hairdresser — they want to see the work, read reviews, and feel confident before booking. A great website is how you earn that confidence before they ever meet you.",
    faqs: [
      {
        q: "Can I show photos of dogs I've groomed?",
        a: "Yes — before-and-after grooming photos are incredibly persuasive. Send us your best ones and we'll build a gallery that shows off your skill.",
      },
      {
        q: "Can clients book appointments through the site?",
        a: "We include a booking request form. If you want full online scheduling, we can discuss integrating a booking tool that fits your workflow.",
      },
    ],
  },
};

const GENERAL_FAQS = [
  {
    q: "What's the catch? Why is the build free?",
    a: "There isn't one. Most service businesses can't justify a $3,000 upfront website, so they end up with nothing — or a DIY page that costs them customers. We'd rather build for free, host you for a fair monthly fee, and earn that fee every month by keeping your site running well.",
  },
  {
    q: "What happens if I cancel?",
    a: "You can cancel any time, no fees. We'll take the site offline, and if you want to take the code with you to host elsewhere, we'll hand it over.",
  },
  {
    q: "Do I own my domain?",
    a: "Yes — always. The domain is registered in your name. If you don't have one yet, we'll help you pick and register one.",
  },
  {
    q: "How long does it take to launch?",
    a: "Most sites are ready to review in about a week from when we get your info. Once you approve, we launch within a day or two.",
  },
];

export function generateStaticParams() {
  return Object.keys(TRADES).map((trade) => ({ trade }));
}


export async function generateMetadata({
  params,
}: {
  params: Promise<{ trade: string }>;
}): Promise<Metadata> {
  const { trade } = await params;
  const config = TRADES[trade];
  if (!config) return {};
  const url = `${SITE_URL}/${trade}`;
  return {
    title: config.metaTitle,
    description: config.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      title: config.metaTitle,
      description: config.metaDescription,
      url,
      type: "website",
      siteName: "Lobus Industries",
    },
    twitter: {
      card: "summary_large_image",
      title: config.metaTitle,
      description: config.metaDescription,
    },
  };
}

export default async function TradePage({
  params,
}: {
  params: Promise<{ trade: string }>;
}) {
  const { trade } = await params;
  const config = TRADES[trade];
  if (!config) notFound();

  const allFaqs = [...config.faqs, ...GENERAL_FAQS];

  return (
    <>
      <Nav />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-grid pointer-events-none" />
          <div className="relative mx-auto max-w-6xl px-6 pt-24 pb-28 md:pt-32 md:pb-40">
            <div className="max-w-4xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-[var(--border-strong)] bg-white/5 backdrop-blur px-3.5 py-1.5 text-xs font-medium text-[var(--muted-strong)] mb-7">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)] pulse-soft" />
                Built for {config.name} &nbsp;·&nbsp; $0 to build &nbsp;·&nbsp; $100/mo
              </span>
              <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-semibold tracking-tight leading-[1.02]">
                <span className="text-gradient">{config.headline.split("—")[0]}</span>
                {config.headline.includes("—") && (
                  <>
                    <span className="text-gradient">—</span>
                    <br />
                    <span className="text-accent-gradient">
                      {config.headline.split("—")[1]}
                    </span>
                  </>
                )}
              </h1>
              <p className="mt-7 text-lg md:text-xl text-[var(--muted-strong)] max-w-2xl leading-relaxed">
                {config.sub}
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-3">
                <a
                  href="#contact"
                  className="btn-accent inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full text-base"
                >
                  Start your website — free
                  <span aria-hidden>→</span>
                </a>
                <a
                  href="/"
                  className="btn-ghost inline-flex items-center justify-center px-7 py-4 rounded-full text-base"
                >
                  See how it works
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
              <div
                className="absolute inset-0 opacity-40 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(ellipse 500px 300px at 0% 50%, rgba(251,146,60,0.15), transparent 70%)",
                }}
              />
              <div className="relative max-w-3xl">
                <div className="text-[11px] uppercase tracking-[0.22em] text-[var(--accent)] font-semibold mb-3">
                  Why it matters
                </div>
                <p className="text-lg md:text-xl text-white leading-relaxed">
                  {config.why}
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
            <SectionHeading eyebrow="FAQ" title="The questions we get asked most." />
            <div className="mt-12 max-w-3xl divide-y divide-[var(--border)] border-y border-[var(--border)]">
              {allFaqs.map((f) => (
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
      <div className="text-[11px] uppercase tracking-[0.18em] mt-1 text-[var(--muted)]">
        {label}
      </div>
    </div>
  );
}
