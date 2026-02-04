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
        <div className="absolute bottom-20 right-0 w-[90vw] sm:w-96 max-w-md h-[500px] bg-gray-900/95 backdrop-blur-lg rounded-2xl shadow-xl border border-gray-700/50 flex flex-col animate-fade-in z-50">
          <ChatHeader aiStatus={aiStatus} onClose={toggleChat} />

          <ChatMessages
            messages={messages}
            isTyping={isTyping}
            aiStatus={aiStatus}
            messagesEndRef={messagesEndRef}
            handleAction={handleAction}
          />

          {/* Quick Questions & Input */}
          <div className="p-3 border-t border-gray-700 bg-gray-800 rounded-b-2xl">
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
              <span className="text-xs text-gray-400">
                {aiStatus === "available"
                  ? "Conectado a Google Gemini AI"
                  : "Respuestas inteligentes"}
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
          className="text-xs bg-gray-700 hover:bg-gray-600 text-gray-200 border border-gray-600 px-3 py-1.5 rounded-full transition-colors hover:border-blue-500"
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
      className="w-14 h-14 sm:w-16 sm:h-16 bg-blue-600 hover:bg-blue-700 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 active:scale-95 flex items-center justify-center z-50"
      aria-label="Abrir asistente virtual"
      data-chatbot-toggle
    >
      {isOpen ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          <circle cx="9" cy="10" r="1" fill="white" />
          <circle cx="12" cy="10" r="1" fill="white" />
          <circle cx="15" cy="10" r="1" fill="white" />
        </svg>
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
    <div className="flex-1 p-4 overflow-y-auto bg-gray-800 chatbot-messages">
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
    <div className={`mb-3 ${isUser ? "text-right" : "text-left"}`}>
      <div
        className={`inline-block max-w-xs lg:max-w-md px-3.5 py-2.5 rounded-xl ${
          isUser
            ? "bg-blue-600 text-white rounded-br-none"
            : "bg-gray-700 text-gray-100 rounded-bl-none border border-gray-600"
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
                  className="text-sm bg-gray-600 hover:bg-gray-500 text-gray-100 border border-gray-500 px-3 py-2 rounded-lg transition-colors text-left"
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
          isUser ? "text-gray-400" : "text-gray-400"
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
    <div className="text-left mb-3">
      <div className="inline-block bg-gray-700 text-gray-100 px-3.5 py-2.5 rounded-xl rounded-bl-none border border-gray-600">
        <div className="flex items-center space-x-2">
          <div className="flex space-x-1">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"></div>
            <div
              className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"
              style={{ animationDelay: "0.1s" }}
            ></div>
            <div
              className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"
              style={{ animationDelay: "0.2s" }}
            ></div>
          </div>
          <span className="text-gray-300 text-xs">
            {aiStatus === "available"
              ? "Procesando..."
              : "Escribiendo..."}
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
    <form onSubmit={onSendMessage} className="flex gap-2">
      <input
        type="text"
        value={inputMessage}
        onChange={onInputChange}
        placeholder="Escribe tu mensaje..."
        className="flex-1 px-3 py-2 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-700 text-gray-100 placeholder-gray-400 text-sm"
        disabled={isTyping}
      />
      <button
        type="submit"
        disabled={!inputMessage.trim() || isTyping}
        className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white px-4 py-2 rounded-lg transition-colors"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="22" y1="2" x2="11" y2="13" />
          <polygon points="22 2 15 22 11 13 2 9 22 2" />
        </svg>
      </button>
    </form>
  );
};

export const ChatHeader = ({ aiStatus, onClose }) => {
  return (
    <div className="bg-blue-600 text-white p-4 rounded-t-2xl">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-9 h-9 bg-white rounded-full flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#2563eb"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              <circle cx="9" cy="10" r="1" fill="#2563eb" />
              <circle cx="12" cy="10" r="1" fill="#2563eb" />
              <circle cx="15" cy="10" r="1" fill="#2563eb" />
            </svg>
          </div>
          <div>
            <h3 className="font-semibold text-base">Asistente Virtual</h3>
            <p className="text-white/80 text-xs flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
              {aiStatus === "available" ? "Con IA" : "Inteligente"}
            </p>
          </div>
        </div>
        <button
          onClick={onClose}
          className="text-white/90 hover:text-white transition-colors"
          aria-label="Cerrar chat"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      </div>
    </div>
  );
};
