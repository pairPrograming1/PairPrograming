"use client";
import Link from "next/link";
import { useState } from "react";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button
        onClick={toggleSidebar}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-full bg-blue-900 text-white hover:bg-blue-800 transition"
      >
        <svg
          className="w-6 h-6"
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
      <aside
        className={`fixed top-0 left-0 h-screen w-64 bg-gradient-to-b from-blue-900 to-blue-700 text-white p-6 flex flex-col shadow-xl transition-transform transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 z-40 overflow-y-auto`}
      >
        <h1 className="text-3xl font-bold mb-8 tracking-tight">
          PairProgramming
        </h1>
        <nav>
          <ul className="space-y-4">
            <li>
              <Link
                href="/"
                className="text-lg hover:text-blue-200 transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                Inicio
              </Link>
            </li>
            <li>
              <Link
                href="/servicios"
                className="text-lg hover:text-blue-200 transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                Servicios
              </Link>
            </li>
            <li>
              <Link
                href="/nosotros"
                className="text-lg hover:text-blue-200 transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                Nosotros
              </Link>
            </li>
            <li>
              <Link
                href="/contacto"
                className="text-lg hover:text-blue-200 transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                Contacto
              </Link>
            </li>
          </ul>
        </nav>
      </aside>
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={toggleSidebar}
        ></div>
      )}
    </>
  );
}
