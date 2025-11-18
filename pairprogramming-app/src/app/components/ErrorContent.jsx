
"use client";
import Link from "next/link";
import { useSidebar } from "../context/SidebarContext";
import { Container } from "./ui/Container";
import { Card } from "./ui/Card";
import { Button } from "./ui/Button";

export default function ErrorContent() {
  const { isSidebarExpanded } = useSidebar();

  return (
    <section className="py-16 lg:py-20 bg-card-bg text-white min-h-screen flex items-center">
      <Container size={isSidebarExpanded ? "expanded" : "default"}>
        <div className="text-center fade-in">
          <Card padding="lg" className="max-w-2xl mx-auto">
            {/* Icono animado */}
            <div className="w-32 h-32 bg-gradient-to-br from-red-500/20 to-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-8 animate-pulse">
              <span className="text-6xl">🚧</span>
            </div>

            {/* Título y descripción */}
            <h1
              className={`font-bold mb-6 bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent ${
                isSidebarExpanded
                  ? "text-2xl lg:text-3xl"
                  : "text-3xl lg:text-4xl"
              }`}
            >
              Ha Ocurrido un Error
            </h1>

            <p className="text-secondary-text mb-4 text-lg">
              Lo sentimos, algo salió mal en nuestro sistema.
            </p>

            <p className="text-secondary-text mb-8 max-w-md mx-auto">
              Nuestro equipo ha sido notificado y está trabajando para resolver
              el problema. Mientras tanto, puedes intentar una de las siguientes
              opciones.
            </p>

            {/* Información del error */}
            <div className="bg-background border border-border-color rounded-lg p-6 mb-8 text-left">
              <h3 className="font-bold text-white mb-3 flex items-center">
                <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                Información del Error
              </h3>
              <div className="space-y-2 text-sm text-secondary-text">
                <div className="flex justify-between">
                  <span>Código:</span>
                  <span className="text-red-400">
                    500 - Internal Server Error
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Timestamp:</span>
                  <span>{new Date().toLocaleString("es-ES")}</span>
                </div>
                <div className="flex justify-between">
                  <span>Referencia:</span>
                  <span className="font-mono">ERR_{Date.now()}</span>
                </div>
              </div>
            </div>

            {/* Botones de acción */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button
                href="/"
                icon={
                  <svg
                    className="w-4 h-4 mr-2"
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
                }
              >
                Página Principal
              </Button>

              <Button
                variant="outline"
                onClick={() => window.location.reload()}
                icon={
                  <svg
                    className="w-4 h-4 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                    />
                  </svg>
                }
              >
                Reintentar
              </Button>

              <Button
                variant="outline"
                href="/contacto"
                icon={
                  <svg
                    className="w-4 h-4 mr-2"
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
                }
              >
                Reportar Error
              </Button>
            </div>

            {/* Contacto de soporte */}
            <div className="border-t border-border-color pt-6">
              <p className="text-secondary-text text-sm mb-3">
                Si el problema persiste, contáctanos directamente:
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center text-sm">
                <a
                  href="mailto:soporte@pairprogramming.com"
                  className="text-primary hover:underline"
                >
                  📧 soporte@pairprogramming.com
                </a>
                <a
                  href="https://wa.me/+1234567890"
                  className="text-primary hover:underline"
                >
                  💬 WhatsApp
                </a>
              </div>
            </div>
          </Card>
        </div>
      </Container>
    </section>
  );
}
