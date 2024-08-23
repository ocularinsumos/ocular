import createNextIntlPlugin from 'next-intl/plugin';
 
const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ['localhost','ocualrinsumosquirurgicos.com'], // Agrega dominios adicionales si es necesario
        unoptimized: true
      },
};

export default withNextIntl(nextConfig)
