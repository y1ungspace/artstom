/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '1337',
        pathname: '/uploads/**',
      },
      {
        protocol: 'https',
        hostname: 'www.dropbox.com',
        port: '',
        pathname: '/s/**',
      },
      {
        protocol: 'https',
        hostname: 'https://artstom.vercel.app',
        port: '',
        pathname: '/_next/**',
      },
    ],
  },
}

module.exports = nextConfig
