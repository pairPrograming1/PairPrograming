// components/soporte/QuickActions.jsx
import { Button } from "../ui/Button";

export default function QuickActions({ onDownloadChat, ticketNumber }) {
  return (
    <div className="border-t border-border-color pt-4">
      <h4 className="text-sm font-semibold text-white mb-3">
        Acciones Rápidas
      </h4>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
        <Button
          variant="outline"
          size="sm"
          className="w-full justify-center text-xs"
          onClick={onDownloadChat}
          icon="💾"
        >
          Descargar Chat
        </Button>
        <Button
          variant="outline"
          size="sm"
          className="w-full justify-center text-xs"
          href="/faq"
          icon="📚"
        >
          Ver FAQ
        </Button>
        <Button
          variant="outline"
          size="sm"
          className="w-full justify-center text-xs"
          href="/calendario"
          icon="📅"
        >
          Agendar Reunión
        </Button>
      </div>
    </div>
  );
}
