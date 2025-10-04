import SectionCard from "../components/SectionCard";

export default function Services() {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8 text-center">
        Servicios Digitales
      </h1>
      <SectionCard title="Descripción">
        <p>
          Desarrollo a medida (web, móvil, escritorio). Consultoría estratégica
          y ferns tecnológica. Soporte técnico y mantenimiento. Integración de
          sistemas (ERP, CRM, e-commerce, BI, plataformas internas). Diseño
          UX/UI, prototipado, validación de experiencia de usuario.
          Documentación técnica y reportes.
        </p>
      </SectionCard>
      <SectionCard title="Tecnologías">
        <ul className="list-disc pl-6">
          <li>
            Front-end: React, Next.js, Redux, Tailwind, Bootstrap, Material UI.
          </li>
          <li>
            Back-end: Node.js, Express, NestJS, Sequelize, JWT, GraphQL,
            microservicios.
          </li>
          <li>
            Bases de datos: PostgreSQL, MySQL, MongoDB, Redis, ElasticSearch.
          </li>
          <li>
            Integración: APIs REST/GraphQL, WebRTC, Socket.io, Google Analytics,
            chatbots con IA, middleware.
          </li>
          <li>
            Automatización y DevOps: Docker, CI/CD (GitHub Actions, GitLab CI).
          </li>
          <li>Documentación/reportes: jsPDF, Google Charts, D3.js.</li>
          <li>Geolocalización y mapas: OpenStreetMap, Leaflet.</li>
          <li>Gestión de archivos: Cloudinary.</li>
          <li>
            Herramientas de gestión y colaboración: ClickUp, Trello, Discord,
            Postman, Swagger.
          </li>
          <li>Metodologías: Ágiles (Scrum, Kanban) y pair programming.</li>
        </ul>
      </SectionCard>
    </div>
  );
}
