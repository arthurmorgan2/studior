/** @type {import('next').NextConfig} */
const nextConfig = {
    static: true,
    path: 'public',
    output: 'export',
    images: { unoptimized: true }
};

export default nextConfig;