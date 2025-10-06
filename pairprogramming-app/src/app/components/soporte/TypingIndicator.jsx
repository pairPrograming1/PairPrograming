// components/soporte/TypingIndicator.jsx
export default function TypingIndicator() {
  return (
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
  );
}
