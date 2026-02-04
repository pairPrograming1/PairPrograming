
export function ContactHeader({ isSidebarExpanded }) {
  return (
    <div className="text-center mb-12 fade-in">
      <h1
        className={`font-bold mb-4 text-white transition-all duration-300 ${
          isSidebarExpanded ? "text-2xl lg:text-3xl" : "text-3xl lg:text-4xl"
        }`}
      >
        Hablemos de tu Proyecto
      </h1>
      <p className="text-gray-400 max-w-2xl mx-auto text-lg">
        ¿Tienes una idea innovadora? Cuéntanos sobre tu proyecto y trabajemos
        juntos para hacerla realidad.
      </p>
    </div>
  );
}
