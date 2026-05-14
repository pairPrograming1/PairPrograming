import { notFound } from "next/navigation";
import Link from "next/link";
import { LOCATIONS } from "../../data/seo-dimensions";
import { SERVICES } from "../../data/services";
import CallToAction from "../../components/CallToAction";
import DataReal from "../../components/DataReal";
import { getDatoRealLocacion, datoRealToJsonLd } from "@/app/lib/datos-reales";

let seoContent = {};
try {
  seoContent = require("../../data/generated/seo-content.json");
} catch {}

export async function generateStaticParams() {
  return LOCATIONS.map((l) => ({ locacion: l.slug }));
}

export async function generateMetadata({ params }) {
  const { locacion } = await params;
  const loc = LOCATIONS.find((l) => l.slug === locacion);
  if (!loc) return {};

  const content = seoContent?.locations?.[locacion];
  const title = content?.title || `Desarrollo de Software en ${loc.name}`;
  const description =
    content?.description ||
    `Servicios de desarrollo de software a medida en ${loc.name}. Plataformas B2B SaaS, CRM, apps web y productos digitales escalables.`;

  return {
    title,
    description,
    alternates: {
      canonical: `https://pairprogramming.com.ar/desarrollo-software/${locacion}`,
    },
    openGraph: {
      title,
      description,
      url: `https://pairprogramming.com.ar/desarrollo-software/${locacion}`,
      type: "website",
    },
  };
}

export default async function LocationPage({ params }) {
  const { locacion } = await params;
  const loc = LOCATIONS.find((l) => l.slug === locacion);
  if (!loc) notFound();

  const content = seoContent?.locations?.[locacion] || {};
  const h1 = content.h1 || `Desarrollo de Software en ${loc.name}`;
  const intro =
    content.intro ||
    `PairProgramming ofrece servicios de desarrollo de software a medida para empresas de ${loc.name}. Desde plataformas B2B SaaS hasta productos digitales escalables.`;
  const faq = content.faq || [];
  const datoReal = getDatoRealLocacion(locacion);
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

      {/* Breadcrumb + FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Inicio", item: "https://pairprogramming.com.ar" },
                { "@type": "ListItem", position: 2, name: "Desarrollo de Software", item: "https://pairprogramming.com.ar/desarrollo-software" },
                { "@type": "ListItem", position: 3, name: loc.name },
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
            <span className="text-ink-tertiary">Desarrollo de Software</span>
            <span className="mx-2 text-ink-tertiary">/</span>
            <span className="text-ink">{loc.name}</span>
          </nav>

          {/* Hero */}
          <div className="max-w-[720px] mb-16">
            <span className="eyebrow-mono text-primary block mb-3">{loc.country}</span>
            <h1 className="display-lg text-ink mb-4">{h1}</h1>
            <p className="text-body-lg text-ink-subtle mb-8">{intro}</p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/contacto"
                className="bg-primary hover:bg-primary-hover text-on-primary font-medium text-[15px] px-5 py-3 rounded-md transition-colors"
              >
                Solicitar cotización
              </Link>
            </div>
          </div>

          {/* Dato real verificable */}
          {datoReal && <DataReal data={datoReal} />}

          {/* Servicios disponibles */}
          <div className="mb-16">
            <span className="eyebrow-mono text-ink-tertiary block mb-3">Servicios disponibles</span>
            <h2 className="headline text-ink mb-8">
              Nuestros servicios en {loc.name}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {SERVICES.map((svc) => (
                <Link
                  key={svc.slug}
                  href={`/desarrollo-software/${locacion}/${svc.slug}`}
                  className="group bg-surface-1 border border-hairline rounded-lg p-6 hover:bg-surface-2 hover:border-hairline-strong transition-all duration-200"
                >
                  <span className="eyebrow-mono text-primary block mb-2">{svc.n}</span>
                  <h3 className="text-card-title text-ink mb-2">{svc.name}</h3>
                  <p className="text-body-sm text-ink-subtle line-clamp-2">{svc.desc}</p>
                </Link>
              ))}
            </div>
          </div>

          {/* Otras ciudades */}
          <div className="mb-16">
            <span className="eyebrow-mono text-ink-tertiary block mb-3">También trabajamos en</span>
            <div className="flex flex-wrap gap-2">
              {LOCATIONS.filter((l) => l.slug !== locacion).map((l) => (
                <Link
                  key={l.slug}
                  href={`/desarrollo-software/${l.slug}`}
                  className="bg-surface-1 border border-hairline text-ink-subtle font-mono text-[13px] px-3.5 py-2.5 rounded-md hover:text-ink hover:border-hairline-strong transition-colors"
                >
                  {l.name}
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
