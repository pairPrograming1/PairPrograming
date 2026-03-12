import { useState, useEffect } from "react";
import { useSidebar } from "../context/SidebarContext";
import { baseMenuItems, adminMenuItem } from "../constants/menuItems";

export function useSidebarLogic() {
  const [isOpen, setIsOpen] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const { isSidebarExpanded, setIsSidebarExpanded } = useSidebar();

  useEffect(() => {
    const authStatus = localStorage.getItem("adminAuthenticated");
    setIsAdmin(authStatus === "true");
  }, []);

  const toggleSidebar = () => setIsOpen(!isOpen);
  const toggleExpand = () => setIsSidebarExpanded(!isSidebarExpanded);
  const closeMobileSidebar = () => setIsOpen(false);

  const shouldShowText = isOpen || isSidebarExpanded;

  // Construir items del menú
  const menuItems = isAdmin ? [...baseMenuItems, adminMenuItem] : baseMenuItems;

  const imageUrl = "/team.jpg";

  return {
    isOpen,
    isAdmin,
    isSidebarExpanded,
    shouldShowText,
    menuItems,
    imageUrl,
    toggleSidebar,
    toggleExpand,
    closeMobileSidebar,
  };
}
