"use client";
import { useState } from "react";

export default function WhatsAppFloat() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedContact, setSelectedContact] = useState(null);

  // Contactos extraídos del ContactForm
  const contacts = [
    { name: "Rubiño Pablo", phone: "+5492616396981" },
    { name: "Aleart Esteban", phone: "+34673782934" },
    { name: "Rendom Josue", phone: "+56940881083" },
    { name: "Sector Comercial -Bou Mauricio", phone: "+5493412696133" },
  ];

  const defaultMessage =
    "Hola, me interesa conocer más sobre sus servicios de desarrollo";

  const openWhatsApp = (phone) => {
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(
      defaultMessage
    )}`;
    window.open(url, "_blank");
    setIsOpen(false);
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
    setSelectedContact(null); // Resetear selección al toggle
  };

  return (
    <div className="relative">
      {/* Chat Bubble con tema oscuro y selección de contacto */}
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

          <div className="p-4 bg-background rounded-b-2xl space-y-4">
            <p className="text-secondary-text text-sm mb-4">
              ¡Hola! 👋 Selecciona un contacto para chatear vía WhatsApp sobre
              desarrollo web, aplicaciones móviles y soluciones digitales.
            </p>

            {/* Lista de contactos */}
            <div className="space-y-2">
              {contacts.map((contact) => (
                <button
                  key={contact.phone}
                  onClick={() => openWhatsApp(contact.phone)}
                  className="w-full bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded-lg font-medium transition-colors flex items-center justify-between"
                >
                  <span>{contact.name}</span>
                  <span className="text-green-400 text-sm">
                    {contact.phone}
                  </span>
                </button>
              ))}
            </div>

            {/* Opción rápida general si no selecciona */}
            <button
              onClick={() => openWhatsApp(contacts[3].phone)} // Default al comercial por ejemplo
              className="w-full bg-green-500 hover:bg-green-600 text-white py-3 px-4 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2 mt-4"
            >
              <span>💬</span>
              <span>Contacto Rápido (Comercial)</span>
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
