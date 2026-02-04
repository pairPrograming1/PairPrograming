"use client";
import { MessageCircle } from "lucide-react";
import { Card } from "../ui/Card";

export function FAQContact() {
  return (
    <div
      className="mt-12 text-center fade-in"
      style={{ animationDelay: "0.4s" }}
    >
      <Card padding="md" className="max-w-2xl mx-auto">
        <h3 className="text-lg lg:text-xl font-bold text-primary mb-3">
          ¿No encontraste tu respuesta?
        </h3>
        <p className="text-secondary-text mb-4 text-sm lg:text-base">
          Estamos aquí para ayudarte. Contáctanos directamente y resolveremos
          todas tus dudas.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/contacto"
            className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 inline-flex items-center justify-center gap-2 focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
          >
            <MessageCircle className="w-5 h-5" />
            Contáctanos
          </a>
        </div>
      </Card>
    </div>
  );
}