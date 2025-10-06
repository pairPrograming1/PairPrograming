"use client";
import { useChatbot } from "../hooks/useChatbot";
import { ChatHeader } from "./chatboot/ChatHeader";
import { ChatMessages } from "./chatboot/ChatMessages";
import { QuickQuestions } from "./chatboot/QuickQuestions";
import { ChatInput } from "./chatboot/ChatInput";
import { FloatingButton } from "./chatboot/FloatingButton";

export default function Chatbot() {
  const {
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
  } = useChatbot();

  return (
    <div className="relative">
      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-32 right-4 w-80 h-96 bg-card-bg rounded-2xl shadow-2xl border border-border-color flex flex-col animate-fade-in mb-4 z-50">
          <ChatHeader aiStatus={aiStatus} onClose={toggleChat} />

          <ChatMessages
            messages={messages}
            isTyping={isTyping}
            aiStatus={aiStatus}
            messagesEndRef={messagesEndRef}
          />

          {/* Quick Questions & Input con tema oscuro */}
          <div className="p-3 border-t border-border-color bg-card-bg rounded-b-2xl">
            {showQuickQuestions && (
              <QuickQuestions onQuestionClick={handleQuickQuestion} />
            )}

            <ChatInput
              inputMessage={inputMessage}
              onInputChange={(e) => setInputMessage(e.target.value)}
              onSendMessage={handleSendMessage}
              isTyping={isTyping}
              aiStatus={aiStatus}
            />

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

      <FloatingButton
        isOpen={isOpen}
        aiStatus={aiStatus}
        onToggle={toggleChat}
      />
    </div>
  );
}
