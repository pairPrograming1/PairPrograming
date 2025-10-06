// components/soporte/ChatHeader.jsx
export default function ChatHeader({ ticketNumber }) {
  return (
    <div className="flex items-center justify-between pb-4 border-b border-border-color mb-4">
      <div className="flex items-center space-x-3">
        <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
          <span className="text-primary">👨‍💻</span>
        </div>
        <div>
          <h3 className="font-bold text-white">Soporte Técnico</h3>
          <p className="text-secondary-text text-sm">Ticket: {ticketNumber}</p>
        </div>
      </div>
      <div className="text-right">
        <p className="text-green-400 text-sm">● En línea</p>
        <p className="text-secondary-text text-xs">
          Tiempo de respuesta: 2 min
        </p>
      </div>
    </div>
  );
}
