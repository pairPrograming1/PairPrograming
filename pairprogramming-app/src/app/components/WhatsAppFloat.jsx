"use client";
import { useState } from "react";

export default function WhatsAppFloat() {
  const [isOpen, setIsOpen] = useState(false);
  const phoneNumber = "+1234567890"; // Reemplaza con tu número real
  const message =
    "Hola, me interesa conocer más sobre sus servicios de desarrollo";

  const openWhatsApp = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
    setIsOpen(false);
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      {/* Chat Bubble con tema oscuro */}
      {isOpen && (
        <div className="absolute bottom-16 right-0 w-80 bg-card-bg rounded-2xl shadow-2xl border border-border-color animate-fade-in mb-4">
          <div className="bg-green-500 text-white p-4 rounded-t-2xl">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <span className="text-green-500 text-xl">💬</span>
              </div>
              <div>
                <h3 className="font-bold">WhatsApp Business</h3>
                <p className="text-green-100 text-sm">
                  Normalmente responde en minutos
                </p>
              </div>
            </div>
          </div>

          <div className="p-4 bg-background rounded-b-2xl">
            <p className="text-secondary-text text-sm mb-4">
              ¡Hola! 👋 ¿En qué podemos ayudarte? Estamos aquí para responder
              todas tus preguntas sobre desarrollo web, aplicaciones móviles y
              soluciones digitales.
            </p>
            <button
              onClick={openWhatsApp}
              className="w-full bg-green-500 hover:bg-green-600 text-white py-3 px-4 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2"
            >
              <span>💬</span>
              <span>Abrir WhatsApp</span>
            </button>
          </div>
        </div>
      )}

      {/* Floating Button */}
      <button
        onClick={toggleChat}
        className="w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full shadow-lg transition-all duration-300 hover:scale-110 flex items-center justify-center group pulse-glow-green hover-lift-sm"
        aria-label="Abrir chat de WhatsApp"
      >
        {isOpen ? (
          <span className="text-white text-xl">✕</span>
        ) : (
          <span className="text-white text-2xl">💬</span>
        )}
      </button>
    </div>
  );
}
