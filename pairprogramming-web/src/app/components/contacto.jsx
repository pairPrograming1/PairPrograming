// components/Contacto.jsx (agrega esta sección después del formulario existente)
"use client";
import { useState } from "react";
import { useSidebar } from "../context/SidebarContext";
import { Container } from "./ui/Container";
import { Card } from "./ui/Card";
import { Button } from "./ui/Button";
import { Input } from "./ui/Input";
import { TextArea } from "./ui/TextArea";
import { ContactInfo } from "./sections/ContactInfo";

export default function Contacto() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });
  const [status, setStatus] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { isSidebarExpanded } = useSidebar();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulación de envío
    setTimeout(() => {
      setIsLoading(false);
      setStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        message: "",
      });
    }, 1500);
  };

  const openWhatsApp = () => {
    const phoneNumber = "+1234567890";
    const message =
      "Hola, me interesa conocer más sobre sus servicios de desarrollo";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  const openChatbot = () => {
    const chatbotBtn = document.querySelector("[data-chatbot-toggle]");
    if (chatbotBtn) chatbotBtn.click();
  };

  return (
    <section className="py-16 lg:py-20 bg-card-bg text-white min-h-screen">
      <Container size={isSidebarExpanded ? "expanded" : "default"}>
        <div className="text-center mb-12 fade-in">
          <h1
            className={`font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent transition-all duration-300 ${
              isSidebarExpanded
                ? "text-2xl lg:text-3xl"
                : "text-3xl lg:text-4xl"
            }`}
          >
            Hablemos de tu Proyecto
          </h1>
          <p className="text-secondary-text max-w-2xl mx-auto text-lg">
            ¿Tienes una idea innovadora? Cuéntanos sobre tu proyecto y
            trabajemos juntos para hacerla realidad.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-1 space-y-6 fade-in">
            <ContactInfo />
          </div>

          <div
            className="lg:col-span-2 fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            <Card padding="lg">
              <h3 className="text-2xl font-bold text-white mb-6">
                Envíanos un Mensaje
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
                  <Input
                    label="Nombre Completo"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Tu nombre completo"
                  />
                  <Input
                    label="Email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="tu.email@ejemplo.com"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
                  <Input
                    label="Teléfono"
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+1 (555) 123-4567"
                  />
                  <Input
                    label="Empresa"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Nombre de tu empresa"
                  />
                </div>

                <TextArea
                  label="Mensaje"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Cuéntanos sobre tu proyecto, objetivos, timeline, presupuesto y cualquier detalle que consideres importante..."
                />

                <Button
                  type="submit"
                  disabled={isLoading}
                  loading={isLoading}
                  className="w-full"
                  icon={
                    <svg
                      className="w-4 h-4 lg:w-5 lg:h-5 mr-2 lg:mr-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                      />
                    </svg>
                  }
                >
                  {isLoading ? "Enviando Mensaje..." : "Enviar Mensaje"}
                </Button>
              </form>
              {status === "success" && (
                <div className="mt-6 p-4 bg-green-500/20 border border-green-500/30 rounded-lg text-green-400 animate-pulse">
                  <div className="flex items-center justify-center space-x-2">
                    <span className="text-lg">✅</span>
                    <p className="font-medium text-center text-sm">
                      ¡Mensaje enviado con éxito! Te contactaremos dentro de 24
                      horas.
                    </p>
                  </div>
                </div>
              )}
              <div className="mt-6 text-center">
                <p className="text-secondary-text text-xs lg:text-sm">
                  Todos los campos marcados con * son obligatorios. Respetamos
                  tu privacidad y no compartimos tu información.
                </p>
              </div>
            </Card>

            {/* Nueva Sección: Opciones de Contacto Alternativas */}
            <div
              className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 fade-in"
              style={{ animationDelay: "0.3s" }}
            >
              <Card padding="md" className="text-center hover-lift">
                <div className="text-3xl mb-3">🤖</div>
                <h4 className="font-bold text-white mb-2">Chat en Vivo</h4>
                <p className="text-secondary-text text-sm mb-4">
                  ¿Prefieres chatear? Usa nuestro asistente virtual para
                  respuestas inmediatas a tus preguntas.
                </p>
                <Button
                  variant="outline"
                  onClick={openChatbot}
                  className="w-full"
                >
                  Abrir Asistente Virtual
                </Button>
              </Card>

              <Card padding="md" className="text-center hover-lift">
                <div className="text-3xl mb-3">💬</div>
                <h4 className="font-bold text-white mb-2">WhatsApp Business</h4>
                <p className="text-secondary-text text-sm mb-4">
                  Conversa directamente con nuestro equipo por WhatsApp para una
                  atención más personalizada.
                </p>
                <Button
                  variant="outline"
                  onClick={openWhatsApp}
                  className="w-full"
                >
                  Chatear por WhatsApp
                </Button>
              </Card>
            </div>
          </div>
        </div>

        <div
          className="mt-12 text-center fade-in"
          style={{ animationDelay: "0.4s" }}
        >
          <Card padding="md" className="max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-primary mb-3">
              ¿Prefieres una reunión virtual?
            </h3>
            <p className="text-secondary-text mb-4 text-sm">
              Agenda una videollamada con nuestro equipo para discutir tu
              proyecto en detalle.
            </p>
            <Button
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
              onClick={(e) => {
                e.preventDefault();
                alert("Funcionalidad de calendario próximamente disponible");
              }}
            >
              Agendar Reunión
            </Button>
          </Card>
        </div>
      </Container>
    </section>
  );
}
