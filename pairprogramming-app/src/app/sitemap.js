import { SERVICES } from "./data/services";
import { portfolioVideos } from "./data/portfolioVideos";
import { LOCATIONS, INDUSTRIES } from "./data/seo-dimensions";
import { ARTICLES } from "./data/articles";

const BASE_URL = "https://pairprogramming.com.ar";

function slugify(title) {
  return title
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export default function sitemap() {
  const now = new Date();

  // Static pages — bilingual (es + en)
  const staticPaths = [
    { path: "", changeFrequency: "weekly", priority: 1.0 },
    { path: "/servicios", changeFrequency: "monthly", priority: 0.9 },
    { path: "/portafolio", changeFrequency: "weekly", priority: 0.9 },
    { path: "/nosotros", changeFrequency: "monthly", priority: 0.8 },
    { path: "/contacto", changeFrequency: "monthly", priority: 0.8 },
    { path: "/faq", changeFrequency: "monthly", priority: 0.6 },
    { path: "/blog", changeFrequency: "weekly", priority: 0.9 },
    { path: "/equipo/esteban-aleart", changeFrequency: "monthly", priority: 0.7 },
    { path: "/privacidad", changeFrequency: "yearly", priority: 0.3 },
    { path: "/terminos-condiciones", changeFrequency: "yearly", priority: 0.3 },
  ];

  const bilingualStatic = staticPaths.flatMap((page) => [
    {
      url: `${BASE_URL}${page.path}`,
      lastModified: now,
      changeFrequency: page.changeFrequency,
      priority: page.priority,
      alternates: {
        languages: {
          es: `${BASE_URL}${page.path}`,
          en: `${BASE_URL}/en${page.path}`,
        },
      },
    },
    {
      url: `${BASE_URL}/en${page.path}`,
      lastModified: now,
      changeFrequency: page.changeFrequency,
      priority: page.priority * 0.9,
      alternates: {
        languages: {
          es: `${BASE_URL}${page.path}`,
          en: `${BASE_URL}/en${page.path}`,
        },
      },
    },
  ]);

  // Service pages — bilingual
  const servicePages = SERVICES.flatMap((s) => [
    {
      url: `${BASE_URL}/servicios/${s.slug}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
      alternates: {
        languages: {
          es: `${BASE_URL}/servicios/${s.slug}`,
          en: `${BASE_URL}/en/servicios/${s.slug}`,
        },
      },
    },
    {
      url: `${BASE_URL}/en/servicios/${s.slug}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.72,
      alternates: {
        languages: {
          es: `${BASE_URL}/servicios/${s.slug}`,
          en: `${BASE_URL}/en/servicios/${s.slug}`,
        },
      },
    },
  ]);

  // Portfolio pages — bilingual
  const portfolioPages = portfolioVideos.flatMap((p) => {
    const slug = slugify(p.title);
    return [
      {
        url: `${BASE_URL}/portafolio/${slug}`,
        lastModified: now,
        changeFrequency: "monthly",
        priority: 0.7,
        alternates: {
          languages: {
            es: `${BASE_URL}/portafolio/${slug}`,
            en: `${BASE_URL}/en/portafolio/${slug}`,
          },
        },
      },
      {
        url: `${BASE_URL}/en/portafolio/${slug}`,
        lastModified: now,
        changeFrequency: "monthly",
        priority: 0.63,
        alternates: {
          languages: {
            es: `${BASE_URL}/portafolio/${slug}`,
            en: `${BASE_URL}/en/portafolio/${slug}`,
          },
        },
      },
    ];
  });

  // Blog pages — bilingual (UI in English, articles in Spanish)
  const blogPages = ARTICLES.flatMap((a) => [
    {
      url: `${BASE_URL}/blog/${a.slug}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
      alternates: {
        languages: {
          es: `${BASE_URL}/blog/${a.slug}`,
          en: `${BASE_URL}/en/blog/${a.slug}`,
        },
      },
    },
    {
      url: `${BASE_URL}/en/blog/${a.slug}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.63,
      alternates: {
        languages: {
          es: `${BASE_URL}/blog/${a.slug}`,
          en: `${BASE_URL}/en/blog/${a.slug}`,
        },
      },
    },
  ]);

  // Location pages — Spanish only (no English version)
  const locationPages = LOCATIONS.map((l) => ({
    url: `${BASE_URL}/desarrollo-software/${l.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  // Location × Service pages — Spanish only
  const locationServicePages = LOCATIONS.flatMap((l) =>
    SERVICES.map((s) => ({
      url: `${BASE_URL}/desarrollo-software/${l.slug}/${s.slug}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    }))
  );

  // Industry pages — Spanish only
  const industryPages = INDUSTRIES.map((i) => ({
    url: `${BASE_URL}/sectores/${i.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [
    ...bilingualStatic,
    ...servicePages,
    ...portfolioPages,
    ...blogPages,
    ...locationPages,
    ...locationServicePages,
    ...industryPages,
  ];
}
