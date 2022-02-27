/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
}

module.exports = {
    images: {
        domains: ['via.placeholder.com'],
    },
    i18n: {
        locales: ['pt-BR'],
        defaultLocale: 'pt-BR',
    },
}
