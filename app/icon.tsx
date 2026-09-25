import { ImageResponse } from "next/og";

// ブラウザのタブに出るアイコン（ビルド時に静的生成）
export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 7,
          backgroundImage: "linear-gradient(135deg, #2563eb, #8b5cf6)",
          color: "#ffffff",
          fontSize: 17,
          letterSpacing: "-0.04em",
        }}
      >
        TK
      </div>
    ),
    { ...size }
  );
}
