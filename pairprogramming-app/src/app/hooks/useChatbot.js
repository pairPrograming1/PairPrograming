import { useState, useRef, useEffect } from "react";
import { useGeminiAI } from "./useGeminiAI";
import { getIntelligentResponse } from "../components/utils/intelligentResponses";

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
    // Verificar si la API key está configurada
    const apiKey = process.env.NEXT_PUBLIC_GOOGLE_AI_API_KEY;
    const isApiConfigured =
      apiKey &&
      apiKey !== "tu_google_ai_api_key_gratuita_aqui" &&
      apiKey.length > 10;

    if (isApiConfigured) {
      setAiStatus("available");
      console.log("✅ Google Gemini AI configurado");
    } else {
      setAiStatus("unavailable");
      console.log("❌ Google Gemini AI no configurado");
    }
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
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

      // Intentar usar Google Gemini si está disponible
      if (aiStatus === "available") {
        try {
          console.log("🔄 Usando Google Gemini AI...");
          responseText = await generateResponse(
            messageText,
            conversationHistory
          );
          console.log("✅ Respuesta de Gemini recibida");
        } catch (aiError) {
          console.log(
            "🔄 Fallback a respuestas inteligentes:",
            aiError.message
          );
          responseText = getIntelligentResponse(messageText);
        }
      } else {
        // Usar sistema inteligente
        responseText = getIntelligentResponse(messageText);
      }

      const botMessage = {
        id: Date.now() + 1,
        text: responseText,
        sender: "bot",
        timestamp: new Date(),
      };

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
    toggleChat,
  };
};
