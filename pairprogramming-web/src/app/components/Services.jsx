export default function Services() {
  return (
    <section className="py-16 bg-white dark:bg-gray-800 dark:text-gray-200">
      <div className="container mx-auto">
        <h3 className="text-3xl font-semibold text-center mb-12">
          Nuestros Servicios
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-gray-100 dark:bg-gray-700 rounded-lg shadow-md hover:shadow-xl transition-shadow">
            <h4 className="text-xl font-bold mb-4">Productos Digitales</h4>
            <p className="text-gray-700 dark:text-gray-300">
              Plataformas escalables como aplicaciones móviles, SaaS, CRM, ERP e
              intranets, diseñadas para optimizar procesos y crecer con tu
              negocio.
            </p>
          </div>
          <div className="p-6 bg-gray-100 dark:bg-gray-700 rounded-lg shadow-md hover:shadow-xl transition-shadow">
            <h4 className="text-xl font-bold mb-4">Servicios Digitales</h4>
            <p className="text-gray-700 dark:text-gray-300">
              Desarrollo a medida, consultoría estratégica, diseño UX/UI,
              integración de sistemas y soporte técnico para soluciones
              personalizadas.
            </p>
          </div>
          <div className="p-6 bg-gray-100 dark:bg-gray-700 rounded-lg shadow-md hover:shadow-xl transition-shadow">
            <h4 className="text-xl font-bold mb-4">Soluciones Digitales</h4>
            <p className="text-gray-700 dark:text-gray-300">
              Proyectos integrales que combinan tecnología y estrategia, como
              dashboards ejecutivos, portales de autoservicio y modernización de
              sistemas legacy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
