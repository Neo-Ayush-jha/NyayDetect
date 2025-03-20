import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { hostname: "127.0.0.1:8000" },
      { hostname: "libretranslate.com/languages" },
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
