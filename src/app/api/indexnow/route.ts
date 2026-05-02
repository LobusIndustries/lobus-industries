import { NextResponse } from "next/server";

const SITE_URL = "https://www.lobusindustries.com";
// Must match the filename in /public and the key registered in Bing Webmaster Tools
const INDEXNOW_KEY = "71dfa117c944418190a84828245fae97";

const URLS = [
  SITE_URL,
  `${SITE_URL}/pricing`,
  `${SITE_URL}/about`,
  `${SITE_URL}/blog`,
  `${SITE_URL}/testimonials`,
  `${SITE_URL}/wix-alternative`,
  `${SITE_URL}/squarespace-alternative`,
  `${SITE_URL}/godaddy-alternative`,
  `${SITE_URL}/wordpress-alternative`,
  `${SITE_URL}/website-design`,
  `${SITE_URL}/plumber-websites`,
  `${SITE_URL}/electrician-websites`,
  `${SITE_URL}/landscaper-websites`,
  `${SITE_URL}/hvac-websites`,
  `${SITE_URL}/contractor-websites`,
  `${SITE_URL}/cleaning-websites`,
  `${SITE_URL}/auto-detailing-websites`,
  `${SITE_URL}/personal-trainer-websites`,
  `${SITE_URL}/painter-websites`,
  `${SITE_URL}/roofer-websites`,
  `${SITE_URL}/pest-control-websites`,
  `${SITE_URL}/pressure-washing-websites`,
  `${SITE_URL}/handyman-websites`,
  `${SITE_URL}/moving-company-websites`,
  `${SITE_URL}/pool-service-websites`,
  `${SITE_URL}/dog-grooming-websites`,
];

// GET /api/indexnow — ping Bing IndexNow with all key URLs
// Call this after each deployment to get instant indexing
export async function GET() {
  const body = {
    host: "www.lobusindustries.com",
    key: INDEXNOW_KEY,
    keyLocation: `${SITE_URL}/${INDEXNOW_KEY}.txt`,
    urlList: URLS,
  };

  const res = await fetch("https://api.indexnow.org/indexnow", {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify(body),
  });

  return NextResponse.json({
    status: res.status,
    ok: res.ok,
    urlsSubmitted: URLS.length,
  });
}
