/** @type {import('next').NextConfig} */
const nextConfig = {
  // Sitio 100% estático para desplegar en Cloudflare Pages: `next build`
  // genera la carpeta `out/` lista para subir, sin necesitar un servidor
  // Node ni Workers.
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    // Las imágenes locales ya están pre-convertidas a .webp, así que no
    // necesitamos el optimizador de imágenes de Next en tiempo de ejecución
    // (además, la exportación estática lo requiere sí o sí).
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'hebbkx1anhila5yf.public.blob.vercel-storage.com',
      },
    ],
  },
  // La exportación estática no soporta redirects() de Next: el redirect de
  // /insolvenciaeconomica -> / vive ahora en public/_redirects (formato que
  // entiende Cloudflare Pages).
}

export default nextConfig
