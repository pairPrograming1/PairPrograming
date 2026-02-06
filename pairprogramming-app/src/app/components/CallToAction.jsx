"use client";
import { useSidebar } from "../context/SidebarContext";
import { Container } from "./ui/Container";
import { Button } from "./ui/Button";


export default function CallToAction() {
  const { isSidebarExpanded } = useSidebar();

  return (
    <section className="py-20 lg:py-28 bg-background-secondary text-foreground relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-brand-blue/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-brand-gold/5 rounded-full blur-3xl" />
      </div>

      <Container
        size={isSidebarExpanded ? "expanded" : "default"}
        className="relative z-10"
      >
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-blue/10 border border-brand-blue/20 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
            <span className="text-xs font-semibold text-brand-blue-light uppercase tracking-wider">
              Empecemos
            </span>
          </div>

          <h2
            className={`font-bold mb-5 text-foreground transition-all duration-300 ${
              isSidebarExpanded ? "text-2xl lg:text-3xl" : "text-3xl lg:text-4xl"
            }`}
          >
            ¿Listo para transformar{" "}
            <span className="text-brand-gold">tu idea</span>?
          </h2>

          <p
            className={`mb-10 mx-auto text-secondary-text leading-relaxed transition-all duration-300 ${
              isSidebarExpanded ? "text-base max-w-lg" : "text-lg max-w-xl"
            }`}
          >
            Co-creamos soluciones digitales que integran tecnología y estrategia.
            Contáctanos y empecemos a construir juntos.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              href="/contacto"
              variant="accent"
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
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
              }
            >
              Contáctanos
            </Button>
            <Button href="/servicios" variant="outline" size="lg">
              Explorar Servicios
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
