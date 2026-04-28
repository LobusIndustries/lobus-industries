import type { MetadataRoute } from "next";

const SITE_URL = "https://www.lobusindustries.com";

const TRADE_SLUGS = [
  "plumber-websites",
  "electrician-websites",
  "landscaper-websites",
  "cleaning-websites",
  "hvac-websites",
  "contractor-websites",
  "auto-detailing-websites",
  "personal-trainer-websites",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const homeSections = [
    "",
    "#services",
    "#industries",
    "#process",
    "#pricing",
    "#faq",
    "#contact",
  ].map((s) => ({
    url: `${SITE_URL}/${s}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: s === "" ? 1.0 : 0.7,
  }));

  const tradePages = TRADE_SLUGS.map((slug) => ({
    url: `${SITE_URL}/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...homeSections, ...tradePages];
}
