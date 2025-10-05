// components/FAQContent.jsx
"use client";
import { useSidebar } from "../context/SidebarContext";
import { Container } from "./ui/Container";
import { Card } from "./ui/Card";
import { useState } from "react";

export default function FAQContent() {
  const { isSidebarExpanded } = useSidebar();
  const [openItems, setOpenItems] = useState({});

  const toggleItem = (index) => {
    setOpenItems((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const faqCategories = [
    {
      title: "Servicios y Desarrollo",
      icon: "🚀",
      questions: [
        {
          question: "¿Qué tipos de proyectos desarrollan?",
          answer:
            "Desarrollamos una amplia gama de proyectos digitales:\n\n• Aplicaciones web y móviles\n• Plataformas SaaS\n• Sistemas CRM y ERP\n• E-commerce\n• Dashboards empresariales\n• APIs y microservicios\n• Soluciones de automatización",
        },
        {
          question: "¿Qué tecnologías utilizan?",
          answer:
            "Trabajamos con las tecnologías más modernas y confiables:\n\nFrontend: React, Next.js, Vue.js, Angular\nBackend: Node.js, Python, Java, .NET\nMobile: React Native, Flutter\nBases de datos: PostgreSQL, MongoDB, MySQL\nCloud: AWS, Google Cloud, Azure\nDevOps: Docker, Kubernetes, CI/CD",
        },
        {
          question: "¿Ofrecen mantenimiento y soporte?",
          answer:
            "Sí, ofrecemos planes de mantenimiento y soporte continuo:\n\n• Soporte técnico 24/7\n• Actualizaciones de seguridad\n• Mejoras y nuevas funcionalidades\n• Monitoreo y optimización\n• Backup y recuperación\n• Consultoría técnica permanente",
        },
      ],
    },
    {
      title: "Proceso y Metodología",
      icon: "🔄",
      questions: [
        {
          question: "¿Cuál es su proceso de desarrollo?",
          answer:
            "Seguimos una metodología ágil y transparente:\n\n1. Descubrimiento y análisis\n2. Diseño UX/UI\n3. Desarrollo iterativo\n4. Testing y calidad\n5. Despliegue y lanzamiento\n6. Soporte y mantenimiento\n\nTrabajamos en sprints de 2 semanas con entregables constantes.",
        },
        {
          question: "¿Cómo manejan la comunicación?",
          answer:
            "Mantenemos comunicación constante y transparente:\n\n• Reuniones semanales de seguimiento\n• Canal de Slack/Teams dedicado\n• Reportes de progreso regulares\n• Demo de avances cada sprint\n• Contacto directo con el equipo técnico\n• Transparencia total en el proceso",
        },
        {
          question: "¿Puedo ver el progreso de mi proyecto?",
          answer:
            "¡Absolutamente! Proporcionamos:\n\n• Acceso a entornos de desarrollo\n• Demos funcionales cada 2 semanas\n• Tableros de progreso en tiempo real\n• Reportes detallados de avance\n• Reuniones de revisión periódicas\n• Control total sobre el desarrollo",
        },
      ],
    },
    {
      title: "Precios y Pagos",
      icon: "💰",
      questions: [
        {
          question: "¿Cómo determinan los precios?",
          answer:
            "Nuestros precios se basan en:\n\n• Complejidad del proyecto\n• Tecnologías requeridas\n• Timeline del desarrollo\n• Equipo asignado\n• Recursos necesarios\n• Soporte post-lanzamiento\n\nOfrecemos presupuestos personalizados sin compromiso.",
        },
        {
          question: "¿Qué métodos de pago aceptan?",
          answer:
            "Aceptamos múltiples métodos de pago:\n\n• Transferencia bancaria\n• Tarjetas de crédito/débito\n• PayPal\n• Mercado Pago\n• Criptomonedas (consultar)\n• Facturación empresarial\n\nFlexibilidad en planes de pago según el proyecto.",
        },
        {
          question: "¿Ofrecen garantía?",
          answer:
            "Sí, ofrecemos garantía completa:\n\n• 90 días de garantía en desarrollo\n• Soporte prioritario incluido\n• Corrección de bugs sin costo\n• Optimizaciones iniciales\n• Documentación técnica completa\n• Capacitación del equipo",
        },
      ],
    },
    {
      title: "Tiempos y Entregas",
      icon: "⏱️",
      questions: [
        {
          question: "¿Cuánto tiempo toma desarrollar un proyecto?",
          answer:
            "Los tiempos varían según la complejidad:\n\n• MVP: 4-8 semanas\n• Aplicación mediana: 8-16 semanas\n• Proyecto empresarial: 16-24 semanas\n• Desarrollo ágil con entregas incrementales\n• Timeline detallado en la propuesta\n• Flexibilidad según prioridades",
        },
        {
          question: "¿Trabajan con fechas límite ajustadas?",
          answer:
            "Sí, somos expertos en manejar deadlines:\n\n• Metodologías ágiles para rapidez\n• Equipo escalable según necesidades\n• Priorización de funcionalidades\n• Comunicación constante sobre avances\n• Compromiso con las fechas acordadas\n• Plan de contingencia para imprevistos",
        },
        {
          question: "¿Qué incluye la entrega final?",
          answer:
            "Cada entrega incluye:\n\n• Código fuente completo\n• Documentación técnica\n• Manual de usuario\n• Certificado de seguridad\n• Plan de despliegue\n• Sesión de capacitación\n• Soporte post-lanzamiento",
        },
      ],
    },
  ];

  return (
    <section className="py-16 lg:py-20 bg-card-bg text-white min-h-screen">
      <Container size={isSidebarExpanded ? "expanded" : "default"}>
        <div className="text-center mb-12 fade-in">
          <h1
            className={`font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent transition-all duration-300 ${
              isSidebarExpanded
                ? "text-2xl lg:text-3xl"
                : "text-3xl lg:text-4xl"
            }`}
          >
            Preguntas Frecuentes
          </h1>
          <p className="text-secondary-text max-w-2xl mx-auto text-lg">
            Encuentra respuestas a las preguntas más comunes sobre nuestros
            servicios, procesos y metodologías.
          </p>
        </div>

        <div className="space-y-8">
          {faqCategories.map((category, categoryIndex) => (
            <Card
              key={categoryIndex}
              padding="lg"
              className="fade-in"
              style={{ animationDelay: `${categoryIndex * 0.1}s` }}
            >
              <div className="flex items-center mb-6">
                <span className="text-2xl mr-3">{category.icon}</span>
                <h2 className="text-xl lg:text-2xl font-bold text-primary">
                  {category.title}
                </h2>
              </div>

              <div className="space-y-4">
                {category.questions.map((item, itemIndex) => {
                  const fullIndex = `${categoryIndex}-${itemIndex}`;
                  return (
                    <div
                      key={itemIndex}
                      className="border border-border-color rounded-lg overflow-hidden"
                    >
                      <button
                        onClick={() => toggleItem(fullIndex)}
                        className="w-full px-4 py-4 text-left bg-background hover:bg-hover-bg transition-colors flex justify-between items-center"
                      >
                        <span className="font-semibold text-white text-sm lg:text-base">
                          {item.question}
                        </span>
                        <span
                          className={`transform transition-transform duration-300 ${
                            openItems[fullIndex] ? "rotate-180" : ""
                          }`}
                        >
                          <svg
                            className="w-5 h-5 text-primary"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </span>
                      </button>

                      {openItems[fullIndex] && (
                        <div className="px-4 py-4 bg-card-bg border-t border-border-color">
                          <div className="text-secondary-text text-sm lg:text-base leading-relaxed whitespace-pre-line">
                            {item.answer}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </Card>
          ))}
        </div>

        <div
          className="mt-12 text-center fade-in"
          style={{ animationDelay: "0.4s" }}
        >
          <Card padding="md" className="max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-primary mb-3">
              ¿No encontraste tu respuesta?
            </h3>
            <p className="text-secondary-text mb-4 text-sm">
              Estamos aquí para ayudarte. Contáctanos directamente y
              resolveremos todas tus dudas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contacto"
                className="bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-lg font-semibold transition-colors inline-flex items-center justify-center"
              >
                Contactar Soporte
              </a>
              <a
                href="https://wa.me/+1234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-primary text-primary hover:bg-primary hover:text-white px-6 py-3 rounded-lg font-semibold transition-colors inline-flex items-center justify-center"
              >
                WhatsApp
              </a>
            </div>
          </Card>
        </div>
      </Container>
    </section>
  );
}
