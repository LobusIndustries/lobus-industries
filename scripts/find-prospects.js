#!/usr/bin/env node
/**
 * find-prospects.js
 *
 * Finds local service businesses that may need a website.
 * Searches Google Places for a given city + trade, flags businesses
 * with no website or a missing/weak online presence, and exports a CSV.
 *
 * Usage:
 *   node scripts/find-prospects.js --city "Boise, ID" --type "plumber"
 *   node scripts/find-prospects.js --city "Nampa, ID" --type "electrician" --radius 20000
 *
 * Prerequisites:
 *   1. Get a Google Places API key: https://console.cloud.google.com/
 *      Enable: "Places API (New)" or "Places API"
 *   2. Set it in your environment:
 *        export GOOGLE_PLACES_API_KEY=your_key_here
 *      Or create a .env.local file:
 *        GOOGLE_PLACES_API_KEY=your_key_here
 *
 * Output:
 *   prospects_<city>_<type>_<date>.csv  (in the scripts/ folder)
 *
 * Cost estimate:
 *   ~$0.032 per Text Search call (covers 20 results).
 *   Fetching 100 businesses ≈ 5 calls ≈ $0.16
 */

import { createWriteStream } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
import { parseArgs } from "util";

// ─── Load env ────────────────────────────────────────────────────────────────
const __dir = dirname(fileURLToPath(import.meta.url));

// Try loading .env.local without a dependency
try {
  const { readFileSync } = await import("fs");
  const env = readFileSync(resolve(__dir, "../.env.local"), "utf8");
  for (const line of env.split("\n")) {
    const m = line.match(/^([^#=\s]+)\s*=\s*(.*)$/);
    if (m) process.env[m[1]] = m[2].replace(/^["']|["']$/g, "");
  }
} catch { /* .env.local is optional */ }

const API_KEY = process.env.GOOGLE_PLACES_API_KEY;

if (!API_KEY) {
  console.error(
    "\n  ERROR: GOOGLE_PLACES_API_KEY is not set.\n" +
    "  Get a key at https://console.cloud.google.com/ (enable Places API)\n" +
    "  Then run:  export GOOGLE_PLACES_API_KEY=your_key_here\n"
  );
  process.exit(1);
}

// ─── Args ─────────────────────────────────────────────────────────────────────
const { values } = parseArgs({
  options: {
    city:    { type: "string", short: "c" },
    type:    { type: "string", short: "t", default: "contractor" },
    radius:  { type: "string", short: "r", default: "16000" },   // meters (~10mi)
    max:     { type: "string", short: "m", default: "100" },
    help:    { type: "boolean", short: "h", default: false },
  },
  allowPositionals: true,
});

if (values.help || !values.city) {
  console.log(`
  Usage: node scripts/find-prospects.js --city "Boise, ID" --type "plumber"

  Options:
    --city,   -c  City + state to search (required)
    --type,   -t  Business type to search (default: "contractor")
    --radius, -r  Search radius in meters (default: 16000 = ~10 miles)
    --max,    -m  Max results to fetch (default: 100)
    --help,   -h  Show this help
  `);
  process.exit(0);
}

const { city, type: bizType, radius, max: maxStr } = values;
const MAX = Math.min(parseInt(maxStr, 10), 200);
const RADIUS = parseInt(radius, 10);

// ─── Geocode city → lat/lng (OpenStreetMap Nominatim — free, no key needed) ───
async function geocodeCity(cityName) {
  const url = new URL("https://nominatim.openstreetmap.org/search");
  url.searchParams.set("q", cityName);
  url.searchParams.set("format", "json");
  url.searchParams.set("limit", "1");

  const res = await fetch(url.toString(), {
    headers: { "User-Agent": "LobusProspectFinder/1.0 (lobusindustries@gmail.com)" },
  });
  const data = await res.json();

  if (!data[0]) throw new Error(`Geocoding failed for "${cityName}" — try a more specific city name.`);

  return { lat: parseFloat(data[0].lat), lng: parseFloat(data[0].lon) };
}

// ─── Places Text Search (paginated) ──────────────────────────────────────────
async function searchPlaces(query, location, collected = [], pageToken = null) {
  if (collected.length >= MAX) return collected;

  const url = new URL("https://maps.googleapis.com/maps/api/place/textsearch/json");
  url.searchParams.set("query", query);
  url.searchParams.set("location", `${location.lat},${location.lng}`);
  url.searchParams.set("radius", String(RADIUS));
  url.searchParams.set("key", API_KEY);
  if (pageToken) url.searchParams.set("pagetoken", pageToken);

  const res = await fetch(url.toString());
  const data = await res.json();

  if (!["OK", "ZERO_RESULTS"].includes(data.status)) {
    throw new Error(`Places search error: ${data.status} — ${data.error_message || ""}`);
  }

  collected.push(...(data.results || []));

  if (data.next_page_token && collected.length < MAX) {
    // Google requires a short delay before using next_page_token
    await new Promise(r => setTimeout(r, 2000));
    return searchPlaces(query, location, collected, data.next_page_token);
  }

  return collected;
}

// ─── Fetch place details (website, phone, address) ───────────────────────────
async function getPlaceDetails(placeId) {
  const url = new URL("https://maps.googleapis.com/maps/api/place/details/json");
  url.searchParams.set("place_id", placeId);
  url.searchParams.set("fields", "name,formatted_address,formatted_phone_number,website,rating,user_ratings_total,business_status");
  url.searchParams.set("key", API_KEY);

  const res = await fetch(url.toString());
  const data = await res.json();

  return data.result || {};
}

// ─── Score prospect quality ───────────────────────────────────────────────────
function scoreProspect(detail) {
  let score = 0;
  const notes = [];

  if (!detail.website) {
    score += 40;
    notes.push("No website");
  } else {
    // Basic check: is it just a Facebook/Yelp/Google page?
    const url = detail.website.toLowerCase();
    if (url.includes("facebook.com") || url.includes("fb.com")) {
      score += 30;
      notes.push("Only has Facebook page");
    } else if (url.includes("yelp.com")) {
      score += 25;
      notes.push("Only has Yelp page");
    } else if (url.includes("google.com") || url.includes("maps.app")) {
      score += 20;
      notes.push("Only has Google Maps page");
    }
  }

  if (!detail.formatted_phone_number) {
    score += 10;
    notes.push("No phone listed");
  }

  const ratings = detail.user_ratings_total || 0;
  if (ratings < 5) {
    score += 10;
    notes.push("Few reviews");
  }

  if (detail.rating && detail.rating >= 4.0) {
    notes.push(`Good rating (${detail.rating}★)`);
  }

  return { score, notes };
}

// ─── CSV helper ───────────────────────────────────────────────────────────────
function csvEscape(val) {
  if (val == null) return "";
  const s = String(val);
  if (s.includes(",") || s.includes('"') || s.includes("\n")) {
    return `"${s.replace(/"/g, '""')}"`;
  }
  return s;
}

function csvRow(values) {
  return values.map(csvEscape).join(",");
}

// ─── Main ─────────────────────────────────────────────────────────────────────
console.log(`\n  Searching for "${bizType}" businesses in "${city}"...`);
console.log(`  Radius: ${(RADIUS / 1609).toFixed(1)} miles | Max results: ${MAX}\n`);

const location = await geocodeCity(city);
console.log(`  Geocoded "${city}" → ${location.lat.toFixed(4)}, ${location.lng.toFixed(4)}`);

const query = `${bizType} ${city}`;
const places = await searchPlaces(query, location);
const limited = places.slice(0, MAX);

console.log(`  Found ${limited.length} businesses. Fetching details...\n`);

const rows = [];
for (let i = 0; i < limited.length; i++) {
  const place = limited[i];
  process.stdout.write(`  [${i + 1}/${limited.length}] ${place.name}...`);

  let detail = {};
  try {
    detail = await getPlaceDetails(place.place_id);
  } catch (err) {
    process.stdout.write(` error: ${err.message}\n`);
    continue;
  }

  const { score, notes } = scoreProspect(detail);
  process.stdout.write(` score ${score}\n`);

  rows.push({
    name: detail.name || place.name,
    address: detail.formatted_address || "",
    phone: detail.formatted_phone_number || "",
    website: detail.website || "",
    rating: detail.rating || "",
    review_count: detail.user_ratings_total || 0,
    prospect_score: score,
    notes: notes.join("; "),
    place_id: place.place_id,
  });

  // Respect Places API rate limits (slight delay between detail calls)
  if (i < limited.length - 1) await new Promise(r => setTimeout(r, 100));
}

// Sort by prospect score descending (highest opportunity first)
rows.sort((a, b) => b.prospect_score - a.prospect_score);

// ─── Write CSV ────────────────────────────────────────────────────────────────
const safeCity = city.replace(/[^a-z0-9]+/gi, "_").toLowerCase();
const safeType = bizType.replace(/[^a-z0-9]+/gi, "_").toLowerCase();
const date = new Date().toISOString().slice(0, 10);
const outFile = resolve(__dir, `prospects_${safeCity}_${safeType}_${date}.csv`);

const headers = ["Name", "Address", "Phone", "Website", "Rating", "Review Count", "Prospect Score", "Notes", "Place ID"];
const ws = createWriteStream(outFile);

ws.write(csvRow(headers) + "\n");
for (const r of rows) {
  ws.write(csvRow([r.name, r.address, r.phone, r.website, r.rating, r.review_count, r.prospect_score, r.notes, r.place_id]) + "\n");
}
ws.end();

const noWebsite = rows.filter(r => !r.website).length;
const weakWeb = rows.filter(r => r.prospect_score >= 20).length;

console.log(`\n  ✓ Done. ${rows.length} businesses analyzed.`);
console.log(`    • ${noWebsite} have no website`);
console.log(`    • ${weakWeb} scored 20+ (strong prospects)`);
console.log(`\n  Output: ${outFile}\n`);
