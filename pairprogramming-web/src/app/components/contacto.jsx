// components/Contacto.js
"use client";
import { useState } from "react";
import Link from "next/link";
import { useSidebar } from "../context/SidebarContext";

export default function Contacto() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState(null);
  const { isSidebarExpanded } = useSidebar();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTimeout(() => {
      setStatus("Mensaje enviado con éxito. ¡Te contactaremos pronto!");
      setFormData({ name: "", email: "", message: "" });
    }, 1000);
  };

  return (
    <section className="compact-section bg-card-bg text-white">
      <div
        className={`container mx-auto px-4 transition-all duration-300 ${
          isSidebarExpanded ? "max-w-4xl" : "max-w-6xl"
        }`}
      >
        <h3
          className={`font-semibold text-center mb-8 transition-all duration-300 ${
            isSidebarExpanded ? "text-2xl" : "text-3xl"
          }`}
        >
          Contáctanos
        </h3>
        <div
          className={`mx-auto transition-all duration-300 ${
            isSidebarExpanded ? "max-w-lg" : "max-w-xl"
          }`}
        >
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-secondary-text font-medium mb-2 text-sm"
              >
                Nombre
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-2.5 border border-border-color rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-background text-white text-sm"
                placeholder="Tu nombre"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-secondary-text font-medium mb-2 text-sm"
              >
                Correo Electrónico
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-2.5 border border-border-color rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-background text-white text-sm"
                placeholder="Tu correo electrónico"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-secondary-text font-medium mb-2 text-sm"
              >
                Mensaje
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="4"
                className="w-full p-2.5 border border-border-color rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-background text-white text-sm"
                placeholder="Cuéntanos sobre tu proyecto"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-primary text-white px-5 py-2.5 rounded-md font-semibold hover:bg-primary-dark transition text-sm"
            >
              Enviar Mensaje
            </button>
          </form>
          {status && (
            <p className="mt-4 text-center text-green-400 font-medium text-sm">
              {status}
            </p>
          )}
        </div>
        <div className="text-center mt-6">
          <p className="text-secondary-text text-sm">
            ¿Prefieres otro medio? Escríbenos a{" "}
            <a
              href="mailto:info@pairprogramming.com"
              className="text-primary hover:underline"
            >
              info@pairprogramming.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
