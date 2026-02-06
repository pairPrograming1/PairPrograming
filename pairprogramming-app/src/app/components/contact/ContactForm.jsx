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
        html: '<p style="color:#F1F5F9">Te contactaremos en las próximas 24 horas.<br/><small>We will contact you within 24 hours.</small></p>',
        icon: 'success',
        background: '#152238',
        color: '#F1F5F9',
        confirmButtonColor: '#2B7CB5',
        customClass: { popup: 'rounded-2xl p-6' }
      });
    } else if (status === 'error') {
      Swal.fire({
        title: 'Error',
        html: '<p style="color:#F1F5F9">No pudimos enviar tu mensaje. Intenta nuevamente más tarde.</p>',
        icon: 'error',
        background: '#152238',
        color: '#F1F5F9',
        confirmButtonColor: '#2B7CB5',
        customClass: { popup: 'rounded-2xl p-6' }
      });
    }
  }, [status]);

  return (
    <Card padding="lg" className="relative h-full">
      <h3 className="text-2xl font-bold text-foreground mb-6">
        Envíanos un <span className="text-brand-blue">Mensaje</span>
      </h3>

      {/* WhatsApp contacts section */}
      <div className="mb-6 p-4 bg-background-secondary rounded-xl border border-border-color space-y-3">
        <div className="flex items-center gap-2 mb-1">
          <div className="w-8 h-8 bg-emerald-500/15 rounded-lg flex items-center justify-center">
            <svg className="w-4 h-4 text-emerald-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
            </svg>
          </div>
          <p className="font-semibold text-foreground text-sm">
            Contacto directo vía WhatsApp
          </p>
        </div>
        <ul className="space-y-2">
          <li className="flex items-center justify-between text-sm">
            <span className="text-secondary-text">Aleart Esteban</span>
            <a
              href="https://wa.me/34673782934"
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-400 hover:text-emerald-300 font-medium transition-colors"
            >
              +34 673 782 934
            </a>
          </li>
          <li className="flex items-center justify-between text-sm">
            <span className="text-secondary-text">Rendom Josue</span>
            <a
              href="https://wa.me/56940881083"
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-400 hover:text-emerald-300 font-medium transition-colors"
            >
              +56 9 4088 1083
            </a>
          </li>
          <li className="flex items-center justify-between text-sm">
            <span className="text-secondary-text">Rubiño Pablo</span>
            <a
              href="https://wa.me/5492616396981"
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-400 hover:text-emerald-300 font-medium transition-colors"
            >
              +54 9 261 639 6981
            </a>
          </li>
          <li className="flex items-center justify-between text-sm">
            <span className="text-secondary-text">Bou Mauricio <span className="text-brand-gold text-xs">(Comercial)</span></span>
            <a
              href="https://wa.me/5493412696133"
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-400 hover:text-emerald-300 font-medium transition-colors"
            >
              +54 9 341 269 6133
            </a>
          </li>
        </ul>
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
