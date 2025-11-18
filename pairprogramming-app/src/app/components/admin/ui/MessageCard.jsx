
import { Button } from "../../ui/Button";

export default function MessageCard({
  message,
  onStatusChange,
  onDelete,
  showActions = false,
}) {
  const statusColors = {
    nuevo: "bg-red-500/20 text-red-400",
    leído: "bg-blue-500/20 text-blue-400",
    respondido: "bg-green-500/20 text-green-400",
  };

  return (
    <div className="p-3 md:p-4 bg-background/50 rounded-lg">
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-3 mb-3">
        <div className="flex-1 min-w-0">
          <h4 className="font-semibold text-white text-base md:text-lg">
            {message.name}
          </h4>
          <p className="text-primary text-sm">{message.email}</p>
          <p className="text-secondary-text text-xs">{message.date}</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-2">
          <span
            className={`px-2 py-1 rounded text-xs w-fit ${
              statusColors[message.status]
            }`}
          >
            {message.status}
          </span>
          {showActions && (
            <div className="flex gap-1">
              <Button
                size="sm"
                variant="outline"
                className="text-xs flex-1"
                onClick={() =>
                  onStatusChange(
                    message.id,
                    message.status === "nuevo" ? "leído" : "respondido"
                  )
                }
              >
                {message.status === "nuevo" ? "Leído" : "Respondido"}
              </Button>
              <Button
                size="sm"
                variant="outline"
                className="text-xs flex-1 text-red-400 border-red-400"
                onClick={() => onDelete(message.id)}
              >
                Eliminar
              </Button>
            </div>
          )}
        </div>
      </div>
      <p className="text-secondary-text bg-background p-3 rounded text-sm">
        {message.message}
      </p>
    </div>
  );
}
