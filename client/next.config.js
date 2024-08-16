// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   images: {
//     remotePatterns: [
//       {
//         protocol: "https",
//         hostname: "**",
//       },
//       {
//         protocol: "http",
//         hostname: "**",
//       },
//     ],
//     unoptimized: true,  // Disable image optimization for static exports
//   },
//   output: 'export',  // Enable static export
// };

// module.exports = nextConfig;



/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = {
  images: {
      remotePatterns: [
          {
              protocol: "https",
              hostname: "**",
          },
          {
              protocol: "http",
              hostname: "**",
          },
      ],
  },
};