// components/Sidebar.js - SOLO CONTROL CON FLECHA
"use client";
import Link from "next/link";
import { useState } from "react";
import { useSidebar } from "../context/SidebarContext";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const { isSidebarExpanded, setIsSidebarExpanded } = useSidebar();

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const toggleExpand = () => {
    setIsSidebarExpanded(!isSidebarExpanded);
  };

  const closeMobileSidebar = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Botón móvil */}
      <button
        onClick={toggleSidebar}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-full bg-primary text-white hover:bg-primary-dark transition shadow-lg"
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
          />
        </svg>
      </button>

      {/* Overlay móvil */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={toggleSidebar}
        ></div>
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-screen bg-gradient-to-b from-background to-card-bg text-white flex flex-col shadow-xl transition-all duration-300 z-40 overflow-hidden
          ${isOpen ? "translate-x-0 w-64" : "-translate-x-full"}
          lg:translate-x-0 ${isSidebarExpanded ? "lg:w-64" : "lg:w-16"}`}
      >
        {/* Header con flecha */}
        <div
          className={`p-4 border-b border-border-color flex items-center justify-between ${
            isSidebarExpanded ? "" : "flex-col gap-2"
          }`}
        >
          <h1
            className={`font-bold tracking-tight transition-all duration-300 ${
              isSidebarExpanded ? "text-xl" : "text-lg"
            }`}
          >
            {isSidebarExpanded ? "PairProgramming" : "PP"}
          </h1>

          {/* Botón de expandir/contraer */}
          <button
            onClick={toggleExpand}
            className="lg:flex hidden items-center justify-center w-6 h-6 rounded-full bg-primary/20 hover:bg-primary/30 transition-colors"
            title={isSidebarExpanded ? "Contraer menú" : "Expandir menú"}
          >
            <svg
              className={`w-3 h-3 text-primary transition-transform duration-300 ${
                isSidebarExpanded ? "rotate-0" : "rotate-180"
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
        </div>

        {/* Navegación */}
        <nav className="flex-1 p-2">
          <ul className="space-y-1">
            <li>
              <Link
                href="/"
                className="flex items-center p-3 rounded-lg hover:bg-hover-bg transition-colors font-medium"
                onClick={closeMobileSidebar}
              >
                <svg
                  className="w-5 h-5 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
                <span
                  className={`ml-3 transition-all duration-300 whitespace-nowrap ${
                    isSidebarExpanded ? "opacity-100 w-auto" : "opacity-0 w-0"
                  }`}
                >
                  Inicio
                </span>
              </Link>
            </li>
            <li>
              <Link
                href="/servicios"
                className="flex items-center p-3 rounded-lg hover:bg-hover-bg transition-colors font-medium"
                onClick={closeMobileSidebar}
              >
                <svg
                  className="w-5 h-5 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span
                  className={`ml-3 transition-all duration-300 whitespace-nowrap ${
                    isSidebarExpanded ? "opacity-100 w-auto" : "opacity-0 w-0"
                  }`}
                >
                  Servicios
                </span>
              </Link>
            </li>
            <li>
              <Link
                href="/portafolio"
                className="flex items-center p-3 rounded-lg hover:bg-hover-bg transition-colors font-medium"
                onClick={closeMobileSidebar}
              >
                <svg
                  className="w-5 h-5 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                  />
                </svg>
                <span
                  className={`ml-3 transition-all duration-300 whitespace-nowrap ${
                    isSidebarExpanded ? "opacity-100 w-auto" : "opacity-0 w-0"
                  }`}
                >
                  Portafolio
                </span>
              </Link>
            </li>
            <li>
              <Link
                href="/nosotros"
                className="flex items-center p-3 rounded-lg hover:bg-hover-bg transition-colors font-medium"
                onClick={closeMobileSidebar}
              >
                <svg
                  className="w-5 h-5 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
                <span
                  className={`ml-3 transition-all duration-300 whitespace-nowrap ${
                    isSidebarExpanded ? "opacity-100 w-auto" : "opacity-0 w-0"
                  }`}
                >
                  Nosotros
                </span>
              </Link>
            </li>

            <li>
              <Link
                href="/contacto"
                className="flex items-center p-3 rounded-lg hover:bg-hover-bg transition-colors font-medium"
                onClick={closeMobileSidebar}
              >
                <svg
                  className="w-5 h-5 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span
                  className={`ml-3 transition-all duration-300 whitespace-nowrap ${
                    isSidebarExpanded ? "opacity-100 w-auto" : "opacity-0 w-0"
                  }`}
                >
                  Contacto
                </span>
              </Link>
            </li>
          </ul>
        </nav>

        {/* Footer del Sidebar */}
        <div className="p-3 border-t border-border-color">
          <div
            className={`transition-all duration-300 text-center ${
              isSidebarExpanded ? "opacity-100" : "opacity-0"
            }`}
          >
            <p className="text-secondary-text text-xs">© 2025 PP</p>
          </div>
        </div>
      </aside>
    </>
  );
}
