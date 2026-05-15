import { notFound } from "next/navigation";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { portfolioVideos } from "@/app/data/portfolioVideos";
import { getLocalizedItem } from "@/app/lib/i18n-helpers";
import CallToAction from "@/app/components/CallToAction";

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
  const { slug, locale } = await params;
  const project = portfolioVideos.find((p) => slugify(p.title) === slug);
  if (!project) return {};

  const localized = getLocalizedItem(project, locale);

  return {
    title: `${localized.title} — ${locale === "en" ? "Portfolio" : "Portafolio"}`,
    description: localized.description,
    alternates: {
      canonical: `https://pairprogramming.com.ar/portafolio/${slug}`,
      languages: {
        es: `https://pairprogramming.com.ar/portafolio/${slug}`,
        en: `https://pairprogramming.com.ar/en/portafolio/${slug}`,
      },
    },
    openGraph: {
      title: `${localized.title} | PairProgramming`,
      description: localized.description.slice(0, 160),
      url: `https://pairprogramming.com.ar/portafolio/${slug}`,
      type: "website",
    },
  };
}

export default async function ProyectoPage({ params }) {
  const { slug, locale } = await params;
  setRequestLocale(locale);
  const project = portfolioVideos.find((p) => slugify(p.title) === slug);
  if (!project) notFound();

  const t = await getTranslations({ locale, namespace: "portfolioDetail" });
  const tCommon = await getTranslations({ locale, namespace: "common" });

  const localized = getLocalizedItem(project, locale);

  const metrics = [
    { label: t("category"), value: localized.category },
    { label: t("status"), value: localized.duration },
    { label: t("mainStack"), value: project.technologies[0] },
    { label: t("technologies"), value: `${project.technologies.length} ${t("techs")}` },
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
            name: localized.title,
            description: localized.description,
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
              { "@type": "ListItem", position: 1, name: tCommon("home"), item: "https://pairprogramming.com.ar" },
              { "@type": "ListItem", position: 2, name: tCommon("portfolio"), item: "https://pairprogramming.com.ar/portafolio" },
              { "@type": "ListItem", position: 3, name: localized.title },
            ],
          }),
        }}
      />

      <section className="py-section px-8">
        <div className="max-w-container mx-auto">
          {/* Breadcrumb visual */}
          <nav className="font-mono text-[13px] text-ink-subtle mb-8">
            <Link href="/" className="hover:text-ink transition-colors">{tCommon("home")}</Link>
            <span className="mx-2 text-ink-tertiary">/</span>
            <Link href="/portafolio" className="hover:text-ink transition-colors">{tCommon("portfolio")}</Link>
            <span className="mx-2 text-ink-tertiary">/</span>
            <span className="text-ink">{localized.title.split(" - ")[0]}</span>
          </nav>

          {/* Hero */}
          <div className="mb-12">
            <span className="eyebrow-mono text-primary block mb-3">
              {localized.category}
            </span>
            <h1 className="display-lg text-ink mb-4">{localized.title}</h1>

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
                alt={localized.title}
                width={1280}
                height={720}
                className="w-full h-auto"
              />
            </div>
          )}

          {/* Description */}
          <div className="max-w-[720px] mx-auto mb-16">
            <span className="eyebrow-mono text-ink-tertiary block mb-3">
              {t("aboutProject")}
            </span>
            <p className="text-body-lg text-ink-muted leading-relaxed">
              {localized.description}
            </p>
          </div>

          {/* Features */}
          <div className="mb-16">
            <span className="eyebrow-mono text-ink-tertiary block mb-3">
              {t("keyFeatures")}
            </span>
            <h2 className="headline text-ink mb-8">{t("whatWeBuilt")}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {localized.features.map((feature, i) => (
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
              {t("stackUsed")}
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
                {t("visitProject")}
              </a>
            )}
            <Link
              href="/portafolio"
              className="bg-surface-1 hover:bg-surface-2 text-ink border border-hairline hover:border-hairline-strong font-medium text-[15px] px-5 py-3 rounded-md transition-all"
            >
              {t("viewMoreCases")}
            </Link>
          </div>
        </div>
      </section>

      <CallToAction />
    </>
  );
}
