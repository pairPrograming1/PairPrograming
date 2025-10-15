// components/faq/FAQContact.jsx
import { Card } from "../ui/Card";

export function FAQContact() {
  return (
    <div
      className="mt-12 text-center fade-in"
      style={{ animationDelay: "0.4s" }}
    >
      <Card padding="md" className="max-w-2xl mx-auto">
        <h3 className="text-xl font-bold text-primary mb-3">
          ¿No encontraste tu respuesta?
        </h3>
        <p className="text-secondary-text mb-4 text-sm">
          Estamos aquí para ayudarte. Contáctanos directamente y resolveremos
          todas tus dudas.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/contacto"
            className="bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-lg font-semibold transition-colors inline-flex items-center justify-center"
          >
            Contáctanos
          </a>
          {/* <a
            href="https://wa.me/+1234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-primary text-primary hover:bg-primary hover:text-white px-6 py-3 rounded-lg font-semibold transition-colors inline-flex items-center justify-center"
          >
            WhatsApp
          </a> */}
        </div>
      </Card>
    </div>
  );
}
