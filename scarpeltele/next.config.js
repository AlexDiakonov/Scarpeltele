/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: { appDir: true },
  target: 'serverless',
  images: {
    domains: ['cdn.sanity.io'],
  },
};

module.exports = nextConfig;
