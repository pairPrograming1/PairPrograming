import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-5xl font-bold mb-4">
          Transformamos Ideas en Soluciones Digitales
        </h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          En PairProgramming, convertimos la complejidad en claridad, integrando
          tecnología, diseño y estrategia para crear productos digitales
          escalables y eficientes.
        </p>
        <Link
          href="/contacto"
          className="bg-white text-blue-900 px-6 py-3 rounded-md font-semibold hover:bg-gray-200 transition"
        >
          Comienza tu Proyecto
        </Link>
      </div>
    </section>
  );
}
