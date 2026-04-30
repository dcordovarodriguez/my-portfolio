import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";
const repoName = "my-portfolio";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: isProd ? `/${repoName}` : undefined,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
