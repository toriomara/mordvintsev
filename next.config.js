/** @type {import('next').NextConfig} */
import NormalModuleReplacementPlugin from "webpack";

const nextConfig = {
  images: {
    domains: ['tailwindui.com', 'unsplash.com', 'images.unsplash.com', 'firebasestorage.googleapis.com']
  },
  plugins: [
    new NormalModuleReplacementPlugin(
      /email\/render/,
      path.resolve(__dirname, "./src/renderEmailFix.js"),
    ),
  ],
}

module.exports = nextConfig
