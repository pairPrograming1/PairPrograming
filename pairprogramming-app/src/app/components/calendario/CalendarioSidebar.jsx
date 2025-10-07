import { Card } from "../ui/Card";
import { Button } from "../ui/Button";

export default function CalendarioSidebar({
  events,
  eventTypes,
  onGoToToday,
  onShowEventModal,
}) {
  return (
    <div className="lg:col-span-1 space-y-6">
      <Card padding="md" className="sticky top-4">
        <h3 className="text-lg font-bold text-primary mb-4">
          Acciones Rápidas
        </h3>
        <div className="space-y-3">
          <Button
            onClick={onGoToToday}
            className="w-full justify-center"
            icon="📅"
          >
            Hoy
          </Button>
          <Button
            onClick={onShowEventModal}
            variant="outline"
            className="w-full justify-center"
            icon="➕"
          >
            Nuevo Evento
          </Button>
        </div>
      </Card>

      <Card padding="md">
        <h3 className="text-lg font-bold text-primary mb-4">
          Tipos de Eventos
        </h3>
        <div className="space-y-2">
          {Object.entries(eventTypes).map(([key, type]) => (
            <div key={key} className="flex items-center space-x-2">
              <div className={`w-3 h-3 rounded-full ${type.color}`}></div>
              <span className="text-sm text-secondary-text">{type.name}</span>
            </div>
          ))}
        </div>
      </Card>

      <Card padding="md">
        <h3 className="text-lg font-bold text-primary mb-4">
          Próximos Eventos
        </h3>
        <div className="space-y-3 max-h-64 overflow-y-auto">
          {events
            .filter((event) => new Date(event.date) >= new Date())
            .sort((a, b) => new Date(a.date) - new Date(b.date))
            .slice(0, 5)
            .map((event) => (
              <div
                key={event.id}
                className="p-2 rounded-lg bg-background/50 border-l-4"
                style={{
                  borderLeftColor: eventTypes[event.type].color.replace(
                    "bg-",
                    ""
                  ),
                }}
              >
                <p className="font-semibold text-white text-sm">
                  {event.title}
                </p>
                <p className="text-secondary-text text-xs">
                  {new Date(event.date).toLocaleDateString("es-ES")} -{" "}
                  {event.time}
                </p>
              </div>
            ))}
          {events.filter((event) => new Date(event.date) >= new Date())
            .length === 0 && (
            <p className="text-secondary-text text-sm text-center">
              No hay eventos próximos
            </p>
          )}
        </div>
      </Card>
    </div>
  );
}
