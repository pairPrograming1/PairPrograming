// components/DashboardAdminContent.jsx
"use client";
import { useState, useEffect } from "react";
import { useSidebar } from "../context/SidebarContext";
import { Container } from "./ui/Container";
import { Card } from "./ui/Card";
import { Button } from "./ui/Button";
import { Input } from "./ui/Input";

export default function DashboardAdminContent() {
  const { isSidebarExpanded } = useSidebar();
  const [activeTab, setActiveTab] = useState("overview");
  const [projects, setProjects] = useState([]);
  const [messages, setMessages] = useState([]);
  const [users, setUsers] = useState([]);
  const [settings, setSettings] = useState({
    siteTitle: "PairProgramming",
    siteDescription: "Transformamos Ideas en Soluciones Digitales",
    primaryColor: "#d4af37",
    secondaryColor: "#ffd700",
    maintenanceMode: false,
  });

  useEffect(() => {
    setProjects([
      {
        id: 1,
        name: "E-commerce Platform",
        status: "En progreso",
        progress: 75,
        client: "TechCorp",
        deadline: "2025-02-15",
      },
      {
        id: 2,
        name: "SaaS Dashboard",
        status: "Completado",
        progress: 100,
        client: "DataSoft",
        deadline: "2025-01-30",
      },
      {
        id: 3,
        name: "Mobile App",
        status: "Planificación",
        progress: 25,
        client: "StartUpXYZ",
        deadline: "2025-03-20",
      },
      {
        id: 4,
        name: "CRM System",
        status: "En progreso",
        progress: 60,
        client: "BusinessCorp",
        deadline: "2025-02-28",
      },
    ]);

    setMessages([
      {
        id: 1,
        name: "Juan Pérez",
        email: "juan@empresa.com",
        message: "Consulta sobre desarrollo web...",
        date: "2025-01-15",
        status: "nuevo",
      },
      {
        id: 2,
        name: "María García",
        email: "maria@startup.com",
        message: "Presupuesto para aplicación móvil",
        date: "2025-01-14",
        status: "leído",
      },
      {
        id: 3,
        name: "Carlos López",
        email: "carlos@tech.com",
        message: "Soporte técnico requerido",
        date: "2025-01-13",
        status: "respondido",
      },
    ]);

    setUsers([
      {
        id: 1,
        name: "Pablo Rubiño",
        role: "Full-Stack Developer",
        status: "activo",
        lastLogin: "2025-01-15",
      },
      {
        id: 2,
        name: "Esteban Aleart",
        role: "Full-Stack Developer",
        status: "activo",
        lastLogin: "2025-01-15",
      },
      {
        id: 3,
        name: "Josue Rendom",
        role: "Full-Stack Developer",
        status: "activo",
        lastLogin: "2025-01-14",
      },
    ]);
  }, []);

  const stats = {
    totalProjects: projects.length,
    completedProjects: projects.filter((p) => p.status === "Completado").length,
    pendingMessages: messages.filter((m) => m.status === "nuevo").length,
    activeUsers: users.filter((u) => u.status === "activo").length,
  };

  const updateProjectStatus = (projectId, newStatus) => {
    setProjects((prev) =>
      prev.map((p) => (p.id === projectId ? { ...p, status: newStatus } : p))
    );
  };

  const updateMessageStatus = (messageId, newStatus) => {
    setMessages((prev) =>
      prev.map((m) => (m.id === messageId ? { ...m, status: newStatus } : m))
    );
  };

  const deleteMessage = (messageId) => {
    setMessages((prev) => prev.filter((m) => m.id !== messageId));
  };

  const updateSettings = (newSettings) => {
    setSettings(newSettings);
    console.log("Configuración actualizada:", newSettings);
  };

  const exportData = (type) => {
    alert(`Exportando datos de ${type}...`);
  };

  return (
    <section className="py-16 lg:py-20 bg-card-bg text-white min-h-screen">
      <Container size={isSidebarExpanded ? "expanded" : "default"}>
        <div className="text-center mb-8 fade-in">
          <h1
            className={`font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent transition-all duration-300 ${
              isSidebarExpanded
                ? "text-2xl lg:text-3xl"
                : "text-3xl lg:text-4xl"
            }`}
          >
            Panel de Administración
          </h1>
          <p className="text-secondary-text max-w-2xl mx-auto text-lg">
            Gestiona proyectos, mensajes y configuración del sitio.
          </p>
        </div>

        <Card padding="md" className="mb-6">
          <div className="flex flex-wrap gap-2">
            {[
              { id: "overview", label: "Resumen", icon: "📊" },
              { id: "projects", label: "Proyectos", icon: "🚀" },
              { id: "messages", label: "Mensajes", icon: "💬" },
              { id: "users", label: "Usuarios", icon: "👥" },
              { id: "settings", label: "Configuración", icon: "⚙️" },
            ].map((tab) => (
              <Button
                key={tab.id}
                variant={activeTab === tab.id ? "primary" : "outline"}
                size="sm"
                onClick={() => setActiveTab(tab.id)}
                icon={tab.icon}
              >
                {tab.label}
              </Button>
            ))}
          </div>
        </Card>

        <div className="fade-in">
          {activeTab === "overview" && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card padding="md" className="text-center hover-lift">
                  <div className="text-3xl text-blue-400 mb-2">🚀</div>
                  <h3 className="text-2xl font-bold text-white">
                    {stats.totalProjects}
                  </h3>
                  <p className="text-secondary-text">Proyectos Totales</p>
                </Card>
                <Card padding="md" className="text-center hover-lift">
                  <div className="text-3xl text-green-400 mb-2">✅</div>
                  <h3 className="text-2xl font-bold text-white">
                    {stats.completedProjects}
                  </h3>
                  <p className="text-secondary-text">Completados</p>
                </Card>
                <Card padding="md" className="text-center hover-lift">
                  <div className="text-3xl text-orange-400 mb-2">💬</div>
                  <h3 className="text-2xl font-bold text-white">
                    {stats.pendingMessages}
                  </h3>
                  <p className="text-secondary-text">Mensajes Nuevos</p>
                </Card>
                <Card padding="md" className="text-center hover-lift">
                  <div className="text-3xl text-purple-400 mb-2">👥</div>
                  <h3 className="text-2xl font-bold text-white">
                    {stats.activeUsers}
                  </h3>
                  <p className="text-secondary-text">Usuarios Activos</p>
                </Card>
              </div>

              <Card padding="lg">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-xl font-bold text-primary">
                    Proyectos Recientes
                  </h3>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setActiveTab("projects")}
                  >
                    Ver Todos
                  </Button>
                </div>
                <div className="space-y-4">
                  {projects.slice(0, 3).map((project) => (
                    <div
                      key={project.id}
                      className="flex items-center justify-between p-4 bg-background/50 rounded-lg"
                    >
                      <div className="flex-1">
                        <h4 className="font-semibold text-white">
                          {project.name}
                        </h4>
                        <p className="text-secondary-text text-sm">
                          {project.client}
                        </p>
                      </div>
                      <div className="flex items-center space-x-4">
                        <span
                          className={`px-2 py-1 rounded text-xs ${
                            project.status === "Completado"
                              ? "bg-green-500/20 text-green-400"
                              : project.status === "En progreso"
                              ? "bg-blue-500/20 text-blue-400"
                              : "bg-yellow-500/20 text-yellow-400"
                          }`}
                        >
                          {project.status}
                        </span>
                        <div className="w-24 bg-background rounded-full h-2">
                          <div
                            className="bg-primary h-2 rounded-full transition-all"
                            style={{ width: `${project.progress}%` }}
                          ></div>
                        </div>
                        <span className="text-secondary-text text-sm">
                          {project.progress}%
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              <Card padding="lg">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-xl font-bold text-primary">
                    Mensajes Recientes
                  </h3>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setActiveTab("messages")}
                  >
                    Ver Todos
                  </Button>
                </div>
                <div className="space-y-3">
                  {messages.slice(0, 3).map((message) => (
                    <div
                      key={message.id}
                      className="flex items-center justify-between p-3 bg-background/50 rounded-lg"
                    >
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-1">
                          <h4 className="font-semibold text-white">
                            {message.name}
                          </h4>
                          <span
                            className={`text-xs px-2 py-1 rounded ${
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
                        <p className="text-secondary-text text-xs">
                          {message.date}
                        </p>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => updateMessageStatus(message.id, "leído")}
                      >
                        Marcar Leído
                      </Button>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          )}

          {activeTab === "projects" && (
            <Card padding="lg">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold text-primary">
                  Gestión de Proyectos
                </h3>
                <Button
                  icon="📤"
                  size="sm"
                  onClick={() => exportData("proyectos")}
                >
                  Exportar
                </Button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border-color">
                      <th className="text-left py-3 px-4 text-secondary-text text-sm">
                        Proyecto
                      </th>
                      <th className="text-left py-3 px-4 text-secondary-text text-sm">
                        Cliente
                      </th>
                      <th className="text-left py-3 px-4 text-secondary-text text-sm">
                        Estado
                      </th>
                      <th className="text-left py-3 px-4 text-secondary-text text-sm">
                        Progreso
                      </th>
                      <th className="text-left py-3 px-4 text-secondary-text text-sm">
                        Fecha Límite
                      </th>
                      <th className="text-left py-3 px-4 text-secondary-text text-sm">
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
                        <td className="py-3 px-4">
                          <div className="font-semibold text-white text-sm">
                            {project.name}
                          </div>
                        </td>
                        <td className="py-3 px-4 text-secondary-text text-sm">
                          {project.client}
                        </td>
                        <td className="py-3 px-4">
                          <select
                            value={project.status}
                            onChange={(e) =>
                              updateProjectStatus(project.id, e.target.value)
                            }
                            className="bg-background border border-border-color rounded px-2 py-1 text-sm text-white"
                          >
                            <option value="Planificación">Planificación</option>
                            <option value="En progreso">En progreso</option>
                            <option value="Completado">Completado</option>
                            <option value="Pausado">Pausado</option>
                          </select>
                        </td>
                        <td className="py-3 px-4">
                          <div className="flex items-center space-x-2">
                            <div className="w-20 bg-background rounded-full h-2">
                              <div
                                className="bg-primary h-2 rounded-full transition-all"
                                style={{ width: `${project.progress}%` }}
                              ></div>
                            </div>
                            <span className="text-secondary-text text-sm">
                              {project.progress}%
                            </span>
                          </div>
                        </td>
                        <td className="py-3 px-4 text-secondary-text text-sm">
                          {project.deadline}
                        </td>
                        <td className="py-3 px-4">
                          <div className="flex space-x-1">
                            <Button
                              size="sm"
                              variant="outline"
                              className="text-xs"
                            >
                              Editar
                            </Button>
                            <Button
                              size="sm"
                              variant="outline"
                              className="text-xs text-red-400 border-red-400"
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
            </Card>
          )}

          {activeTab === "messages" && (
            <Card padding="lg">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold text-primary">
                  Mensajes de Contacto
                </h3>
                <Button
                  icon="📤"
                  size="sm"
                  onClick={() => exportData("mensajes")}
                >
                  Exportar
                </Button>
              </div>
              <div className="space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className="p-4 bg-background/50 rounded-lg"
                  >
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h4 className="font-semibold text-white text-lg">
                          {message.name}
                        </h4>
                        <p className="text-primary text-sm">{message.email}</p>
                        <p className="text-secondary-text text-xs">
                          {message.date}
                        </p>
                      </div>
                      <div className="flex space-x-1">
                        <span
                          className={`px-2 py-1 rounded text-xs ${
                            message.status === "nuevo"
                              ? "bg-red-500/20 text-red-400"
                              : message.status === "leído"
                              ? "bg-blue-500/20 text-blue-400"
                              : "bg-green-500/20 text-green-400"
                          }`}
                        >
                          {message.status}
                        </span>
                        <Button
                          size="sm"
                          variant="outline"
                          className="text-xs"
                          onClick={() =>
                            updateMessageStatus(
                              message.id,
                              message.status === "nuevo"
                                ? "leído"
                                : "respondido"
                            )
                          }
                        >
                          {message.status === "nuevo"
                            ? "Leído"
                            : message.status === "leído"
                            ? "Respondido"
                            : "Respondido"}
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          className="text-xs text-red-400 border-red-400"
                          onClick={() => deleteMessage(message.id)}
                        >
                          Eliminar
                        </Button>
                      </div>
                    </div>
                    <p className="text-secondary-text bg-background p-3 rounded text-sm">
                      {message.message}
                    </p>
                  </div>
                ))}
              </div>
            </Card>
          )}

          {activeTab === "users" && (
            <Card padding="lg">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold text-primary">
                  Gestión de Usuarios
                </h3>
                <Button icon="👤" size="sm">
                  Nuevo Usuario
                </Button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {users.map((user) => (
                  <Card key={user.id} padding="md" className="hover-lift">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-3">
                        <span className="text-2xl text-primary">👨‍💻</span>
                      </div>
                      <h4 className="font-semibold text-white text-lg">
                        {user.name}
                      </h4>
                      <p className="text-secondary-text text-sm mb-2">
                        {user.role}
                      </p>
                      <div className="flex items-center justify-center space-x-2 mb-3">
                        <span
                          className={`w-2 h-2 rounded-full ${
                            user.status === "activo"
                              ? "bg-green-400"
                              : "bg-red-400"
                          }`}
                        ></span>
                        <span className="text-secondary-text text-sm capitalize">
                          {user.status}
                        </span>
                      </div>
                      <p className="text-secondary-text text-xs">
                        Último acceso: {user.lastLogin}
                      </p>
                      <div className="flex space-x-1 mt-3">
                        <Button
                          size="sm"
                          variant="outline"
                          className="text-xs flex-1"
                        >
                          Editar
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          className="text-xs flex-1 text-red-400 border-red-400"
                        >
                          Desactivar
                        </Button>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </Card>
          )}

          {activeTab === "settings" && (
            <Card padding="lg">
              <h3 className="text-xl font-bold text-primary mb-6">
                Configuración del Sitio
              </h3>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input
                    label="Título del Sitio"
                    value={settings.siteTitle}
                    onChange={(e) =>
                      updateSettings({ ...settings, siteTitle: e.target.value })
                    }
                    placeholder="Nombre de la empresa"
                    size="sm"
                  />
                  <Input
                    label="Descripción"
                    value={settings.siteDescription}
                    onChange={(e) =>
                      updateSettings({
                        ...settings,
                        siteDescription: e.target.value,
                      })
                    }
                    placeholder="Descripción breve del sitio"
                    size="sm"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-secondary-text font-semibold mb-2 text-sm">
                      Color Primario
                    </label>
                    <div className="flex space-x-2">
                      <input
                        type="color"
                        value={settings.primaryColor}
                        onChange={(e) =>
                          updateSettings({
                            ...settings,
                            primaryColor: e.target.value,
                          })
                        }
                        className="w-10 h-10 rounded cursor-pointer border border-border-color"
                      />
                      <Input
                        value={settings.primaryColor}
                        onChange={(e) =>
                          updateSettings({
                            ...settings,
                            primaryColor: e.target.value,
                          })
                        }
                        placeholder="#d4af37"
                        size="sm"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-secondary-text font-semibold mb-2 text-sm">
                      Color Secundario
                    </label>
                    <div className="flex space-x-2">
                      <input
                        type="color"
                        value={settings.secondaryColor}
                        onChange={(e) =>
                          updateSettings({
                            ...settings,
                            secondaryColor: e.target.value,
                          })
                        }
                        className="w-10 h-10 rounded cursor-pointer border border-border-color"
                      />
                      <Input
                        value={settings.secondaryColor}
                        onChange={(e) =>
                          updateSettings({
                            ...settings,
                            secondaryColor: e.target.value,
                          })
                        }
                        placeholder="#ffd700"
                        size="sm"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between p-3 bg-background/50 rounded-lg">
                  <div>
                    <h4 className="font-semibold text-white text-sm">
                      Modo Mantenimiento
                    </h4>
                    <p className="text-secondary-text text-xs">
                      Cuando está activado, los visitantes verán una página de
                      mantenimiento
                    </p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={settings.maintenanceMode}
                      onChange={(e) =>
                        updateSettings({
                          ...settings,
                          maintenanceMode: e.target.checked,
                        })
                      }
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                  </label>
                </div>

                <div className="flex flex-wrap gap-2 pt-4">
                  <Button
                    onClick={() => updateSettings(settings)}
                    size="sm"
                    icon="💾"
                  >
                    Guardar
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => window.location.reload()}
                  >
                    Recargar
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-red-400 border-red-400 hover:bg-red-400 hover:text-white"
                    onClick={() => {
                      localStorage.removeItem("adminAuthenticated");
                      window.location.href = "/";
                    }}
                    icon="🚪"
                  >
                    Cerrar Sesión
                  </Button>
                </div>
              </div>
            </Card>
          )}
        </div>
      </Container>
    </section>
  );
}
