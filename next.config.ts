import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static Export
  output: "export",
  trailingSlash: true,

  images: {
    unoptimized: true,
  },

  // Tailwind CSS + Turbopack
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;