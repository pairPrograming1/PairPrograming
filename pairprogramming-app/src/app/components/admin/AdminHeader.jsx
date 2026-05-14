
export default function AdminHeader() {
  return (
    <div className="text-center mb-8 fade-in px-4">
      <h1
        className={`font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent transition-all duration-300 text-3xl lg:text-4xl`}
      >
        Panel de Administración
      </h1>
      <p className="text-secondary-text max-w-2xl mx-auto text-lg">
        Gestiona proyectos, mensajes y configuración del sitio.
      </p>
    </div>
  );
}
