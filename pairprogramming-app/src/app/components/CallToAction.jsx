"use client";
import Link from "next/link";
import { useSidebar } from "../context/SidebarContext";
import { Container } from "./ui/Container";
import { Button } from "./ui/Button";

export default function CallToAction() {
  const { isSidebarExpanded } = useSidebar();

  return (
    <section className="py-12 lg:py-16 bg-gray-950 text-white text-center border-b border-gray-800">
      <Container
        size={isSidebarExpanded ? "expanded" : "default"}
        className="relative z-10"
      >
        <h3
          className={`font-bold mb-4 text-white transition-all duration-300 ${
            isSidebarExpanded ? "text-xl lg:text-2xl" : "text-2xl lg:text-3xl"
          }`}
        >
          ¿Listo para transformar tu idea?
        </h3>
        <p
          className={`mb-6 mx-auto text-gray-400 transition-all duration-300 ${
            isSidebarExpanded ? "text-base max-w-lg" : "text-lg max-w-xl"
          }`}
        >
          Co-creamos soluciones digitales que integran tecnología y estrategia.
          Contáctanos y empecemos a construir juntos.
        </p>
        <Button
          href="/contacto"
          icon={
            <svg
              className="w-4 h-4 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              />
            </svg>
          }
        >
          Contáctanos
        </Button>
      </Container>
    </section>
  );
}
