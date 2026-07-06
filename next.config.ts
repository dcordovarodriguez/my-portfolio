import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_PAGES === "true";
const repoName = "dashi-sushi-prototype";
const repoBasePath = `/${repoName}`;

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: isGitHubPages ? repoBasePath : undefined,
  assetPrefix: isGitHubPages ? `${repoBasePath}/` : undefined,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
