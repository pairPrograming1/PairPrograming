
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
    setShowCommonIssues(false);
  };

  // Manejar la selección de problemas comunes
  const handleQuickIssueSelection = (issue) => {
    handleQuickIssue(issue);
    setShowCommonIssues(false);
  };

  return (
    <Card padding="md" className="h-[600px] flex flex-col">
      <ChatHeader ticketNumber={ticketNumber} />

      {/* Contenedor principal SCROLLABLE */}
      <div className="flex-1 flex flex-col min-h-0 overflow-y-auto">
        {/* Área de mensajes */}
        <div className="flex-1">
          <MessagesArea
            messages={messages}
            isTyping={isTyping}
            messagesEndRef={messagesEndRef}
            messagesContainerRef={messagesContainerRef}
          />
        </div>

        {/* Problemas comunes - Siempre visibles en desktop */}
        <div className="lg:block hidden">
          <CommonIssues onQuickIssue={handleQuickIssueSelection} />
        </div>

        {/* Problemas comunes en móvil - Aparece como contenido adicional */}
        <div className="lg:hidden">
          {showCommonIssues && (
            <div className="mt-4 p-4 bg-background/50 border border-border-color rounded-lg">
              <CommonIssues onQuickIssue={handleQuickIssueSelection} />
            </div>
          )}
        </div>

        {/* Botón toggle para móvil - Dentro del área scrollable */}
        <div className="lg:hidden block mt-4">
          <button
            onClick={() => setShowCommonIssues(!showCommonIssues)}
            className="w-full text-center py-3 text-sm text-primary hover:bg-background/50 rounded-lg transition-colors border border-border-color"
          >
            {showCommonIssues
              ? "▲ Ocultar problemas comunes"
              : "▼ Mostrar problemas comunes"}
          </button>
        </div>

        {/* Input y acciones - DENTRO del área scrollable */}
        <div className="flex-shrink-0 space-y-3 mt-4">
          <MessageInput
            inputMessage={inputMessage}
            setInputMessage={setInputMessage}
            onSendMessage={handleSend}
            isTyping={isTyping}
          />

          <QuickActions
            onDownloadChat={downloadChatHistory}
            ticketNumber={ticketNumber}
          />
        </div>
      </div>
    </Card>
  );
}
