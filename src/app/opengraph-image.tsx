import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Lobus Industries — websites for service businesses, free to build, $100/month";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
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
            "radial-gradient(ellipse 900px 500px at 20% 20%, rgba(251,146,60,0.55), transparent 60%), radial-gradient(ellipse 800px 500px at 85% 20%, rgba(244,63,94,0.35), transparent 60%), radial-gradient(ellipse 600px 500px at 50% 90%, rgba(99,102,241,0.35), transparent 60%), #07080d",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              display: "flex",
              width: 64,
              height: 64,
              background: "#0b1220",
              borderRadius: 16,
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
            }}
          >
            <div
              style={{
                color: "white",
                fontSize: 44,
                fontWeight: 700,
                letterSpacing: -2,
              }}
            >
              L
            </div>
            <div
              style={{
                position: "absolute",
                top: 10,
                right: 10,
                width: 14,
                height: 14,
                borderRadius: 999,
                background: "#fb923c",
              }}
            />
          </div>
          <div style={{ fontSize: 32, fontWeight: 600, letterSpacing: -0.5 }}>
            Lobus Industries
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div
            style={{
              fontSize: 84,
              fontWeight: 600,
              lineHeight: 1.02,
              letterSpacing: -3,
              color: "#f5f5f4",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <span>Websites that win</span>
            <span
              style={{
                background:
                  "linear-gradient(90deg, #fb923c 0%, #f43f5e 100%)",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              customers for you.
            </span>
          </div>
          <div
            style={{
              fontSize: 30,
              color: "#cbd5e1",
              maxWidth: 900,
              lineHeight: 1.3,
            }}
          >
            Free to build. $100/month to host. For service-based businesses.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 36,
            fontSize: 22,
            color: "#9ca3af",
          }}
        >
          <div style={{ display: "flex", gap: 10, alignItems: "baseline" }}>
            <span style={{ color: "white", fontSize: 34, fontWeight: 600 }}>
              $0
            </span>
            <span>build</span>
          </div>
          <div style={{ width: 1, height: 32, background: "#334155" }} />
          <div style={{ display: "flex", gap: 10, alignItems: "baseline" }}>
            <span style={{ color: "white", fontSize: 34, fontWeight: 600 }}>
              $100
            </span>
            <span>/mo hosting</span>
          </div>
          <div style={{ width: 1, height: 32, background: "#334155" }} />
          <div style={{ display: "flex", gap: 10, alignItems: "baseline" }}>
            <span style={{ color: "white", fontSize: 34, fontWeight: 600 }}>
              7d
            </span>
            <span>launch</span>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
