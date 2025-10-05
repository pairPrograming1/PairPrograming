// components/Chatbot.jsx
"use client";
import { useState, useRef, useEffect } from "react";

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
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const commonQuestions = [
    "¿Qué servicios ofrecen?",
    "¿Cuánto cuesta un proyecto?",
    "¿Tienen portafolio?",
    "¿Cómo empiezo mi proyecto?",
  ];

  const botResponses = {
    hola: "¡Hola! 👋 Soy **Botie**, tu asistente virtual de **PairProgramming**. Me da mucho gusto saludarte. ¿En qué puedo ayudarte hoy? Aquí tienes algunas opciones comunes:",
    servicios:
      "En **PairProgramming** ofrecemos:\n\n🚀 **Productos Digitales**: Apps móviles, plataformas SaaS, CRM, ERP\n🛠️ **Servicios Personalizados**: Desarrollo a medida, consultoría tech\n💼 **Soluciones Integrales**: Dashboards, portales cliente, modernización\n\nPuedes ver todos nuestros servicios detallados en la página de **Servicios**.",
    cuesta:
      "El costo de un proyecto varía según:\n\n• Complejidad y funcionalidades\n• Tecnologías requeridas\n• Timeline del proyecto\n• Equipo involucrado\n\n💰 Ofrecemos **presupuestos personalizados** después de entender tus necesidades. Te recomiendo agendar una **consulta gratuita** para evaluar tu proyecto.",
    portafolio:
      "¡Claro! Tenemos un **portafolio diverso** con proyectos demostrativos:\n\n📁 **E-commerce platforms**\n📊 **SaaS dashboards**\n📱 **Mobile applications**\n🔧 **CRM personalizados**\n\nVisita nuestra página de **Portafolio** para ver demos en video y casos de éxito reales.",
    empiezo:
      "¡Excelente! Para comenzar tu proyecto:\n\n1️⃣ **Contáctanos** por WhatsApp o formulario\n2️⃣ **Agendamos una reunión** virtual gratuita\n3️⃣ **Analizamos** tus necesidades y objetivos\n4️⃣ **Te presentamos** una propuesta personalizada\n5️⃣ **Comenzamos** el desarrollo\n\n🎯 Estamos para guiarte en cada paso del proceso.",
    default: (query) =>
      `🤔 **Botie** aquí! Entiendo que quieres saber sobre: *"${query}"*\n\nTe recomiendo:\n\n• Visitar la sección correspondiente en nuestro sitio web\n• Contactarnos directamente para una respuesta específica\n• Explorar nuestras preguntas frecuentes\n\n¿Te gustaría que te conecte con un **especialista humano**?`,
  };

  const handleQuickQuestion = (question) => {
    setInputMessage("");
    setShowQuickQuestions(false);
    handleSendMessage(null, question);
  };

  const handleSendMessage = (e, quickQuestion = null) => {
    e?.preventDefault();
    const messageText = quickQuestion || inputMessage;

    if (!messageText.trim()) return;

    // Add user message
    const userMessage = {
      id: Date.now(),
      text: messageText,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputMessage("");
    setIsTyping(true);

    // Detectar si es un saludo para mostrar preguntas rápidas
    const isGreeting =
      /^(hola|holi|holis|buenos|buenas|hey|hi|hello|saludos|que tal|qué tal)/i.test(
        messageText.trim()
      );

    if (!isGreeting) {
      setShowQuickQuestions(false);
    }

    // Simulate bot typing and response
    setTimeout(() => {
      setIsTyping(false);

      let responseText;
      let query = messageText.toLowerCase();

      if (isGreeting) {
        responseText = botResponses.hola;
        setShowQuickQuestions(true); // Mostrar preguntas rápidas para saludos
      } else if (
        query.includes("servicio") ||
        query.includes("qué hacen") ||
        query.includes("que ofrecen") ||
        query.includes("servicios")
      ) {
        responseText = botResponses.servicios;
      } else if (
        query.includes("cuesta") ||
        query.includes("precio") ||
        query.includes("presupuesto") ||
        query.includes("costo")
      ) {
        responseText = botResponses.cuesta;
      } else if (
        query.includes("portafolio") ||
        query.includes("proyecto") ||
        query.includes("trabajo anterior") ||
        query.includes("experiencia")
      ) {
        responseText = botResponses.portafolio;
      } else if (
        query.includes("empezar") ||
        query.includes("comenzar") ||
        query.includes("iniciar") ||
        query.includes("comienzo")
      ) {
        responseText = botResponses.empiezo;
      } else {
        responseText = botResponses.default(messageText);
      }

      const botMessage = {
        id: Date.now() + 1,
        text: responseText,
        sender: "bot",
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, botMessage]);
    }, 1500);
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
      setShowQuickQuestions(true);
    }
  };

  // Función para formatear texto con negritas
  const formatMessage = (text) => {
    return text.split("**").map((part, index) => {
      return index % 2 === 1 ? (
        <strong key={index} className="text-primary">
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
        <div className="absolute bottom-16 right-0 w-80 h-96 bg-card-bg rounded-2xl shadow-2xl border border-border-color flex flex-col animate-fade-in mb-4">
          {/* Header con tema oscuro */}
          <div className="bg-gradient-to-r from-primary to-accent text-white p-4 rounded-t-2xl">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                  <span className="text-primary text-sm">🤖</span>
                </div>
                <div>
                  <h3 className="font-bold">Botie - PairProgramming</h3>
                  <p className="text-primary-light text-xs">
                    Asistente virtual
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
                      <div className="w-2 h-2 bg-primary rounded-full animate-bounce"></div>
                      <div
                        className="w-2 h-2 bg-primary rounded-full animate-bounce"
                        style={{ animationDelay: "0.1s" }}
                      ></div>
                      <div
                        className="w-2 h-2 bg-primary rounded-full animate-bounce"
                        style={{ animationDelay: "0.2s" }}
                      ></div>
                    </div>
                    <span className="text-secondary-text text-xs">
                      Botie está escribiendo...
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
                    className="text-xs bg-background hover:bg-hover-bg text-secondary-text border border-border-color px-3 py-1 rounded-full transition-colors hover:text-primary hover:border-primary"
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
                className="flex-1 px-3 py-2 border border-border-color rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground placeholder-secondary-text text-sm"
                disabled={isTyping}
              />
              <button
                type="submit"
                disabled={!inputMessage.trim() || isTyping}
                className="bg-primary hover:bg-primary-dark disabled:bg-gray-600 disabled:cursor-not-allowed text-white px-4 py-2 rounded-lg transition-colors"
              >
                →
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Floating Button */}
      <button
        onClick={toggleChat}
        className="w-14 h-14 bg-gradient-to-r from-primary to-accent hover:from-primary-dark hover:to-accent/90 rounded-full shadow-lg transition-all duration-300 hover:scale-110 flex items-center justify-center group pulse-glow hover-lift-sm"
        aria-label="Abrir asistente virtual Botie"
        data-chatbot-toggle
      >
        {isOpen ? (
          <span className="text-white text-xl">✕</span>
        ) : (
          <span className="text-white text-2xl">🤖</span>
        )}
      </button>
    </div>
  );
}
