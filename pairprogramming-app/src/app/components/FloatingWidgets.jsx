"use client";
import Chatbot from "./Chatbot"; // Ajusta la ruta a tu Chatbot
import WhatsAppFloat from "./WhatsAppFloat"; // Ajusta la ruta a tu WhatsAppFloat

export default function FloatingWidgets() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end space-y-4">
      {/* WhatsApp encima (más prioritario visualmente) */}
      <WhatsAppFloat />

      {/* Chatbot debajo */}
      <Chatbot />
    </div>
  );
}
