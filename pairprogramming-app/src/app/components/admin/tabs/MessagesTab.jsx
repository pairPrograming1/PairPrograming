// components/admin/tabs/MessagesTab.jsx
import { Card } from "../../ui/Card";
import { Button } from "../../ui/Button";
import MessageCard from "../ui/MessageCard";

export default function MessagesTab({
  messages,
  updateMessageStatus,
  deleteMessage,
  exportData,
}) {
  return (
    <Card padding="lg">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 mb-6">
        <h3 className="text-lg md:text-xl font-bold text-primary">
          Mensajes de Contacto
        </h3>
        <Button
          icon="📤"
          size="sm"
          onClick={() => exportData("mensajes")}
          className="w-full sm:w-auto"
        >
          Exportar
        </Button>
      </div>
      <div className="space-y-4">
        {messages.map((message) => (
          <MessageCard
            key={message.id}
            message={message}
            onStatusChange={updateMessageStatus}
            onDelete={deleteMessage}
            showActions={true}
          />
        ))}
      </div>
    </Card>
  );
}
