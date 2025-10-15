// components/contact/ContactForm.jsx
"use client";
import { useState } from "react";
import { Card } from "../ui/Card";
import { Input } from "../ui/Input";
import { TextArea } from "../ui/TextArea";
import { SubmitButton } from "./SubmitButton";
import { FormStatus } from "./FormStatus";
import { FormFooter } from "./FormFooter";
import { useContactForm } from "../../hooks/useContactForm";

export function ContactForm() {
  const { formData, status, isLoading, handleChange, originalHandleSubmit } =
    useContactForm();

  const [showConstruction, setShowConstruction] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mostrar el cartel inmediatamente
    setShowConstruction(true);
    // Opcional: ocultar después de unos segundos o mantenerlo
    // setTimeout(() => setShowConstruction(false), 5000);

    // Si quieres ejecutar la lógica original después, descomenta:
    // originalHandleSubmit(e);
  };

  return (
    <Card padding="lg" className="relative">
      {/* Cartel de "En Construcción" condicional */}
      {showConstruction && (
        <div className="absolute inset-0 flex items-center justify-center z-50 bg-black/80 backdrop-blur-sm rounded-xl">
          <div className="bg-gradient-to-br from-black/90 to-gray-900/90 backdrop-blur-md rounded-2xl p-10 max-w-lg text-center border-2 border-yellow-500 shadow-2xl transform rotate-1">
            <div className="flex justify-center mb-4">
              <span className="text-6xl animate-bounce">🚧</span>
              <span className="text-6xl animate-bounce animation-delay-200">
                🚧
              </span>
              <span className="text-6xl animate-bounce animation-delay-400">
                🚧
              </span>
            </div>
            <h2 className="text-4xl font-extrabold text-yellow-400 mb-4 tracking-wide drop-shadow-lg">
              En Construcción
            </h2>
            <p className="text-white text-xl mb-3 leading-relaxed">
              Esta funcionalidad está en desarrollo activo. Lo que ves es solo
              un{" "}
              <span className="font-semibold text-yellow-300">
                ejemplo demostrativo
              </span>
              .
            </p>
            <p className="text-gray-300 text-base italic mb-6">
              ¡Vuelve pronto para enviar mensajes reales!
            </p>
            <div className="flex justify-center">
              <div className="bg-yellow-500/20 text-yellow-300 px-6 py-3 rounded-full border border-yellow-400 animate-pulse">
                <span className="font-medium">Trabajo en Progreso</span>
              </div>
            </div>
            <button
              onClick={() => setShowConstruction(false)}
              className="mt-6 text-white underline hover:text-yellow-300"
            >
              Cerrar
            </button>
          </div>
        </div>
      )}

      <h3 className="text-2xl font-bold text-white mb-6">
        Envíanos un Mensaje
      </h3>

      {/* Sección de contactos con redirección a WhatsApp */}
      <div className="mb-6 p-4 bg-gray-800 rounded-lg text-white space-y-2">
        <p className="font-semibold">
          Contáctanos directamente vía WhatsApp o Email:
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>
            Rubiño Pablo:{" "}
            <a
              href="https://wa.me/5492616396981"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-400 underline"
            >
              +54 9 2616396981
            </a>
          </li>
          <li>
            Aleart Esteban:{" "}
            <a
              href="https://wa.me/34673782934"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-400 underline"
            >
              +34 673782934
            </a>
          </li>
          <li>
            Rendom Josue:{" "}
            <a
              href="https://wa.me/56940881083"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-400 underline"
            >
              +56 9 40881083
            </a>
          </li>
          <li>
            Sector Comercial -Bou Mauricio:{" "}
            <a
              href="https://wa.me/5493412696133"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-400 underline"
            >
              +54 9 3412696133
            </a>
          </li>
        </ul>
        <p className="mt-4">
          Email:{" "}
          <a
            href="mailto:pairprogramming@gmail.com"
            className="text-blue-400 underline"
          >
            pairprogramming@gmail.com
          </a>
        </p>
      </div>

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
          rows={6}
        />

        <SubmitButton isLoading={isLoading || showConstruction} />

        <FormStatus status={status} />

        <FormFooter />
      </form>
    </Card>
  );
}
