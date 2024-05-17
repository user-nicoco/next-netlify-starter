/** @type {import('next').NextConfig} */
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: true, // Ajouter des barres obliques à la fin des URL
  exportPathMap: async function (defaultPathMap) {
    return {
      '/': { page: '/' },
      // Ajoutez d'autres pages ici si nécessaire
    };
  }
};

module.exports = nextConfig;
