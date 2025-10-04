// components/CallToAction.js
"use client";
import Link from "next/link";
import { useSidebar } from "../context/SidebarContext";

export default function CallToAction() {
  const { isSidebarExpanded } = useSidebar();

  return (
    <section className="compact-section bg-primary text-white text-center">
      <div
        className={`container mx-auto px-4 transition-all duration-300 ${
          isSidebarExpanded ? "max-w-4xl" : "max-w-6xl"
        }`}
      >
        <h3
          className={`font-semibold mb-4 transition-all duration-300 ${
            isSidebarExpanded ? "text-xl" : "text-2xl"
          }`}
        >
          ¿Listo para transformar tu idea?
        </h3>
        <p
          className={`mb-6 mx-auto transition-all duration-300 ${
            isSidebarExpanded ? "text-base max-w-lg" : "text-lg max-w-xl"
          }`}
        >
          Co-creamos soluciones digitales que integran tecnología y estrategia.
          Contáctanos y empecemos a construir juntos.
        </p>
        <Link
          href="/contacto"
          className="inline-block bg-background text-white px-5 py-2 rounded-md font-semibold hover:bg-card-bg transition compact-button"
        >
          Contáctanos
        </Link>
      </div>
    </section>
  );
}
