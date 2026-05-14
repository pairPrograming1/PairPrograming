import Link from "next/link";
import { ARTICLES } from "../data/articles";
import CallToAction from "../components/CallToAction";

export const metadata = {
  title: "Blog",
  description:
    "Artículos sobre desarrollo de software, inteligencia artificial, agentes, RAG, SEO programático, CRM y más. Experiencias reales del equipo de PairProgramming.",
  alternates: { canonical: "https://pairprogramming.com.ar/blog" },
  openGraph: {
    title: "Blog | PairProgramming",
    description:
      "Artículos técnicos sobre IA, desarrollo de software, SEO programático y transformación digital.",
    url: "https://pairprogramming.com.ar/blog",
    type: "website",
  },
};

const CATEGORIES = [...new Set(ARTICLES.map((a) => a.category))];

export default function BlogHub() {
  const sorted = [...ARTICLES].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  return (
    <>
      {/* BreadcrumbList schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Inicio",
                item: "https://pairprogramming.com.ar",
              },
              { "@type": "ListItem", position: 2, name: "Blog" },
            ],
          }),
        }}
      />

      <section className="py-section px-8">
        <div className="max-w-container mx-auto">
          {/* Breadcrumb */}
          <nav className="font-mono text-[13px] text-ink-subtle mb-8">
            <Link href="/" className="hover:text-ink transition-colors">
              Inicio
            </Link>
            <span className="mx-2 text-ink-tertiary">/</span>
            <span className="text-ink">Blog</span>
          </nav>

          {/* Hero */}
          <div className="max-w-[720px] mb-16">
            <span className="eyebrow-mono text-primary block mb-3">Blog</span>
            <h1 className="display-lg text-ink mb-4">
              Ideas, procesos y aprendizajes
            </h1>
            <p className="text-body-lg text-ink-subtle">
              Compartimos lo que aprendemos construyendo productos digitales.
              Inteligencia artificial, arquitectura de software, SEO y más.
            </p>
          </div>

          {/* Categories */}
          {CATEGORIES.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-12">
              {CATEGORIES.map((cat) => (
                <span
                  key={cat}
                  className="bg-surface-1 border border-hairline text-ink-subtle font-mono text-[13px] px-3 py-1.5 rounded-md"
                >
                  {cat}
                </span>
              ))}
            </div>
          )}

          {/* Articles grid */}
          {sorted.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {sorted.map((article) => (
                <Link
                  key={article.slug}
                  href={`/blog/${article.slug}`}
                  className="group bg-surface-1 border border-hairline rounded-xl p-6 hover:bg-surface-2 hover:border-hairline-strong transition-all duration-200"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="eyebrow-mono text-primary">
                      {article.category}
                    </span>
                    <span className="text-ink-tertiary font-mono text-[12px]">
                      {article.readTime} min
                    </span>
                  </div>
                  <h2 className="text-card-title text-ink mb-3 group-hover:text-primary transition-colors">
                    {article.title}
                  </h2>
                  <p className="text-body-sm text-ink-subtle line-clamp-3 mb-4">
                    {article.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[12px] text-ink-tertiary">
                      {new Date(article.date).toLocaleDateString("es-AR", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </span>
                    <div className="flex gap-1.5">
                      {article.tags?.slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          className="bg-canvas border border-hairline text-ink-tertiary font-mono text-[11px] px-2 py-0.5 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="bg-surface-1 border border-hairline rounded-xl p-12 text-center mb-16">
              <p className="text-body-lg text-ink-subtle">
                Próximamente — estamos preparando contenido.
              </p>
            </div>
          )}
        </div>
      </section>

      <CallToAction />
    </>
  );
}
