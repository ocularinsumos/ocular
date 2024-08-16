/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ['localhost','carolopezbravo.com'], // Agrega dominios adicionales si es necesario
        unoptimized: true
      },
};

export default nextConfig;
