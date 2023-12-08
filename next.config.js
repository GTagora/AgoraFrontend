/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
              protocol: "https",
              hostname: "firebasestorage.googleapis.com",
            },
        ],
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