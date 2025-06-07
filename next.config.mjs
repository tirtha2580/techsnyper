/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
    domains: ['assets-global.website-files.com'],
  },
  output: 'export', // Enable static exports
  distDir: 'dist', // Use a relative path
};

export default nextConfig;