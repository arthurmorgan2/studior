/** @type {import('next').NextConfig} */
const nextConfig = {
    // Enable static generation
    target: 'static',
    // Output directory for static HTML files
    output: 'public',
    // Enable internationalization support
    i18n: false,
    // Enable server-side rendering (optional)
    // target: 'serverless',
};

export default nextConfig;