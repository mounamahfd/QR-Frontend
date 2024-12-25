const isGithubActions = process.env.GITHUB_ACTIONS || false;

let assetPrefix = "";
let basePath = "";

if (isGithubActions) {
  const repo = process.env.GITHUB_REPOSITORY?.split("/")[1]; // Extract the repo name
  assetPrefix = `/${repo}/`;
  basePath = `/${repo}`;
}

module.exports = {
  output: "export", // Ensure static export
  assetPrefix, // Prefix for static assets
  basePath, // Base path for routing
  trailingSlash: true, // Ensure all routes have trailing slashes (important for static hosting)
  images: {
    unoptimized: true, // Disable image optimization for GitHub Pages
  },
};
