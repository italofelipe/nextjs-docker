/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    API_KEY: process.env.API_KEY
  },
  output: 'standalone'
};

module.exports = nextConfig;
