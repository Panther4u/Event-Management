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
    trailingSlash: true,
    images: {
        unoptimized: true, // Disable image optimization for static export
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
    // async exportPathMap(defaultPathMap) {
    //     // Exclude pages using getServerSideProps from export
    //     const pathMap = { ...defaultPathMap };
    //     delete pathMap['/admin/auth'];
    //     delete pathMap['/users/signup'];
    //     delete pathMap['/users/signin']; // Exclude this page too
    //     return pathMap;
    // },
};

module.exports = nextConfig;


