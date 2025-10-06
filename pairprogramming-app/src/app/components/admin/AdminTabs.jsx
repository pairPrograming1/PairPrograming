// components/admin/AdminTabs.jsx
import { Button } from "../ui/Button";

const tabs = [
  { id: "overview", label: "Resumen", icon: "📊" },
  { id: "projects", label: "Proyectos", icon: "🚀" },
  { id: "messages", label: "Mensajes", icon: "💬" },
  { id: "users", label: "Usuarios", icon: "👥" },
  { id: "settings", label: "Configuración", icon: "⚙️" },
];

export default function AdminTabs({ activeTab, setActiveTab }) {
  return (
    <div className="flex flex-wrap gap-2 justify-center md:justify-start">
      {tabs.map((tab) => (
        <Button
          key={tab.id}
          variant={activeTab === tab.id ? "primary" : "outline"}
          size="sm"
          onClick={() => setActiveTab(tab.id)}
          icon={tab.icon}
          className="flex-1 md:flex-none min-w-[120px] text-xs md:text-sm"
        >
          {tab.label}
        </Button>
      ))}
    </div>
  );
}
