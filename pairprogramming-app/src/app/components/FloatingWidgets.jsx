// components/FloatingWidgets.jsx
"use client";
import { useState, useEffect } from "react";
import WhatsAppFloat from "./WhatsAppFloat";
import Chatbot from "./Chatbot";

export default function FloatingWidgets() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end space-y-4">
      <Chatbot />
      <WhatsAppFloat />
    </div>
  );
}
