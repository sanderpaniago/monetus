/** @type {import('next').NextConfig} */
const withPlugins = require('next-compose-plugins')
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
})

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['github.com', 'storage.googleapis.com']
  }
}

module.exports = withPlugins([[withBundleAnalyzer]], nextConfig)
