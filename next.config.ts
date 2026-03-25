import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  async redirects() {
    return [
      {
        source: '/drive',
        destination: 'https://drive.google.com/drive/folders/1q4fPFrRL2q1wM3d7XHRFbOIC6UX6yMAO?usp=drive_link',
        permanent: false,
      },
      {
        source: '/linkedin',
        destination: 'https://www.linkedin.com/in/aaron-fuentes-diocares',
        permanent: false,
      },
    ];
  },
  images: {
    unoptimized: true,
    domains: ['images.credly.com', 'www.svgrepo.com', 'www.freecodecamp.org'],
  },
};

export default nextConfig;
