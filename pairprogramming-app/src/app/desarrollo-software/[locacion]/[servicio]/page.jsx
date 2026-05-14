import { notFound } from "next/navigation";
import Link from "next/link";
import { LOCATIONS } from "../../../data/seo-dimensions";
import { SERVICES } from "../../../data/services";
import CallToAction from "../../../components/CallToAction";
import DataReal from "../../../components/DataReal";
import { getDatoRealCombinacion, datoRealToJsonLd } from "@/app/lib/datos-reales";

let seoContent = {};
try {
  seoContent = require("../../../data/generated/seo-content.json");
} catch {}

export async function generateStaticParams() {
  const params = [];
  for (const loc of LOCATIONS) {
    for (const svc of SERVICES) {
      params.push({ locacion: loc.slug, servicio: svc.slug });
    }
  }
  return params;
}

export async function generateMetadata({ params }) {
  const { locacion, servicio } = await params;
  const loc = LOCATIONS.find((l) => l.slug === locacion);
  const svc = SERVICES.find((s) => s.slug === servicio);
  if (!loc || !svc) return {};

  const key = `${locacion}/${servicio}`;
  const content = seoContent?.locationServices?.[key];
  const title = content?.title || `${svc.name} en ${loc.name}`;
  const description =
    content?.description ||
    `Servicios de ${svc.name} para empresas de ${loc.name}. Desarrollo a medida con Next.js, React y TypeScript.`;

  return {
    title,
    description,
    alternates: {
      canonical: `https://pairprogramming.com.ar/desarrollo-software/${locacion}/${servicio}`,
    },
    openGraph: {
      title,
      description,
      url: `https://pairprogramming.com.ar/desarrollo-software/${locacion}/${servicio}`,
      type: "website",
    },
  };
}

export default async function LocationServicePage({ params }) {
  const { locacion, servicio } = await params;
  const loc = LOCATIONS.find((l) => l.slug === locacion);
  const svc = SERVICES.find((s) => s.slug === servicio);
  if (!loc || !svc) notFound();

  const key = `${locacion}/${servicio}`;
  const content = seoContent?.locationServices?.[key] || {};
  const h1 = content.h1 || `${svc.name} en ${loc.name}`;
  const intro =
    content.intro ||
    `PairProgramming ofrece servicios de ${svc.name} para empresas de ${loc.name}. Soluciones a medida con stack moderno.`;
  const faq = content.faq || [];
  const datoReal = getDatoRealCombinacion(locacion, servicio);
  const datasetJsonLd = datoRealToJsonLd(datoReal);

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
              "@type": "Service",
              name: `${svc.name} en ${loc.name}`,
              description: intro,
              provider: {
                "@type": "Organization",
                name: "PairProgramming",
                url: "https://pairprogramming.com.ar",
              },
              areaServed: {
                "@type": "Place",
                name: loc.name,
              },
            },
            {
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Inicio", item: "https://pairprogramming.com.ar" },
                { "@type": "ListItem", position: 2, name: loc.name, item: `https://pairprogramming.com.ar/desarrollo-software/${locacion}` },
                { "@type": "ListItem", position: 3, name: svc.name },
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
            <Link href={`/desarrollo-software/${locacion}`} className="hover:text-ink transition-colors">{loc.name}</Link>
            <span className="mx-2 text-ink-tertiary">/</span>
            <span className="text-ink">{svc.name}</span>
          </nav>

          {/* Hero */}
          <div className="max-w-[720px] mb-16">
            <span className="eyebrow-mono text-primary block mb-3">
              {loc.name} — {svc.n}
            </span>
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
                href={`/servicios/${servicio}`}
                className="bg-surface-1 hover:bg-surface-2 text-ink border border-hairline hover:border-hairline-strong font-medium text-[15px] px-5 py-3 rounded-md transition-all"
              >
                Ver servicio completo
              </Link>
            </div>
          </div>

          {/* Dato real verificable */}
          {datoReal && <DataReal data={datoReal} />}

          {/* Entregables del servicio */}
          <div className="mb-16">
            <span className="eyebrow-mono text-ink-tertiary block mb-3">Qué incluye</span>
            <h2 className="headline text-ink mb-8">Entregables</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {svc.entregables.map((item, i) => (
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
            <span className="eyebrow-mono text-ink-tertiary block mb-4">Stack tecnológico</span>
            <div className="flex flex-wrap gap-2">
              {svc.stack.map((tech) => (
                <span
                  key={tech}
                  className="bg-canvas text-ink-muted font-mono text-[13px] px-3.5 py-2.5 rounded-sm border border-hairline"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Interlinking: este servicio en otras ciudades */}
          <div className="mb-16">
            <span className="eyebrow-mono text-ink-tertiary block mb-3">
              {svc.name} en otras ciudades
            </span>
            <div className="flex flex-wrap gap-2">
              {LOCATIONS.filter((l) => l.slug !== locacion).map((l) => (
                <Link
                  key={l.slug}
                  href={`/desarrollo-software/${l.slug}/${servicio}`}
                  className="bg-surface-1 border border-hairline text-ink-subtle font-mono text-[13px] px-3.5 py-2.5 rounded-md hover:text-ink hover:border-hairline-strong transition-colors"
                >
                  {l.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Interlinking: otros servicios en esta ciudad */}
          <div className="mb-16">
            <span className="eyebrow-mono text-ink-tertiary block mb-3">
              Otros servicios en {loc.name}
            </span>
            <div className="flex flex-wrap gap-2">
              {SERVICES.filter((s) => s.slug !== servicio).map((s) => (
                <Link
                  key={s.slug}
                  href={`/desarrollo-software/${locacion}/${s.slug}`}
                  className="bg-surface-1 border border-hairline text-ink-subtle font-mono text-[13px] px-3.5 py-2.5 rounded-md hover:text-ink hover:border-hairline-strong transition-colors"
                >
                  {s.name}
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
