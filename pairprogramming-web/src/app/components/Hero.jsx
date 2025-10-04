import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-900 to-blue-700 dark:from-gray-800 dark:to-gray-700 text-white py-20">
      <div className="container mx-auto text-center">
        <Image
          src="https://res.cloudinary.com/dmjusy7sn/image/upload/v1758981340/usuarios/xkajcqpxdbggr4q7ywjy.jpg"
          alt="Imagen de Bienvenida"
          width={800}
          height={400}
          className="mx-auto mb-8 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
        />
        <h2 className="text-5xl font-bold mb-4 tracking-tight">
          Transformamos Ideas en Soluciones Digitales
        </h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          En PairProgramming, convertimos la complejidad en claridad, integrando
          tecnología, diseño y estrategia para crear productos digitales
          escalables y eficientes.
        </p>
        <Link
          href="/contacto"
          className="bg-white text-blue-900 dark:bg-gray-700 dark:text-gray-200 px-6 py-3 rounded-md font-semibold hover:bg-gray-200 dark:hover:bg-gray-600 transition"
        >
          Comienza tu Proyecto
        </Link>
      </div>
    </section>
  );
}
