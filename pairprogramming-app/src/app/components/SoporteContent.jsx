// components/SoporteContent.jsx
"use client";
import { useState, useRef, useEffect } from "react";
import { useSidebar } from "../context/SidebarContext";
import { Container } from "./ui/Container";
import { Card } from "./ui/Card";
import { Button } from "./ui/Button";
import { Input } from "./ui/Input";

export default function SoporteContent() {
  const { isSidebarExpanded } = useSidebar();
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "¡Hola! 👋 Soy **Carlos**, tu especialista de soporte técnico. ¿En qué puedo ayudarte hoy?",
      sender: "agent",
      timestamp: new Date(),
      agent: "Carlos Rodríguez",
      role: "Especialista en Soporte Técnico",
    },
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [ticketNumber, setTicketNumber] = useState(null);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
    // Generar número de ticket al cargar
    if (!ticketNumber) {
      setTicketNumber(`TKT-${Date.now().toString().slice(-6)}`);
    }
  }, [messages, ticketNumber]);

  const commonIssues = [
    "Problemas con el servidor",
    "Error en la aplicación",
    "Consulta sobre facturación",
    "Problema de rendimiento",
    "Solicitud de nuevas funciones",
    "Problema de integración",
  ];

  const supportAgents = [
    {
      name: "Carlos Rodríguez",
      role: "Especialista en Soporte Técnico",
      expertise: ["Backend", "APIs", "Servidores"],
      status: "En línea",
      avatar: "👨‍💻",
    },
    {
      name: "Ana Martínez",
      role: "Especialista en Frontend",
      expertise: ["React", "UI/UX", "Performance"],
      status: "Disponible",
      avatar: "👩‍💻",
    },
    {
      name: "David Chen",
      role: "Especialista en DevOps",
      expertise: ["Infraestructura", "CI/CD", "Cloud"],
      status: "En línea",
      avatar: "👨‍🔧",
    },
  ];

  const handleQuickIssue = (issue) => {
    setInputMessage("");
    handleSendMessage(null, issue);
  };

  const handleSendMessage = (e, quickIssue = null) => {
    e?.preventDefault();
    const messageText = quickIssue || inputMessage;

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

    // Simulate agent typing and response
    setTimeout(() => {
      setIsTyping(false);

      const currentAgent = supportAgents[0]; // Carlos responde por defecto
      let responseText = "";

      // Respuestas basadas en el tipo de problema
      if (
        messageText.toLowerCase().includes("servidor") ||
        messageText.toLowerCase().includes("server")
      ) {
        responseText = `He revisado nuestros registros y veo que los servidores están funcionando correctamente. ¿Podrías proporcionarme más detalles sobre el error que estás experimentando?\n\n• ¿Qué mensaje de error específico ves?\n• ¿En qué entorno ocurre (producción, desarrollo)?\n• ¿Desde cuándo está ocurriendo esto?`;
      } else if (
        messageText.toLowerCase().includes("error") ||
        messageText.toLowerCase().includes("bug")
      ) {
        responseText = `Entiendo que estás experimentando un error. Para ayudarte mejor:\n\n1. ¿Podrías compartir los pasos específicos para reproducir el error?\n2. ¿Hay algún mensaje de error en la consola?\n3. ¿En qué navegador y versión ocurre?\n\nTambién puedes revisar nuestra documentación de solución de problemas.`;
      } else if (
        messageText.toLowerCase().includes("factura") ||
        messageText.toLowerCase().includes("pago")
      ) {
        responseText = `Puedo ayudarte con temas de facturación. He verificado tu cuenta y todo parece estar en orden.\n\n• Próxima facturación: ${new Date(
          Date.now() + 30 * 24 * 60 * 60 * 1000
        ).toLocaleDateString(
          "es-ES"
        )}\n• Método de pago actual: Tarjeta de crédito\n• Plan: Professional\n\n¿Hay algo específico sobre tu facturación que te preocupe?`;
      } else if (
        messageText.toLowerCase().includes("lento") ||
        messageText.toLowerCase().includes("rendimiento")
      ) {
        responseText = `Comprendo tu preocupación sobre el rendimiento. Algunas acciones que puedes tomar:\n\n• Limpiar cache del navegador\n• Verificar tu conexión a internet\n• Revisar si hay actualizaciones pendientes\n\n¿Podrías decirme qué acción específica está siendo lenta?`;
      } else if (
        messageText.toLowerCase().includes("función") ||
        messageText.toLowerCase().includes("feature")
      ) {
        responseText = `¡Me encanta escuchar nuevas ideas! He registrado tu solicitud en nuestro sistema de seguimiento.\n\n**Ticket: ${ticketNumber}**\nCategoría: Nueva Función\nPrioridad: Media\n\n¿Te gustaría agregar más detalles sobre esta funcionalidad?`;
      } else {
        responseText = `Gracias por tu mensaje. He registrado tu consulta en nuestro sistema con el ticket **${ticketNumber}**.\n\nUn miembro de nuestro equipo revisará tu caso y te contactará si necesitamos información adicional. Mientras tanto, ¿hay algo más en lo que pueda ayudarte?`;
      }

      const agentMessage = {
        id: Date.now() + 1,
        text: responseText,
        sender: "agent",
        timestamp: new Date(),
        agent: currentAgent.name,
        role: currentAgent.role,
      };

      setMessages((prev) => [...prev, agentMessage]);
    }, 2000);
  };

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

  const formatMessageWithBreaks = (text) => {
    return text.split("\n").map((line, index) => (
      <div key={index}>
        {formatMessage(line)}
        {index < text.split("\n").length - 1 && <br />}
      </div>
    ));
  };

  const downloadChatHistory = () => {
    const chatText = messages
      .map((msg) => {
        const sender = msg.sender === "user" ? "Tú" : msg.agent;
        const time = msg.timestamp.toLocaleTimeString("es-ES");
        return `[${time}] ${sender}: ${msg.text}`;
      })
      .join("\n\n");

    const blob = new Blob([chatText], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `soporte-${ticketNumber}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <section className="py-16 lg:py-20 bg-card-bg text-white min-h-screen">
      <Container size={isSidebarExpanded ? "expanded" : "default"}>
        <div className="text-center mb-8 fade-in">
          <h1
            className={`font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent transition-all duration-300 ${
              isSidebarExpanded
                ? "text-2xl lg:text-3xl"
                : "text-3xl lg:text-4xl"
            }`}
          >
            Soporte Técnico
          </h1>
          <p className="text-secondary-text max-w-2xl mx-auto text-lg">
            Estamos aquí para ayudarte. Chatea con nuestro equipo de
            especialistas.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-8">
          {/* Panel de información del ticket */}
          <div className="lg:col-span-1 space-y-6">
            <Card padding="md" className="sticky top-4">
              <h3 className="text-lg font-bold text-primary mb-4">
                Información del Ticket
              </h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-secondary-text">Ticket:</span>
                  <span className="font-mono text-primary">{ticketNumber}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-secondary-text">Estado:</span>
                  <span className="text-green-400">● En Progreso</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-secondary-text">Creado:</span>
                  <span>{new Date().toLocaleDateString("es-ES")}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-secondary-text">
                    Tiempo de respuesta:
                  </span>
                  <span className="text-green-400">Inmediato</span>
                </div>
              </div>
            </Card>

            <Card padding="md">
              <h3 className="text-lg font-bold text-primary mb-4">
                Equipo de Soporte
              </h3>
              <div className="space-y-4">
                {supportAgents.map((agent, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 p-2 rounded-lg bg-background/50"
                  >
                    <div className="text-2xl">{agent.avatar}</div>
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-white text-sm">
                        {agent.name}
                      </p>
                      <p className="text-secondary-text text-xs">
                        {agent.role}
                      </p>
                      <p className="text-green-400 text-xs">● {agent.status}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Chat principal */}
          <div className="lg:col-span-3">
            <Card padding="md" className="h-[600px] flex flex-col">
              {/* Header del chat */}
              <div className="flex items-center justify-between pb-4 border-b border-border-color mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                    <span className="text-primary">👨‍💻</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-white">Soporte Técnico</h3>
                    <p className="text-secondary-text text-sm">
                      Ticket: {ticketNumber}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-green-400 text-sm">● En línea</p>
                  <p className="text-secondary-text text-xs">
                    Tiempo de respuesta: 2 min
                  </p>
                </div>
              </div>

              {/* Área de mensajes */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-background/30 rounded-lg mb-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${
                      message.sender === "user"
                        ? "justify-end"
                        : "justify-start"
                    }`}
                  >
                    <div
                      className={`max-w-xs lg:max-w-md px-4 py-3 rounded-2xl ${
                        message.sender === "user"
                          ? "bg-primary text-white rounded-br-none"
                          : "bg-card-bg text-foreground rounded-bl-none border border-border-color"
                      }`}
                    >
                      {message.sender === "agent" && (
                        <div className="flex items-center space-x-2 mb-2">
                          <span className="text-xs font-semibold text-primary">
                            {message.agent}
                          </span>
                          <span className="text-xs text-secondary-text">
                            {message.role}
                          </span>
                        </div>
                      )}
                      <div className="text-sm leading-relaxed">
                        {formatMessageWithBreaks(message.text)}
                      </div>
                      <div
                        className={`text-xs mt-2 ${
                          message.sender === "user"
                            ? "text-primary/80"
                            : "text-secondary-text"
                        }`}
                      >
                        {message.timestamp.toLocaleTimeString("es-ES", {
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </div>
                    </div>
                  </div>
                ))}

                {/* Typing Indicator */}
                {isTyping && (
                  <div className="flex justify-start">
                    <div className="bg-card-bg text-foreground px-4 py-3 rounded-2xl rounded-bl-none border border-border-color">
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
                          Carlos está escribiendo...
                        </span>
                      </div>
                    </div>
                  </div>
                )}

                <div ref={messagesEndRef} />
              </div>

              {/* Problemas comunes */}
              <div className="mb-4">
                <p className="text-secondary-text text-sm mb-2">
                  Problemas comunes:
                </p>
                <div className="flex flex-wrap gap-2">
                  {commonIssues.map((issue, index) => (
                    <button
                      key={index}
                      onClick={() => handleQuickIssue(issue)}
                      className="text-xs bg-background hover:bg-hover-bg text-secondary-text border border-border-color px-3 py-1 rounded-full transition-colors hover:text-primary hover:border-primary"
                    >
                      {issue}
                    </button>
                  ))}
                </div>
              </div>

              {/* Input de mensaje */}
              <form
                onSubmit={handleSendMessage}
                className="flex space-x-2 mb-4"
              >
                <Input
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  placeholder="Escribe tu mensaje..."
                  className="flex-1"
                />
                <Button
                  type="submit"
                  disabled={!inputMessage.trim() || isTyping}
                  className="flex-shrink-0"
                >
                  Enviar
                </Button>
              </form>

              {/* Acciones Rápidas - MOVIDO AQUÍ ABAJO */}
              <div className="border-t border-border-color pt-4">
                <h4 className="text-sm font-semibold text-white mb-3">
                  Acciones Rápidas
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full justify-center text-xs"
                    onClick={downloadChatHistory}
                    icon="💾"
                  >
                    Descargar Chat
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full justify-center text-xs"
                    href="/faq"
                    icon="📚"
                  >
                    Ver FAQ
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full justify-center text-xs"
                    href="/calendario"
                    icon="📅"
                  >
                    Agendar Reunión
                  </Button>
                </div>
              </div>
            </Card>

            {/* Información adicional */}
            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
              <Card padding="sm" className="bg-primary/10 border-primary/20">
                <div className="text-2xl mb-2">⏱️</div>
                <h4 className="font-semibold text-white text-sm">
                  Respuesta Rápida
                </h4>
                <p className="text-secondary-text text-xs">
                  Menos de 5 minutos
                </p>
              </Card>
              <Card padding="sm" className="bg-primary/10 border-primary/20">
                <div className="text-2xl mb-2">👨‍💻</div>
                <h4 className="font-semibold text-white text-sm">
                  Expertos Técnicos
                </h4>
                <p className="text-secondary-text text-xs">
                  Equipo especializado
                </p>
              </Card>
              <Card padding="sm" className="bg-primary/10 border-primary/20">
                <div className="text-2xl mb-2">📊</div>
                <h4 className="font-semibold text-white text-sm">
                  Seguimiento
                </h4>
                <p className="text-secondary-text text-xs">
                  Ticket: {ticketNumber}
                </p>
              </Card>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
