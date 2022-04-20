/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['live.staticflickr.com'],
    deviceSizes: [400, 640, 750, 828, 1080, 1200, 1920, 2048],
  },
}

module.exports = nextConfig
