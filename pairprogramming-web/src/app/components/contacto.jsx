import { useState } from "react";
import Link from "next/link";

export default function Contacto() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission (replace with actual API call in production)
    setTimeout(() => {
      setStatus("Mensaje enviado con éxito. ¡Te contactaremos pronto!");
      setFormData({ name: "", email: "", message: "" });
    }, 1000);
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h3 className="text-3xl font-semibold text-center mb-12">
          Contáctanos
        </h3>
        <div className="max-w-lg mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-gray-700 font-medium mb-2"
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
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-900"
                placeholder="Tu nombre"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-gray-700 font-medium mb-2"
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
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-900"
                placeholder="Tu correo electrónico"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-gray-700 font-medium mb-2"
              >
                Mensaje
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-900"
                placeholder="Cuéntanos sobre tu proyecto"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-900 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-800 transition"
            >
              Enviar Mensaje
            </button>
          </form>
          {status && (
            <p className="mt-4 text-center text-green-600 font-medium">
              {status}
            </p>
          )}
        </div>
        <div className="text-center mt-8">
          <p className="text-gray-700">
            ¿Prefieres otro medio? Escríbenos a{" "}
            <a
              href="mailto:info@pairprogramming.com"
              className="text-blue-900 hover:underline"
            >
              info@pairprogramming.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
