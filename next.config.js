/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['page.tsx', 'page.ts'],
  env: {
    API_KEY: process.env.API_KEY
  },
  output: 'standalone'
};

module.exports = nextConfig;
