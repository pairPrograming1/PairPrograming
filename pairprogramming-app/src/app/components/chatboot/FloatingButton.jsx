export const FloatingButton = ({ isOpen, aiStatus, onToggle }) => {
  return (
    <button
      onClick={onToggle}
      className="fixed bottom-24 right-6 w-14 h-14 bg-gradient-to-r from-primary to-accent hover:from-primary-dark hover:to-accent-dark rounded-full shadow-lg transition-all duration-300 hover:scale-110 flex items-center justify-center group pulse-glow hover-lift-sm z-50"
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
