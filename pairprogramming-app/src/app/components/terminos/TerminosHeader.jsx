// components/terminos/TerminosHeader.jsx
export default function TerminosHeader({ isSidebarExpanded }) {
  return (
    <div className="text-center mb-12 fade-in">
      <h1
        className={`font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent transition-all duration-300 ${
          isSidebarExpanded ? "text-2xl lg:text-3xl" : "text-3xl lg:text-4xl"
        }`}
      >
        Términos y Condiciones
      </h1>
      <p className="text-secondary-text max-w-2xl mx-auto text-lg">
        Última actualización:{" "}
        {new Date().toLocaleDateString("es-ES", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </p>
    </div>
  );
}
