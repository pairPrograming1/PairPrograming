"use client";
import { useSidebar } from "../context/SidebarContext";
import { Container } from "./ui/Container";

const ValueIcon = ({ name }) => {
  const icons = {
    Calidad: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ),
    Colaboración: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    Innovación: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32l1.41 1.41M2 12h2m16 0h2M4.93 19.07l1.41-1.41m11.32-11.32l1.41-1.41" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
    Escalabilidad: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
        <polyline points="17 6 23 6 23 12" />
      </svg>
    ),
    Simplicidad: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="3" fill="currentColor" />
      </svg>
    ),
    "Escucha Activa": (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 11h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5a9 9 0 0 1 18 0v5a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3" />
      </svg>
    ),
  };

  return icons[name] || null;
};

export default function Values() {
  const { isSidebarExpanded } = useSidebar();

  const values = [
    { name: "Calidad", description: "Excelencia en cada línea de código que escribimos para tu proyecto" },
    { name: "Colaboración", description: "Trabajamos codo a codo contigo como verdaderos socios tecnológicos" },
    { name: "Innovación", description: "Soluciones creativas con las tecnologías más modernas del mercado" },
    { name: "Escalabilidad", description: "Arquitecturas pensadas para crecer junto a tu negocio" },
    { name: "Simplicidad", description: "Convertimos problemas complejos en soluciones claras y elegantes" },
    { name: "Escucha Activa", description: "Entendemos a fondo tus necesidades antes de escribir una línea" },
  ];

  return (
    <section className="py-20 lg:py-28 bg-background text-foreground">
      <Container
        size={isSidebarExpanded ? "expanded" : "default"}
      >
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-gold/10 border border-brand-gold/20 mb-4">
            <span className="text-xs font-semibold text-brand-gold uppercase tracking-wider">
              Nuestros Valores
            </span>
          </div>
          <h2
            className={`font-bold text-foreground transition-all duration-300 mb-4 ${
              isSidebarExpanded ? "text-2xl lg:text-3xl" : "text-3xl lg:text-4xl"
            }`}
          >
            Principios que nos{" "}
            <span className="text-brand-blue">definen</span>
          </h2>
          <p className="text-secondary-text max-w-2xl mx-auto text-base lg:text-lg">
            Cada proyecto que emprendemos está guiado por estos valores
            fundamentales que garantizan resultados excepcionales.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {values.map((value, index) => (
            <div
              key={value.name}
              className={`group relative bg-background-card border border-border-color rounded-xl p-6 shadow-sm hover:shadow-md hover:border-brand-blue/40 transition-all duration-300 animate-fade-in-up stagger-${index + 1}`}
            >
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-brand-blue/0 to-brand-gold/0 group-hover:from-brand-blue/5 group-hover:to-brand-gold/5 transition-all duration-300" />

              <div className="relative z-10">
                <div className="w-12 h-12 rounded-lg bg-brand-blue/10 border border-brand-blue/20 flex items-center justify-center text-brand-blue mb-4 group-hover:bg-brand-blue/15 group-hover:border-brand-blue/30 transition-all duration-300">
                  <ValueIcon name={value.name} />
                </div>
                <h4 className="text-foreground font-semibold text-lg mb-2">
                  {value.name}
                </h4>
                <p className="text-secondary-text text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
