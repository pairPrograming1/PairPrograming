// components/Sidebar.js
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

  const handleMouseEnter = () => {
    setIsSidebarExpanded(true);
  };

  const handleMouseLeave = () => {
    setIsSidebarExpanded(false);
  };

  return (
    <>
      <button
        onClick={toggleSidebar}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-full bg-primary text-white hover:bg-primary-dark transition"
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

      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={toggleSidebar}
        ></div>
      )}

      <aside
        className={`fixed top-0 left-0 h-screen bg-gradient-to-b from-background to-card-bg text-white flex flex-col shadow-xl transition-all duration-300 z-40 overflow-y-auto
          ${isOpen ? "translate-x-0 w-64" : "-translate-x-full"}
          lg:translate-x-0 lg:w-16 lg:hover:w-64 group`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className={`p-4 ${isSidebarExpanded ? "" : "text-center"}`}>
          <h1
            className={`font-bold tracking-tight transition-all ${
              isSidebarExpanded ? "text-xl" : "text-lg"
            }`}
          >
            {isSidebarExpanded ? "PairProgramming" : "PP"}
          </h1>
        </div>
        <nav className="flex-1">
          <ul className="space-y-2 p-2">
            <li>
              <Link
                href="/"
                className="flex items-center p-2 rounded-md hover:bg-hover-bg transition-colors font-medium"
                onClick={() => setIsOpen(false)}
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
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
                <span
                  className={`ml-3 transition-opacity duration-300 ${
                    isSidebarExpanded ? "opacity-100" : "opacity-0 w-0"
                  }`}
                >
                  Inicio
                </span>
              </Link>
            </li>
            <li>
              <Link
                href="/servicios"
                className="flex items-center p-2 rounded-md hover:bg-hover-bg transition-colors font-medium"
                onClick={() => setIsOpen(false)}
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
                    d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span
                  className={`ml-3 transition-opacity duration-300 ${
                    isSidebarExpanded ? "opacity-100" : "opacity-0 w-0"
                  }`}
                >
                  Servicios
                </span>
              </Link>
            </li>
            <li>
              <Link
                href="/nosotros"
                className="flex items-center p-2 rounded-md hover:bg-hover-bg transition-colors font-medium"
                onClick={() => setIsOpen(false)}
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
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
                <span
                  className={`ml-3 transition-opacity duration-300 ${
                    isSidebarExpanded ? "opacity-100" : "opacity-0 w-0"
                  }`}
                >
                  Nosotros
                </span>
              </Link>
            </li>
            <li>
              <Link
                href="/contacto"
                className="flex items-center p-2 rounded-md hover:bg-hover-bg transition-colors font-medium"
                onClick={() => setIsOpen(false)}
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
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span
                  className={`ml-3 transition-opacity duration-300 ${
                    isSidebarExpanded ? "opacity-100" : "opacity-0 w-0"
                  }`}
                >
                  Contacto
                </span>
              </Link>
            </li>
          </ul>
        </nav>
      </aside>
    </>
  );
}
