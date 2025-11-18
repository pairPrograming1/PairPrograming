
"use client";
import Link from "next/link";
import { useSidebar } from "../context/SidebarContext";
import { Container } from "./ui/Container";
import { Card } from "./ui/Card";
import { Button } from "./ui/Button";

export default function ErrorPage() {
  const { isSidebarExpanded } = useSidebar();

  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <Container size="full">
        <div className="flex flex-col items-center justify-center min-h-screen py-16">
          <Card padding="lg" className="max-w-md w-full text-center fade-in">
            {/* Icono de error */}
            <div className="w-24 h-24 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-red-500 text-4xl">⚠️</span>
            </div>

            {/* Título y descripción */}
            <h1 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Página No Encontrada
            </h1>

            <p className="text-secondary-text mb-2 text-lg">Error 404</p>

            <p className="text-secondary-text mb-8">
              Lo sentimos, la página que buscas no existe o ha sido movida.
            </p>

            {/* Código de error estilizado */}
            <div className="bg-background border border-border-color rounded-lg p-4 mb-6 font-mono text-sm text-secondary-text">
              <div>// Error: Route not found</div>
              <div>// Status: 404</div>
              <div>// Solution: Navigate to existing pages</div>
            </div>

            {/* Botones de acción */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
                Ir al Inicio
              </Button>

              <Button
                variant="outline"
                onClick={() => window.history.back()}
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
                      d="M10 19l-7-7m0 0l7-7m-7 7h18"
                    />
                  </svg>
                }
              >
                Volver Atrás
              </Button>
            </div>

            {/* Enlaces rápidos */}
            <div className="mt-8 pt-6 border-t border-border-color">
              <p className="text-secondary-text text-sm mb-3">
                También puedes visitar:
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <Link
                  href="/servicios"
                  className="text-primary hover:underline text-sm"
                >
                  Servicios
                </Link>
                <Link
                  href="/portafolio"
                  className="text-primary hover:underline text-sm"
                >
                  Portafolio
                </Link>
                <Link
                  href="/contacto"
                  className="text-primary hover:underline text-sm"
                >
                  Contacto
                </Link>
                <Link
                  href="/faq"
                  className="text-primary hover:underline text-sm"
                >
                  FAQ
                </Link>
              </div>
            </div>
          </Card>
        </div>
      </Container>
    </div>
  );
}
