import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
     
    ],
  },
   async redirects() {
  return [
    {
      source: "/blog/grid",
      destination: "/blog",
      permanent: true,
    },
    {
      source: "/blog/sidebar",
      destination: "/blog",
      permanent: true,
    },
  ];
},
};

export default nextConfig;