"use client";
import Link from "next/link";

export default function PortfolioCTA() {
  return (
    <div className="mt-12 pt-8 border-t border-border-color text-center animate-fade-in-up stagger-4">
      <p className="text-secondary-text text-sm mb-1">¿Te gustó lo que viste?</p>
      <p className="text-foreground font-semibold mb-6">
        Podemos crear una solución similar para tu negocio.
      </p>
      <Link
        href="/contacto"
        className="inline-flex items-center gap-2 bg-brand-blue hover:bg-brand-blue-light text-white px-6 py-3 rounded-xl font-semibold text-sm transition-colors duration-200"
      >
        Solicitar Cotización
      </Link>
    </div>
  );
}
