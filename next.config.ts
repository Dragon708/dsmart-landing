import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Hay dos layouts raíz (español e inglés), así que el 404 se define aparte.
  experimental: {
    globalNotFound: true,
  },
};

export default nextConfig;
