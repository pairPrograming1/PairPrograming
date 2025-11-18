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
      title: "Branding & Identidad",
      description:
        "Construimos marcas memorables: naming, diseño de identidad visual, guías de uso y sistemas de marca que comunican tu propuesta de valor.",
      icon: "🎨",
      features: [
        "Naming y posicionamiento",
        "Logotipo y sistema visual",
        "Manual de marca",
        "Aplicaciones de marca (web, social, docs)",
      ],
    },
    {
      title: "Marketing & Growth",
      description:
        "Estrategias de adquisición y retención: campañas pagadas, inbound, email marketing y growth experiments para escalar usuarios y ventas.",
      icon: "📈",
      features: [
        "Estrategia digital",
        "Campañas PPC y social",
        "Email & CRM Marketing",
        "Growth Hacking",
      ],
    },
    {
      title: "CRM & Automatización",
      description:
        "Implementación e integración de CRM, automatizaciones de ventas y marketing, y dashboards para seguimiento de oportunidades.",
      icon: "🤖",
      features: [
        "Implementación CRM (HubSpot, Pipedrive, Salesforce)",
        "Automatizaciones y workflows",
        "Integración con herramientas existentes",
        "Reportes y pipelines de ventas",
      ],
    },
    {
      title: "Automatización & n8n",
      description:
        "Implementamos flujos de trabajo visuales con n8n para automatizar procesos, integrar herramientas y orquestar pipelines sin código o con código ligero.",
      icon: "🔗",
      features: [
        "Diseño de workflows con n8n",
        "Integraciones API y webhooks",
        "Automatizaciones de marketing y ventas",
        "Monitoreo y mantenimiento de workflows",
      ],
    },
    {
      title: "Consultoría en Ciberseguridad",
      description:
        "Evaluaciones de seguridad, hardening, pruebas de penetración y estrategias de gobernanza para proteger datos, infra y aplicaciones.",
      icon: "🛡️",
      features: [
        "Auditoría y evaluación de riesgos",
        "Pruebas de penetración (pentest)",
        "Hardening de infra y aplicaciones",
        "Planes de respuesta y continuidad",
      ],
    },
    {
      title: "SEO & Contenido",
      description:
        "Mejoramos la visibilidad orgánica con auditorías SEO, optimización on-page, estrategia de contenidos y linkbuilding técnico.",
      icon: "🔎",
      features: [
        "Auditoría SEO técnica",
        "Estrategia y calendario de contenidos",
        "Optimización on-page",
        "Linkbuilding y autoridad de dominio",
      ],
    },
    {
      title: "Modernización de Legacy",
      description:
        "Modernizamos sistemas legacy a arquitecturas modernas: refactor, migración a microservicios, contenedores y APIs REST/GraphQL.",
      icon: "🧰",
      features: [
        "Evaluación y plan de migración",
        "Refactor y cobertura de tests",
        "Contenerización (Docker) y orquestación",
        "Integración con APIs modernas",
      ],
    },
    {
      title: "QA, Testing & Performance",
      description:
        "Aseguramos calidad con pruebas automatizadas, e2e, unitarias, y optimizaciones de performance y experiencia de usuario.",
      icon: "✅",
      features: [
        "Pruebas E2E y unitarias",
        "Tests de integración",
        "Auditoría de performance",
        "Monitoreo y alertas",
      ],
    },
    {
      title: "Cloud & DevOps",
      description:
        "Diseñamos infraestructura en la nube, pipelines CI/CD, IaC y prácticas de observabilidad para despliegues seguros y escalables.",
      icon: "☁️",
      features: [
        "Infraestructura como código ",
        "CI/CD y pipelines automatizados",
        "Observability (logs, métricas, traces)",
        "Optimización de costos en la nube",
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
