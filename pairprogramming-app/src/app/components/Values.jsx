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
    <section className="py-16 lg:py-20 bg-card-bg text-white">
      <Container
        size={isSidebarExpanded ? "expanded" : "default"}
        className="text-center"
      >
        <div className="fade-in">
          <h3
            className={`font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent transition-all duration-300 ${
              isSidebarExpanded ? "text-xl lg:text-2xl" : "text-2xl lg:text-3xl"
            }`}
          >
            Nuestros Valores
          </h3>
          <p className="text-secondary-text max-w-xl mx-auto mb-12 transition-all duration-300">
            Principios que guían cada proyecto y garantizan excelencia en cada
            solución
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {values.map((value, index) => (
              <Card
                key={value.name}
                hover
                padding="sm"
                className="text-center group cursor-pointer"
                animate
                animationDelay={`${index * 0.1}s`}
              >
                <div className="text-2xl mb-2 transform group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <span className="text-sm font-medium group-hover:text-accent transition-colors">
                  {value.name}
                </span>
              </Card>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
