import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";
const repoName = "my-portfolio";
const repoBasePath = `/${repoName}`;

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: isProd ? repoBasePath : undefined,
  assetPrefix: isProd ? `${repoBasePath}/` : undefined,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
