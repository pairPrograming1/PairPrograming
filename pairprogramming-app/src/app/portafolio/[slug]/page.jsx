import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { portfolioVideos } from "../../data/portfolioVideos";
import CallToAction from "../../components/CallToAction";

function slugify(title) {
  return title
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export async function generateStaticParams() {
  return portfolioVideos.map((p) => ({ slug: slugify(p.title) }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = portfolioVideos.find((p) => slugify(p.title) === slug);
  if (!project) return {};

  return {
    title: `${project.title} — Portafolio`,
    description: project.description,
    alternates: {
      canonical: `https://pairprogramming.com.ar/portafolio/${slug}`,
    },
    openGraph: {
      title: `${project.title} | PairProgramming`,
      description: project.description.slice(0, 160),
      url: `https://pairprogramming.com.ar/portafolio/${slug}`,
      type: "website",
    },
  };
}

export default async function ProyectoPage({ params }) {
  const { slug } = await params;
  const project = portfolioVideos.find((p) => slugify(p.title) === slug);
  if (!project) notFound();

  const metrics = [
    { label: "Categoría", value: project.category },
    { label: "Estado", value: project.duration },
    { label: "Stack principal", value: project.technologies[0] },
    { label: "Tecnologías", value: `${project.technologies.length} techs` },
  ];

  return (
    <>
      {/* CreativeWork Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CreativeWork",
            name: project.title,
            description: project.description,
            url: project.url,
            creator: {
              "@type": "Organization",
              name: "PairProgramming",
              url: "https://pairprogramming.com.ar",
            },
            keywords: project.technologies.join(", "),
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
              { "@type": "ListItem", position: 2, name: "Portafolio", item: "https://pairprogramming.com.ar/portafolio" },
              { "@type": "ListItem", position: 3, name: project.title },
            ],
          }),
        }}
      />

      <section className="py-section px-8">
        <div className="max-w-container mx-auto">
          {/* Breadcrumb visual */}
          <nav className="font-mono text-[13px] text-ink-subtle mb-8">
            <Link href="/" className="hover:text-ink transition-colors">Inicio</Link>
            <span className="mx-2 text-ink-tertiary">/</span>
            <Link href="/portafolio" className="hover:text-ink transition-colors">Portafolio</Link>
            <span className="mx-2 text-ink-tertiary">/</span>
            <span className="text-ink">{project.title.split(" - ")[0]}</span>
          </nav>

          {/* Hero */}
          <div className="mb-12">
            <span className="eyebrow-mono text-primary block mb-3">
              {project.category}
            </span>
            <h1 className="display-lg text-ink mb-4">{project.title}</h1>

            {/* Metrics grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
              {metrics.map((m) => (
                <div key={m.label} className="bg-surface-1 border border-hairline rounded-lg p-4">
                  <div className="text-caption text-ink-tertiary mb-1">{m.label}</div>
                  <div className="text-body font-medium text-ink">{m.value}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          {project.image && (
            <div className="bg-surface-1 border border-hairline rounded-xl overflow-hidden mb-12">
              <Image
                src={project.image}
                alt={`Captura de ${project.title}`}
                width={1280}
                height={720}
                className="w-full h-auto"
              />
            </div>
          )}

          {/* Description */}
          <div className="max-w-[720px] mx-auto mb-16">
            <span className="eyebrow-mono text-ink-tertiary block mb-3">
              Sobre el proyecto
            </span>
            <p className="text-body-lg text-ink-muted leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Features */}
          <div className="mb-16">
            <span className="eyebrow-mono text-ink-tertiary block mb-3">
              Funcionalidades clave
            </span>
            <h2 className="headline text-ink mb-8">Qué construimos</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.features.map((feature, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 bg-surface-1 border border-hairline rounded-lg p-4"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  <span className="text-body-sm text-ink-muted">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Stack */}
          <div className="bg-surface-1 border border-hairline rounded-xl p-8 mb-16">
            <span className="eyebrow-mono text-ink-tertiary block mb-4">
              Stack utilizado
            </span>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="bg-canvas text-ink-muted font-mono text-[13px] px-3.5 py-2.5 rounded-sm border border-hairline"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="flex flex-wrap items-center gap-3">
            {project.url && (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary hover:bg-primary-hover text-on-primary font-medium text-[15px] px-5 py-3 rounded-md transition-colors"
              >
                Visitar proyecto
              </a>
            )}
            <Link
              href="/portafolio"
              className="bg-surface-1 hover:bg-surface-2 text-ink border border-hairline hover:border-hairline-strong font-medium text-[15px] px-5 py-3 rounded-md transition-all"
            >
              Ver más casos
            </Link>
          </div>
        </div>
      </section>

      <CallToAction />
    </>
  );
}
