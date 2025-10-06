import { formatMessageWithBreaks } from "../utils/messageFormatter";

export const ChatMessages = ({
  messages,
  isTyping,
  aiStatus,
  messagesEndRef,
}) => {
  return (
    <div className="flex-1 p-4 overflow-y-auto bg-background chatbot-messages">
      {messages.map((message) => (
        <ChatMessage key={message.id} message={message} />
      ))}

      {isTyping && <TypingIndicator aiStatus={aiStatus} />}

      <div ref={messagesEndRef} />
    </div>
  );
};

const ChatMessage = ({ message }) => {
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
