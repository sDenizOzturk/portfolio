/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export", // Enables static export
  images: {
    unoptimized: true, // Disables Image Optimization for static export
  },
};

export default nextConfig;
