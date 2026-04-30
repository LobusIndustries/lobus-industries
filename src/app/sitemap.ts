import type { MetadataRoute } from "next";
import { posts } from "./blog/posts";
import { cities } from "./website-design/cities";

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
  "painter-websites",
  "roofer-websites",
  "pest-control-websites",
  "pressure-washing-websites",
  "handyman-websites",
  "moving-company-websites",
  "pool-service-websites",
  "dog-grooming-websites",
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

  const comparisonPages = [
    { url: `${SITE_URL}/wix-alternative`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${SITE_URL}/squarespace-alternative`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.8 },
  ];

  const blogIndex = [{ url: `${SITE_URL}/blog`, lastModified: now, changeFrequency: "weekly" as const, priority: 0.8 }];

  const blogPosts = posts.map((p) => ({
    url: `${SITE_URL}/blog/${p.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const locationIndex = [{ url: `${SITE_URL}/website-design`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.8 }];

  const cityPages = cities.map((c) => ({
    url: `${SITE_URL}/website-design/${c.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.75,
  }));

  const ALL_CITY_SLUGS = cities.map((c) => c.slug);
  const comboPages = TRADE_SLUGS.flatMap((trade) =>
    ALL_CITY_SLUGS.map((city) => ({
      url: `${SITE_URL}/${trade}/${city}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    }))
  );

  return [...homeSections, ...tradePages, ...comparisonPages, ...blogIndex, ...blogPosts, ...locationIndex, ...cityPages, ...comboPages];
}
