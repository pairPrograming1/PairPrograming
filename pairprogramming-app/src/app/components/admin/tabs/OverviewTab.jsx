// components/admin/tabs/OverviewTab.jsx
import { Card } from "../../ui/Card";
import { Button } from "../../ui/Button";
import StatsCard from "../ui/StatsCard";
import ProjectCard from "../ui/ProjectCard";
import MessageCard from "../ui/MessageCard";

export default function OverviewTab({
  stats,
  projects,
  messages,
  updateMessageStatus,
  setActiveTab,
}) {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
        <StatsCard
          icon="🚀"
          value={stats.totalProjects}
          label="Proyectos Totales"
          iconColor="text-blue-400"
        />
        <StatsCard
          icon="✅"
          value={stats.completedProjects}
          label="Completados"
          iconColor="text-green-400"
        />
        <StatsCard
          icon="💬"
          value={stats.pendingMessages}
          label="Mensajes Nuevos"
          iconColor="text-orange-400"
        />
        <StatsCard
          icon="👥"
          value={stats.activeUsers}
          label="Usuarios Activos"
          iconColor="text-purple-400"
        />
      </div>

      <Card padding="lg">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 mb-6">
          <h3 className="text-lg md:text-xl font-bold text-primary">
            Proyectos Recientes
          </h3>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setActiveTab("projects")}
            className="w-full sm:w-auto"
          >
            Ver Todos
          </Button>
        </div>
        <div className="space-y-4">
          {projects.slice(0, 3).map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </Card>

      <Card padding="lg">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 mb-6">
          <h3 className="text-lg md:text-xl font-bold text-primary">
            Mensajes Recientes
          </h3>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setActiveTab("messages")}
            className="w-full sm:w-auto"
          >
            Ver Todos
          </Button>
        </div>
        <div className="space-y-3">
          {messages.slice(0, 3).map((message) => (
            <div
              key={message.id}
              className="flex flex-col sm:flex-row sm:items-center justify-between p-3 bg-background/50 rounded-lg gap-3"
            >
              <div className="flex-1 min-w-0">
                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 mb-1">
                  <h4 className="font-semibold text-white text-sm md:text-base">
                    {message.name}
                  </h4>
                  <span
                    className={`text-xs px-2 py-1 rounded w-fit ${
                      message.status === "nuevo"
                        ? "bg-red-500/20 text-red-400"
                        : message.status === "leído"
                        ? "bg-blue-500/20 text-blue-400"
                        : "bg-green-500/20 text-green-400"
                    }`}
                  >
                    {message.status}
                  </span>
                </div>
                <p className="text-secondary-text text-sm truncate">
                  {message.message}
                </p>
                <p className="text-secondary-text text-xs">{message.date}</p>
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={() => updateMessageStatus(message.id, "leído")}
                className="w-full sm:w-auto mt-2 sm:mt-0"
              >
                Marcar Leído
              </Button>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
