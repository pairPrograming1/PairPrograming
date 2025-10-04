import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-800 dark:bg-gray-900 text-white p-6">
      <div className="container mx-auto text-center">
        <p className="mb-4">
          &copy; 2025 PairProgramming. Todos los derechos reservados.
        </p>
        <div className="flex justify-center space-x-4">
          <Link
            href="/nosotros"
            className="hover:text-blue-300 dark:hover:text-blue-200 transition"
          >
            Sobre Nosotros
          </Link>
          <Link
            href="/servicios"
            className="hover:text-blue-300 dark:hover:text-blue-200 transition"
          >
            Servicios
          </Link>
          <Link
            href="/contacto"
            className="hover:text-blue-300 dark:hover:text-blue-200 transition"
          >
            Contacto
          </Link>
        </div>
      </div>
    </footer>
  );
}
