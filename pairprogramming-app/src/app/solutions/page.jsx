import SectionCard from "../components/SectionCard";

export default function Solutions() {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8 text-center">
        Soluciones Digitales
      </h1>
      <SectionCard title="Descripción">
        <p>
          Proyectos integrales que combinan productos, servicios y procesos
          tecnológicos para resolver problemas complejos de negocio.
        </p>
      </SectionCard>
      <SectionCard title="Ejemplos">
        <ul className="list-disc pl-6">
          <li>Plataformas web con CRM y automatización de ventas.</li>
          <li>Migración y modernización de sistemas legacy.</li>
          <li>Integraciones complejas y middleware.</li>
          <li>Webs híbridas (corporativas + operativas).</li>
          <li>Dashboards ejecutivos y análisis de datos.</li>
          <li>Portales de clientes con autoservicio.</li>
          <li>Intranets integradas para comunicación interna.</li>
          <li>Web corporativa extendida con valor operativo.</li>
          <li>Aplicaciones con geolocalización en tiempo real.</li>
        </ul>
      </SectionCard>
      <SectionCard title="Tecnologías">
        <ul className="list-disc pl-6">
          <li>
            Core stack: Next.js, React, Tailwind, Node.js, Express, NestJS,
            Sequelize.
          </li>
          <li>
            Bases de datos: PostgreSQL, MySQL, MongoDB, Redis, ElasticSearch.
          </li>
          <li>
            Integración y seguridad: JWT, Auth0, OAuth2, APIs REST/GraphQL,
            WebRTC, Socket.io, integración de pagos.
          </li>
          <li>
            Visualización y análisis: Google Charts, Chart.js, react-chartjs-2,
            D3.js, Metabase, Power BI.
          </li>
          <li>Documentación: jsPDF, Canvas/ReportLab.</li>
          <li>Geolocalización: OpenStreetMap, Leaflet.</li>
          <li>Gestión de archivos: Cloudinary.</li>
          <li>Automatización: Zapier/Make, RPA.</li>
          <li>Infraestructura: Docker, AWS, GCP, Azure, Vercel, Netlify.</li>
          <li>Herramientas: Postman, Swagger, ClickUp, Trello, Discord.</li>
          <li>
            Innovación: Integración básica de IA, Web3/blockchain si requerido.
          </li>
        </ul>
      </SectionCard>
    </div>
  );
}
