"use client";
import { useSidebar } from "../../context/SidebarContext";

export const Container = ({ children, className = "", size = "default" }) => {
  const { isSidebarExpanded } = useSidebar();

  const sizes = {
    default: isSidebarExpanded ? "max-w-4xl" : "max-w-6xl",
    expanded: "max-w-4xl",
    full: "max-w-full",
  };

  const classes = `container mx-auto px-4 transition-all duration-500 ${sizes[size]} ${className}`;

  return <div className={classes}>{children}</div>;
};
