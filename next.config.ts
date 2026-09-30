import type { NextConfig } from "next";

// Sur GitHub Pages le site est servi sous /<nom-du-dépôt> (voir .github/workflows/deploy.yml)
const basePath = process.env.PAGES_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  images: { unoptimized: true },
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
};

export default nextConfig;
