
import { Card } from "../ui/Card";

export default function TicketInfoPanel({ ticketNumber }) {
  return (
    <Card padding="md" className="sticky top-4">
      <h3 className="text-lg font-bold text-primary mb-4">
        Información del Ticket
      </h3>
      <div className="space-y-3 text-sm">
        <div className="flex justify-between">
          <span className="text-secondary-text">Ticket:</span>
          <span className="font-mono text-primary">{ticketNumber}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-secondary-text">Estado:</span>
          <span className="text-green-400">● En Progreso</span>
        </div>
        <div className="flex justify-between">
          <span className="text-secondary-text">Creado:</span>
          <span>{new Date().toLocaleDateString("es-ES")}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-secondary-text">Tiempo de respuesta:</span>
          <span className="text-green-400">Inmediato</span>
        </div>
      </div>
    </Card>
  );
}
