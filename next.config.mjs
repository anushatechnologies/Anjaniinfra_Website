/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
    domains: ['images.unsplash.com'],
  },
  async redirects() {
    return [
      {
        source: '/projects/1',
        destination: '/',
        permanent: true,
      },
      {
        source: '/projects',
        destination: '/',
        permanent: true,
      },
      {
        source: '/projects/:path*',
        destination: '/',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
