process.env.NEXT_PRIVATE_WORKER_THREADS = '0';
process.env.NEXT_CPU_NUM = '1';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
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
        source: '/projects/:id(\\d+)',
        destination: '/',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
