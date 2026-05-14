// components/DataReal.jsx
// Capa 2 del SEO programatico: dato real verificable con fuente y fecha.

export default function DataReal({ data, variant = "default" }) {
  if (!data || !data.metrica_principal) return null;

  const {
    metrica_principal,
    metrica_secundaria,
    fuente,
    fuente_url,
    periodo,
    actualizado,
    contexto_corto,
  } = data;

  return (
    <section
      className="relative my-10 bg-surface-1 border border-hairline rounded-xl p-7 sm:p-6 overflow-hidden"
      aria-label="Datos del sector"
      itemScope
      itemType="https://schema.org/Dataset"
    >
      {/* Left accent bar */}
      <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-primary" />

      <div className="mb-3">
        <span className="font-mono text-[11px] font-medium uppercase tracking-[0.08em] text-primary">
          Datos del sector
        </span>
      </div>

      <p
        className="text-[1.1rem] font-medium text-ink leading-relaxed mb-2.5 tracking-[-0.01em]"
        itemProp="description"
      >
        {metrica_principal}
      </p>

      {metrica_secundaria && (
        <p className="text-[0.95rem] text-ink-muted leading-relaxed mb-3">
          {metrica_secundaria}
        </p>
      )}

      {contexto_corto && variant !== "compact" && (
        <p className="text-[0.9rem] text-ink-subtle leading-relaxed mt-3 mb-5">
          {contexto_corto}
        </p>
      )}

      <footer className="mt-4 pt-3 border-t border-hairline font-mono text-[0.78rem] text-ink-subtle">
        <span>
          Fuente:{" "}
          {fuente_url ? (
            <a
              href={fuente_url}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="text-ink-muted underline decoration-hairline underline-offset-2 hover:decoration-primary transition-colors"
              itemProp="isBasedOn"
            >
              {fuente}
            </a>
          ) : (
            fuente
          )}
        </span>
        {periodo && (
          <span>
            {" "}
            · Periodo: <time>{periodo}</time>
          </span>
        )}
        {actualizado && (
          <span>
            {" "}
            · Actualizado:{" "}
            <time itemProp="dateModified" dateTime={actualizado}>
              {actualizado}
            </time>
          </span>
        )}
      </footer>
    </section>
  );
}
