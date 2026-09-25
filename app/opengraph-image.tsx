import { ImageResponse } from "next/og";

// URLを共有したときのプレビュー画像（ビルド時に静的生成）。
// 同梱フォントは欧文のみのため、画像内の文字は英語にしている。
export const alt = "Toshiki Kawata — Systems Engineer / Indie Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px 88px",
          backgroundColor: "#0c0d10",
          color: "#ededed",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 26,
            letterSpacing: "0.2em",
            color: "#60a5fa",
          }}
        >
          PORTFOLIO
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{ display: "flex", fontSize: 108, letterSpacing: "-0.03em" }}
          >
            Toshiki Kawata
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 12,
              fontSize: 42,
              color: "#9ca3af",
            }}
          >
            Systems Engineer / Indie Developer
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 28,
              fontSize: 28,
              color: "#9ca3af",
            }}
          >
            OutSystems · React Native · Next.js · Supabase · Godot
          </div>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              width: 420,
              height: 12,
              borderRadius: 999,
              backgroundImage: "linear-gradient(90deg, #60a5fa, #8b5cf6)",
            }}
          />
          <div style={{ display: "flex", fontSize: 28, color: "#9ca3af" }}>
            toshikikawata.vercel.app
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
