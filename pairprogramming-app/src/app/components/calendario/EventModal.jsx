import { Card } from "../ui/Card";
import { Button } from "../ui/Button";
import { Input } from "../ui/Input";

const timeSlots = [
  "08:00",
  "09:00",
  "10:00",
  "11:00",
  "12:00",
  "13:00",
  "14:00",
  "15:00",
  "16:00",
  "17:00",
  "18:00",
  "19:00",
];

export default function EventModal({
  newEvent,
  eventTypes,
  onEventSubmit,
  onClose,
  onEventChange,
}) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <Card
        padding="lg"
        className="max-w-md w-full max-h-[90vh] overflow-y-auto"
      >
        <h3 className="text-2xl font-bold text-primary mb-4">Nuevo Evento</h3>

        <form onSubmit={onEventSubmit} className="space-y-4">
          <Input
            label="Título del Evento"
            value={newEvent.title}
            onChange={(e) =>
              onEventChange((prev) => ({ ...prev, title: e.target.value }))
            }
            placeholder="Reunión de planificación..."
            required
          />

          <div>
            <label className="block text-secondary-text font-semibold mb-2 text-sm">
              Descripción
            </label>
            <textarea
              value={newEvent.description}
              onChange={(e) =>
                onEventChange((prev) => ({
                  ...prev,
                  description: e.target.value,
                }))
              }
              placeholder="Descripción del evento..."
              className="w-full px-4 py-3 border border-border-color rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-white placeholder-secondary-text resize-none text-sm"
              rows="3"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-secondary-text font-semibold mb-2 text-sm">
                Fecha
              </label>
              <Input
                type="date"
                value={newEvent.date}
                onChange={(e) =>
                  onEventChange((prev) => ({ ...prev, date: e.target.value }))
                }
                required
              />
            </div>

            <div>
              <label className="block text-secondary-text font-semibold mb-2 text-sm">
                Hora
              </label>
              <select
                value={newEvent.time}
                onChange={(e) =>
                  onEventChange((prev) => ({ ...prev, time: e.target.value }))
                }
                className="w-full px-4 py-3 border border-border-color rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-white text-sm"
                required
              >
                {timeSlots.map((slot) => (
                  <option key={slot} value={slot}>
                    {slot}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-secondary-text font-semibold mb-2 text-sm">
                Duración (minutos)
              </label>
              <Input
                type="number"
                value={newEvent.duration}
                onChange={(e) =>
                  onEventChange((prev) => ({
                    ...prev,
                    duration: parseInt(e.target.value),
                  }))
                }
                min="15"
                step="15"
                required
              />
            </div>

            <div>
              <label className="block text-secondary-text font-semibold mb-2 text-sm">
                Tipo de Evento
              </label>
              <select
                value={newEvent.type}
                onChange={(e) =>
                  onEventChange((prev) => ({ ...prev, type: e.target.value }))
                }
                className="w-full px-4 py-3 border border-border-color rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-white text-sm"
                required
              >
                {Object.entries(eventTypes).map(([key, type]) => (
                  <option key={key} value={key}>
                    {type.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="flex space-x-3 pt-4">
            <Button type="submit" className="flex-1" icon="💾">
              Guardar Evento
            </Button>
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="flex-1"
            >
              Cancelar
            </Button>
          </div>
        </form>
      </Card>
    </div>
  );
}
