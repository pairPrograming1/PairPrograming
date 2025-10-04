// components/MainContainer.js
"use client";
import { useSidebar } from "../context/SidebarContext";

export default function MainContainer({ children }) {
  const { isSidebarExpanded } = useSidebar();

  return (
    <main
      className={`lg:ml-16 transition-all duration-300 flex flex-col ${
        isSidebarExpanded ? "lg:ml-64" : "lg:ml-16"
      }`}
    >
      {children}
    </main>
  );
}
