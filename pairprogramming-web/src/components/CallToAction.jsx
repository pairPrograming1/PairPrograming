import Link from "next/link";

export default function CallToAction() {
  return (
    <section className="py-16 bg-blue-900 text-white text-center">
      <div className="container mx-auto">
        <h3 className="text-3xl font-semibold mb-4">
          ¿Listo para transformar tu idea?
        </h3>
        <p className="text-lg mb-8 max-w-xl mx-auto">
          Co-creamos soluciones digitales que integran tecnología y estrategia.
          Contáctanos y empecemos a construir juntos.
        </p>
        <Link
          href="/contacto"
          className="bg-white text-blue-900 px-6 py-3 rounded-md font-semibold hover:bg-gray-200 transition"
        >
          Contáctanos
        </Link>
      </div>
    </section>
  );
}
