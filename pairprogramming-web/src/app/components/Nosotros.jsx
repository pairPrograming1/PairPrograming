// components/Nosotros.js
"use client";
import { useSidebar } from "../context/SidebarContext";

export default function Nosotros() {
  const { isSidebarExpanded } = useSidebar();

  return (
    <section className="compact-section bg-card-bg text-white">
      <div
        className={`container mx-auto px-4 transition-all duration-300 ${
          isSidebarExpanded ? "max-w-4xl" : "max-w-6xl"
        }`}
      >
        <h3
          className={`font-semibold text-center mb-8 transition-all duration-300 ${
            isSidebarExpanded ? "text-2xl" : "text-3xl"
          }`}
        >
          Sobre Nosotros
        </h3>
        <p
          className={`text-secondary-text max-w-2xl mx-auto text-center transition-all duration-300 ${
            isSidebarExpanded ? "text-base" : "text-lg"
          }`}
        >
          En PairProgramming, somos un equipo apasionado por transformar ideas
          en soluciones digitales innovadoras. Combinamos tecnología, diseño y
          estrategia para crear productos que impulsan el crecimiento de tu
          negocio.
        </p>
      </div>
    </section>
  );
}
