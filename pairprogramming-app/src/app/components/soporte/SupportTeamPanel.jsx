
import { Card } from "../ui/Card";

const supportAgents = [
  {
    name: "Carlos Rodríguez",
    role: "Especialista en Soporte Técnico",
    expertise: ["Backend", "APIs", "Servidores"],
    status: "En línea",
    avatar: "👨‍💻",
  },
  {
    name: "Ana Martínez",
    role: "Especialista en Frontend",
    expertise: ["React", "UI/UX", "Performance"],
    status: "Disponible",
    avatar: "👩‍💻",
  },
  {
    name: "David Chen",
    role: "Especialista en DevOps",
    expertise: ["Infraestructura", "CI/CD", "Cloud"],
    status: "En línea",
    avatar: "👨‍🔧",
  },
];

export default function SupportTeamPanel() {
  return (
    <Card padding="md">
      <h3 className="text-lg font-bold text-primary mb-4">Equipo de Soporte</h3>
      <div className="space-y-4">
        {supportAgents.map((agent, index) => (
          <div
            key={index}
            className="flex items-center space-x-3 p-2 rounded-lg bg-background/50"
          >
            <div className="text-2xl">{agent.avatar}</div>
            <div className="flex-1 min-w-0">
              <p className="font-semibold text-white text-sm">{agent.name}</p>
              <p className="text-secondary-text text-xs">{agent.role}</p>
              <p className="text-green-400 text-xs">● {agent.status}</p>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
