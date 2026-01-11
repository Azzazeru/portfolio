import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
    domains: ['images.credly.com', 'www.svgrepo.com', 'www.freecodecamp.org'],
  },
};

export default nextConfig;
