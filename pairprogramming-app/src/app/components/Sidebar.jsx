"use client";
import { useSidebarLogic } from "../hooks/useSidebarLogic";
import { MobileToggleButton } from "./sidebar/MobileToggleButton";
import { MobileOverlay } from "./sidebar/MobileOverlay";
import { SidebarHeader } from "./sidebar/SidebarHeader";
import { SidebarNavigation } from "./sidebar/SidebarNavigation";
import { SidebarFooter } from "./sidebar/SidebarFooter";

export default function Sidebar() {
  const {
    isOpen,
    isAdmin,
    isSidebarExpanded, // ← AHORA ESTÁ DISPONIBLE
    shouldShowText,
    menuItems,
    imageUrl,
    toggleSidebar,
    toggleExpand,
    closeMobileSidebar,
  } = useSidebarLogic();

  return (
    <>
      <MobileToggleButton isOpen={isOpen} onToggle={toggleSidebar} />
      <MobileOverlay isOpen={isOpen} onClose={toggleSidebar} />

      <aside
        className={`fixed top-0 left-0 h-screen bg-background text-foreground flex flex-col shadow-xl shadow-black/20 border-r border-border-color transition-all duration-300 z-40 overflow-hidden
          ${isOpen ? "translate-x-0 w-64" : "-translate-x-full"}
          lg:translate-x-0 ${isSidebarExpanded ? "lg:w-64" : "lg:w-16"}`}
      >
        <SidebarHeader
          shouldShowText={shouldShowText}
          onToggleExpand={toggleExpand}
          imageUrl={imageUrl}
        />

        <SidebarNavigation
          menuItems={menuItems}
          shouldShowText={shouldShowText}
          onItemClick={closeMobileSidebar}
        />

        <SidebarFooter shouldShowText={shouldShowText} isAdmin={isAdmin} />
      </aside>
    </>
  );
}
