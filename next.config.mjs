/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ['localhost','ocualrinsumosquirurgicos.com'], // Agrega dominios adicionales si es necesario
        unoptimized: true
      },
};

export default nextConfig;
