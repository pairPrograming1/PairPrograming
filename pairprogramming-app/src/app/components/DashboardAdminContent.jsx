// components/admin/DashboardAdminContent.jsx
"use client";
import { useState, useEffect } from "react";
import { useSidebar } from "../context/SidebarContext";
import { Container } from "../components/ui/Container";
import { Card } from "../components/ui/Card";
import AdminHeader from "./admin/AdminHeader";
import AdminTabs from "./admin/AdminTabs";
import OverviewTab from "./admin/tabs/OverviewTab";
import ProjectsTab from "./admin/tabs/ProjectsTab";
import MessagesTab from "./admin/tabs/MessagesTab";
import UsersTab from "./admin/tabs/UsersTab";
import SettingsTab from "./admin/tabs/SettingsTab";

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
    // Datos de ejemplo
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

  const renderActiveTab = () => {
    const tabProps = {
      projects,
      messages,
      users,
      settings,
      updateProjectStatus,
      updateMessageStatus,
      deleteMessage,
      updateSettings,
      exportData,
      setActiveTab,
    };

    switch (activeTab) {
      case "overview":
        return <OverviewTab {...tabProps} stats={stats} />;
      case "projects":
        return <ProjectsTab {...tabProps} />;
      case "messages":
        return <MessagesTab {...tabProps} />;
      case "users":
        return <UsersTab {...tabProps} />;
      case "settings":
        return <SettingsTab {...tabProps} />;
      default:
        return <OverviewTab {...tabProps} stats={stats} />;
    }
  };

  return (
    <section className="py-16 lg:py-20 bg-card-bg text-white min-h-screen">
      <Container size={isSidebarExpanded ? "expanded" : "default"}>
        <AdminHeader isSidebarExpanded={isSidebarExpanded} />

        <Card padding="md" className="mb-6 mx-4 md:mx-0">
          <AdminTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        </Card>

        <div className="fade-in px-4 md:px-0">{renderActiveTab()}</div>
      </Container>
    </section>
  );
}
