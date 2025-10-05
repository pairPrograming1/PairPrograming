// components/Contacto.js - CORREGIDO
"use client";
import { useState } from "react";
import Link from "next/link";
import { useSidebar } from "../context/SidebarContext";

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

  return (
    <section className="py-16 lg:py-20 bg-card-bg text-white min-h-screen">
      <div
        className={`container mx-auto px-4 transition-all duration-500 ${
          isSidebarExpanded ? "max-w-4xl" : "max-w-6xl"
        }`}
      >
        {/* Header */}
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
          {/* Información de contacto - CORREGIDO */}
          <div className="lg:col-span-1 space-y-6 fade-in">
            <div className="glass-card p-6">
              <h3 className="text-xl font-bold text-primary mb-4">
                Información de Contacto
              </h3>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary">📧</span>
                  </div>
                  <div className="min-w-0 flex-1">
                    {" "}
                    {/* Added container with min-w-0 and flex-1 */}
                    <p className="text-secondary-text text-sm">Email</p>
                    <a
                      href="mailto:info@pairprogramming.com"
                      className="text-white font-medium hover:text-primary transition-colors break-words text-sm" // Added break-words and smaller text
                    >
                      info@pairprogramming.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-primary">📱</span>
                  </div>
                  <div>
                    <p className="text-secondary-text text-sm">Teléfono</p>
                    <p className="text-white font-medium text-sm">
                      +1 (555) 123-4567
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-primary">🕒</span>
                  </div>
                  <div>
                    <p className="text-secondary-text text-sm">Horario</p>
                    <p className="text-white font-medium text-sm">
                      Lun - Vie: 9:00 - 18:00
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-primary">💬</span>
                  </div>
                  <div>
                    <p className="text-secondary-text text-sm">Respuesta</p>
                    <p className="text-white font-medium text-sm">
                      En menos de 24 horas
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-card p-6">
              <h3 className="text-xl font-bold text-primary mb-4">
                ¿Por qué elegirnos?
              </h3>
              <ul className="space-y-3 text-secondary-text text-sm">
                <li className="flex items-center space-x-2">
                  <span className="text-primary">✓</span>
                  <span>Desarrollo personalizado</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-primary">✓</span>
                  <span>Tecnologías modernas</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-primary">✓</span>
                  <span>Soporte continuo</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-primary">✓</span>
                  <span>Entregas puntuales</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Formulario */}
          <div
            className="lg:col-span-2 fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="glass-card p-6 lg:p-8">
              {" "}
              {/* Added responsive padding */}
              <h3 className="text-2xl font-bold text-white mb-6">
                Envíanos un Mensaje
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
                  {" "}
                  {/* Adjusted gap */}
                  {/* Nombre */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-secondary-text font-semibold mb-2 text-sm"
                    >
                      Nombre Completo *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-border-color rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-background/50 text-white placeholder-secondary-text transition-all text-sm"
                      placeholder="Tu nombre completo"
                    />
                  </div>
                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-secondary-text font-semibold mb-2 text-sm"
                    >
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-border-color rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-background/50 text-white placeholder-secondary-text transition-all text-sm"
                      placeholder="tu.email@ejemplo.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
                  {" "}
                  {/* Adjusted gap */}
                  {/* Teléfono */}
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-secondary-text font-semibold mb-2 text-sm"
                    >
                      Teléfono
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-border-color rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-background/50 text-white placeholder-secondary-text transition-all text-sm"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                  {/* Empresa */}
                  <div>
                    <label
                      htmlFor="company"
                      className="block text-secondary-text font-semibold mb-2 text-sm"
                    >
                      Empresa
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-border-color rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-background/50 text-white placeholder-secondary-text transition-all text-sm"
                      placeholder="Nombre de tu empresa"
                    />
                  </div>
                </div>

                {/* Mensaje */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-secondary-text font-semibold mb-2 text-sm"
                  >
                    Mensaje *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 border border-border-color rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-background/50 text-white placeholder-secondary-text resize-none transition-all text-sm"
                    placeholder="Cuéntanos sobre tu proyecto, objetivos, timeline, presupuesto y cualquier detalle que consideres importante..."
                  ></textarea>
                </div>

                {/* Botón de envío */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full btn-gold gold-shimmer disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center py-3 lg:py-4 text-sm lg:text-base font-semibold"
                >
                  {isLoading ? (
                    <>
                      <div className="w-4 h-4 lg:w-5 lg:h-5 border-2 border-gray-900 border-t-transparent rounded-full animate-spin mr-2 lg:mr-3"></div>
                      Enviando Mensaje...
                    </>
                  ) : (
                    <>
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
                      Enviar Mensaje
                    </>
                  )}
                </button>
              </form>
              {/* Mensaje de éxito */}
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
              {/* Nota */}
              <div className="mt-6 text-center">
                <p className="text-secondary-text text-xs lg:text-sm">
                  Todos los campos marcados con * son obligatorios. Respetamos
                  tu privacidad y no compartimos tu información.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Sección adicional */}
        <div
          className="mt-12 text-center fade-in"
          style={{ animationDelay: "0.4s" }}
        >
          <div className="glass-card p-6 max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-primary mb-3">
              ¿Prefieres una reunión virtual?
            </h3>
            <p className="text-secondary-text mb-4 text-sm">
              Agenda una videollamada con nuestro equipo para discutir tu
              proyecto en detalle.
            </p>
            <Link
              href="#"
              className="btn-gold-outline inline-flex items-center text-sm"
              onClick={(e) => {
                e.preventDefault();
                alert("Funcionalidad de calendario próximamente disponible");
              }}
            >
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
              Agendar Reunión
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
