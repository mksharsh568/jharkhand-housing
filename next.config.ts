import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/jharkhand-housing",
  assetPrefix: "/jharkhand-housing",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
