import SectionCard from "../components/SectionCard";

export default function Products() {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8 text-center">
        Productos Digitales
      </h1>
      <SectionCard title="Descripción">
        <p>
          Plataformas y software terminados, replicables y escalables.
          Aplicaciones móviles, SaaS, CRM, ERP, intranets, sistemas híbridos
          corporativos.
        </p>
      </SectionCard>
      <SectionCard title="Tecnologías">
        <ul className="list-disc pl-6">
          <li>
            Front-end: React, Next.js, Redux, TailwindCSS, Bootstrap, Material
            UI.
          </li>
          <li>Back-end: Node.js, Express, NestJS, Sequelize, JWT, GraphQL.</li>
          <li>
            Bases de datos: PostgreSQL, MySQL, MongoDB, Redis, ElasticSearch.
          </li>
          <li>
            Integración y seguridad: APIs REST/GraphQL, WebRTC, Socket.io,
            Auth0, OAuth2, integración de pagos (Stripe, PayPal, MercadoPago).
          </li>
          <li>
            Visualización y reportes: Google Charts, Chart.js, react-chartjs-2,
            D3.js, jsPDF.
          </li>
          <li>Geolocalización y mapas: OpenStreetMap, Leaflet.</li>
          <li>Gestión de archivos e imágenes: Cloudinary.</li>
          <li>DevTools y QA: Postman, Swagger, Desktop apps de testing.</li>
          <li>Comunicación/gestión: ClickUp, Trello, Discord.</li>
        </ul>
      </SectionCard>
    </div>
  );
}
