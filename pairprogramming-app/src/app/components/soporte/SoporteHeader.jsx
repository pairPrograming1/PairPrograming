// components/soporte/SoporteHeader.jsx
export default function SoporteHeader({ isSidebarExpanded }) {
  return (
    <div className="text-center mb-8 fade-in">
      <h1
        className={`font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent transition-all duration-300 ${
          isSidebarExpanded ? "text-2xl lg:text-3xl" : "text-3xl lg:text-4xl"
        }`}
      >
        Soporte Técnico
      </h1>
      <p className="text-secondary-text max-w-2xl mx-auto text-lg">
        Estamos aquí para ayudarte. Chatea con nuestro equipo de especialistas.
      </p>
    </div>
  );
}
