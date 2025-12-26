import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    formats: ['image/webp', 'image/avif'],
    qualities: [75, 85],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img1.wsimg.com',
        pathname: '/isteam/ip/**',
      },
    ],
  },
};

export default nextConfig;
