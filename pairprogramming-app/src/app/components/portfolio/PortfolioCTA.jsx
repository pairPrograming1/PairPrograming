"use client";
import { Button } from "../ui/Button";

export default function PortfolioCTA() {
  const handleContactClick = () => {
    window.location.href = "/contacto";
  };

  return (
    <div
      className="text-center mt-6 lg:mt-8 fade-in"
      style={{ animationDelay: "0.2s" }}
    >
      <div className="bg-card-bg rounded-xl p-4 border border-border-color">
        <h3 className="text-lg font-bold text-primary mb-3">
          ¿Te gustó lo que viste?
        </h3>
        <p className="text-secondary-text mb-4 text-sm lg:text-base">
          Podemos crear una solución similar o personalizada para tu negocio.
        </p>
        <Button
          onClick={handleContactClick}
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
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              />
            </svg>
          }
        >
          Solicitar Cotización
        </Button>
      </div>
    </div>
  );
}
