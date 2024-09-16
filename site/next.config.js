/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'BrawlSys Hosting',
    description: 'The official store for BrawlSys Maintained Kasm images.',
    icon: 'https://registry.brawlsys.us/1.0/image.png',
    listUrl: 'https://registry.brawlsys.us/',
    contactUrl: 'https://github.com/BrawlSys-Hosting/brawlsys-images/issues',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
