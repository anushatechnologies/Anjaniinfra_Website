process.env.NEXT_PRIVATE_WORKER_THREADS = '0';
process.env.NEXT_CPU_NUM = '1';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    unoptimized: true,
    domains: ['images.unsplash.com'],
  },


};

export default nextConfig;
