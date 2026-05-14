import { notFound } from "next/navigation";
import Link from "next/link";
import { ARTICLES } from "../../data/articles";
import CallToAction from "../../components/CallToAction";

const BASE_URL = "https://pairprogramming.com.ar";

export async function generateStaticParams() {
  return ARTICLES.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const article = ARTICLES.find((a) => a.slug === slug);
  if (!article) return {};

  return {
    title: article.title,
    description: article.description,
    alternates: { canonical: `${BASE_URL}/blog/${slug}` },
    openGraph: {
      title: `${article.title} | PairProgramming`,
      description: article.description,
      url: `${BASE_URL}/blog/${slug}`,
      type: "article",
      publishedTime: article.date,
      authors: [article.author?.name || "Esteban Aleart"],
    },
  };
}

export default async function ArticlePage({ params }) {
  const { slug } = await params;
  const article = ARTICLES.find((a) => a.slug === slug);
  if (!article) notFound();

  const related = ARTICLES.filter(
    (a) =>
      a.slug !== slug &&
      (a.category === article.category ||
        a.tags?.some((t) => article.tags?.includes(t)))
  ).slice(0, 3);

  return (
    <>
      {/* BlogPosting schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: article.title,
            description: article.description,
            datePublished: article.date,
            dateModified: article.updatedDate || article.date,
            author: {
              "@type": "Person",
              name: article.author?.name || "Esteban Aleart",
              url: `${BASE_URL}/equipo/esteban-aleart`,
              jobTitle: article.author?.role || "Founder & Lead Engineer",
            },
            publisher: {
              "@type": "Organization",
              name: "PairProgramming",
              url: BASE_URL,
              logo: {
                "@type": "ImageObject",
                url: `${BASE_URL}/icon.svg`,
              },
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": `${BASE_URL}/blog/${slug}`,
            },
          }),
        }}
      />

      {/* FAQ schema */}
      {article.faq?.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: article.faq.map((f) => ({
                "@type": "Question",
                name: f.question,
                acceptedAnswer: { "@type": "Answer", text: f.answer },
              })),
            }),
          }}
        />
      )}

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
                item: BASE_URL,
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Blog",
                item: `${BASE_URL}/blog`,
              },
              { "@type": "ListItem", position: 3, name: article.title },
            ],
          }),
        }}
      />

      <article className="py-section px-8">
        <div className="max-w-container mx-auto">
          {/* Breadcrumb */}
          <nav className="font-mono text-[13px] text-ink-subtle mb-8">
            <Link href="/" className="hover:text-ink transition-colors">
              Inicio
            </Link>
            <span className="mx-2 text-ink-tertiary">/</span>
            <Link href="/blog" className="hover:text-ink transition-colors">
              Blog
            </Link>
            <span className="mx-2 text-ink-tertiary">/</span>
            <span className="text-ink">{article.title}</span>
          </nav>

          {/* Article header */}
          <header className="max-w-[720px] mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="eyebrow-mono text-primary">
                {article.category}
              </span>
              <span className="text-ink-tertiary font-mono text-[12px]">
                {article.readTime} min de lectura
              </span>
            </div>
            <h1 className="display-lg text-ink mb-4">{article.title}</h1>
            <p className="text-body-lg text-ink-subtle mb-6">
              {article.description}
            </p>
            <div className="flex items-center gap-4 pb-8 border-b border-hairline">
              <div>
                <p className="text-body-sm text-ink font-medium">
                  {article.author?.name || "Esteban Aleart"}
                </p>
                <p className="font-mono text-[12px] text-ink-tertiary">
                  {new Date(article.date).toLocaleDateString("es-AR", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
              </div>
            </div>
          </header>

          {/* Article body */}
          <div
            className="prose-pp max-w-[720px] mb-16"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />

          {/* Tags */}
          {article.tags?.length > 0 && (
            <div className="max-w-[720px] flex flex-wrap gap-2 mb-16 pb-8 border-b border-hairline">
              {article.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-surface-1 border border-hairline text-ink-subtle font-mono text-[12px] px-2.5 py-1 rounded"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* FAQ */}
          {article.faq?.length > 0 && (
            <div className="max-w-[720px] mb-16">
              <span className="eyebrow-mono text-ink-tertiary block mb-3">
                Preguntas frecuentes
              </span>
              <h2 className="headline text-ink mb-8">FAQ</h2>
              <div className="space-y-4">
                {article.faq.map((item, i) => (
                  <div
                    key={i}
                    className="bg-surface-1 border border-hairline rounded-lg p-6"
                  >
                    <h3 className="text-card-title text-ink mb-3">
                      {item.question}
                    </h3>
                    <p className="text-body-sm text-ink-subtle leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Related articles */}
          {related.length > 0 && (
            <div className="mb-16">
              <span className="eyebrow-mono text-ink-tertiary block mb-3">
                Seguir leyendo
              </span>
              <h2 className="headline text-ink mb-8">Artículos relacionados</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {related.map((rel) => (
                  <Link
                    key={rel.slug}
                    href={`/blog/${rel.slug}`}
                    className="group bg-surface-1 border border-hairline rounded-xl p-6 hover:bg-surface-2 hover:border-hairline-strong transition-all duration-200"
                  >
                    <span className="eyebrow-mono text-primary block mb-2">
                      {rel.category}
                    </span>
                    <h3 className="text-card-title text-ink mb-2 group-hover:text-primary transition-colors">
                      {rel.title}
                    </h3>
                    <p className="text-body-sm text-ink-subtle line-clamp-2">
                      {rel.description}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </article>

      <CallToAction />
    </>
  );
}
