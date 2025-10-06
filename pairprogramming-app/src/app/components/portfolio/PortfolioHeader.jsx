"use client";

export default function PortfolioHeader({ isSidebarExpanded }) {
  return (
    <div className="text-center mb-12 fade-in">
      <h1
        className={`font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent transition-all duration-300 ${
          isSidebarExpanded ? "text-2xl lg:text-3xl" : "text-3xl lg:text-4xl"
        }`}
      >
        Nuestro Portafolio
      </h1>
      <p className="text-secondary-text max-w-3xl mx-auto text-lg leading-relaxed">
        Descubre algunos de nuestros proyectos más destacados. Cada demo muestra
        soluciones reales que hemos desarrollado para nuestros clientes.
      </p>
    </div>
  );
}
