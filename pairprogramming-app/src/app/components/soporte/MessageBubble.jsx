// components/soporte/MessageBubble.jsx
export default function MessageBubble({ message, formatMessage }) {
  return (
    <div
      className={`flex ${
        message.sender === "user" ? "justify-end" : "justify-start"
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
            <span className="text-xs text-secondary-text">{message.role}</span>
          </div>
        )}
        <div className="text-sm leading-relaxed">
          {formatMessage(message.text)}
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
  );
}
