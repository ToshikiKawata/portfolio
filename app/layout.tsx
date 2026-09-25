import type { Metadata } from "next";
import { Geist, Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const siteTitle = "Toshiki Kawata | Portfolio";
const siteDescription =
  "システムエンジニア / 個人開発者 Toshiki Kawata のポートフォリオ。企画からストア公開まで一人で行った個人開発プロジェクトを紹介しています。";

export const metadata: Metadata = {
  metadataBase: new URL("https://toshikikawata.vercel.app"),
  title: siteTitle,
  description: siteDescription,
  // 共有時のプレビュー画像は app/opengraph-image.tsx で生成
  openGraph: {
    type: "website",
    locale: "ja_JP",
    siteName: "Toshiki Kawata Portfolio",
    title: siteTitle,
    description: siteDescription,
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      className={`${geistSans.variable} ${notoSansJP.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
