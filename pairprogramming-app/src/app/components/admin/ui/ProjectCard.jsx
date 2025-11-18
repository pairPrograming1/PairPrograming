
import { Button } from "../../ui/Button";

export default function ProjectCard({
  project,
  onStatusChange,
  showActions = false,
}) {
  const statusColors = {
    Completado: "bg-green-500/20 text-green-400",
    "En progreso": "bg-blue-500/20 text-blue-400",
    Planificación: "bg-yellow-500/20 text-yellow-400",
    Pausado: "bg-gray-500/20 text-gray-400",
  };

  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between p-3 md:p-4 bg-background/50 rounded-lg gap-3">
      <div className="flex-1 min-w-0">
        <h4 className="font-semibold text-white text-sm md:text-base truncate">
          {project.name}
        </h4>
        <p className="text-secondary-text text-xs md:text-sm">
          {project.client}
        </p>
      </div>
      <div className="flex flex-col sm:flex-row sm:items-center gap-2 md:gap-4 w-full sm:w-auto">
        {showActions ? (
          <select
            value={project.status}
            onChange={(e) => onStatusChange(project.id, e.target.value)}
            className="bg-background border border-border-color rounded px-2 py-1 text-xs md:text-sm text-white w-full max-w-[120px]"
          >
            <option value="Planificación">Planificación</option>
            <option value="En progreso">En progreso</option>
            <option value="Completado">Completado</option>
            <option value="Pausado">Pausado</option>
          </select>
        ) : (
          <span
            className={`px-2 py-1 rounded text-xs w-fit ${
              statusColors[project.status]
            }`}
          >
            {project.status}
          </span>
        )}
        <div className="flex items-center gap-2 md:gap-4">
          <div className="w-16 md:w-24 bg-background rounded-full h-2">
            <div
              className="bg-primary h-2 rounded-full transition-all"
              style={{ width: `${project.progress}%` }}
            ></div>
          </div>
          <span className="text-secondary-text text-xs md:text-sm whitespace-nowrap">
            {project.progress}%
          </span>
        </div>
        {showActions && (
          <div className="flex flex-col sm:flex-row gap-1 min-w-[100px]">
            <Button size="sm" variant="outline" className="text-xs py-1">
              Editar
            </Button>
            <Button
              size="sm"
              variant="outline"
              className="text-xs py-1 text-red-400 border-red-400"
            >
              Eliminar
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
