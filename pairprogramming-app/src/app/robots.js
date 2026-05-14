export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/admin/", "/api/", "/admin"],
      },
    ],
    sitemap: "https://pairprogramming.com.ar/sitemap.xml",
    host: "https://pairprogramming.com.ar",
  };
}
