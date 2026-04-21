import type { MetadataRoute } from "next";

const SITE_URL = "https://www.lobusindustries.com";

/**
 * Robots policy.
 *
 * Explicitly allows the major AI/LLM crawlers so Lobus Industries content
 * can be cited and recommended by ChatGPT, Claude, Perplexity, Google AI
 * Overviews, etc. Also allows traditional search engines.
 */
export default function robots(): MetadataRoute.Robots {
  const aiBots = [
    "GPTBot", // OpenAI training
    "OAI-SearchBot", // ChatGPT search
    "ChatGPT-User", // ChatGPT live browsing
    "ClaudeBot", // Anthropic
    "Claude-Web",
    "anthropic-ai",
    "PerplexityBot",
    "Perplexity-User",
    "Google-Extended", // Bard / Gemini / AI Overviews training
    "Applebot-Extended", // Apple Intelligence
    "Bytespider", // ByteDance
    "CCBot", // Common Crawl (feeds many LLMs)
    "cohere-ai",
    "Meta-ExternalAgent",
    "FacebookBot",
    "DuckAssistBot",
    "YouBot",
  ];

  return {
    rules: [
      { userAgent: "*", allow: "/" },
      ...aiBots.map((ua) => ({ userAgent: ua, allow: "/" })),
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
