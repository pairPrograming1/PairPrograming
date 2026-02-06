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

  if (!mounted) {
    return (
      <section className="relative bg-background-secondary text-foreground py-20 lg:py-32 overflow-hidden">
        <Container size="default" className="relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 text-center lg:text-left">
              <div className="h-6 w-32 rounded bg-background-card animate-pulse mb-6" />
              <div className="h-12 w-full rounded bg-background-card animate-pulse mb-4" />
              <div className="h-8 w-3/4 rounded bg-background-card animate-pulse mb-6" />
              <div className="h-5 w-full rounded bg-background-card animate-pulse mb-2" />
              <div className="h-5 w-2/3 rounded bg-background-card animate-pulse mb-8" />
              <div className="flex gap-4 justify-center lg:justify-start">
                <div className="w-44 h-12 rounded-xl bg-background-card animate-pulse" />
                <div className="w-36 h-12 rounded-xl bg-background-card animate-pulse" />
              </div>
            </div>
            <div className="flex-shrink-0">
              <div className="w-56 h-56 lg:w-72 lg:h-72 rounded-2xl bg-background-card animate-pulse" />
            </div>
          </div>
        </Container>
      </section>
    );
  }

  return (
    <section className="relative bg-background-secondary text-foreground py-20 lg:py-32 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-brand-blue/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-brand-gold/10 rounded-full blur-3xl" />
      </div>

      <Container
        size={isSidebarExpanded ? "expanded" : "default"}
        className="relative z-10"
      >
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Text content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-blue/10 border border-brand-blue/20 mb-6 animate-fade-in-up">
              <span className="w-2 h-2 rounded-full bg-brand-gold" />
              <span className="text-sm font-medium text-brand-blue-light">
                A Web Programming Company
              </span>
            </div>

            <h1
              className={`font-bold mb-6 text-foreground tracking-tight leading-tight transition-all duration-300 animate-fade-in-up stagger-1 ${
                isSidebarExpanded
                  ? "text-3xl lg:text-4xl"
                  : "text-4xl lg:text-5xl xl:text-6xl"
              }`}
            >
              Transformamos Ideas en{" "}
              <span className="text-brand-blue">Soluciones</span>{" "}
              <span className="text-brand-gold">Digitales</span>
            </h1>

            <p
              className={`mb-10 max-w-xl text-secondary-text leading-relaxed transition-all duration-300 animate-fade-in-up stagger-2 ${
                isSidebarExpanded ? "text-base lg:text-lg" : "text-lg lg:text-xl"
              }`}
            >
              Convertimos la complejidad en claridad, integrando tecnología,
              diseño y estrategia para crear productos digitales escalables y
              eficientes.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up stagger-3">
              <Button
                href="/contacto"
                size="lg"
                icon={
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
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                }
              >
                Comienza tu Proyecto
              </Button>
              <Button href="/servicios" variant="outline" size="lg">
                Ver Servicios
              </Button>
            </div>
          </div>

          {/* Logo / Brand visual */}
          <div className="flex-shrink-0 animate-fade-in-up stagger-2">
            <div className="relative">
              {/* Subtle shadow behind logo */}
              <div className="absolute inset-0 bg-brand-blue/8 rounded-2xl blur-2xl scale-110" />
              <div className="absolute inset-0 bg-brand-gold/5 rounded-2xl blur-xl scale-105 translate-x-4 translate-y-4" />

              <div className="relative w-56 h-56 lg:w-72 lg:h-72 rounded-2xl overflow-hidden border border-border-color bg-background-card/50 backdrop-blur-sm shadow-2xl shadow-brand-blue/10">
                <Image
                  src="https://res.cloudinary.com/dmjusy7sn/image/upload/v1758981340/usuarios/xkajcqpxdbggr4q7ywjy.jpg"
                  alt="PairProgramming Logo"
                  width={320}
                  height={320}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div className="mt-16 lg:mt-20 pt-10 border-t border-border-color animate-fade-in-up stagger-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: "50+", label: "Proyectos Entregados" },
              { value: "98%", label: "Clientes Satisfechos" },
              { value: "3+", label: "Años de Experiencia" },
              { value: "24/7", label: "Soporte Continuo" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-brand-blue mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-secondary-text">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
