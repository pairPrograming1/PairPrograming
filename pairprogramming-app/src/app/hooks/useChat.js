// hooks/useChat.js
import { useRef, useEffect } from "react";

const supportAgents = [
  {
    name: "Carlos Rodríguez",
    role: "Especialista en Soporte Técnico",
  },
];

export function useChat({
  messages,
  setMessages,
  inputMessage,
  setInputMessage,
  isTyping,
  setIsTyping,
  ticketNumber,
}) {
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

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

    // Simulate agent response
    setTimeout(() => {
      setIsTyping(false);
      const responseText = generateResponse(messageText, ticketNumber);

      const agentMessage = {
        id: Date.now() + 1,
        text: responseText,
        sender: "agent",
        timestamp: new Date(),
        agent: supportAgents[0].name,
        role: supportAgents[0].role,
      };

      setMessages((prev) => [...prev, agentMessage]);
    }, 2000);
  };

  const generateResponse = (messageText, ticketNumber) => {
    if (
      messageText.toLowerCase().includes("servidor") ||
      messageText.toLowerCase().includes("server")
    ) {
      return `He revisado nuestros registros y veo que los servidores están funcionando correctamente. ¿Podrías proporcionarme más detalles sobre el error que estás experimentando?\n\n• ¿Qué mensaje de error específico ves?\n• ¿En qué entorno ocurre (producción, desarrollo)?\n• ¿Desde cuándo está ocurriendo esto?`;
    } else if (
      messageText.toLowerCase().includes("error") ||
      messageText.toLowerCase().includes("bug")
    ) {
      return `Entiendo que estás experimentando un error. Para ayudarte mejor:\n\n1. ¿Podrías compartir los pasos específicos para reproducir el error?\n2. ¿Hay algún mensaje de error en la consola?\n3. ¿En qué navegador y versión ocurre?\n\nTambién puedes revisar nuestra documentación de solución de problemas.`;
    } else if (
      messageText.toLowerCase().includes("factura") ||
      messageText.toLowerCase().includes("pago")
    ) {
      return `Puedo ayudarte con temas de facturación. He verificado tu cuenta y todo parece estar en orden.\n\n• Próxima facturación: ${new Date(
        Date.now() + 30 * 24 * 60 * 60 * 1000
      ).toLocaleDateString(
        "es-ES"
      )}\n• Método de pago actual: Tarjeta de crédito\n• Plan: Professional\n\n¿Hay algo específico sobre tu facturación que te preocupe?`;
    } else if (
      messageText.toLowerCase().includes("lento") ||
      messageText.toLowerCase().includes("rendimiento")
    ) {
      return `Comprendo tu preocupación sobre el rendimiento. Algunas acciones que puedes tomar:\n\n• Limpiar cache del navegador\n• Verificar tu conexión a internet\n• Revisar si hay actualizaciones pendientes\n\n¿Podrías decirme qué acción específica está siendo lenta?`;
    } else if (
      messageText.toLowerCase().includes("función") ||
      messageText.toLowerCase().includes("feature")
    ) {
      return `¡Me encanta escuchar nuevas ideas! He registrado tu solicitud en nuestro sistema de seguimiento.\n\n**Ticket: ${ticketNumber}**\nCategoría: Nueva Función\nPrioridad: Media\n\n¿Te gustaría agregar más detalles sobre esta funcionalidad?`;
    } else {
      return `Gracias por tu mensaje. He registrado tu consulta en nuestro sistema con el ticket **${ticketNumber}**.\n\nUn miembro de nuestro equipo revisará tu caso y te contactará si necesitamos información adicional. Mientras tanto, ¿hay algo más en lo que pueda ayudarte?`;
    }
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

  return {
    handleSendMessage,
    handleQuickIssue,
    downloadChatHistory,
    messagesEndRef, // ← Exportamos la referencia
  };
}
