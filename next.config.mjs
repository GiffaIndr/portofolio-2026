/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // Allows portable deployment and local static export if needed
  },
};

export default nextConfig;
