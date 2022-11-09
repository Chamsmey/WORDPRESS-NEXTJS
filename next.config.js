/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images:{
    domains:['http://localhost:8020/data-fetching/']
  }
}

module.exports = nextConfig
