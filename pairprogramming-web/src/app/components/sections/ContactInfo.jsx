// components/sections/ContactInfo.jsx
"use client";
import { Card } from "../ui/Card";

const ContactItem = ({ icon, label, value, href }) => (
  <div className="flex items-start space-x-3">
    <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
      <span className="text-primary">{icon}</span>
    </div>
    <div className="min-w-0 flex-1">
      <p className="text-secondary-text text-sm">{label}</p>
      {href ? (
        <a
          href={href}
          className="text-white font-medium hover:text-primary transition-colors break-words text-sm"
        >
          {value}
        </a>
      ) : (
        <p className="text-white font-medium text-sm">{value}</p>
      )}
    </div>
  </div>
);

export const ContactInfo = () => {
  const contactItems = [
    {
      icon: "📧",
      label: "Email",
      value: "info@pairprogramming.com",
      href: "mailto:info@pairprogramming.com",
    },
    {
      icon: "📱",
      label: "Teléfono",
      value: "+1 (555) 123-4567",
      href: "tel:+15551234567",
    },
    {
      icon: "🕒",
      label: "Horario",
      value: "Lun - Vie: 9:00 - 18:00",
    },
    {
      icon: "💬",
      label: "Respuesta",
      value: "En menos de 24 horas",
    },
  ];

  const features = [
    "Desarrollo personalizado",
    "Tecnologías modernas",
    "Soporte continuo",
    "Entregas puntuales",
    "Asesoría técnica gratuita",
  ];

  return (
    <div className="space-y-6">
      <Card hover padding="md">
        <h3 className="text-xl font-bold text-primary mb-4">
          Información de Contacto
        </h3>
        <div className="space-y-4">
          {contactItems.map((item, index) => (
            <ContactItem key={index} {...item} />
          ))}
        </div>
      </Card>

      <Card hover padding="md">
        <h3 className="text-xl font-bold text-primary mb-4">
          ¿Por qué elegirnos?
        </h3>
        <ul className="space-y-3 text-secondary-text text-sm">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center space-x-2">
              <span className="text-primary">✓</span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </Card>
    </div>
  );
};
