/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/QR-Frontend",
  assetPrefix: "/QR-Frontend/",
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
