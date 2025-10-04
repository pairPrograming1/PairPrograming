// components/Footer.js
"use client";
import Link from "next/link";
import { useSidebar } from "../context/SidebarContext";

export default function Footer() {
  const { isSidebarExpanded } = useSidebar();

  return (
    <footer className="bg-background text-white p-4">
      <div
        className={`container mx-auto text-center transition-all duration-300 ${
          isSidebarExpanded ? "max-w-4xl" : "max-w-6xl"
        }`}
      >
        <p className="mb-3 text-sm">
          &copy; 2025 PairProgramming. Todos los derechos reservados.
        </p>
        <div className="flex justify-center space-x-4">
          <Link
            href="/nosotros"
            className="text-secondary-text hover:text-white transition text-sm"
          >
            Sobre Nosotros
          </Link>
          <Link
            href="/servicios"
            className="text-secondary-text hover:text-white transition text-sm"
          >
            Servicios
          </Link>
          <Link
            href="/contacto"
            className="text-secondary-text hover:text-white transition text-sm"
          >
            Contacto
          </Link>
        </div>
      </div>
    </footer>
  );
}
