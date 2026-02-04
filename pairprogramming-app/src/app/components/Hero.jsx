"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { useSidebar } from "../context/SidebarContext";
import { Container } from "./ui/Container";
import { Button } from "./ui/Button";

export default function Hero() {
  const { isSidebarExpanded } = useSidebar();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Skeleton básico mientras no se monta
  if (!mounted) {
    return (
      <section className="relative bg-gray-900 text-white py-16 lg:py-24 overflow-hidden border-b border-gray-800">
        <Container size="default" className="text-center relative z-10">
          <div className="flex justify-center mb-8">
            <div className="w-40 h-40 lg:w-48 lg:h-48 rounded-full bg-gray-800 animate-pulse" />
          </div>
          <div className="h-10 lg:h-12 w-3/4 mx-auto rounded bg-gray-800 animate-pulse mb-4" />
          <div className="h-6 w-1/2 mx-auto rounded bg-gray-800 animate-pulse mb-8" />
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="w-40 h-11 rounded-lg bg-gray-800 animate-pulse" />
            <div className="w-32 h-11 rounded-lg bg-gray-800 animate-pulse" />
          </div>
        </Container>
      </section>
    );
  }

  // Hero real una vez montado
  return (
    <section className="relative bg-gray-900 text-white py-16 lg:py-24 overflow-hidden border-b border-gray-800">
      <Container
        size={isSidebarExpanded ? "expanded" : "default"}
        className="text-center relative z-10"
      >
        {/* Imagen de bienvenida */}
        <div className="flex justify-center mb-8">
          <div className="relative w-40 h-40 lg:w-48 lg:h-48 rounded-full overflow-hidden border-2 border-gray-700 shadow-xl">
            <Image
              src="https://res.cloudinary.com/dmjusy7sn/image/upload/v1758981340/usuarios/xkajcqpxdbggr4q7ywjy.jpg"
              alt="Imagen de Bienvenida"
              width={240}
              height={240}
              className="w-full h-full object-cover"
              style={{ transform: "scale(1.6)" }}
              priority
            />
          </div>
        </div>

        {/* Texto y botones */}
        <div>
          <h1
            className={`font-bold mb-6 text-white tracking-tight transition-all duration-300 ${
              isSidebarExpanded
                ? "text-2xl lg:text-3xl"
                : "text-3xl lg:text-5xl"
            }`}
          >
            Transformamos Ideas en Soluciones Digitales
          </h1>

          <p
            className={`mb-8 max-w-2xl mx-auto text-gray-300 leading-relaxed transition-all duration-300 ${
              isSidebarExpanded ? "text-base lg:text-lg" : "text-lg lg:text-xl"
            }`}
          >
            En{" "}
            <span className="text-blue-400 font-semibold">PairProgramming</span>,
            convertimos la complejidad en claridad, integrando tecnología,
            diseño y estrategia para crear productos digitales escalables y
            eficientes.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              }
            >
              Comienza tu Proyecto
            </Button>
            <Button href="/servicios" variant="outline">
              Ver Servicios
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}

