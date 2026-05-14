/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["res.cloudinary.com"],
  },

  // 301 redirect: www → sin www (dominio primario: pairprogramming.com.ar)
  // En Vercel: agregar ambos dominios, marcar pairprogramming.com.ar como primary.
  // Vercel maneja el redirect a nivel DNS automáticamente.
  // Este redirect es respaldo para entornos non-Vercel.
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.pairprogramming.com.ar" }],
        destination: "https://pairprogramming.com.ar/:path*",
        permanent: true, // 301
      },
    ];
  },
};

export default nextConfig;
