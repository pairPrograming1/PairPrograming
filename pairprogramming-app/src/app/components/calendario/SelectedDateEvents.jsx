import { Card } from "../ui/Card";
import { Button } from "../ui/Button";

export default function SelectedDateEvents({
  selectedDate,
  events,
  eventTypes,
  onDeleteEvent,
}) {
  return (
    <Card padding="md" className="mt-6">
      <h3 className="text-xl font-bold text-primary mb-4">
        Eventos para{" "}
        {selectedDate.toLocaleDateString("es-ES", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </h3>
      <div className="space-y-3">
        {events.map((event) => (
          <div
            key={event.id}
            className="p-4 rounded-lg bg-background/50 border-l-4 flex justify-between items-center"
            style={{
              borderLeftColor: eventTypes[event.type].color.replace("bg-", ""),
            }}
          >
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-1">
                <span
                  className={`text-sm font-semibold ${
                    eventTypes[event.type].textColor
                  }`}
                >
                  {eventTypes[event.type].name}
                </span>
                <span className="text-secondary-text text-sm">
                  {event.time} -{" "}
                  {new Date(event.endTime).toLocaleTimeString("es-ES", {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </span>
              </div>
              <h4 className="font-bold text-white text-lg">{event.title}</h4>
              {event.description && (
                <p className="text-secondary-text text-sm mt-1">
                  {event.description}
                </p>
              )}
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={() => onDeleteEvent(event.id)}
              className="text-red-400 border-red-400 hover:bg-red-400 hover:text-white"
            >
              Eliminar
            </Button>
          </div>
        ))}
        {events.length === 0 && (
          <p className="text-secondary-text text-center py-4">
            No hay eventos programados para este día
          </p>
        )}
      </div>
    </Card>
  );
}
