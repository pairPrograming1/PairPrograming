// components/soporte/MessageInput.jsx
import { Input } from "../ui/Input";
import { Button } from "../ui/Button";

export default function MessageInput({
  inputMessage,
  setInputMessage,
  onSendMessage,
  isTyping,
}) {
  return (
    <form onSubmit={onSendMessage} className="flex space-x-2 mb-4">
      <Input
        value={inputMessage}
        onChange={(e) => setInputMessage(e.target.value)}
        placeholder="Escribe tu mensaje..."
        className="flex-1"
      />
      <Button
        type="submit"
        disabled={!inputMessage.trim() || isTyping}
        className="flex-shrink-0"
      >
        Enviar
      </Button>
    </form>
  );
}
