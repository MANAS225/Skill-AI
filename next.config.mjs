/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "randomuser.me",
      },
    ],
  },

  // ✅ ADD THIS BLOCK
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
