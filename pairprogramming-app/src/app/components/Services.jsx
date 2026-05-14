import Link from "next/link";
import { SERVICES } from "../data/services";
import {
  Layers, Monitor, LayoutGrid, Code2, Cloud,
  Search, Zap, CheckCircle, Star,
} from "lucide-react";

const ICONS = {
  "01": Layers,
  "02": Monitor,
  "03": LayoutGrid,
  "04": Code2,
  "05": Cloud,
  "06": Search,
  "07": Zap,
  "08": CheckCircle,
  "09": Star,
};

function ServiceCard({ n, slug, name, desc }) {
  const Icon = ICONS[n] || Layers;

  return (
    <Link
      href={`/servicios/${slug}`}
      className="group bg-surface-1 border border-hairline rounded-lg p-6 hover:bg-surface-2 hover:border-hairline-strong transition-all duration-200"
    >
      {/* Eyebrow */}
      <div className="flex items-center gap-3 mb-4">
        <Icon size={20} className="text-primary" />
        <span className="font-mono text-[13px] font-medium text-primary tracking-[0.4px] uppercase">
          {n}
        </span>
      </div>

      {/* Title */}
      <h3 className="text-card-title text-ink mb-2">{name}</h3>

      {/* Description */}
      <p className="text-body-sm text-ink-subtle mb-4 line-clamp-2">{desc}</p>

      {/* Link hint */}
      <span className="text-body-sm text-primary font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200">
        Ver más →
      </span>
    </Link>
  );
}

export default function Services() {
  return (
    <section className="py-section px-8">
      <div className="max-w-container mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
          <div>
            <span className="eyebrow-mono text-ink-tertiary block mb-3">
              Lo que hacemos
            </span>
            <h2 className="display-md text-ink">
              Servicios que mueven negocios
            </h2>
          </div>
          <p className="text-body-sm text-ink-subtle max-w-[260px] md:text-right">
            Desde la idea hasta producción.
            <br />
            Sin intermediarios, con resultados.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {SERVICES.map((s) => (
            <ServiceCard key={s.n} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
}
