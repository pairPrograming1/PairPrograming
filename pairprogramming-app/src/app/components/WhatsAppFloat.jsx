"use client";
import { useState } from "react";
import { MessageCircle } from "lucide-react";

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
      {/* Chat Bubble con tema oscuro y selección de contacto - Absolute relativo al botón */}
      {isOpen && (
        <div className="absolute bottom-20 right-0 w-80 bg-card-bg rounded-2xl shadow-2xl border border-border-color animate-fade-in z-50">
          <div className="bg-green-500 text-white p-4 rounded-t-2xl">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                {/* Icono de WhatsApp en el header */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#25D366"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.297-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0021.28 3.485" />
                </svg>
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

      {/* Floating Button - Sin fixed, posicionado por el padre */}
      <button
        onClick={toggleChat}
        className="w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full shadow-lg transition-all duration-300 hover:scale-110 flex items-center justify-center group pulse-glow-green hover-lift-sm z-50"
        aria-label="Abrir chat de WhatsApp"
      >
        {isOpen ? (
          <span className="text-white text-xl">✕</span>
        ) : (
          // Icono SVG de WhatsApp en el botón flotante
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="white"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.297-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0021.28 3.485" />
          </svg>
        )}
      </button>
    </div>
  );
}
