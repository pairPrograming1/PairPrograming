
import { Card } from "../../ui/Card";
import { Button } from "../../ui/Button";
import UserCard from "../ui/UserCard";

export default function UsersTab({ users }) {
  return (
    <Card padding="lg">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 mb-6">
        <h3 className="text-lg md:text-xl font-bold text-primary">
          Gestión de Usuarios
        </h3>
        <Button icon="👤" size="sm" className="w-full sm:w-auto">
          Nuevo Usuario
        </Button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </Card>
  );
}
