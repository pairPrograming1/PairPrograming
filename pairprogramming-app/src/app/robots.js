export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/admin/", "/api/", "/admin"],
      },
    ],
    sitemap: "https://www.pairprogramming.com.ar/sitemap.xml",
    host: "https://www.pairprogramming.com.ar",
  };
}
