import Link from "next/link";
import CallToAction from "@/app/components/CallToAction";

export const metadata = {
  title: "Esteban Aleart — Founder & Lead Engineer",
  description:
    "Full-stack engineer especializado en arquitecturas B2B SaaS y sistemas de IA aplicada. Founder de PairProgramming. Madrid, España · LATAM y EU.",
  alternates: {
    canonical: "https://pairprogramming.com.ar/equipo/esteban-aleart",
  },
  openGraph: {
    title: "Esteban Aleart — Founder & Lead Engineer | PairProgramming",
    description:
      "Full-stack engineer especializado en arquitecturas B2B SaaS y sistemas de IA aplicada.",
    url: "https://pairprogramming.com.ar/equipo/esteban-aleart",
    type: "profile",
  },
};

const STACK = [
  "Next.js", "React", "TypeScript", "Node.js",
  "PostgreSQL", "AWS", "Docker", "n8n",
  "Tailwind CSS", "Vercel", "GitHub Actions",
];

const PROJECTS = [
  {
    name: "Mi Seguro de Auto",
    desc: "Plataforma de cotización de seguros con SEO programático.",
    href: "/portafolio/mi-seguro-de-auto---cotizador-de-seguros",
    category: "Seguros",
  },
  {
    name: "Tontin",
    desc: "Extensión de navegador con IA para productividad.",
    href: "/portafolio/tontin---asistente-ia-para-el-navegador",
    category: "IA / Productividad",
  },
  {
    name: "DoctorCar",
    desc: "Sistema de gestión integral para brokers de seguros.",
    href: "/portafolio/doctorcar---plataforma-de-gestion-para-brokers",
    category: "Automotriz",
  },
  {
    name: "TicketXEvent",
    desc: "Plataforma completa de gestión y venta de entradas.",
    href: "/portafolio/ticketxevent---plataforma-de-eventos",
    category: "Eventos",
  },
];

const LINKS = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/estebanaleart/" },
];

export default function EstebanAleartPage() {
  return (
    <>
      {/* Person Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Esteban Aleart",
            alternateName: "Esteban Aleart Salas",
            jobTitle: "Full-Stack Engineer & Founder",
            url: "https://pairprogramming.com.ar/equipo/esteban-aleart",
            worksFor: {
              "@type": "Organization",
              name: "PairProgramming",
              url: "https://pairprogramming.com.ar",
            },
            alumniOf: "SoyHenry",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Madrid",
              addressCountry: "ES",
            },
            knowsAbout: [
              "B2B SaaS Architecture",
              "Multi-tenant Systems",
              "Next.js", "React", "Node.js", "TypeScript",
              "PostgreSQL", "AWS",
              "CRM & ERP Development",
              "SEO técnico",
              "IA aplicada",
            ],
            sameAs: [
              "https://www.linkedin.com/in/estebanaleart/",
            ],
          }),
        }}
      />

      {/* Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Inicio", item: "https://pairprogramming.com.ar" },
              { "@type": "ListItem", position: 2, name: "Equipo", item: "https://pairprogramming.com.ar/nosotros" },
              { "@type": "ListItem", position: 3, name: "Esteban Aleart" },
            ],
          }),
        }}
      />

      <section className="py-section px-8">
        <div className="max-w-container mx-auto">
          {/* Breadcrumb */}
          <nav className="font-mono text-[13px] text-ink-subtle mb-8">
            <Link href="/" className="hover:text-ink transition-colors">Inicio</Link>
            <span className="mx-2 text-ink-tertiary">/</span>
            <Link href="/nosotros" className="hover:text-ink transition-colors">Equipo</Link>
            <span className="mx-2 text-ink-tertiary">/</span>
            <span className="text-ink">Esteban Aleart</span>
          </nav>

          {/* Header */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 items-start mb-16">
            <div>
              <span className="eyebrow-mono text-primary block mb-3">
                Founder & Lead Engineer
              </span>
              <h1 className="display-lg text-ink mb-4">Esteban Aleart</h1>
              <p className="text-body-lg text-ink-subtle max-w-[600px] mb-4">
                Full-stack engineer especializado en arquitecturas B2B SaaS,
                sistemas de IA aplicada y SEO técnico. Lidera el diseño e
                implementación de cada proyecto, desde la arquitectura hasta
                producción.
              </p>
              <p className="text-body-sm text-ink-tertiary">
                Madrid, España · trabaja con equipos en LATAM y EU
              </p>
            </div>

            {/* Avatar */}
            <div className="w-24 h-24 rounded-pill bg-primary/10 border border-primary/20 flex items-center justify-center">
              <span className="text-primary font-semibold text-3xl">EA</span>
            </div>
          </div>

          {/* Stack */}
          <div className="bg-surface-1 border border-hairline rounded-xl p-8 mb-16">
            <span className="eyebrow-mono text-ink-tertiary block mb-4">
              Stack tecnológico
            </span>
            <div className="flex flex-wrap gap-2">
              {STACK.map((tech) => (
                <span
                  key={tech}
                  className="bg-canvas text-ink-muted font-mono text-[13px] px-3.5 py-2.5 rounded-sm border border-hairline"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Proyectos destacados */}
          <div className="mb-16">
            <span className="eyebrow-mono text-ink-tertiary block mb-3">
              Proyectos destacados
            </span>
            <h2 className="headline text-ink mb-8">Casos liderados</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {PROJECTS.map((project) => (
                <Link
                  key={project.name}
                  href={project.href}
                  className="group bg-surface-1 border border-hairline rounded-lg p-6 hover:bg-surface-2 hover:border-hairline-strong transition-all duration-200"
                >
                  <span className="eyebrow-mono text-primary block mb-2">
                    {project.category}
                  </span>
                  <h3 className="text-card-title text-ink mb-2">{project.name}</h3>
                  <p className="text-body-sm text-ink-subtle">{project.desc}</p>
                </Link>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="mb-16">
            <span className="eyebrow-mono text-ink-tertiary block mb-4">
              Perfiles
            </span>
            <div className="flex flex-wrap gap-3">
              {LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-surface-1 hover:bg-surface-2 text-ink border border-hairline hover:border-hairline-strong font-medium text-body-sm px-4 py-2.5 rounded-md transition-all"
                >
                  {link.label} →
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CallToAction />
    </>
  );
}
