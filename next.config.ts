import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "http", hostname: "127.0.0.1", port: "8000" },
      { protocol: "https", hostname: "mystery-game.onrender.com" },
      { protocol: "https", hostname: "libretranslate.com" },
      { protocol: "https", hostname: "api.dicebear.com" }, 
      { protocol: "https", hostname: "ai-noir.vercel.app" }, 
    ],
    domains: ["i.ibb.co"], 
  },
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
    NEXT_PUBLIC_CASE_INTROAPI_URL: process.env.NEXT_PUBLIC_CASE_INTROAPI_URL,
    NEXT_PUBLIC_CASE_DETAIL_API_URL: process.env.NEXT_PUBLIC_CASE_DETAIL_API_URL,
    NEXT_PUBLIC_LANGUAGE_API_URL: process.env.NEXT_PUBLIC_LANGUAGE_API_URL,
  },
};

module.exports = nextConfig;
