/** @type {import('next').NextConfig} */

import withPWA from 'next-pwa';

const pwaConfig = withPWA({
  dest: "public",
});

const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ['localhost', 'ocualrinsumosquirurgicos.com', 'ocular-red.vercel.app'], // Add more domains if needed
        unoptimized: true
    },
};

export default {
    ...pwaConfig,
    ...nextConfig,
};
