/** @type {import('next').NextConfig} */
const nextConfig = {
  ...(process.env.NODE_ENV === 'production' ? {
    output: 'export',
    basePath: '/Portfolio',
    assetPrefix: '/Portfolio/',
  } : {}),
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
