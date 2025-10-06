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
