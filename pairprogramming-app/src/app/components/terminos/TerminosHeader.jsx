
export default function TerminosHeader() {
  return (
    <div className="text-center mb-12 fade-in">
      <h1
        className={`font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent transition-all duration-300 text-3xl lg:text-4xl`}
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
