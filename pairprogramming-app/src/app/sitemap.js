import { SERVICES } from "./data/services";
import { portfolioVideos } from "./data/portfolioVideos";
import { LOCATIONS, INDUSTRIES } from "./data/seo-dimensions";

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

  // Static pages
  const staticPages = [
    { url: BASE_URL, changeFrequency: "weekly", priority: 1.0 },
    { url: `${BASE_URL}/servicios`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/portafolio`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE_URL}/nosotros`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/contacto`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/faq`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/equipo/esteban-aleart`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/privacidad`, changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE_URL}/terminos-condiciones`, changeFrequency: "yearly", priority: 0.3 },
  ].map((page) => ({ ...page, lastModified: now }));

  // Service pages
  const servicePages = SERVICES.map((s) => ({
    url: `${BASE_URL}/servicios/${s.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  // Portfolio pages
  const portfolioPages = portfolioVideos.map((p) => ({
    url: `${BASE_URL}/portafolio/${slugify(p.title)}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  // Location pages (/desarrollo-software/[locacion])
  const locationPages = LOCATIONS.map((l) => ({
    url: `${BASE_URL}/desarrollo-software/${l.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  // Location × Service pages (/desarrollo-software/[locacion]/[servicio])
  const locationServicePages = LOCATIONS.flatMap((l) =>
    SERVICES.map((s) => ({
      url: `${BASE_URL}/desarrollo-software/${l.slug}/${s.slug}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    }))
  );

  // Industry pages (/sectores/[industria])
  const industryPages = INDUSTRIES.map((i) => ({
    url: `${BASE_URL}/sectores/${i.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [
    ...staticPages,
    ...servicePages,
    ...portfolioPages,
    ...locationPages,
    ...locationServicePages,
    ...industryPages,
  ];
}
