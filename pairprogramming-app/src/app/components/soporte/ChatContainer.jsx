// components/soporte/ChatContainer.jsx
import { Card } from "../ui/Card";
import ChatHeader from "./ChatHeader";
import MessagesArea from "./MessagesArea";
import CommonIssues from "./CommonIssues";
import MessageInput from "./MessageInput";
import QuickActions from "./QuickActions";
import { useChat } from "../../hooks/useChat";

export default function ChatContainer({
  messages,
  setMessages,
  inputMessage,
  setInputMessage,
  isTyping,
  setIsTyping,
  ticketNumber,
}) {
  const {
    handleSendMessage,
    handleQuickIssue,
    downloadChatHistory,
    messagesEndRef,
    messagesContainerRef, // ← Recibimos la nueva referencia
  } = useChat({
    messages,
    setMessages,
    inputMessage,
    setInputMessage,
    isTyping,
    setIsTyping,
    ticketNumber,
  });

  return (
    <Card padding="md" className="h-[600px] flex flex-col">
      <ChatHeader ticketNumber={ticketNumber} />

      <MessagesArea
        messages={messages}
        isTyping={isTyping}
        messagesEndRef={messagesEndRef}
        messagesContainerRef={messagesContainerRef} // ← Pasamos la nueva referencia
      />

      <CommonIssues onQuickIssue={handleQuickIssue} />

      <MessageInput
        inputMessage={inputMessage}
        setInputMessage={setInputMessage}
        onSendMessage={handleSendMessage}
        isTyping={isTyping}
      />

      <QuickActions
        onDownloadChat={downloadChatHistory}
        ticketNumber={ticketNumber}
      />
    </Card>
  );
}
