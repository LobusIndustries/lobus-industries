import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const TRADES: Record<string, { name: string; headline: string }> = {
  "plumber-websites": { name: "Plumbers", headline: "Websites for Plumbers" },
  "electrician-websites": { name: "Electricians", headline: "Websites for Electricians" },
  "landscaper-websites": { name: "Landscapers", headline: "Websites for Landscapers" },
  "cleaning-websites": { name: "Cleaning Services", headline: "Websites for Cleaning Services" },
  "hvac-websites": { name: "HVAC Companies", headline: "Websites for HVAC Companies" },
  "contractor-websites": { name: "Contractors", headline: "Websites for General Contractors" },
  "auto-detailing-websites": { name: "Auto Detailers", headline: "Websites for Auto Detailers" },
  "personal-trainer-websites": { name: "Personal Trainers", headline: "Websites for Personal Trainers" },
  "painter-websites": { name: "Painters", headline: "Websites for Painters" },
  "roofer-websites": { name: "Roofers", headline: "Websites for Roofing Companies" },
  "pest-control-websites": { name: "Pest Control", headline: "Websites for Pest Control Companies" },
  "pressure-washing-websites": { name: "Pressure Washing", headline: "Websites for Pressure Washing" },
  "handyman-websites": { name: "Handymen", headline: "Websites for Handymen" },
  "moving-company-websites": { name: "Moving Companies", headline: "Websites for Moving Companies" },
  "pool-service-websites": { name: "Pool Services", headline: "Websites for Pool Service Companies" },
  "dog-grooming-websites": { name: "Dog Groomers", headline: "Websites for Dog Groomers" },
};

export default async function OpengraphImage({
  params,
}: {
  params: Promise<{ trade: string }>;
}) {
  const { trade } = await params;
  const info = TRADES[trade] ?? { name: "Service Businesses", headline: "Websites for Service Businesses" };

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background:
            "radial-gradient(ellipse 900px 500px at 20% 20%, rgba(251,146,60,0.5), transparent 60%), radial-gradient(ellipse 700px 500px at 85% 80%, rgba(99,102,241,0.35), transparent 60%), #07080d",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div style={{ display: "flex", width: 52, height: 52, background: "#0b1220", borderRadius: 12, alignItems: "center", justifyContent: "center", position: "relative" }}>
            <div style={{ color: "white", fontSize: 36, fontWeight: 700, letterSpacing: -1 }}>L</div>
            <div style={{ position: "absolute", top: 8, right: 8, width: 11, height: 11, borderRadius: 999, background: "#fb923c" }} />
          </div>
          <div style={{ fontSize: 26, fontWeight: 600 }}>Lobus Industries</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div style={{ fontSize: 22, color: "#fb923c", fontWeight: 600 }}>{info.name}</div>
          <div style={{ fontSize: 76, fontWeight: 700, lineHeight: 1.0, letterSpacing: -3, color: "#f5f5f4" }}>
            {info.headline}.
          </div>
          <div style={{ fontSize: 30, color: "#94a3b8", lineHeight: 1.3 }}>
            Free to build. $100/month to host. Launch in about a week.
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 32, fontSize: 20, color: "#9ca3af" }}>
          <div style={{ display: "flex", gap: 8, alignItems: "baseline" }}>
            <span style={{ color: "white", fontSize: 30, fontWeight: 600 }}>$0</span>
            <span>build</span>
          </div>
          <div style={{ width: 1, height: 28, background: "#334155" }} />
          <div style={{ display: "flex", gap: 8, alignItems: "baseline" }}>
            <span style={{ color: "white", fontSize: 30, fontWeight: 600 }}>$100</span>
            <span>/mo hosting</span>
          </div>
          <div style={{ width: 1, height: 28, background: "#334155" }} />
          <div style={{ display: "flex", gap: 8, alignItems: "baseline" }}>
            <span style={{ color: "white", fontSize: 30, fontWeight: 600 }}>7 days</span>
            <span>to launch</span>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
