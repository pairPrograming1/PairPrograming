"use client";
import { useState, useRef, useEffect } from "react";
import { X, Send, MessageSquare, Loader2 } from "lucide-react";
import Link from "next/link";

const QUICK_QUESTIONS = [
  "Que servicios ofrecen?",
  "Con que tecnologias trabajan?",
  "Como puedo contactarlos?",
  "Cuanto sale un proyecto?",
];

export default function ChatDrawer({ open, onClose }) {
  const [messages, setMessages] = useState([
    {
      id: 1,
      role: "bot",
      text: "Hola, soy el asistente de PairProgramming. Preguntame sobre nuestros servicios de desarrollo.",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [showQuick, setShowQuick] = useState(true);
  const endRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [open]);

  // Reset on open
  useEffect(() => {
    if (open) {
      setMessages([
        {
          id: 1,
          role: "bot",
          text: "Hola, soy el asistente de PairProgramming. Preguntame sobre nuestros servicios de desarrollo.",
        },
      ]);
      setShowQuick(true);
      setInput("");
    }
  }, [open]);

  const send = async (text) => {
    const msg = text || input;
    if (!msg.trim() || loading) return;

    setShowQuick(false);
    setInput("");

    const userMsg = { id: Date.now(), role: "user", text: msg.trim() };
    setMessages((prev) => [...prev, userMsg]);
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: msg.trim(),
          history: messages.slice(-6),
        }),
      });

      const data = await res.json();
      const botMsg = {
        id: Date.now() + 1,
        role: "bot",
        text:
          data.text ||
          "No pude procesar tu consulta. Contactanos en /contacto.",
      };
      setMessages((prev) => [...prev, botMsg]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          role: "bot",
          text: "Error de conexion. Intenta de nuevo o contactanos en /contacto.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    send();
  };

  // Render message text, converting /contacto to a link
  const renderText = (text) => {
    const parts = text.split(/(\/?contacto)/g);
    return parts.map((part, i) =>
      part === "/contacto" || part === "contacto" ? (
        <Link
          key={i}
          href="/contacto"
          onClick={onClose}
          className="text-primary hover:text-primary-hover underline underline-offset-2"
        >
          /contacto
        </Link>
      ) : (
        <span key={i}>{part}</span>
      )
    );
  };

  return (
    <>
      {/* Backdrop */}
      {open && (
        <div
          className="fixed inset-0 z-[60] bg-black/50 backdrop-blur-sm transition-opacity"
          onClick={onClose}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 z-[70] h-full w-full sm:w-[400px] flex flex-col transition-transform duration-300 ease-out ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ background: "#0f1011" }}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 h-14 border-b border-hairline shrink-0">
          <div className="flex items-center gap-2.5">
            <MessageSquare size={16} className="text-primary" />
            <span className="text-[14px] font-medium text-ink tracking-[-0.2px]">
              Chat
            </span>
            <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-surface-2 border border-hairline">
              <span className="w-1.5 h-1.5 rounded-full bg-success" />
              <span className="text-[11px] text-ink-subtle font-mono">
                online
              </span>
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-md text-ink-subtle hover:text-ink hover:bg-surface-2 transition-colors"
            aria-label="Cerrar chat"
          >
            <X size={18} />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto px-5 py-4 space-y-3">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[85%] px-3.5 py-2.5 rounded-lg text-[13px] leading-relaxed ${
                  msg.role === "user"
                    ? "bg-primary text-white rounded-br-sm"
                    : "bg-surface-2 text-ink-muted border border-hairline rounded-bl-sm"
                }`}
              >
                {msg.role === "bot" ? renderText(msg.text) : msg.text}
              </div>
            </div>
          ))}

          {loading && (
            <div className="flex justify-start">
              <div className="bg-surface-2 border border-hairline rounded-lg rounded-bl-sm px-3.5 py-2.5">
                <Loader2 size={14} className="text-primary animate-spin" />
              </div>
            </div>
          )}

          <div ref={endRef} />
        </div>

        {/* Quick questions */}
        {showQuick && (
          <div className="px-5 pb-2 flex flex-wrap gap-1.5">
            {QUICK_QUESTIONS.map((q) => (
              <button
                key={q}
                onClick={() => send(q)}
                className="text-[11px] font-mono px-2.5 py-1.5 rounded-md bg-surface-2 border border-hairline text-ink-subtle hover:text-ink hover:border-hairline-strong transition-colors"
              >
                {q}
              </button>
            ))}
          </div>
        )}

        {/* Input */}
        <form
          onSubmit={handleSubmit}
          className="shrink-0 border-t border-hairline px-4 py-3 flex items-center gap-2"
        >
          <input
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Escribi tu consulta..."
            disabled={loading}
            className="flex-1 bg-surface-2 border border-hairline rounded-md px-3 py-2 text-[13px] text-ink placeholder:text-ink-tertiary outline-none focus:border-primary transition-colors"
          />
          <button
            type="submit"
            disabled={!input.trim() || loading}
            className="p-2 rounded-md bg-primary hover:bg-primary-hover text-white disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
          >
            <Send size={14} />
          </button>
        </form>

        {/* Footer */}
        <div className="shrink-0 px-5 py-2 border-t border-hairline">
          <p className="text-[10px] text-ink-tertiary text-center">
            Asistente con IA. Para consultas detalladas,{" "}
            <Link
              href="/contacto"
              onClick={onClose}
              className="text-primary hover:text-primary-hover"
            >
              contactanos
            </Link>
            .
          </p>
        </div>
      </div>
    </>
  );
}
