/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/mfe-01', // publica tudo sob /login
  assetPrefix: '/mfe-01-static', // separa assets/_next desta zona
  images: { unoptimized: false },
};
module.exports = nextConfig;
