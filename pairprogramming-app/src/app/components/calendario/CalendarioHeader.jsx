import { Button } from "../ui/Button";

const months = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];

export default function CalendarioHeader({
  isSidebarExpanded,
  currentDate,
  onPreviousMonth,
  onNextMonth,
  showNavigation = false,
}) {
  if (showNavigation) {
    return (
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-white mb-4 sm:mb-0">
          {months[currentDate.getMonth()]} {currentDate.getFullYear()}
        </h2>
        <div className="flex space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={onPreviousMonth}
            icon="◀"
          >
            Anterior
          </Button>
          <Button variant="outline" size="sm" onClick={onNextMonth} icon="▶">
            Siguiente
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="text-center mb-8 fade-in">
      <h1
        className={`font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent transition-all duration-300 ${
          isSidebarExpanded ? "text-2xl lg:text-3xl" : "text-3xl lg:text-4xl"
        }`}
      >
        Calendario de Proyectos
      </h1>
      <p className="text-secondary-text max-w-2xl mx-auto text-lg">
        Organiza y gestiona tus reuniones, desarrollos y actividades técnicas.
      </p>
    </div>
  );
}
