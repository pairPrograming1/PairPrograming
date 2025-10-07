// components/contact/ContactMeeting.jsx
import { Card } from "../ui/Card";
import { Button } from "../ui/Button";

export function ContactMeeting() {
  return (
    <div
      className="mt-12 text-center fade-in"
      style={{ animationDelay: "0.4s" }}
    >
      <Card padding="md" className="max-w-2xl mx-auto">
        <h3 className="text-xl font-bold text-primary mb-3">
          ¿Prefieres una reunión virtual?
        </h3>
        <p className="text-secondary-text mb-4 text-sm">
          Agenda una videollamada con nuestro equipo para discutir tu proyecto
          en detalle.
        </p>
        <Button
          href="/calendario"
          variant="outline"
          icon={
            <svg
              className="w-4 h-4 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          }
        >
          Agendar Reunión
        </Button>
      </Card>
    </div>
  );
}
