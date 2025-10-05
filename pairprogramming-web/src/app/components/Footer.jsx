// components/Footer.js
"use client";
import Link from "next/link";
import { useSidebar } from "../context/SidebarContext";

export default function Footer() {
  const { isSidebarExpanded } = useSidebar();

  return (
    <footer className="bg-background border-t border-border-color text-white">
      <div
        className={`container mx-auto transition-all duration-500 ${
          isSidebarExpanded ? "max-w-4xl" : "max-w-6xl"
        }`}
      >
        <div className="py-8 px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-secondary-text text-sm">
                &copy; 2025{" "}
                <span className="text-primary font-semibold">
                  PairProgramming
                </span>
                . Todos los derechos reservados.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-6">
              <Link
                href="/nosotros"
                className="text-secondary-text hover:text-primary transition-colors duration-300 text-sm font-medium"
              >
                Sobre Nosotros
              </Link>
              <Link
                href="/servicios"
                className="text-secondary-text hover:text-primary transition-colors duration-300 text-sm font-medium"
              >
                Servicios
              </Link>
              <Link
                href="/contacto"
                className="text-secondary-text hover:text-primary transition-colors duration-300 text-sm font-medium"
              >
                Contacto
              </Link>
              <Link
                href="/privacidad"
                className="text-secondary-text hover:text-primary transition-colors duration-300 text-sm font-medium"
              >
                Privacidad
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
