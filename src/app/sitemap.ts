import type { MetadataRoute } from "next";

const SITE_URL = "https://www.lobusindustries.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const sections = [
    "",
    "#services",
    "#industries",
    "#process",
    "#pricing",
    "#faq",
    "#contact",
  ];
  return sections.map((s) => ({
    url: `${SITE_URL}/${s}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: s === "" ? 1.0 : 0.7,
  }));
}
