import { useState, useRef, useEffect } from "react";
import { useGeminiAI } from "./useGeminiAI";
import { getIntelligentResponse } from "../components/utils/intelligentResponses";
import { CONTACTS } from "../data/contacts";
import { faqData } from "../data/faqData";

export const useChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "¡Hola! 👋 Soy **Botie**, tu asistente virtual de **PairProgramming**. ¿En qué puedo ayudarte hoy?",
      sender: "bot",
      timestamp: new Date(),
    },
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [showQuickQuestions, setShowQuickQuestions] = useState(true);
  const [conversationHistory, setConversationHistory] = useState([]);
  const [aiStatus, setAiStatus] = useState("checking");
  const messagesEndRef = useRef(null);

  const { generateResponse } = useGeminiAI();

  useEffect(() => {
    // Check server-side proxy for AI availability instead of relying on client env var
    let mounted = true;
    const checkServerAI = async () => {
      try {
        const res = await fetch("/api/gemini");
        if (!mounted) return;
        const json = await res.json().catch(() => ({}));
        if (json?.available) {
          setAiStatus("available");
          console.log("✅ Google Gemini AI configurado (server)");
        } else {
          setAiStatus("unavailable");
          console.log("❌ Google Gemini AI no configurado (server)", json?.reason || "");
        }
      } catch (err) {
        if (!mounted) return;
        setAiStatus("unavailable");
        console.log("❌ Error consultando /api/gemini:", err.message || err);
      }
    };

    checkServerAI();
    return () => {
      mounted = false;
    };
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Local FAQ lookup: simple token match against faqData to provide deterministic answers
  const localLookup = (text) => {
    if (!text || typeof text !== "string") return null;
    const normalized = text.toLowerCase();
    // split into tokens of length >=3 to avoid common stopwords
    const tokens = normalized.match(/\b\w{3,}\b/g) || [];
    if (tokens.length === 0) return null;

    let best = { score: 0, answer: null };
    for (const section of faqData) {
      for (const q of section.questions) {
        const source = `${q.question} ${q.answer}`.toLowerCase();
        let score = 0;
        for (const tok of tokens) {
          if (source.includes(tok)) score += 1;
        }
        if (score > best.score) {
          best = { score, answer: q.answer };
        }
      }
    }

    // require at least one token match to return an answer
    return best.score > 0 ? best.answer : null;
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleQuickQuestion = (question) => {
    setInputMessage("");
    setShowQuickQuestions(false);
    handleSendMessage(null, question);
  };

  const handleSendMessage = async (e, quickQuestion = null) => {
    e?.preventDefault();
    const messageText = quickQuestion || inputMessage;

    if (!messageText.trim()) return;

    // Agregar mensaje del usuario
    const userMessage = {
      id: Date.now(),
      text: messageText,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputMessage("");
    setIsTyping(true);

    // Detectar si es un saludo o comando para mostrar preguntas rápidas
    const isGreeting =
      /^(hola|holi|holis|buenos|buenas|hey|hi|hello|saludos|que tal|qué tal|ok|okay|opciones|menú|menu|ayuda|help)$/i.test(
        messageText.trim()
      );

    if (!isGreeting) {
      setShowQuickQuestions(false);
    }

    try {
      let responseText;

      // Determine whether to prefer local lookup
      const localMode = process.env.NEXT_PUBLIC_LOCAL_CHATBOT === "true";

      // If AI is available and localMode is false, try AI first, then local lookup, then rules
      if (aiStatus === "available" && !localMode) {
        try {
          console.log("🔄 Usando Google Gemini AI...");
          responseText = await generateResponse(
            messageText,
            conversationHistory
          );
          console.log("✅ Respuesta de Gemini recibida");
        } catch (aiError) {
          console.log(
            "🔄 AI failed, trying local lookup then rule-based fallback:",
            aiError.message
          );
          const local = localLookup(messageText);
          responseText = local || getIntelligentResponse(messageText);
        }
      } else {
        // Local-first / offline-friendly behavior
        const local = localLookup(messageText);
        if (local) {
          responseText = local;
        } else if (aiStatus === "available") {
          // if AI available but localMode was set false earlier, this branch won't run; here it's a fallback
          try {
            responseText = await generateResponse(messageText, conversationHistory);
          } catch (e) {
            responseText = getIntelligentResponse(messageText);
          }
        } else {
          // Use rule-based fallback
          responseText = getIntelligentResponse(messageText);
        }
      }

      // Ensure we never send an empty/null bot response. Provide a friendly fallback.
      const fallbackReply =
        "Lo siento, no entendí eso. ¿Podrías reformularlo o elegir una de nuestras opciones? Si prefieres hablar con una persona, puedo conectarte con nuestro equipo.";

      let fallbackUsed = false;
      if (!responseText || (typeof responseText === "string" && !responseText.trim())) {
        console.warn("Chatbot: computed empty response, using fallbackReply");
        responseText = fallbackReply;
        fallbackUsed = true;
      }

      let botMessage = {
        id: Date.now() + 1,
        text: responseText,
        sender: "bot",
        timestamp: new Date(),
        ...(fallbackUsed && {
          // Add helpful actions when we used the secure fallback so the user can continue
          // Use a special 'menu' action so the client can show the initial quick options
          actions: [
            { type: "menu", label: "Volver al menú principal" },
            { type: "page", label: "Formulario de contacto", href: "/contacto" },
            { type: "whatsapp", label: "Contactar por WhatsApp", phone: CONTACTS?.[0]?.phone },
          ],
        }),
      };

      // Detect intent to contact a human/soporte/comercial and propose direct actions
      const contactIntent = /\b(contacto|contact|hablar con|habla con|hablar|vendedor|comercial|soporte|soporte técnico|agendar|reunión|meeting)\b/i;
      if (contactIntent.test(messageText)) {
        // Build an actions array with WhatsApp buttons and a link to the contact page
        const actions = CONTACTS.map((c) => ({
          type: "whatsapp",
          label: `${c.name} (${c.role || "Contacto"})`,
          phone: c.phone,
        }));
        actions.push({ type: "page", label: "Formulario de contacto", href: "/contacto" });

        botMessage = {
          ...botMessage,
          text:
            "Puedo conectarte con nuestro equipo — elige una opción para iniciar el contacto:",
          actions,
        };
      }

      // Handler for click actions (returned to the UI) -- provide a default no-op here
      // (the UI will call the handleAction function from the hook).

  setMessages((prev) => [...prev, botMessage]);
      setConversationHistory((prev) =>
        [...prev, userMessage, botMessage].slice(-8)
      );

      // Mostrar preguntas rápidas para saludos y comandos específicos
      if (isGreeting) {
        setShowQuickQuestions(true);

        // Si es "ok" u otros comandos, agregar mensaje de recordatorio
        if (
          /^(ok|okay|opciones|menú|menu|ayuda|help)$/i.test(messageText.trim())
        ) {
          const reminderMessage = {
            id: Date.now() + 2,
            text: "¡Perfecto! 👆 Aquí tienes nuestras **opciones rápidas** nuevamente. Selecciona una o escribe tu consulta específica.",
            sender: "bot",
            timestamp: new Date(),
          };
          setMessages((prev) => [...prev, reminderMessage]);
        }
      }
    } catch (error) {
      console.error("Error en el chatbot:", error);
      const errorMessage = {
        id: Date.now() + 1,
        text: "⚠️ **Estoy teniendo dificultades técnicas en este momento.**\n\nPuedo ayudarte con consultas generales sobre nuestros servicios. ¿En qué aspecto te puedo orientar?",
        sender: "bot",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsTyping(false);
    }
  };

  // Exposed action handler for UI buttons
  const handleAction = (action) => {
    if (!action) return;
    if (action.type === "whatsapp") {
      const phone = (action.phone || "").replace(/\+/g, "");
      const defaultMsg = encodeURIComponent("Hola, me gustaría recibir más información.");
      window.open(`https://wa.me/${phone}?text=${defaultMsg}`, "_blank");
      return;
    }

    if (action.type === "page") {
      // Navigate normally for external/internal pages
      window.location.href = action.href;
      return;
    }

    if (action.type === "menu") {
      // Instead of navigating, show the initial quick questions and reset the conversation
      setMessages([
        {
          id: 1,
          text: "¡Hola! 👋 Soy **Botie**, tu asistente virtual de **PairProgramming**. ¿En qué puedo ayudarte hoy?",
          sender: "bot",
          timestamp: new Date(),
        },
      ]);
      setConversationHistory([]);
      setShowQuickQuestions(true);
      return;
    }
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      // Reset messages when opening
      setMessages([
        {
          id: 1,
          text: "¡Hola! 👋 Soy **Botie**, tu asistente virtual de **PairProgramming**. ¿En qué puedo ayudarte hoy?",
          sender: "bot",
          timestamp: new Date(),
        },
      ]);
      setConversationHistory([]);
      setShowQuickQuestions(true);
    }
  };

  return {
    isOpen,
    messages,
    inputMessage,
    isTyping,
    showQuickQuestions,
    aiStatus,
    messagesEndRef,
    setInputMessage,
    handleQuickQuestion,
    handleSendMessage,
    handleAction,
    toggleChat,
  };
};
