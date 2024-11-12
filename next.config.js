/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        appDir: true,
    },
    images: {
        domains: ["fastly.picsum.photos", "example.com", "i.ibb.co"],
    },
};

module.exports = nextConfig;
