import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  serverExternalPackages: ["async_hooks"],
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.workers.dev',
      },
      {
        protocol: 'https',
        hostname: '**.airtableusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'dl.airtable.com',
      },
    ],
  },
};

export default nextConfig;

import('@opennextjs/cloudflare').then(m => m.initOpenNextCloudflareForDev());
