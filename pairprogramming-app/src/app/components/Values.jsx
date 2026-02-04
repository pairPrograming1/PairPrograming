"use client";
import { useSidebar } from "../context/SidebarContext";
import { Container } from "./ui/Container";

const ValueIcon = ({ name }) => {
  const icons = {
    Calidad: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ),
    Colaboración: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    Innovación: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32l1.41 1.41M2 12h2m16 0h2M4.93 19.07l1.41-1.41m11.32-11.32l1.41-1.41" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
    Escalabilidad: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
        <polyline points="17 6 23 6 23 12" />
      </svg>
    ),
    Simplicidad: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="3" fill="currentColor" />
      </svg>
    ),
    "Escucha Activa": (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 11h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5a9 9 0 0 1 18 0v5a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3" />
      </svg>
    ),
  };

  return icons[name] || null;
};

export default function Values() {
  const { isSidebarExpanded } = useSidebar();

  const values = [
    { name: "Calidad", description: "Excelencia en cada línea de código" },
    { name: "Colaboración", description: "Trabajo en equipo efectivo" },
    { name: "Innovación", description: "Soluciones creativas y modernas" },
    { name: "Escalabilidad", description: "Crecimiento sostenible" },
    { name: "Simplicidad", description: "Claridad en la complejidad" },
    { name: "Escucha Activa", description: "Entendemos tus necesidades" },
  ];

  return (
    <section className="py-16 lg:py-20 bg-black text-white border-b border-gray-800">
      <Container
        size={isSidebarExpanded ? "expanded" : "default"}
        className="text-center"
      >
        <div>
          <h3
            className={`font-bold mb-3 text-white transition-all duration-300 ${
              isSidebarExpanded ? "text-xl lg:text-2xl" : "text-2xl lg:text-3xl"
            }`}
          >
            Nuestros Valores
          </h3>
          <p className="text-gray-400 max-w-2xl mx-auto mb-12 text-base lg:text-lg">
            Principios que guían cada proyecto y garantizan excelencia en cada
            solución
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
            {values.map((value, index) => (
              <div
                key={value.name}
                className="group relative bg-gradient-to-br from-gray-900 to-gray-950 border border-gray-800 rounded-xl p-6 text-left hover:border-blue-600/50 transition-all duration-300 overflow-hidden"
              >
                {/* Efecto de brillo en hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/0 to-blue-600/0 group-hover:from-blue-600/5 group-hover:to-transparent transition-all duration-300" />

                {/* Contenido */}
                <div className="relative z-10">
                  <div className="text-blue-500 mb-4 group-hover:text-blue-400 transition-colors duration-300 group-hover:scale-110 transform transition-transform inline-block">
                    <ValueIcon name={value.name} />
                  </div>
                  <h4 className="text-white font-semibold text-lg mb-2 group-hover:text-blue-100 transition-colors">
                    {value.name}
                  </h4>
                  <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">
                    {value.description}
                  </p>
                </div>

                {/* Indicador de esquina */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-600/0 to-blue-600/10 blur-2xl group-hover:from-blue-600/20 group-hover:to-blue-600/5 transition-all duration-300" />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
