import { notFound } from "next/navigation";
import Link from "next/link";
import { SERVICES } from "@/app/data/services";
import { portfolioVideos } from "@/app/data/portfolioVideos";
import CallToAction from "@/app/components/CallToAction";
import DataReal from "@/app/components/DataReal";
import { getDatoRealServicio, datoRealToJsonLd } from "@/app/lib/datos-reales";

export async function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) return {};

  return {
    title: `${service.name} — Servicios`,
    description: service.longDesc,
    alternates: {
      canonical: `https://pairprogramming.com.ar/servicios/${slug}`,
    },
    openGraph: {
      title: `${service.name} | PairProgramming`,
      description: service.desc,
      url: `https://pairprogramming.com.ar/servicios/${slug}`,
      type: "website",
    },
  };
}

function slugifyProject(title) {
  return title
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export default async function ServicioPage({ params }) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) notFound();

  const datoReal = getDatoRealServicio(slug);
  const datasetJsonLd = datoRealToJsonLd(datoReal);

  const relatedProjects = portfolioVideos.filter((p) =>
    service.casosRelacionados?.some(
      (ref) => slugifyProject(p.title).includes(ref)
    )
  );

  return (
    <>
      {/* Dataset Schema */}
      {datasetJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(datasetJsonLd) }}
        />
      )}

      {/* Service + FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "Service",
              name: service.name,
              description: service.longDesc,
              provider: {
                "@type": "Organization",
                name: "PairProgramming",
                url: "https://pairprogramming.com.ar",
              },
            },
            ...(service.faq?.length
              ? [
                  {
                    "@context": "https://schema.org",
                    "@type": "FAQPage",
                    mainEntity: service.faq.map((f) => ({
                      "@type": "Question",
                      name: f.question,
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: f.answer,
                      },
                    })),
                  },
                ]
              : []),
          ]),
        }}
      />

      {/* Breadcrumb */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Inicio", item: "https://pairprogramming.com.ar" },
              { "@type": "ListItem", position: 2, name: "Servicios", item: "https://pairprogramming.com.ar/servicios" },
              { "@type": "ListItem", position: 3, name: service.name },
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
            <Link href="/servicios" className="hover:text-ink transition-colors">Servicios</Link>
            <span className="mx-2 text-ink-tertiary">/</span>
            <span className="text-ink">{service.name}</span>
          </nav>

          {/* Hero */}
          <div className="max-w-[720px] mb-16">
            <span className="eyebrow-mono text-primary block mb-3">{service.n}</span>
            <h1 className="display-lg text-ink mb-4">{service.name}</h1>
            <p className="text-body-lg text-ink-subtle mb-8">{service.longDesc}</p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/contacto"
                className="bg-primary hover:bg-primary-hover text-on-primary font-medium text-[15px] px-5 py-3 rounded-md transition-colors"
              >
                Solicitar cotización
              </Link>
              <Link
                href="/portafolio"
                className="bg-surface-1 hover:bg-surface-2 text-ink border border-hairline hover:border-hairline-strong font-medium text-[15px] px-5 py-3 rounded-md transition-all"
              >
                Ver casos
              </Link>
            </div>
          </div>

          {/* Dato real verificable */}
          {datoReal && <DataReal data={datoReal} />}

          {/* Entregables */}
          <div className="mb-16">
            <span className="eyebrow-mono text-ink-tertiary block mb-3">Qué incluye</span>
            <h2 className="headline text-ink mb-8">Entregables</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {service.entregables.map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 bg-surface-1 border border-hairline rounded-lg p-4"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  <span className="text-body-sm text-ink-muted">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Stack */}
          <div className="bg-surface-1 border border-hairline rounded-xl p-8 mb-16">
            <span className="eyebrow-mono text-ink-tertiary block mb-4">
              Stack tecnológico
            </span>
            <div className="flex flex-wrap gap-2">
              {service.stack.map((tech) => (
                <span
                  key={tech}
                  className="bg-canvas text-ink-muted font-mono text-[13px] px-3.5 py-2.5 rounded-sm border border-hairline"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Proceso */}
          {service.proceso?.length > 0 && (
            <div className="mb-16">
              <span className="eyebrow-mono text-ink-tertiary block mb-3">Cómo lo hacemos</span>
              <h2 className="headline text-ink mb-8">Proceso</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {service.proceso.map((step, i) => (
                  <div key={i}>
                    <div className="flex items-center gap-3 mb-3">
                      <span className="font-mono text-[13px] font-medium text-primary tracking-[0.4px]">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <h3 className="text-card-title text-ink mb-2" style={{ fontSize: 18 }}>
                      {step.paso}
                    </h3>
                    <p className="text-body-sm text-ink-subtle">{step.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Casos relacionados */}
          {relatedProjects.length > 0 && (
            <div className="mb-16">
              <span className="eyebrow-mono text-ink-tertiary block mb-3">
                Casos relacionados
              </span>
              <h2 className="headline text-ink mb-8">Proyectos con este servicio</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {relatedProjects.slice(0, 4).map((project) => (
                  <Link
                    key={project.id}
                    href={`/portafolio/${slugifyProject(project.title)}`}
                    className="group bg-surface-1 border border-hairline rounded-lg p-6 hover:bg-surface-2 hover:border-hairline-strong transition-all duration-200"
                  >
                    <span className="eyebrow-mono text-primary block mb-2">
                      {project.category}
                    </span>
                    <h3 className="text-card-title text-ink mb-2">{project.title}</h3>
                    <p className="text-body-sm text-ink-subtle line-clamp-2">
                      {project.description}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* FAQ */}
          {service.faq?.length > 0 && (
            <div className="mb-16">
              <span className="eyebrow-mono text-ink-tertiary block mb-3">Preguntas frecuentes</span>
              <h2 className="headline text-ink mb-8">FAQ</h2>
              <div className="space-y-4">
                {service.faq.map((item, i) => (
                  <div
                    key={i}
                    className="bg-surface-1 border border-hairline rounded-lg p-6"
                  >
                    <h3 className="text-card-title text-ink mb-3">{item.question}</h3>
                    <p className="text-body-sm text-ink-subtle leading-relaxed">{item.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <CallToAction />
    </>
  );
}
