
const commonIssues = [
  "Problemas con el servidor",
  "Error en la aplicación",
  "Consulta sobre facturación",
  "Problema de rendimiento",
  "Solicitud de nuevas funciones",
  "Problema de integración",
];

export default function CommonIssues({ onQuickIssue }) {
  return (
    <div className="mb-4">
      <p className="text-secondary-text text-sm mb-2 hidden lg:block">
        Problemas comunes:
      </p>
      <p className="text-secondary-text text-sm mb-2 lg:hidden">
        Selecciona un problema común:
      </p>
      <div className="flex flex-wrap gap-2">
        {commonIssues.map((issue, index) => (
          <button
            key={index}
            onClick={() => onQuickIssue(issue)}
            className="text-xs bg-background hover:bg-hover-bg text-secondary-text border border-border-color px-3 py-1 rounded-full transition-colors hover:text-primary hover:border-primary flex-shrink-0"
          >
            {issue}
          </button>
        ))}
      </div>
    </div>
  );
}
