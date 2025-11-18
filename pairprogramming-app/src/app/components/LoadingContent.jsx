
"use client";
import { useSidebar } from "../context/SidebarContext";
import { Container } from "./ui/Container";
import { Card } from "./ui/Card";

export default function LoadingContent() {
  const { isSidebarExpanded } = useSidebar();

  return (
    <section className="py-16 lg:py-20 bg-card-bg text-white min-h-screen flex items-center">
      <Container size={isSidebarExpanded ? "expanded" : "default"}>
        <div className="text-center fade-in">
          <Card padding="lg" className="max-w-md mx-auto">
            {/* Spinner animado */}
            <div className="flex justify-center mb-8">
              <div className="relative">
                <div className="w-20 h-20 border-4 border-primary/20 rounded-full"></div>
                <div className="w-20 h-20 border-4 border-primary border-t-transparent rounded-full animate-spin absolute top-0 left-0"></div>
              </div>
            </div>

            {/* Título y descripción */}
            <h1
              className={`font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent ${
                isSidebarExpanded
                  ? "text-xl lg:text-2xl"
                  : "text-2xl lg:text-3xl"
              }`}
            >
              Cargando Contenido
            </h1>

            <p className="text-secondary-text mb-6">
              Estamos preparando todo para ti...
            </p>

            {/* Barra de progreso */}
            <div className="w-full bg-background rounded-full h-2 mb-6">
              <div className="bg-gradient-to-r from-primary to-accent h-2 rounded-full animate-pulse"></div>
            </div>

            {/* Indicadores de carga */}
            <div className="space-y-3 text-sm text-secondary-text">
              <div className="flex items-center justify-between">
                <span>Cargando recursos...</span>
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-primary rounded-full animate-bounce"></div>
                  <div
                    className="w-2 h-2 bg-primary rounded-full animate-bounce"
                    style={{ animationDelay: "0.1s" }}
                  ></div>
                  <div
                    className="w-2 h-2 bg-primary rounded-full animate-bounce"
                    style={{ animationDelay: "0.2s" }}
                  ></div>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <span>Procesando datos...</span>
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-accent rounded-full animate-bounce"></div>
                  <div
                    className="w-2 h-2 bg-accent rounded-full animate-bounce"
                    style={{ animationDelay: "0.1s" }}
                  ></div>
                  <div
                    className="w-2 h-2 bg-accent rounded-full animate-bounce"
                    style={{ animationDelay: "0.2s" }}
                  ></div>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <span>Optimizando experiencia...</span>
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-primary rounded-full animate-bounce"></div>
                  <div
                    className="w-2 h-2 bg-primary rounded-full animate-bounce"
                    style={{ animationDelay: "0.1s" }}
                  ></div>
                  <div
                    className="w-2 h-2 bg-primary rounded-full animate-bounce"
                    style={{ animationDelay: "0.2s" }}
                  ></div>
                </div>
              </div>
            </div>

            {/* Mensaje de paciencia */}
            <div className="mt-6 p-3 bg-primary/10 rounded-lg border border-primary/20">
              <p className="text-xs text-secondary-text">
                ⏱️ Esto solo tomará unos segundos. Gracias por tu paciencia.
              </p>
            </div>
          </Card>
        </div>
      </Container>
    </section>
  );
}
