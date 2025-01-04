import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    domains: [
      'd2seqvvyy3b8p2.cloudfront.net',
      'bs.plantnet.org'
    ],
  },
};

export default nextConfig;
