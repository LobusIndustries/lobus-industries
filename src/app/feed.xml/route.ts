import { posts } from "../blog/posts";

const SITE_URL = "https://www.lobusindustries.com";
const SITE_NAME = "Lobus Industries";
const SITE_DESC = "Practical advice on websites, local SEO, and getting more customers for service businesses.";

export async function GET() {
  const sorted = [...posts].sort(
    (a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime()
  );

  const items = sorted
    .map((post) => {
      const url = `${SITE_URL}/blog/${post.slug}`;
      const firstPara = post.sections.find((s) => s.paragraphs?.length)?.paragraphs?.[0] ?? post.excerpt;
      return `
    <item>
      <title><![CDATA[${post.title}]]></title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <description><![CDATA[${firstPara}]]></description>
      <pubDate>${new Date(post.publishDate).toUTCString()}</pubDate>
      <author>lobusindustries@gmail.com (Lobus Industries)</author>
    </item>`.trim();
    })
    .join("\n    ");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${SITE_NAME} Blog</title>
    <link>${SITE_URL}/blog</link>
    <description>${SITE_DESC}</description>
    <language>en-us</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${SITE_URL}/feed.xml" rel="self" type="application/rss+xml"/>
    ${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, stale-while-revalidate=86400",
    },
  });
}
