import { TEAM } from "../data/team";
import { Search, PenTool, Code2, Rocket } from "lucide-react";

const METHODOLOGY = [
  { step: "01", title: "Descubrimiento", description: "Analizamos tus necesidades y objetivos para crear la estrategia correcta.", icon: Search },
  { step: "02", title: "Diseño", description: "Creamos interfaces intuitivas y experiencias de usuario que convierten.", icon: PenTool },
  { step: "03", title: "Desarrollo", description: "Implementamos soluciones robustas con las mejores tecnologías.", icon: Code2 },
  { step: "04", title: "Entrega", description: "Desplegamos y damos soporte continuo para garantizar el éxito.", icon: Rocket },
];

const STATS = [
  { number: "20+", label: "Proyectos completados" },
  { number: "2022", label: "Año de fundación" },
  { number: "100%", label: "Clientes satisfechos" },
  { number: "6", label: "Países servidos" },
];

function TeamCard({ name, role, description, expertise, location }) {
  return (
    <div className="bg-surface-1 border border-hairline rounded-lg p-6 hover:bg-surface-2 hover:border-hairline-strong transition-all duration-200">
      {/* Avatar */}
      <div className="w-14 h-14 rounded-pill bg-primary/10 border border-primary/20 flex items-center justify-center mb-4">
        <span className="text-primary font-semibold text-lg">
          {name.split(" ").map((n) => n[0]).join("")}
        </span>
      </div>

      {/* Name & Role */}
      <h3 className="text-card-title text-ink mb-1">{name}</h3>
      <p className="text-body-sm text-primary font-medium mb-3">{role}</p>

      {/* Description */}
      <p className="text-body-sm text-ink-subtle mb-4">{description}</p>

      {/* Location */}
      {location && (
        <p className="text-caption text-ink-tertiary mb-4">{location}</p>
      )}

      {/* Skills */}
      <div className="flex flex-wrap gap-1.5">
        {expertise.map((skill) => (
          <span
            key={skill}
            className="bg-canvas text-ink-muted text-[12px] font-mono px-2.5 py-1 rounded-sm border border-hairline"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Nosotros() {
  return (
    <section className="py-section px-8">
      <div className="max-w-container mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="eyebrow-mono text-ink-tertiary block mb-3">
            Quiénes somos
          </span>
          <h1 className="display-lg text-ink mb-6">Sobre nosotros</h1>
          <p className="text-body-lg text-ink-subtle max-w-[600px] mx-auto">
            Somos un equipo especializado en transformar ideas en plataformas
            digitales escalables. Tecnología, estrategia y ejecución desde 2022.
          </p>
        </div>

        {/* Historia */}
        <div className="bg-surface-1 border border-hairline rounded-xl p-8 md:p-12 mb-16">
          <span className="eyebrow-mono text-ink-tertiary block mb-3">
            Nuestra historia
          </span>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <p className="text-body-lg text-ink-muted mb-4">
                Fundada en 2022, PairProgramming nació de la visión de crear
                soluciones digitales que realmente importen. Comenzamos como
                un equipo de desarrolladores y crecimos hasta convertirnos en
                una agencia de desarrollo full-stack con presencia en Argentina
                y España.
              </p>
              <p className="text-body text-ink-subtle">
                Nuestro nombre refleja nuestra metodología: trabajamos en
                pareja con nuestros clientes, asegurando que cada paso del
                desarrollo sea transparente y colaborativo.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {STATS.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-canvas border border-hairline rounded-lg p-4 text-center"
                >
                  <div className="headline text-ink mb-1">
                    {stat.number}
                  </div>
                  <div className="text-caption text-ink-subtle">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Equipo */}
        <div className="mb-16">
          <span className="eyebrow-mono text-ink-tertiary block mb-3">
            El equipo
          </span>
          <h2 className="headline text-ink mb-8">
            Las personas detrás de los proyectos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {TEAM.map((member) => (
              <TeamCard key={member.name} {...member} />
            ))}
          </div>
        </div>

        {/* Metodología */}
        <div className="bg-surface-1 border border-hairline rounded-xl p-8 md:p-12">
          <span className="eyebrow-mono text-ink-tertiary block mb-3">
            Proceso
          </span>
          <h2 className="headline text-ink mb-8">Nuestra metodología</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {METHODOLOGY.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.step}>
                  <div className="flex items-center gap-3 mb-3">
                    <Icon size={20} className="text-primary" />
                    <span className="font-mono text-[13px] font-medium text-primary tracking-[0.4px]">
                      {item.step}
                    </span>
                  </div>
                  <h3 className="text-card-title text-ink mb-2" style={{ fontSize: 18 }}>
                    {item.title}
                  </h3>
                  <p className="text-body-sm text-ink-subtle">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
