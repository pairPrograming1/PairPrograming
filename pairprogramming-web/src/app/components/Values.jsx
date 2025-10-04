// components/Values.js
"use client";
import { useSidebar } from "../context/SidebarContext";

export default function Values() {
  const { isSidebarExpanded } = useSidebar();
  const values = [
    "Calidad",
    "Colaboración",
    "Innovación",
    "Escalabilidad",
    "Simplicidad",
    "Escucha Activa",
  ];

  return (
    <section className="compact-section bg-card-bg text-white">
      <div
        className={`container mx-auto text-center px-4 transition-all duration-300 ${
          isSidebarExpanded ? "max-w-4xl" : "max-w-6xl"
        }`}
      >
        <h3
          className={`font-semibold mb-8 transition-all duration-300 ${
            isSidebarExpanded ? "text-xl" : "text-2xl"
          }`}
        >
          Nuestros Valores
        </h3>
        <div className="flex flex-wrap justify-center gap-3">
          {values.map((value) => (
            <span
              key={value}
              className="bg-primary text-white px-3 py-1.5 rounded-full hover:bg-primary-dark transition text-sm"
            >
              {value}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
