/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'c.animaapp.com',
      },
    ],
  },
}

module.exports = nextConfig
