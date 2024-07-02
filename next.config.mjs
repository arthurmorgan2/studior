// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     static: true,
//     path: 'public',
//     output: 'export',
//     images: { unoptimized: true }
// };

// export default nextConfig;
/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        unoptimized: true,
    },
    trailingSlash: true,
    distDir: 'out',
};

export default nextConfig;
