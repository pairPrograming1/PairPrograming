// components/Services.js
"use client";
import { useSidebar } from "../context/SidebarContext";

export default function Services() {
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
          Nuestros Servicios
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="compact-card bg-background rounded-lg shadow-md hover:shadow-xl transition-shadow">
            <h4
              className={`font-bold mb-3 transition-all duration-300 ${
                isSidebarExpanded ? "text-lg" : "text-xl"
              }`}
            >
              Productos Digitales
            </h4>
            <p className="text-secondary-text text-sm">
              Plataformas escalables como aplicaciones móviles, SaaS, CRM, ERP e
              intranets, diseñadas para optimizar procesos y crecer con tu
              negocio.
            </p>
          </div>
          <div className="compact-card bg-background rounded-lg shadow-md hover:shadow-xl transition-shadow">
            <h4
              className={`font-bold mb-3 transition-all duration-300 ${
                isSidebarExpanded ? "text-lg" : "text-xl"
              }`}
            >
              Servicios Digitales
            </h4>
            <p className="text-secondary-text text-sm">
              Desarrollo a medida, consultoría estratégica, diseño UX/UI,
              integración de sistemas y soporte técnico para soluciones
              personalizadas.
            </p>
          </div>
          <div className="compact-card bg-background rounded-lg shadow-md hover:shadow-xl transition-shadow">
            <h4
              className={`font-bold mb-3 transition-all duration-300 ${
                isSidebarExpanded ? "text-lg" : "text-xl"
              }`}
            >
              Soluciones Digitales
            </h4>
            <p className="text-secondary-text text-sm">
              Proyectos integrales que combinan tecnología y estrategia, como
              dashboards ejecutivos, portales de autoservicio y modernización de
              sistemas legacy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
