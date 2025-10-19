/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', 
  trailingSlash: true,      // genera HTML estático
  images: {
    unoptimized: true, // ⚠ desactiva la optimización de next/image
  },
};
module.exports = nextConfig;
