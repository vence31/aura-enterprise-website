/** @type {import('next').NextConfig} */
const isGithubActions = process.env.GITHUB_ACTIONS || false;
let repo = "aura-enterprise-website";
let assetPrefix = "";
let basePath = "";

if (isGithubActions) {
  assetPrefix = `/${repo}/`;
  basePath = `/${repo}`;
}

const nextConfig = {
  output: "export",
  basePath: basePath,
  assetPrefix: assetPrefix,
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
