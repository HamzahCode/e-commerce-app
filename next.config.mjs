/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "fakestoreapi.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "api.escuelajs.co",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "fakestoreapi.in/api/**",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "storage.googleapis.com",
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;
