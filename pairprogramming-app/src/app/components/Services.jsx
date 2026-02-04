"use client";
import { useSidebar } from "../context/SidebarContext";
import { Container } from "./ui/Container";

const ServiceIcon = ({ name }) => {
  const icons = {
    "Productos Digitales": (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
    "Branding & Identidad": (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ),
    "Marketing & Growth": (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="20" x2="12" y2="10" />
        <line x1="18" y1="20" x2="18" y2="4" />
        <line x1="6" y1="20" x2="6" y2="16" />
      </svg>
    ),
    "CRM & Automatización": (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" />
        <rect x="14" y="3" width="7" height="7" />
        <rect x="14" y="14" width="7" height="7" />
        <rect x="3" y="14" width="7" height="7" />
      </svg>
    ),
    "Automatización & n8n": (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    "Consultoría en Ciberseguridad": (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    "SEO & Contenido": (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.35-4.35" />
      </svg>
    ),
    "Modernización de Legacy": (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 3 21 3 21 8" />
        <line x1="4" y1="20" x2="21" y2="3" />
        <polyline points="21 16 21 21 16 21" />
        <line x1="15" y1="15" x2="21" y2="21" />
        <line x1="4" y1="4" x2="9" y2="9" />
      </svg>
    ),
    "QA, Testing & Performance": (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="20 6 9 17 4 12" />
      </svg>
    ),
    "Cloud & DevOps": (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
      </svg>
    ),
    "Servicios Digitales": (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    ),
    "Soluciones Digitales": (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
        <line x1="12" y1="22.08" x2="12" y2="12" />
      </svg>
    ),
  };

  return icons[name] || null;
};

export default function Services() {
  const { isSidebarExpanded } = useSidebar();

  const services = [
    {
      title: "Productos Digitales",
      description:
        "Plataformas escalables como aplicaciones móviles, SaaS, CRM, ERP e intranets, diseñadas para optimizar procesos y crecer con tu negocio.",
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
      features: [
        "Naming y posicionamiento",
        "Logotipo y sistema visual",
        "Manual de marca",
        "Aplicaciones de marca",
      ],
    },
    {
      title: "Marketing & Growth",
      description:
        "Estrategias de adquisición y retención: campañas pagadas, inbound, email marketing y growth experiments para escalar usuarios y ventas.",
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
      features: [
        "Implementación CRM",
        "Automatizaciones y workflows",
        "Integración con herramientas",
        "Reportes y pipelines",
      ],
    },
    {
      title: "Automatización & n8n",
      description:
        "Implementamos flujos de trabajo visuales con n8n para automatizar procesos, integrar herramientas y orquestar pipelines sin código o con código ligero.",
      features: [
        "Diseño de workflows con n8n",
        "Integraciones API y webhooks",
        "Automatizaciones de marketing",
        "Monitoreo de workflows",
      ],
    },
    {
      title: "Consultoría en Ciberseguridad",
      description:
        "Evaluaciones de seguridad, hardening, pruebas de penetración y estrategias de gobernanza para proteger datos, infra y aplicaciones.",
      features: [
        "Auditoría y evaluación de riesgos",
        "Pruebas de penetración",
        "Hardening de infraestructura",
        "Planes de respuesta",
      ],
    },
    {
      title: "SEO & Contenido",
      description:
        "Mejoramos la visibilidad orgánica con auditorías SEO, optimización on-page, estrategia de contenidos y linkbuilding técnico.",
      features: [
        "Auditoría SEO técnica",
        "Estrategia de contenidos",
        "Optimización on-page",
        "Linkbuilding",
      ],
    },
    {
      title: "Modernización de Legacy",
      description:
        "Modernizamos sistemas legacy a arquitecturas modernas: refactor, migración a microservicios, contenedores y APIs REST/GraphQL.",
      features: [
        "Evaluación y plan de migración",
        "Refactor y cobertura de tests",
        "Contenerización y orquestación",
        "Integración con APIs modernas",
      ],
    },
    {
      title: "QA, Testing & Performance",
      description:
        "Aseguramos calidad con pruebas automatizadas, e2e, unitarias, y optimizaciones de performance y experiencia de usuario.",
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
      features: [
        "Infraestructura como código",
        "CI/CD automatizados",
        "Observability",
        "Optimización de costos",
      ],
    },
    {
      title: "Servicios Digitales",
      description:
        "Desarrollo a medida, consultoría estratégica, diseño UX/UI, integración de sistemas y soporte técnico para soluciones personalizadas.",
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
      features: [
        "Dashboards Ejecutivos",
        "Portales Cliente",
        "Modernización",
        "Soluciones E2E",
      ],
    },
  ];

  return (
    <section className="py-16 lg:py-20 bg-black text-white border-b border-gray-800">
      <Container size={isSidebarExpanded ? "expanded" : "default"}>
        <div className="text-center mb-16">
          <h2
            className={`font-bold mb-4 text-white transition-all duration-300 ${
              isSidebarExpanded
                ? "text-2xl lg:text-3xl"
                : "text-3xl lg:text-4xl"
            }`}
          >
            Nuestros Servicios
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-base lg:text-lg">
            Soluciones completas que transforman tu visión en realidad digital
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-blue-600/50 transition-all duration-300"
            >
              {/* Icono */}
              <div className="text-blue-500 mb-4 group-hover:text-blue-400 transition-colors duration-300">
                <ServiceIcon name={service.title} />
              </div>

              {/* Título */}
              <h4
                className={`font-semibold mb-3 text-white group-hover:text-blue-100 transition-colors ${
                  isSidebarExpanded ? "text-base" : "text-lg"
                }`}
              >
                {service.title}
              </h4>

              {/* Descripción */}
              <p className="text-gray-400 mb-4 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start text-sm text-gray-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4 text-blue-500 mr-2 flex-shrink-0 mt-0.5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
