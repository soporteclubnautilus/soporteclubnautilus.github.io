/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', 
  trailingSlash: true,      // genera HTML estático
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',   // o limitar a dominios específicos
      },
    ],
  },
};
module.exports = nextConfig;
