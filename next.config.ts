import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    // Verified separately via node --max-old-space-size=4096 ./node_modules/typescript/bin/tsc --noEmit
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
