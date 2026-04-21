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
  url: SITE_URL,
  logo: LOGO,
  email: EMAIL,
  description:
    "Lobus Industries builds professional websites for service-based businesses. $0 upfront build cost, $100/month flat for hosting and ongoing updates.",
  sameAs: [
    "https://github.com/LobusIndustries",
  ],
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "sales",
      email: EMAIL,
      availableLanguage: ["English"],
      areaServed: "US",
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
  description:
    "Professional website design, development, hosting, and ongoing maintenance for service-based small businesses. No build fee. Flat monthly hosting.",
  areaServed: {
    "@type": "Country",
    name: "United States",
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
  description:
    "Professional websites for service businesses. Free to build. $100/month to host.",
  publisher: { "@id": `${SITE_URL}#organization` },
  inLanguage: "en-US",
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

export default function StructuredData() {
  const graph = {
    "@context": "https://schema.org",
    "@graph": [organization, professionalService, website, faqPage, breadcrumb],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
