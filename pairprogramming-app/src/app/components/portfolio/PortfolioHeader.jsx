"use client";

export default function PortfolioHeader({ isSidebarExpanded }) {
  return (
    <div className="text-center mb-16 fade-in">
      <h1
        className={`font-bold mb-6 text-white transition-all duration-300 ${
          isSidebarExpanded ? "text-3xl lg:text-4xl" : "text-4xl lg:text-5xl"
        }`}
      >
        Nuestro Portafolio
      </h1>
      <p className="text-gray-400 max-w-3xl mx-auto text-lg lg:text-xl leading-relaxed">
        Explora nuestros proyectos más destacados. Cada uno representa soluciones reales
        que hemos desarrollado con tecnologías modernas y las mejores prácticas de la industria.
      </p>
    </div>
  );
}
