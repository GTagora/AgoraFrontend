/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['firebasestorage.googleapis.com'],
    },
    eslint: {
        // ignoreDuringBuilds: true,
    },
    typescript: {
        ignoreBuildErrors: true,
    },
    distDir: "dist"
}

module.exports = nextConfig;