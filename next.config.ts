import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(graphql|gql)$/,
      exclude: /node_modules/,
      // use: [{ loader: "graphql-tag/loader" }],
      use: "raw-loader",
    });

    return config;
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.shopify.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
