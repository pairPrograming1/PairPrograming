
import { Card } from "../../ui/Card";
import { Button } from "../../ui/Button";
import ProjectCard from "../ui/ProjectCard";

export default function ProjectsTab({
  projects,
  updateProjectStatus,
  exportData,
}) {
  return (
    <Card padding="lg">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 mb-6">
        <h3 className="text-lg md:text-xl font-bold text-primary">
          Gestión de Proyectos
        </h3>
        <Button
          icon="📤"
          size="sm"
          onClick={() => exportData("proyectos")}
          className="w-full sm:w-auto"
        >
          Exportar
        </Button>
      </div>
      <div className="overflow-x-auto -mx-4 md:mx-0">
        <div className="min-w-full inline-block align-middle">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border-color">
                <th className="text-left py-3 px-2 md:px-4 text-secondary-text text-xs md:text-sm">
                  Proyecto
                </th>
                <th className="text-left py-3 px-2 md:px-4 text-secondary-text text-xs md:text-sm">
                  Cliente
                </th>
                <th className="text-left py-3 px-2 md:px-4 text-secondary-text text-xs md:text-sm">
                  Estado
                </th>
                <th className="text-left py-3 px-2 md:px-4 text-secondary-text text-xs md:text-sm">
                  Progreso
                </th>
                <th className="text-left py-3 px-2 md:px-4 text-secondary-text text-xs md:text-sm">
                  Fecha Límite
                </th>
                <th className="text-left py-3 px-2 md:px-4 text-secondary-text text-xs md:text-sm">
                  Acciones
                </th>
              </tr>
            </thead>
            <tbody>
              {projects.map((project) => (
                <tr
                  key={project.id}
                  className="border-b border-border-color/50"
                >
                  <td className="py-3 px-2 md:px-4">
                    <div className="font-semibold text-white text-xs md:text-sm">
                      {project.name}
                    </div>
                  </td>
                  <td className="py-3 px-2 md:px-4 text-secondary-text text-xs md:text-sm">
                    {project.client}
                  </td>
                  <td className="py-3 px-2 md:px-4">
                    <select
                      value={project.status}
                      onChange={(e) =>
                        updateProjectStatus(project.id, e.target.value)
                      }
                      className="bg-background border border-border-color rounded px-2 py-1 text-xs md:text-sm text-white w-full max-w-[120px]"
                    >
                      <option value="Planificación">Planificación</option>
                      <option value="En progreso">En progreso</option>
                      <option value="Completado">Completado</option>
                      <option value="Pausado">Pausado</option>
                    </select>
                  </td>
                  <td className="py-3 px-2 md:px-4">
                    <div className="flex items-center gap-1 md:gap-2">
                      <div className="w-12 md:w-20 bg-background rounded-full h-2">
                        <div
                          className="bg-primary h-2 rounded-full transition-all"
                          style={{ width: `${project.progress}%` }}
                        ></div>
                      </div>
                      <span className="text-secondary-text text-xs md:text-sm whitespace-nowrap">
                        {project.progress}%
                      </span>
                    </div>
                  </td>
                  <td className="py-3 px-2 md:px-4 text-secondary-text text-xs md:text-sm">
                    {project.deadline}
                  </td>
                  <td className="py-3 px-2 md:px-4">
                    <div className="flex flex-col sm:flex-row gap-1 min-w-[100px]">
                      <Button
                        size="sm"
                        variant="outline"
                        className="text-xs py-1"
                      >
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
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Card>
  );
}
