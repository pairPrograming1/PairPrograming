"use client";
import { useState, useEffect } from "react";
import { Card } from "../ui/Card";
import { Input } from "../ui/Input";
import { TextArea } from "../ui/TextArea";
import { SubmitButton } from "./SubmitButton";
import { FormStatus } from "./FormStatus";
import { FormFooter } from "./FormFooter";
import { useContactForm } from "../../hooks/useContactForm";
import Swal from 'sweetalert2';

export function ContactForm() {
  const { formData, status, isLoading, handleChange, handleSubmit } =
    useContactForm();

  useEffect(() => {
    if (status === 'success') {
      Swal.fire({
        title: '¡Gracias! / Thanks!',
        html: '<p style="color:#fff">Te contactaremos en las próximas 24 horas.<br/><small>We will contact you within 24 hours.</small></p>',
        icon: 'success',
        background: '#0f172a',
        color: '#fff',
        confirmButtonColor: '#2563eb',
        customClass: { popup: 'rounded-2xl p-6' }
      });
    } else if (status === 'error') {
      Swal.fire({
        title: 'Error',
        html: '<p style="color:#fff">No pudimos enviar tu mensaje. Intenta nuevamente más tarde.</p>',
        icon: 'error',
        background: '#0f172a',
        color: '#fff',
        confirmButtonColor: '#2563eb',
        customClass: { popup: 'rounded-2xl p-6' }
      });
    }
  }, [status]);

  return (
    <Card padding="lg" className="relative">
      {/* Envío inmediato: eliminada la pantalla de "En Construcción" */}

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
        {/* <p className="mt-4">
          Email:{" "}
          <a
            href="mailto:pairprogramming@gmail.com"
            className="text-blue-400 underline"
          >
            pairprogramming@gmail.com
          </a>
        </p> */}
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

  <SubmitButton isLoading={isLoading} />

        <FormStatus status={status} />

        <FormFooter />
      </form>
    </Card>
  );
}
