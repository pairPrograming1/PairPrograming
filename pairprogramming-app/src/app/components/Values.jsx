"use client";
import { useSidebar } from "../context/SidebarContext";
import { Container } from "./ui/Container";
import { Card } from "./ui/Card";

export default function Values() {
  const { isSidebarExpanded } = useSidebar();

  const values = [
    { name: "Calidad", icon: "⭐" },
    { name: "Colaboración", icon: "🤝" },
    { name: "Innovación", icon: "💡" },
    { name: "Escalabilidad", icon: "📈" },
    { name: "Simplicidad", icon: "🎯" },
    { name: "Escucha Activa", icon: "👂" },
  ];

  return (
    <section className="py-12 lg:py-16 bg-black text-white border-b border-gray-800">
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
          <p className="text-gray-400 max-w-xl mx-auto mb-10 text-base">
            Principios que guían cada proyecto y garantizan excelencia en cada
            solución
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {values.map((value, index) => (
              <div
                key={value.name}
                className="bg-gray-900 border border-gray-800 rounded-lg p-4 text-center hover:border-gray-700 transition-colors"
              >
                <div className="text-2xl mb-2">
                  {value.icon}
                </div>
                <span className="text-sm font-medium text-gray-300">
                  {value.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
