/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    PIXBAY_API_KEY: process.env.PIXBAY_API_KEY,
  },
  crossOrigin: "anonymous",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "pixabay.com",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;
