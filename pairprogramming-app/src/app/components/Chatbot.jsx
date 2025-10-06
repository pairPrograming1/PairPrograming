"use client";
import { useState, useRef, useEffect } from "react";

// Función para usar Google Gemini
const useGeminiAI = () => {
  const generateResponse = async (userMessage, conversationHistory) => {
    try {
      // Importación dinámica para evitar problemas de SSR
      const { GoogleGenerativeAI } = await import("@google/generative-ai");

      const apiKey = process.env.NEXT_PUBLIC_GOOGLE_AI_API_KEY;

      if (!apiKey || apiKey === "tu_google_ai_api_key_gratuita_aqui") {
        throw new Error("Google AI API key no configurada");
      }

      const genAI = new GoogleGenerativeAI(apiKey);

      // Usar modelo disponible en API gratuita
      const model = genAI.getGenerativeModel({
        model: "gemini-1.5-flash",
      });

      const systemPrompt = `Eres Botie, un asistente virtual especializado en desarrollo de software para la empresa PairProgramming.

INFORMACIÓN SOBRE LA EMPRESA:
- Nombre: PairProgramming
- Servicios: Desarrollo web, aplicaciones móviles, SaaS, CRM, ERP, consultoría tecnológica
- Tecnologías: React, Next.js, Node.js, Python, MongoDB, PostgreSQL, AWS
- Metodología: Desarrollo ágil, sprints de 2 semanas, entregas continuas
- Enfoque: Soluciones escalables, código limpio, mejores prácticas

DIRECTIVAS:
1. Responde siempre en español
2. Sé específico y técnico en desarrollo
3. Mantén un tono profesional pero amigable
4. Para preguntas sobre precios, sugiere contactar al equipo
5. Sé honesto sobre capacidades y limitaciones
6. Usa emojis relevantes ocasionalmente
7. Mantén respuestas concisas pero informativas

Si no sabes algo, sugiere contactar al equipo especializado.`;

      // Construir el prompt completo
      const fullPrompt = `${systemPrompt}

Historial reciente:
${conversationHistory
  .slice(-4)
  .map(
    (msg) => `${msg.sender === "user" ? "Usuario" : "Asistente"}: ${msg.text}`
  )
  .join("\n")}

Usuario: ${userMessage}
Asistente:`;

      console.log("Enviando prompt a Gemini...");

      const result = await model.generateContent(fullPrompt);
      const response = await result.response;

      console.log("✅ Respuesta recibida de Gemini");
      return response.text();
    } catch (error) {
      console.error("Error con Google Gemini:", error);

      // Si es error de modelo, usar respuestas inteligentes
      if (error.message.includes("model") || error.message.includes("404")) {
        throw new Error(
          "Modelo no disponible - usando respuestas inteligentes"
        );
      }

      throw error;
    }
  };

  return { generateResponse };
};

export default function Chatbot() {
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

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

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

  const commonQuestions = [
    "¿Qué servicios ofrecen?",
    "¿Cuánto cuesta un proyecto?",
    "¿Tienen portafolio?",
    "¿Cómo empiezo mi proyecto?",
    "¿Qué tecnologías usan?",
    "¿Tienen experiencia en mi industria?",
  ];

  // Sistema de fallback inteligente
  const getIntelligentResponse = (userMessage) => {
    const message = userMessage.toLowerCase().trim();

    const isGreeting =
      /^(hola|holi|holis|buenos|buenas|hey|hi|hello|saludos|que tal|qué tal)/i.test(
        message
      );
    const isServicesQuestion =
      /servicio|qué hacen|que ofrecen|servicios|qué ofrecen/i.test(message);
    const isPriceQuestion =
      /cuesta|precio|presupuesto|costo|valor|cuánto/i.test(message);
    const isPortfolioQuestion =
      /portafolio|proyecto|trabajo anterior|experiencia|casos de éxito/i.test(
        message
      );
    const isStartQuestion =
      /empezar|comenzar|iniciar|comienzo|como empiezo|qué necesito/i.test(
        message
      );
    const isTechQuestion =
      /tecnolog|stack|herramienta|lenguaje|framework|react|angular|vue|node|python/i.test(
        message
      );
    const isIndustryQuestion =
      /industria|sector|rama|rubro|empresa|negocio/i.test(message);

    if (isGreeting) {
      return "¡Hola! 👋 Soy **Botie**, tu asistente virtual de **PairProgramming**. Me da mucho gusto saludarte. ¿En qué puedo ayudarte hoy? Aquí tienes algunas opciones comunes:";
    }

    if (isServicesQuestion) {
      return `En **PairProgramming** ofrecemos:\n\n🚀 **Productos Digitales**: Apps móviles, plataformas SaaS, CRM, ERP\n🛠️ **Servicios Personalizados**: Desarrollo a medida, consultoría tech\n💼 **Soluciones Integrales**: Dashboards, portales cliente, modernización\n\nPuedes ver todos nuestros servicios detallados en la página de **Servicios**.`;
    }

    if (isPriceQuestion) {
      return `El costo de un proyecto varía según:\n\n• Complejidad y funcionalidades\n• Tecnologías requeridas\n• Timeline del proyecto\n• Equipo involucrado\n\n💰 Ofrecemos **presupuestos personalizados** después de entender tus necesidades. Te recomiendo agendar una **consulta gratuita** para evaluar tu proyecto.`;
    }

    if (isPortfolioQuestion) {
      return `¡Claro! Tenemos un **portafolio diverso** con proyectos demostrativos:\n\n📁 **E-commerce platforms**\n📊 **SaaS dashboards**\n📱 **Mobile applications**\n🔧 **CRM personalizados**\n\nVisita nuestra página de **Portafolio** para ver demos en video y casos de éxito reales.`;
    }

    if (isStartQuestion) {
      return `¡Excelente! Para comenzar tu proyecto:\n\n1️⃣ **Contáctanos** por WhatsApp o formulario\n2️⃣ **Agendamos una reunión** virtual gratuita\n3️⃣ **Analizamos** tus necesidades y objetivos\n4️⃣ **Te presentamos** una propuesta personalizada\n5️⃣ **Comenzamos** el desarrollo\n\n🎯 Estamos para guiarte en cada paso del proceso.`;
    }

    if (isTechQuestion) {
      return `🛠️ **Stack tecnológico principal:**\n\n• **Frontend**: React, Next.js, TypeScript, Tailwind\n• **Backend**: Node.js, Python, Express, FastAPI\n• **Mobile**: React Native, Flutter\n• **Bases de datos**: PostgreSQL, MongoDB, Redis\n• **Cloud**: AWS, Vercel, Docker\n\n¿Te interesa alguna tecnología en particular?`;
    }

    if (isIndustryQuestion) {
      return `Hemos trabajado en diversos sectores:\n\n🏪 **Retail & E-commerce**\n🏥 **Salud & Telemedicina**\n🎓 **Educación & EdTech**\n💼 **Finanzas & FinTech**\n🏢 **Real Estate & PropTech**\n\nCada industria tiene necesidades específicas que entendemos y adaptamos.`;
    }

    // Respuesta por defecto
    return `🤔 **Botie** aquí! Entiendo que quieres saber sobre: *"${userMessage}"*\n\nTe recomiendo:\n\n• Visitar la sección correspondiente en nuestro sitio web\n• Contactarnos directamente para una respuesta específica\n• Explorar nuestras preguntas frecuentes\n\n¿Te gustaría que te conecte con un **especialista humano**?`;
  };

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

  // Función para formatear texto con negritas
  const formatMessage = (text) => {
    return text.split("**").map((part, index) => {
      return index % 2 === 1 ? (
        <strong key={index} className="text-accent">
          {part}
        </strong>
      ) : (
        part
      );
    });
  };

  // Función para formatear saltos de línea
  const formatMessageWithBreaks = (text) => {
    return text.split("\n").map((line, index) => (
      <div key={index}>
        {formatMessage(line)}
        {index < text.split("\n").length - 1 && <br />}
      </div>
    ));
  };

  return (
    <div className="relative">
      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-32 right-4 w-80 h-96 bg-card-bg rounded-2xl shadow-2xl border border-border-color flex flex-col animate-fade-in mb-4 z-50">
          {/* Header con tema oscuro */}
          <div className="bg-gradient-to-r from-primary to-accent text-white p-4 rounded-t-2xl">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                  <span className="text-primary text-sm">
                    {aiStatus === "available" ? "🤖" : "💡"}
                  </span>
                </div>
                <div>
                  <h3 className="font-bold">Botie - PairProgramming</h3>
                  <p className="text-accent-light text-xs">
                    {aiStatus === "available"
                      ? "Asistente con IA"
                      : "Modo inteligente"}
                  </p>
                </div>
              </div>
              <button
                onClick={toggleChat}
                className="text-white hover:text-gray-200 transition-colors"
                aria-label="Cerrar chat"
              >
                ✕
              </button>
            </div>
          </div>

          {/* Messages Container con tema oscuro */}
          <div className="flex-1 p-4 overflow-y-auto bg-background chatbot-messages">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`mb-4 ${
                  message.sender === "user" ? "text-right" : "text-left"
                }`}
              >
                <div
                  className={`inline-block max-w-xs lg:max-w-md px-4 py-2 rounded-2xl ${
                    message.sender === "user"
                      ? "bg-primary text-white rounded-br-none"
                      : "bg-card-bg text-foreground rounded-bl-none border border-border-color"
                  }`}
                >
                  <div className="text-sm leading-relaxed">
                    {formatMessageWithBreaks(message.text)}
                  </div>
                </div>
                <div
                  className={`text-xs mt-1 ${
                    message.sender === "user"
                      ? "text-secondary-text"
                      : "text-secondary-text"
                  }`}
                >
                  {message.timestamp.toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </div>
              </div>
            ))}

            {/* Typing Indicator con tema oscuro */}
            {isTyping && (
              <div className="text-left mb-4">
                <div className="inline-block bg-card-bg text-foreground px-4 py-2 rounded-2xl rounded-bl-none border border-border-color">
                  <div className="flex items-center space-x-2">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-accent rounded-full animate-bounce"></div>
                      <div
                        className="w-2 h-2 bg-accent rounded-full animate-bounce"
                        style={{ animationDelay: "0.1s" }}
                      ></div>
                      <div
                        className="w-2 h-2 bg-accent rounded-full animate-bounce"
                        style={{ animationDelay: "0.2s" }}
                      ></div>
                    </div>
                    <span className="text-secondary-text text-xs">
                      {aiStatus === "available"
                        ? "Procesando con IA..."
                        : "Botie está escribiendo..."}
                    </span>
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick Questions & Input con tema oscuro */}
          <div className="p-3 border-t border-border-color bg-card-bg rounded-b-2xl">
            {/* Quick Questions - Solo se muestran si showQuickQuestions es true */}
            {showQuickQuestions && (
              <div className="flex flex-wrap gap-2 mb-3">
                {commonQuestions.map((question, index) => (
                  <button
                    key={index}
                    onClick={() => handleQuickQuestion(question)}
                    className="text-xs bg-background hover:bg-hover-bg text-secondary-text border border-border-color px-3 py-1 rounded-full transition-colors hover:text-accent hover:border-accent"
                  >
                    {question}
                  </button>
                ))}
              </div>
            )}

            {/* Input Form */}
            <form onSubmit={handleSendMessage} className="flex space-x-2">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder="Escribe tu mensaje..."
                className="flex-1 px-3 py-2 border border-border-color rounded-lg focus:outline-none focus:ring-2 focus:ring-accent bg-background text-foreground placeholder-secondary-text text-sm"
                disabled={isTyping}
              />
              <button
                type="submit"
                disabled={!inputMessage.trim() || isTyping}
                className="bg-accent hover:bg-accent-dark disabled:bg-gray-600 disabled:cursor-not-allowed text-white px-4 py-2 rounded-lg transition-colors"
              >
                →
              </button>
            </form>

            {/* Status Indicator */}
            <div className="text-center mt-2">
              <span className="text-xs text-secondary-text">
                {aiStatus === "available"
                  ? "🤖 Conectado a Google Gemini AI"
                  : "💡 Usando respuestas inteligentes"}
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Floating Button - POSICIÓN CORREGIDA: derecha y más arriba */}
      <button
        onClick={toggleChat}
        className="fixed bottom-24 right-6 w-14 h-14 bg-gradient-to-r from-primary to-accent hover:from-primary-dark hover:to-accent-dark rounded-full shadow-lg transition-all duration-300 hover:scale-110 flex items-center justify-center group pulse-glow hover-lift-sm z-50"
        aria-label="Abrir asistente virtual Botie"
        data-chatbot-toggle
      >
        {isOpen ? (
          <span className="text-white text-xl">✕</span>
        ) : (
          <span className="text-white text-2xl">
            {aiStatus === "available" ? "🤖" : "💡"}
          </span>
        )}
      </button>
    </div>
  );
}
