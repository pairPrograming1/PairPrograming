// components/contact/ContactForm.jsx
"use client";
import { Card } from "../ui/Card";
import { Input } from "../ui/Input";
import { TextArea } from "../ui/TextArea";
import { SubmitButton } from "./SubmitButton";
import { FormStatus } from "./FormStatus";
import { FormFooter } from "./FormFooter";
import { useContactForm } from "../../hooks/useContactForm";

export function ContactForm() {
  const { formData, status, isLoading, handleChange, handleSubmit } =
    useContactForm();

  return (
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
          rows={6}
        />

        <SubmitButton isLoading={isLoading} />

        <FormStatus status={status} />

        <FormFooter />
      </form>
    </Card>
  );
}
