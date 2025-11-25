/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
      {hostname: 'images.unsplash.com'},
      {hostname: 'plus.unsplash.com'},
      {hostname: 'images.pexels.com'},
      {hostname: 'placehold.co'},      
    ],
  },
};

export default nextConfig;
