import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Slash Rush は Snake Ninja としてリリースしたため、旧URLを転送する
      {
        source: "/projects/slash-rush",
        destination: "/projects/snake-ninja",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
