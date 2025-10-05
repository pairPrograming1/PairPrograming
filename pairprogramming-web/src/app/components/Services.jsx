"use client";
import { useSidebar } from "../context/SidebarContext";
import { Container } from "./ui/Container";
import { Card } from "./ui/Card";

export default function Services() {
  const { isSidebarExpanded } = useSidebar();

  const services = [
    {
      title: "Productos Digitales",
      description:
        "Plataformas escalables como aplicaciones móviles, SaaS, CRM, ERP e intranets, diseñadas para optimizar procesos y crecer con tu negocio.",
      icon: "🚀",
      features: [
        "Aplicaciones Móviles",
        "Plataformas SaaS",
        "CRM & ERP",
        "Sistemas Escalables",
      ],
    },
    {
      title: "Servicios Digitales",
      description:
        "Desarrollo a medida, consultoría estratégica, diseño UX/UI, integración de sistemas y soporte técnico para soluciones personalizadas.",
      icon: "🛠️",
      features: [
        "Desarrollo Custom",
        "Consultoría Tech",
        "Diseño UX/UI",
        "Soporte Continuo",
      ],
    },
    {
      title: "Soluciones Digitales",
      description:
        "Proyectos integrales que combinan tecnología y estrategia, como dashboards ejecutivos, portales de autoservicio y modernización de sistemas legacy.",
      icon: "💼",
      features: [
        "Dashboards Ejecutivos",
        "Portales Cliente",
        "Modernización",
        "Soluciones E2E",
      ],
    },
  ];

  return (
    <section className="py-16 lg:py-20 bg-background text-white">
      <Container size={isSidebarExpanded ? "expanded" : "default"}>
        <div className="text-center mb-16 fade-in">
          <h3
            className={`font-bold mb-4 bg-gradient-to-r from-white to-secondary-text bg-clip-text text-transparent transition-all duration-300 ${
              isSidebarExpanded
                ? "text-2xl lg:text-3xl"
                : "text-3xl lg:text-4xl"
            }`}
          >
            Nuestros Servicios
          </h3>
          <p className="text-secondary-text max-w-2xl mx-auto text-lg">
            Soluciones completas que transforman tu visión en realidad digital
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={service.title}
              hover
              padding="md"
              animate
              animationDelay={`${index * 0.2}s`}
              className="group cursor-pointer"
            >
              <div className="text-3xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h4
                className={`font-bold mb-4 group-hover:text-primary transition-colors ${
                  isSidebarExpanded ? "text-lg" : "text-xl"
                }`}
              >
                {service.title}
              </h4>
              <p className="text-secondary-text mb-6 leading-relaxed text-sm">
                {service.description}
              </p>
              <div className="space-y-2">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center text-sm">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                    {feature}
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
