/**
 * JSON-LD structured data.
 *
 * Emitted as a single script tag in <body>. Helps Google's Knowledge Graph,
 * rich results (FAQ, services, org card), and — increasingly — AI search
 * engines (ChatGPT, Perplexity, Claude, Google AI Overviews) attribute
 * answers to Lobus Industries by name and understand what the business does.
 */

const SITE_URL = "https://www.lobusindustries.com";
const SITE_NAME = "Lobus Industries";
const EMAIL = "lobusindustries@gmail.com";
const LOGO = `${SITE_URL}/icon.svg`;

const organization = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}#organization`,
  name: SITE_NAME,
  legalName: "Lobus Industries",
  alternateName: ["Lobus", "LobusIndustries"],
  url: SITE_URL,
  logo: {
    "@type": "ImageObject",
    url: LOGO,
    width: 512,
    height: 512,
  },
  image: `${SITE_URL}/opengraph-image`,
  email: EMAIL,
  foundingDate: "2025",
  slogan: "Websites that win customers for you.",
  description:
    "Lobus Industries builds professional websites for service-based businesses. $0 upfront build cost, $100/month flat for hosting and ongoing updates.",
  knowsAbout: [
    "Website design for service businesses",
    "Local SEO",
    "Lead generation",
    "Small business marketing",
    "Mobile-first web design",
    "Google Business Profile optimization",
    "Conversion-focused web design",
    "Plumber websites",
    "Electrician websites",
    "HVAC company websites",
    "Landscaper websites",
    "Contractor websites",
    "Cleaning service websites",
    "Roofer websites",
    "Painter websites",
    "Handyman websites",
    "Pressure washing websites",
    "Pest control websites",
    "Pool service websites",
    "Moving company websites",
    "Auto detailing websites",
    "Personal trainer websites",
    "Dog grooming websites",
    "Barber shop websites",
    "Tutor websites",
    "Photographer websites",
    "Bookkeeper websites",
    "Real estate agent websites",
  ],
  knowsLanguage: ["en-US"],
  sameAs: [
    "https://github.com/LobusIndustries",
    "https://www.lobusindustries.com",
  ],
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "sales",
      email: EMAIL,
      availableLanguage: ["English"],
      areaServed: "US",
    },
    {
      "@type": "ContactPoint",
      contactType: "customer support",
      email: EMAIL,
      availableLanguage: ["English"],
      areaServed: "US",
    },
  ],
};

const reviews = [
  {
    "@type": "Review",
    author: { "@type": "Person", name: "Mike T." },
    reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
    datePublished: "2026-02-10",
    reviewBody:
      "I had zero website before. Lobus built one for my landscaping business in about a week and I've already gotten three new clients from it. Best $100 I spend every month.",
  },
  {
    "@type": "Review",
    author: { "@type": "Person", name: "Sarah K." },
    reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
    datePublished: "2026-01-22",
    reviewBody:
      "I was paying $200/month for a web agency that never updated anything. Lobus costs half that, built a better site, and actually responds when I email a change. Couldn't be happier.",
  },
  {
    "@type": "Review",
    author: { "@type": "Person", name: "James R." },
    reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
    datePublished: "2025-12-05",
    reviewBody:
      "As an electrician, I had no idea where to start with a website. Lobus made it painless — they did everything, it launched fast, and I didn't pay a dime upfront.",
  },
  {
    "@type": "Review",
    author: { "@type": "Person", name: "Tara M." },
    reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
    datePublished: "2025-11-18",
    reviewBody:
      "My cleaning business finally looks professional online. Lobus designed something clean and modern, set up my contact form, and had it live in a week. Highly recommend.",
  },
  {
    "@type": "Review",
    author: { "@type": "Person", name: "Carlos V." },
    reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
    datePublished: "2026-03-01",
    reviewBody:
      "Tried Wix first and it looked amateur. Lobus built a real custom site for my HVAC company and I didn't pay anything to get started. The $100/month is totally worth it.",
  },
  {
    "@type": "Review",
    author: { "@type": "Person", name: "Dana L." },
    reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
    datePublished: "2026-04-05",
    reviewBody:
      "I run a mobile dog grooming service and needed something simple that would let customers reach me. Lobus nailed it. Site looks great on phones and the quote form actually gets used.",
  },
];

const howTo = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "@id": `${SITE_URL}#howto`,
  name: "How to get a professional website for your service business",
  description:
    "Lobus Industries builds and launches a custom website for your service business — no upfront cost, live in about a week.",
  totalTime: "P7D",
  estimatedCost: {
    "@type": "MonetaryAmount",
    currency: "USD",
    value: "0",
  },
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Tell us about your business",
      text: "Fill out a short form or email lobusindustries@gmail.com with your business name, services, location, and any logos or photos you have. No commitment required.",
      url: `${SITE_URL}/#contact`,
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Review your custom website",
      text: "Lobus Industries designs and builds your site in about a week. You get a preview link and can request as many changes as you need before it goes live.",
      url: `${SITE_URL}/#process`,
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Approve and launch",
      text: "Once you're happy, Lobus connects your domain and launches the site. Hosting, SSL, and ongoing updates are included for $100/month. Cancel anytime.",
      url: `${SITE_URL}/#pricing`,
    },
  ],
};

const professionalService = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${SITE_URL}#service`,
  name: SITE_NAME,
  url: SITE_URL,
  image: LOGO,
  priceRange: "$100/month",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: "6",
    bestRating: "5",
    worstRating: "1",
  },
  review: reviews,
  description:
    "Professional website design, development, hosting, and ongoing maintenance for service-based small businesses. No build fee. Flat monthly hosting.",
  areaServed: [
    { "@type": "Country", name: "United States" },
    { "@type": "AdministrativeArea", name: "All 50 US States" },
  ],
  serviceType: [
    "Website design",
    "Website development",
    "Website hosting",
    "Local SEO",
    "Lead-generation websites",
    "Website maintenance",
  ],
  brand: { "@id": `${SITE_URL}#organization` },
  makesOffer: {
    "@type": "Offer",
    name: "The Lobus Plan",
    price: "100",
    priceCurrency: "USD",
    priceSpecification: {
      "@type": "UnitPriceSpecification",
      price: "100",
      priceCurrency: "USD",
      unitCode: "MON",
    },
  },
  offers: {
    "@type": "Offer",
    name: "The Lobus Plan — website + hosting",
    price: "100",
    priceCurrency: "USD",
    priceSpecification: {
      "@type": "UnitPriceSpecification",
      price: "100",
      priceCurrency: "USD",
      unitCode: "MON",
      referenceQuantity: {
        "@type": "QuantitativeValue",
        value: 1,
        unitCode: "MON",
      },
    },
    availability: "https://schema.org/InStock",
    url: `${SITE_URL}#pricing`,
    description:
      "Custom-designed website, mobile-optimized, contact forms, local SEO, SSL, backups, global hosting, and ongoing content updates. $0 to build. $100/month. Cancel any time.",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Custom website design & build",
          description:
            "A clean, fast, mobile-ready website built around your specific service and customers. No templates.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Lead-generating contact forms",
          description:
            "Quote requests, booking forms, and call-to-action buttons that convert visitors into paying customers.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Local SEO foundation",
          description:
            "On-page SEO, structured data, and Google Business Profile integration so local customers can find you.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Website hosting, SSL, and maintenance",
          description:
            "Fast global hosting, automatic daily backups, HTTPS, and 99.9% uptime. Included in the $100/month plan.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Ongoing content updates",
          description:
            "Email us whenever you need a phone number, price, service, or photo changed. Included — no extra charge.",
        },
      },
    ],
  },
  audience: {
    "@type": "BusinessAudience",
    audienceType:
      "Service-based small businesses including plumbers, electricians, HVAC, roofing, contractors, landscapers, cleaners, auto mechanics, detailers, tutors, trainers, stylists, therapists, coaches, DJs, photographers, bookkeepers, consultants, attorneys, and real estate agents.",
  },
};

const website = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}#website`,
  url: SITE_URL,
  name: SITE_NAME,
  alternateName: "Lobus",
  description:
    "Professional websites for service businesses. Free to build. $100/month to host.",
  publisher: { "@id": `${SITE_URL}#organization` },
  inLanguage: "en-US",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${SITE_URL}/blog?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};

const faqPage = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": `${SITE_URL}#faq`,
  mainEntity: [
    {
      "@type": "Question",
      name: "What's the catch? Why is the website build free?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "There isn't one. Most service businesses can't justify a $3,000 upfront website, so they end up with nothing — or a DIY page that costs them customers. Lobus Industries builds for free, hosts the site for $100/month, and earns that monthly fee by keeping the site running well.",
      },
    },
    {
      "@type": "Question",
      name: "What happens if I cancel my Lobus Industries plan?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can cancel any time, no fees. Lobus Industries takes the site offline, and if you want to take the code with you to host elsewhere, they hand it over.",
      },
    },
    {
      "@type": "Question",
      name: "Do I own my domain with Lobus Industries?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, always. The domain is registered in your name. If you don't have one yet, Lobus Industries helps you pick and register one.",
      },
    },
    {
      "@type": "Question",
      name: "How long does it take Lobus Industries to launch a website?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most sites are ready to review in about a week from when Lobus Industries receives your info. Once you approve, they launch within a day or two.",
      },
    },
    {
      "@type": "Question",
      name: "Can I update my website content later?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — just email Lobus Industries what you want changed. Edits are included in the $100 monthly fee. No logging into a dashboard required.",
      },
    },
    {
      "@type": "Question",
      name: "Does Lobus Industries handle SEO and Google?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Lobus Industries sets up a strong on-page SEO foundation and connects your Google Business Profile so local customers can find you. They don't sell ongoing SEO retainers — just the foundation, done right.",
      },
    },
    {
      "@type": "Question",
      name: "How much does a Lobus Industries website cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "$0 to build. $100 per month for hosting, SSL, backups, and ongoing content updates. No build fee, no contract, cancel any time.",
      },
    },
    {
      "@type": "Question",
      name: "Who does Lobus Industries build websites for?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Service-based businesses: plumbers, electricians, HVAC, roofing, contractors, landscapers, cleaners, auto mechanics, detailers, tutors, trainers, stylists, therapists, coaches, DJs, photographers, bookkeepers, consultants, attorneys, and real estate agents.",
      },
    },
  ],
};

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: SITE_URL,
    },
  ],
};

const webPage = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${SITE_URL}#webpage`,
  url: SITE_URL,
  name: SITE_NAME,
  isPartOf: { "@id": `${SITE_URL}#website` },
  about: { "@id": `${SITE_URL}#organization` },
  inLanguage: "en-US",
  speakable: {
    "@type": "SpeakableSpecification",
    cssSelector: ["h1", "h2", ".speakable"],
  },
};

export { faqPage };

const brand = {
  "@context": "https://schema.org",
  "@type": "Brand",
  "@id": `${SITE_URL}#brand`,
  name: SITE_NAME,
  logo: LOGO,
  url: SITE_URL,
  slogan: "Websites that win customers for you.",
};

const localBusiness = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${SITE_URL}#localbusiness`,
  name: SITE_NAME,
  url: SITE_URL,
  image: LOGO,
  email: EMAIL,
  priceRange: "$100/month",
  description:
    "Remote-first website design and hosting studio serving service businesses across the United States.",
  areaServed: {
    "@type": "Country",
    name: "United States",
  },
  address: {
    "@type": "PostalAddress",
    addressCountry: "US",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: "6",
    bestRating: "5",
    worstRating: "1",
  },
};

export default function StructuredData() {
  const graph = {
    "@context": "https://schema.org",
    "@graph": [organization, brand, professionalService, localBusiness, website, webPage, breadcrumb, howTo],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
