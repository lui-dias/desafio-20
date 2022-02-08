/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
}

module.exports = {
    images: {
        domains: ['via.placeholder.com'],
    },
    experimental: {
        styledComponents: true,
    },
}
