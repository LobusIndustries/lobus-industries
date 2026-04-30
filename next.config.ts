import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    // Tree-shake these packages — eliminates unused exports from the client bundle
    optimizePackageImports: ["@vercel/analytics", "@vercel/speed-insights"],
  },
  compiler: {
    // Strip console.* calls in production builds
    removeConsole: true,
  },
};

export default nextConfig;
