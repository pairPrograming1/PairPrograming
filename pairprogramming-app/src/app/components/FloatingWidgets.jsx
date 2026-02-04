"use client";
import Chatbot from "./Chatbot";
import WhatsAppFloat from "./WhatsAppFloat";

export default function FloatingWidgets() {
  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-[9999] flex flex-col items-end gap-3 sm:gap-4 pointer-events-none">
      {/* Container con pointer-events-none para que no bloquee clicks */}
      {/* Los botones individuales tienen pointer-events-auto */}

      {/* WhatsApp encima (más prioritario visualmente) */}
      <div className="pointer-events-auto transform transition-transform duration-300 hover:scale-[1.02]">
        <WhatsAppFloat />
      </div>

      {/* Chatbot debajo */}
      <div className="pointer-events-auto transform transition-transform duration-300 hover:scale-[1.02]">
        <Chatbot />
      </div>
    </div>
  );
}
