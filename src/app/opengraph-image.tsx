import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt =
  "Horizons Communs — Consultant en transformation des organisations engagées";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "60px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "40px",
          }}
        >
          <div
            style={{
              fontSize: "72px",
              fontWeight: 800,
              color: "#B8860B",
              letterSpacing: "-2px",
            }}
          >
            HC
          </div>
        </div>
        <div
          style={{
            fontSize: "48px",
            fontWeight: 700,
            color: "#ffffff",
            textAlign: "center",
            lineHeight: 1.2,
            marginBottom: "20px",
          }}
        >
          Horizons Communs
        </div>
        <div
          style={{
            fontSize: "24px",
            color: "#B8860B",
            textAlign: "center",
            lineHeight: 1.4,
            maxWidth: "800px",
          }}
        >
          Consultant en transformation des organisations engagées
        </div>
        <div
          style={{
            fontSize: "18px",
            color: "#a0aec0",
            textAlign: "center",
            marginTop: "30px",
          }}
        >
          Formation · Management de transition · Conférences · Structuration
        </div>
        <div
          style={{
            fontSize: "16px",
            color: "#718096",
            position: "absolute",
            bottom: "30px",
          }}
        >
          horicoms.com
        </div>
      </div>
    ),
    { ...size }
  );
}

