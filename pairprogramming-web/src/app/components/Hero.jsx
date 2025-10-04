// components/Hero.js
"use client";
import Image from "next/image";
import Link from "next/link";
import { useSidebar } from "../context/SidebarContext";

export default function Hero() {
  const { isSidebarExpanded } = useSidebar();

  return (
    <section className="bg-gradient-to-r from-background to-card-bg text-white compact-section">
      <div
        className={`container mx-auto text-center px-4 transition-all duration-300 ${
          isSidebarExpanded ? "max-w-4xl" : "max-w-6xl"
        }`}
      >
        <div className="flex justify-center mb-8">
          <div className="w-60 h-60 rounded-full overflow-hidden border-4 border-primary shadow-lg">
            <Image
              src="https://res.cloudinary.com/dmjusy7sn/image/upload/v1758981340/usuarios/xkajcqpxdbggr4q7ywjy.jpg"
              alt="Imagen de Bienvenida"
              width={200}
              height={200}
              className="w-full h-full object-cover"
              priority
            />
          </div>
        </div>
        <h2
          className={`font-bold mb-4 tracking-tight transition-all duration-300 ${
            isSidebarExpanded ? "text-2xl" : "text-3xl"
          }`}
        >
          Transformamos Ideas en Soluciones Digitales
        </h2>
        <p
          className={`mb-6 max-w-2xl mx-auto transition-all duration-300 ${
            isSidebarExpanded ? "text-base" : "text-lg"
          }`}
        >
          En PairProgramming, convertimos la complejidad en claridad, integrando
          tecnología, diseño y estrategia para crear productos digitales
          escalables y eficientes.
        </p>
        <Link
          href="/contacto"
          className="inline-block bg-primary text-white px-5 py-2 rounded-md font-semibold hover:bg-primary-dark transition compact-button"
        >
          Comienza tu Proyecto
        </Link>
      </div>
    </section>
  );
}
