import {
  Star, Users, Lightbulb, TrendingUp, Target, Headphones,
} from "lucide-react";

const VALUES = [
  { n: "01", icon: Star, title: "Calidad sin concesiones", text: "No entregamos algo que no usaríamos nosotros mismos. El estándar es siempre el máximo." },
  { n: "02", icon: Users, title: "Colaboración real", text: "Somos socios tecnológicos. Trabajamos codo a codo con vos, no para vos." },
  { n: "03", icon: Lightbulb, title: "Innovación con propósito", text: "Tecnologías modernas cuando tiene sentido. Sin hype, con resultados medibles." },
  { n: "04", icon: TrendingUp, title: "Escalabilidad por diseño", text: "Arquitecturas que crecen desde el primer commit. No hay excusas técnicas para no escalar." },
  { n: "05", icon: Target, title: "Simplicidad elegante", text: "La mejor solución es la más simple que funciona. Complejidad innecesaria es deuda técnica." },
  { n: "06", icon: Headphones, title: "Escucha activa", text: "Entendemos tu negocio antes de escribir una línea. El problema correcto primero." },
];

function ValueCard({ n, icon: Icon, title, text }) {
  return (
    <div className="bg-surface-1 border border-hairline rounded-lg p-6 hover:bg-surface-2 hover:border-hairline-strong transition-all duration-200">
      {/* Eyebrow */}
      <span className="font-mono text-[13px] font-medium text-primary tracking-[0.4px] uppercase block mb-3">
        {n}
      </span>

      {/* Title */}
      <h3 className="text-card-title text-ink mb-2">{title}</h3>

      {/* Text */}
      <p className="text-body-sm text-ink-subtle">{text}</p>
    </div>
  );
}

export default function Values() {
  return (
    <section className="py-section px-8">
      <div className="max-w-container mx-auto">
        {/* Header */}
        <div className="mb-12">
          <span className="eyebrow-mono text-ink-tertiary block mb-3">
            Cómo trabajamos
          </span>
          <h2 className="display-md text-ink">
            Principios que nos definen
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {VALUES.map((v) => (
            <ValueCard key={v.n} {...v} />
          ))}
        </div>
      </div>
    </section>
  );
}
