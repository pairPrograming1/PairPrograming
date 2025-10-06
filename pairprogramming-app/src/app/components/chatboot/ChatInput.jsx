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
