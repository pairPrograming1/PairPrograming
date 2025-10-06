// components/soporte/SupportFeatures.jsx
import { Card } from "../ui/Card";

export default function SupportFeatures({ ticketNumber }) {
  return (
    <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
      <Card padding="sm" className="bg-primary/10 border-primary/20">
        <div className="text-2xl mb-2">⏱️</div>
        <h4 className="font-semibold text-white text-sm">Respuesta Rápida</h4>
        <p className="text-secondary-text text-xs">Menos de 5 minutos</p>
      </Card>
      <Card padding="sm" className="bg-primary/10 border-primary/20">
        <div className="text-2xl mb-2">👨‍💻</div>
        <h4 className="font-semibold text-white text-sm">Expertos Técnicos</h4>
        <p className="text-secondary-text text-xs">Equipo especializado</p>
      </Card>
      <Card padding="sm" className="bg-primary/10 border-primary/20">
        <div className="text-2xl mb-2">📊</div>
        <h4 className="font-semibold text-white text-sm">Seguimiento</h4>
        <p className="text-secondary-text text-xs">Ticket: {ticketNumber}</p>
      </Card>
    </div>
  );
}
