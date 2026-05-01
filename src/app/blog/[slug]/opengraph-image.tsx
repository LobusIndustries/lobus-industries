import { ImageResponse } from "next/og";
import { getPost } from "../posts";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  const title = post?.title ?? "Lobus Industries Blog";
  const excerpt = post?.excerpt ?? "Advice for service businesses on websites, SEO, and getting more customers.";

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
            "radial-gradient(ellipse 800px 500px at 15% 80%, rgba(99,102,241,0.4), transparent 60%), radial-gradient(ellipse 700px 400px at 85% 10%, rgba(244,63,94,0.3), transparent 60%), #07080d",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div style={{ display: "flex", width: 52, height: 52, background: "#0b1220", borderRadius: 12, alignItems: "center", justifyContent: "center", position: "relative" }}>
            <div style={{ color: "white", fontSize: 36, fontWeight: 700, letterSpacing: -1 }}>L</div>
            <div style={{ position: "absolute", top: 8, right: 8, width: 11, height: 11, borderRadius: 999, background: "#fb923c" }} />
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 22, fontWeight: 600 }}>Lobus Industries</div>
            <div style={{ fontSize: 16, color: "#6b7280" }}>Blog</div>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ fontSize: 64, fontWeight: 700, lineHeight: 1.05, letterSpacing: -2, color: "#f5f5f4", maxWidth: 1000 }}>
            {title}
          </div>
          <div style={{ fontSize: 26, color: "#94a3b8", lineHeight: 1.4, maxWidth: 900 }}>
            {excerpt}
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 12, fontSize: 18, color: "#6b7280" }}>
          <span>lobusindustries.com/blog</span>
          <span>·</span>
          <span>Free to build · $100/mo to host</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
