// components/admin/ui/UserCard.jsx
import { Card } from "../../ui/Card";
import { Button } from "../../ui/Button";

export default function UserCard({ user }) {
  return (
    <Card padding="md" className="hover-lift">
      <div className="text-center">
        <div className="w-12 h-12 md:w-16 md:h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-3">
          <span className="text-xl md:text-2xl text-primary">👨‍💻</span>
        </div>
        <h4 className="font-semibold text-white text-sm md:text-lg">
          {user.name}
        </h4>
        <p className="text-secondary-text text-xs md:text-sm mb-2">
          {user.role}
        </p>
        <div className="flex items-center justify-center gap-2 mb-3">
          <span
            className={`w-2 h-2 rounded-full ${
              user.status === "activo" ? "bg-green-400" : "bg-red-400"
            }`}
          ></span>
          <span className="text-secondary-text text-xs md:text-sm capitalize">
            {user.status}
          </span>
        </div>
        <p className="text-secondary-text text-xs">
          Último acceso: {user.lastLogin}
        </p>
        <div className="flex gap-1 mt-3">
          <Button size="sm" variant="outline" className="text-xs flex-1 py-1">
            Editar
          </Button>
          <Button
            size="sm"
            variant="outline"
            className="text-xs flex-1 py-1 text-red-400 border-red-400"
          >
            Desactivar
          </Button>
        </div>
      </div>
    </Card>
  );
}
