import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "nullvoid.st-stargazer.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
