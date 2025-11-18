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
      <section className="relative bg-gradient-to-br from-primary/20 via-card-bg to-accent/10 text-white py-20 lg:py-28 overflow-hidden">
        <Container size="default" className="text-center relative z-10">
          <div className="flex justify-center mb-8">
            <div className="w-48 h-48 lg:w-60 lg:h-60 rounded-full bg-gray-700 animate-pulse" />
          </div>
          <div className="h-8 lg:h-10 w-3/4 mx-auto rounded bg-gray-700 animate-pulse mb-4" />
          <div className="h-4 lg:h-5 w-1/2 mx-auto rounded bg-gray-600 animate-pulse mb-6" />
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="w-40 h-10 rounded bg-gray-700 animate-pulse" />
            <div className="w-40 h-10 rounded bg-gray-700 animate-pulse" />
          </div>
        </Container>
      </section>
    );
  }

  // Hero real una vez montado
  return (
    <section className="relative bg-gradient-to-br from-primary/20 via-card-bg to-accent/10 text-white py-20 lg:py-28 overflow-hidden">
      {/* Fondos decorativos */}
      <div className="absolute inset-0 bg-grid-white bg-[size:60px_60px]" />
      <div className="absolute top-10 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <Container
        size={isSidebarExpanded ? "expanded" : "default"}
        className="text-center relative z-10"
      >
        {/* Imagen de bienvenida */}
        <div className="flex justify-center mb-8 fade-in">
          <div className="relative w-48 h-48 lg:w-60 lg:h-60 rounded-full overflow-hidden border-4 border-primary/80 shadow-2xl hover-lift">
            <Image
              src="https://res.cloudinary.com/dmjusy7sn/image/upload/v1758981340/usuarios/xkajcqpxdbggr4q7ywjy.jpg"
              alt="Imagen de Bienvenida"
              width={240}
              height={240}
              className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
              style={{ transform: "scale(1.6)" }}
              priority
            />
            <div className="absolute inset-0 bg-primary/10 hover:bg-transparent transition-colors" />
          </div>
        </div>

        {/* Texto y botones */}
        <div className="fade-in" style={{ animationDelay: "0.2s" }}>
          <h2
            className={`font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent tracking-tight transition-all duration-300 ${
              isSidebarExpanded
                ? "text-2xl lg:text-3xl"
                : "text-3xl lg:text-4xl"
            }`}
          >
            Transformamos Ideas en Soluciones Digitales
          </h2>

          <p
            className={`mb-8 max-w-2xl mx-auto leading-relaxed transition-all duration-300 ${
              isSidebarExpanded ? "text-base lg:text-lg" : "text-lg lg:text-xl"
            }`}
          >
            En{" "}
            <span className="text-accent font-semibold">PairProgramming</span>,
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

