export type City = {
  city: string;
  state: string;
  stateAbbr: string;
  slug: string;
};

export const cities: City[] = [
  { city: "New York", state: "New York", stateAbbr: "NY", slug: "new-york-ny" },
  { city: "Los Angeles", state: "California", stateAbbr: "CA", slug: "los-angeles-ca" },
  { city: "Chicago", state: "Illinois", stateAbbr: "IL", slug: "chicago-il" },
  { city: "Houston", state: "Texas", stateAbbr: "TX", slug: "houston-tx" },
  { city: "Phoenix", state: "Arizona", stateAbbr: "AZ", slug: "phoenix-az" },
  { city: "Philadelphia", state: "Pennsylvania", stateAbbr: "PA", slug: "philadelphia-pa" },
  { city: "San Antonio", state: "Texas", stateAbbr: "TX", slug: "san-antonio-tx" },
  { city: "San Diego", state: "California", stateAbbr: "CA", slug: "san-diego-ca" },
  { city: "Dallas", state: "Texas", stateAbbr: "TX", slug: "dallas-tx" },
  { city: "Austin", state: "Texas", stateAbbr: "TX", slug: "austin-tx" },
  { city: "Jacksonville", state: "Florida", stateAbbr: "FL", slug: "jacksonville-fl" },
  { city: "Fort Worth", state: "Texas", stateAbbr: "TX", slug: "fort-worth-tx" },
  { city: "Columbus", state: "Ohio", stateAbbr: "OH", slug: "columbus-oh" },
  { city: "Charlotte", state: "North Carolina", stateAbbr: "NC", slug: "charlotte-nc" },
  { city: "Indianapolis", state: "Indiana", stateAbbr: "IN", slug: "indianapolis-in" },
  { city: "San Francisco", state: "California", stateAbbr: "CA", slug: "san-francisco-ca" },
  { city: "Seattle", state: "Washington", stateAbbr: "WA", slug: "seattle-wa" },
  { city: "Denver", state: "Colorado", stateAbbr: "CO", slug: "denver-co" },
  { city: "Nashville", state: "Tennessee", stateAbbr: "TN", slug: "nashville-tn" },
  { city: "Las Vegas", state: "Nevada", stateAbbr: "NV", slug: "las-vegas-nv" },
  { city: "Portland", state: "Oregon", stateAbbr: "OR", slug: "portland-or" },
  { city: "Atlanta", state: "Georgia", stateAbbr: "GA", slug: "atlanta-ga" },
  { city: "Kansas City", state: "Missouri", stateAbbr: "MO", slug: "kansas-city-mo" },
  { city: "Raleigh", state: "North Carolina", stateAbbr: "NC", slug: "raleigh-nc" },
  { city: "Minneapolis", state: "Minnesota", stateAbbr: "MN", slug: "minneapolis-mn" },
  { city: "Tampa", state: "Florida", stateAbbr: "FL", slug: "tampa-fl" },
  { city: "Miami", state: "Florida", stateAbbr: "FL", slug: "miami-fl" },
  { city: "Orlando", state: "Florida", stateAbbr: "FL", slug: "orlando-fl" },
  { city: "Sacramento", state: "California", stateAbbr: "CA", slug: "sacramento-ca" },
  { city: "St. Louis", state: "Missouri", stateAbbr: "MO", slug: "st-louis-mo" },
  { city: "Pittsburgh", state: "Pennsylvania", stateAbbr: "PA", slug: "pittsburgh-pa" },
  { city: "Cincinnati", state: "Ohio", stateAbbr: "OH", slug: "cincinnati-oh" },
  { city: "Cleveland", state: "Ohio", stateAbbr: "OH", slug: "cleveland-oh" },
  { city: "Colorado Springs", state: "Colorado", stateAbbr: "CO", slug: "colorado-springs-co" },
  { city: "Omaha", state: "Nebraska", stateAbbr: "NE", slug: "omaha-ne" },
  { city: "Louisville", state: "Kentucky", stateAbbr: "KY", slug: "louisville-ky" },
  { city: "Virginia Beach", state: "Virginia", stateAbbr: "VA", slug: "virginia-beach-va" },
  { city: "Memphis", state: "Tennessee", stateAbbr: "TN", slug: "memphis-tn" },
  { city: "Tucson", state: "Arizona", stateAbbr: "AZ", slug: "tucson-az" },
  { city: "Washington", state: "DC", stateAbbr: "DC", slug: "washington-dc" },
  { city: "Baltimore", state: "Maryland", stateAbbr: "MD", slug: "baltimore-md" },
  { city: "Milwaukee", state: "Wisconsin", stateAbbr: "WI", slug: "milwaukee-wi" },
  { city: "Albuquerque", state: "New Mexico", stateAbbr: "NM", slug: "albuquerque-nm" },
  { city: "Oklahoma City", state: "Oklahoma", stateAbbr: "OK", slug: "oklahoma-city-ok" },
  { city: "Salt Lake City", state: "Utah", stateAbbr: "UT", slug: "salt-lake-city-ut" },
  { city: "Boise", state: "Idaho", stateAbbr: "ID", slug: "boise-id" },
  { city: "Richmond", state: "Virginia", stateAbbr: "VA", slug: "richmond-va" },
  { city: "Spokane", state: "Washington", stateAbbr: "WA", slug: "spokane-wa" },
  { city: "Fresno", state: "California", stateAbbr: "CA", slug: "fresno-ca" },
  { city: "New Orleans", state: "Louisiana", stateAbbr: "LA", slug: "new-orleans-la" },
  { city: "Anchorage", state: "Alaska", stateAbbr: "AK", slug: "anchorage-ak" },
];

export function getCity(slug: string): City | undefined {
  return cities.find((c) => c.slug === slug);
}
