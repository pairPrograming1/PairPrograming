// components/soporte/ChatContainer.jsx
import { Card } from "../ui/Card";
import ChatHeader from "./ChatHeader";
import MessagesArea from "./MessagesArea";
import CommonIssues from "./CommonIssues";
import MessageInput from "./MessageInput";
import QuickActions from "./QuickActions";
import { useChat } from "../../hooks/useChat";
import { useState } from "react";

export default function ChatContainer({
  messages,
  setMessages,
  inputMessage,
  setInputMessage,
  isTyping,
  setIsTyping,
  ticketNumber,
}) {
  const [showCommonIssues, setShowCommonIssues] = useState(false);

  const {
    handleSendMessage,
    handleQuickIssue,
    downloadChatHistory,
    messagesEndRef,
    messagesContainerRef,
  } = useChat({
    messages,
    setMessages,
    inputMessage,
    setInputMessage,
    isTyping,
    setIsTyping,
    ticketNumber,
  });

  // Manejar el envío de mensajes normales
  const handleSend = () => {
    handleSendMessage();
    setShowCommonIssues(false); // Ocultar problemas comunes
  };

  // Manejar la selección de problemas comunes
  const handleQuickIssueSelection = (issue) => {
    handleQuickIssue(issue);
    setShowCommonIssues(false); // Ocultar problemas comunes después de seleccionar
  };

  return (
    <Card padding="md" className="h-[600px] flex flex-col">
      <ChatHeader ticketNumber={ticketNumber} />

      {/* Área de mensajes más grande en móvil */}
      <div className="flex-1 flex flex-col min-h-0">
        <MessagesArea
          messages={messages}
          isTyping={isTyping}
          messagesEndRef={messagesEndRef}
          messagesContainerRef={messagesContainerRef}
          className="flex-1 min-h-0"
        />

        {/* Problemas comunes - Oculto en móvil por defecto */}
        <div className="lg:block hidden">
          <CommonIssues onQuickIssue={handleQuickIssueSelection} />
        </div>

        {/* Botón para mostrar problemas comunes en móvil */}
        <div className="lg:hidden block border-t border-border-color pt-2">
          <button
            onClick={() => setShowCommonIssues(!showCommonIssues)}
            className="w-full text-center py-2 text-sm text-primary hover:bg-background/50 rounded-lg transition-colors"
          >
            {showCommonIssues
              ? "▲ Ocultar problemas comunes"
              : "▼ Mostrar problemas comunes"}
          </button>

          {showCommonIssues && (
            <div className="pb-2">
              <CommonIssues onQuickIssue={handleQuickIssueSelection} />
            </div>
          )}
        </div>
      </div>

      <MessageInput
        inputMessage={inputMessage}
        setInputMessage={setInputMessage}
        onSendMessage={handleSend} // Usar la función modificada
        isTyping={isTyping}
      />

      <QuickActions
        onDownloadChat={downloadChatHistory}
        ticketNumber={ticketNumber}
      />
    </Card>
  );
}
