/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['github.com', 'storage.googleapis.com']
  }
}

module.exports = nextConfig
