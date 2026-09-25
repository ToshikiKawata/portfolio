import { ImageResponse } from "next/og";

// iPhoneのホーム画面に追加したときのアイコン（角丸はiOS側で付く）
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundImage: "linear-gradient(135deg, #2563eb, #8b5cf6)",
          color: "#ffffff",
          fontSize: 84,
          letterSpacing: "-0.04em",
        }}
      >
        TK
      </div>
    ),
    { ...size }
  );
}
