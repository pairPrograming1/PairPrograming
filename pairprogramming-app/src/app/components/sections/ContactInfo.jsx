"use client";
import { Card } from "../ui/Card";

export function ContactInfo() {
  return (
    <div className="space-y-6 h-full">
      <Card padding="lg" className="h-full">
        <h3 className="text-xl font-bold text-foreground mb-2">
          ¿Cómo podemos <span className="text-brand-blue">ayudarte?</span>
        </h3>
        <p className="text-secondary-text text-sm mb-8">
          Estamos listos para transformar tus ideas en soluciones digitales.
        </p>

        <div className="space-y-8">
          {/* Horario de atención */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-brand-gold/10 border border-brand-gold/20 rounded-lg flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-brand-gold"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <circle cx="12" cy="12" r="10" strokeWidth="2" />
                  <polyline points="12 6 12 12 16 14" strokeWidth="2" />
                </svg>
              </div>
              <div>
                <p className="text-foreground font-semibold text-sm">Horario de Atención</p>
                <p className="text-secondary-text text-xs">Siempre disponibles para ti</p>
              </div>
            </div>
            <div className="pl-[52px] space-y-2">
              <div className="flex items-center justify-between p-3 bg-background-secondary rounded-lg border border-border-color">
                <span className="text-secondary-text text-sm">Lunes a Viernes</span>
                <span className="text-brand-blue text-sm font-semibold">9:00 - 18:00</span>
              </div>
              <p className="text-secondary-text text-xs pl-3">Zona horaria: GMT-3 (Argentina)</p>
            </div>
          </div>

          {/* Ubicación */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-brand-blue/10 border border-brand-blue/20 rounded-lg flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-brand-blue"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <p className="text-foreground font-semibold text-sm">Trabajo Remoto</p>
                <p className="text-secondary-text text-xs">Equipo distribuido</p>
              </div>
            </div>
            <div className="pl-[52px]">
              <div className="p-3 bg-background-secondary rounded-lg border border-border-color">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 rounded-full bg-brand-blue"></div>
                  <span className="text-foreground text-sm font-medium">Argentina</span>
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 rounded-full bg-brand-gold"></div>
                  <span className="text-foreground text-sm font-medium">Chile</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-brand-blue"></div>
                  <span className="text-foreground text-sm font-medium">España</span>
                </div>
              </div>
            </div>
          </div>

          {/* Tiempo de respuesta */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-emerald-500/10 border border-emerald-500/20 rounded-lg flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-emerald-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <p className="text-foreground font-semibold text-sm">Respuesta Rápida</p>
                <p className="text-secondary-text text-xs">Nos comunicamos contigo pronto</p>
              </div>
            </div>
            <div className="pl-[52px]">
              <div className="p-3 bg-background-secondary rounded-lg border border-border-color">
                <p className="text-foreground text-sm mb-1">Tiempo de respuesta promedio</p>
                <p className="text-brand-blue text-lg font-bold">24 horas</p>
                <p className="text-secondary-text text-xs mt-2">
                  En horario laboral, generalmente respondemos en menos de 2 horas
                </p>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
