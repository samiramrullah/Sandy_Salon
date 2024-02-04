/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [],
    unoptimized:true
  },
  eslint: {
    ignoreDuringBuilds: true,
},
}

module.exports = nextConfig


