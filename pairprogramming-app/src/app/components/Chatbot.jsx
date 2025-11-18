"use client";
import { useChatbot } from "../hooks/useChatbot"; 
import { commonQuestions } from "../components/utils/intelligentResponses"; 
import { formatMessageWithBreaks } from "../components/utils/messageFormatter"; 

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
    handleAction,
    toggleChat,
  } = useChatbot();

  return (
    <div className="relative">
      {/* Chat Window - Ahora absolute relativo al botón */}
      {isOpen && (
        <div className="absolute bottom-20 right-0 w-80 h-96 bg-card-bg rounded-2xl shadow-2xl border border-border-color flex flex-col animate-fade-in z-50">
          <ChatHeader aiStatus={aiStatus} onClose={toggleChat} />

          <ChatMessages
            messages={messages}
            isTyping={isTyping}
            aiStatus={aiStatus}
            messagesEndRef={messagesEndRef}
            handleAction={handleAction}
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

export const QuickQuestions = ({ onQuestionClick }) => {
  return (
    <div className="flex flex-wrap gap-2 mb-3">
      {commonQuestions.map((question, index) => (
        <button
          key={index}
          onClick={() => onQuestionClick(question)}
          className="text-xs bg-background hover:bg-hover-bg text-secondary-text border border-border-color px-3 py-1 rounded-full transition-colors hover:text-accent hover:border-accent"
        >
          {question}
        </button>
      ))}
    </div>
  );
};

export const FloatingButton = ({ isOpen, aiStatus, onToggle }) => {
  return (
    <button
      onClick={onToggle}
      className="w-14 h-14 bg-gradient-to-r from-primary to-accent hover:from-primary-dark hover:to-accent-dark rounded-full shadow-lg transition-all duration-300 hover:scale-110 flex items-center justify-center group pulse-glow hover-lift-sm z-50"
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
  );
};

export const ChatMessages = ({
  messages,
  isTyping,
  aiStatus,
  messagesEndRef,
  handleAction,
}) => {
  return (
    <div className="flex-1 p-4 overflow-y-auto bg-background chatbot-messages">
      {messages.map((message) => (
        <ChatMessage key={message.id} message={message} handleAction={handleAction} />
      ))}

      {isTyping && <TypingIndicator aiStatus={aiStatus} />}

      <div ref={messagesEndRef} />
    </div>
  );
};

const ChatMessage = ({ message, handleAction }) => {
  const isUser = message.sender === "user";

  return (
    <div className={`mb-4 ${isUser ? "text-right" : "text-left"}`}>
      <div
        className={`inline-block max-w-xs lg:max-w-md px-4 py-2 rounded-2xl ${
          isUser
            ? "bg-primary text-white rounded-br-none"
            : "bg-card-bg text-foreground rounded-bl-none border border-border-color"
        }`}
      >
        <div className="text-sm leading-relaxed">
          {formatMessageWithBreaks(message.text)}
          {/* Render action buttons when the bot suggests contacts */}
          {message.actions && (
            <div className="mt-3 flex flex-col space-y-2">
              {message.actions.map((action, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    if (action.type === "whatsapp") {
                      const phone = action.phone.replace(/\+/g, "");
                      const defaultMsg = encodeURIComponent(
                        "Hola, me gustaría recibir más información."
                      );
                      window.open(`https://wa.me/${phone}?text=${defaultMsg}`, "_blank");
                    } else if (action.type === "page") {
                      window.location.href = action.href;
                    } else if (action.type === "menu") {
                      // Call the hook-provided handler to show the initial menu without reloading
                      handleAction && handleAction(action);
                    }
                  }}
                  className="text-sm bg-background hover:bg-hover-bg text-secondary-text border border-border-color px-3 py-2 rounded-lg transition-colors text-left"
                >
                  {action.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
      <div
        className={`text-xs mt-1 ${
          isUser ? "text-secondary-text" : "text-secondary-text"
        }`}
      >
        {message.timestamp.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        })}
      </div>
    </div>
  );
};

const TypingIndicator = ({ aiStatus }) => {
  return (
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
  );
};

export const ChatInput = ({
  inputMessage,
  onInputChange,
  onSendMessage,
  isTyping,
  aiStatus,
}) => {
  return (
    <form onSubmit={onSendMessage} className="flex space-x-2">
      <input
        type="text"
        value={inputMessage}
        onChange={onInputChange}
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
  );
};

export const ChatHeader = ({ aiStatus, onClose }) => {
  return (
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
          onClick={onClose}
          className="text-white hover:text-gray-200 transition-colors"
          aria-label="Cerrar chat"
        >
          ✕
        </button>
      </div>
    </div>
  );
};
