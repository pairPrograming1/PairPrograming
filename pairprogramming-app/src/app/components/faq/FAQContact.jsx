
import { Card } from "../ui/Card";

export function FAQContact() {
  return (
    <div
      className="mt-12 text-center fade-in"
      style={{ animationDelay: "0.4s" }}
    >
      <Card padding="md" className="max-w-2xl mx-auto">
        <h3 className="text-xl font-bold text-blue-500 mb-3">
          ¿No encontraste tu respuesta?
        </h3>
        <p className="text-gray-400 mb-4 text-sm">
          Estamos aquí para ayudarte. Contáctanos directamente y resolveremos
          todas tus dudas.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/contacto"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all inline-flex items-center justify-center gap-2 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            Contáctanos
          </a>
        </div>
      </Card>
    </div>
  );
}
