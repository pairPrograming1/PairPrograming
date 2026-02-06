export function ContactHeader({ isSidebarExpanded }) {
  return (
    <div className="text-center mb-12">
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-blue/10 border border-brand-blue/20 mb-6 animate-fade-in-up">
        <span className="w-2 h-2 rounded-full bg-brand-gold" />
        <span className="text-sm font-medium text-brand-blue-light">
          Contacto
        </span>
      </div>

      <h1
        className={`font-bold mb-4 text-foreground tracking-tight leading-tight transition-all duration-300 animate-fade-in-up stagger-1 ${
          isSidebarExpanded ? "text-2xl lg:text-3xl" : "text-3xl lg:text-4xl"
        }`}
      >
        Hablemos de tu{" "}
        <span className="text-brand-blue">Proyecto</span>
      </h1>

      <p className="text-secondary-text max-w-2xl mx-auto text-lg leading-relaxed animate-fade-in-up stagger-2">
        ¿Tienes una idea innovadora? Cuéntanos sobre tu proyecto y trabajemos
        juntos para hacerla realidad.
      </p>
    </div>
  );
}
