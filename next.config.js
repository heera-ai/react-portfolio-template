/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      '/': { page: '/' },
      '/resume': { page: '/resume' },
      '/blog': { page: '/blog' },
      // Add other pages here
    };
  }
}

module.exports = nextConfig

// // next.config.js
// module.exports = {
//   trailingSlash: true,
//   exportPathMap: async function (
//     defaultPathMap,
//     { dev, dir, outDir, distDir, buildId }
//   ) {
//     return {
//       '/': { page: '/' },
//       '/resume': { page: '/resume' },
//       '/blog': { page: '/blog' },
//       // Add other pages here
//     };
//   },
// }
