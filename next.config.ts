import type { NextConfig } from "next";

const nextConfig: NextConfig = {  
  output: 'export',
  distDir: 'out',
  images: { unoptimized: true }, // Next.js ne supporte pas bien les images optimisées sur GitHub Pages
  basePath: '/test-action', // Important pour que GitHub Pages gère bien les liens
  /* config options here */
};

export default nextConfig;
