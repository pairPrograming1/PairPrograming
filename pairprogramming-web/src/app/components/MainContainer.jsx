// components/MainContainer.js
"use client";
import { useSidebar } from "../context/SidebarContext";

export default function MainContainer({ children }) {
  const { isSidebarExpanded } = useSidebar();

  return (
    <main
      className={`min-h-screen transition-all duration-300 ${
        isSidebarExpanded ? "lg:ml-64" : "lg:ml-16"
      }`}
    >
      <div className="flex flex-col min-h-screen">{children}</div>
    </main>
  );
}
