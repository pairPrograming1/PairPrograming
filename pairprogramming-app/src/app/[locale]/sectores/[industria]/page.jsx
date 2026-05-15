import { notFound } from "next/navigation";
import Link from "next/link";
import { INDUSTRIES } from "@/app/data/seo-dimensions";
import { portfolioVideos } from "@/app/data/portfolioVideos";
import { SERVICES } from "@/app/data/services";
import CallToAction from "@/app/components/CallToAction";
import DataReal from "@/app/components/DataReal";
import { getDatoRealIndustria, datoRealToJsonLd } from "@/app/lib/datos-reales";

let seoContent = {};
try {
  seoContent = require("../../../data/generated/seo-content.json");
} catch {}

export async function generateStaticParams() {
  return INDUSTRIES.map((i) => ({ industria: i.slug }));
}

export async function generateMetadata({ params }) {
  const { industria } = await params;
  const ind = INDUSTRIES.find((i) => i.slug === industria);
  if (!ind) return {};

  const content = seoContent?.industries?.[industria];
  const title = content?.title || `Desarrollo de Software para ${ind.name}`;
  const description =
    content?.description ||
    `Soluciones de software a medida para el sector ${ind.name}. Plataformas escalables con Next.js, React y TypeScript.`;

  return {
    title,
    description,
    alternates: {
      canonical: `https://pairprogramming.com.ar/sectores/${industria}`,
    },
    openGraph: {
      title,
      description,
      url: `https://pairprogramming.com.ar/sectores/${industria}`,
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

export default async function IndustryPage({ params }) {
  const { industria } = await params;
  const ind = INDUSTRIES.find((i) => i.slug === industria);
  if (!ind) notFound();

  const content = seoContent?.industries?.[industria] || {};
  const h1 = content.h1 || `Desarrollo de Software para ${ind.name}`;
  const intro =
    content.intro ||
    `PairProgramming desarrolla soluciones de software a medida para el sector ${ind.name}. Plataformas escalables y productos digitales que resuelven desafíos reales del sector.`;
  const challenges = content.challenges || [];
  const faq = content.faq || [];
  const datoReal = getDatoRealIndustria(industria);
  const datasetJsonLd = datoRealToJsonLd(datoReal);

  // Related projects from portfolio
  const relatedProjects = portfolioVideos.filter((p) =>
    ind.relatedProjects?.some((ref) =>
      slugifyProject(p.title).includes(ref)
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

      {/* Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Inicio", item: "https://pairprogramming.com.ar" },
                { "@type": "ListItem", position: 2, name: "Sectores", item: "https://pairprogramming.com.ar/sectores" },
                { "@type": "ListItem", position: 3, name: ind.name },
              ],
            },
            ...(faq.length
              ? [
                  {
                    "@context": "https://schema.org",
                    "@type": "FAQPage",
                    mainEntity: faq.map((f) => ({
                      "@type": "Question",
                      name: f.question,
                      acceptedAnswer: { "@type": "Answer", text: f.answer },
                    })),
                  },
                ]
              : []),
          ]),
        }}
      />

      <section className="py-section px-8">
        <div className="max-w-container mx-auto">
          {/* Breadcrumb */}
          <nav className="font-mono text-[13px] text-ink-subtle mb-8">
            <Link href="/" className="hover:text-ink transition-colors">Inicio</Link>
            <span className="mx-2 text-ink-tertiary">/</span>
            <span className="text-ink-tertiary">Sectores</span>
            <span className="mx-2 text-ink-tertiary">/</span>
            <span className="text-ink">{ind.name}</span>
          </nav>

          {/* Hero */}
          <div className="max-w-[720px] mb-16">
            <span className="eyebrow-mono text-primary block mb-3">Sector</span>
            <h1 className="display-lg text-ink mb-4">{h1}</h1>
            <p className="text-body-lg text-ink-subtle mb-8">{intro}</p>
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
                Ver portafolio
              </Link>
            </div>
          </div>

          {/* Dato real verificable */}
          {datoReal && <DataReal data={datoReal} />}

          {/* Desafíos del sector */}
          {challenges.length > 0 && (
            <div className="mb-16">
              <span className="eyebrow-mono text-ink-tertiary block mb-3">
                Desafíos del sector
              </span>
              <h2 className="headline text-ink mb-8">
                Problemas que resolvemos en {ind.name}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {challenges.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 bg-surface-1 border border-hairline rounded-lg p-4"
                  >
                    <span className="font-mono text-[13px] font-medium text-primary mt-0.5">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-body-sm text-ink-muted">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Servicios relevantes */}
          <div className="mb-16">
            <span className="eyebrow-mono text-ink-tertiary block mb-3">
              Servicios para {ind.name}
            </span>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {SERVICES.slice(0, 6).map((svc) => (
                <Link
                  key={svc.slug}
                  href={`/servicios/${svc.slug}`}
                  className="group bg-surface-1 border border-hairline rounded-lg p-5 hover:bg-surface-2 hover:border-hairline-strong transition-all duration-200"
                >
                  <span className="eyebrow-mono text-primary block mb-1">{svc.n}</span>
                  <h3 className="text-card-title text-ink mb-1">{svc.name}</h3>
                  <p className="text-body-sm text-ink-subtle line-clamp-2">{svc.desc}</p>
                </Link>
              ))}
            </div>
          </div>

          {/* Proyectos relacionados */}
          {relatedProjects.length > 0 && (
            <div className="mb-16">
              <span className="eyebrow-mono text-ink-tertiary block mb-3">
                Casos de éxito
              </span>
              <h2 className="headline text-ink mb-8">
                Proyectos en {ind.name}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {relatedProjects.slice(0, 4).map((project) => (
                  <Link
                    key={project.id}
                    href={`/portafolio/${slugifyProject(project.title)}`}
                    className="group bg-surface-1 border border-hairline rounded-lg p-6 hover:bg-surface-2 hover:border-hairline-strong transition-all duration-200"
                  >
                    <span className="eyebrow-mono text-primary block mb-2">{project.category}</span>
                    <h3 className="text-card-title text-ink mb-2">{project.title}</h3>
                    <p className="text-body-sm text-ink-subtle line-clamp-2">{project.description}</p>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Otros sectores */}
          <div className="mb-16">
            <span className="eyebrow-mono text-ink-tertiary block mb-3">Otros sectores</span>
            <div className="flex flex-wrap gap-2">
              {INDUSTRIES.filter((i) => i.slug !== industria).map((i) => (
                <Link
                  key={i.slug}
                  href={`/sectores/${i.slug}`}
                  className="bg-surface-1 border border-hairline text-ink-subtle font-mono text-[13px] px-3.5 py-2.5 rounded-md hover:text-ink hover:border-hairline-strong transition-colors"
                >
                  {i.name}
                </Link>
              ))}
            </div>
          </div>

          {/* FAQ */}
          {faq.length > 0 && (
            <div className="mb-16">
              <span className="eyebrow-mono text-ink-tertiary block mb-3">Preguntas frecuentes</span>
              <h2 className="headline text-ink mb-8">FAQ</h2>
              <div className="space-y-4">
                {faq.map((item, i) => (
                  <div key={i} className="bg-surface-1 border border-hairline rounded-lg p-6">
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
