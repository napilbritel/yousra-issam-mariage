import type { NextConfig } from "next";

// Sur GitHub Pages le site est servi sous /<nom-du-dépôt> (voir scripts/deploy.sh)
const basePath = process.env.PAGES_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  images: { unoptimized: true },
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
    // Identifiant de version : permet au site de détecter une nouvelle mise en ligne
    NEXT_PUBLIC_BUILD_ID: String(Date.now()),
  },
};

export default nextConfig;
