import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-blue-900 text-white p-6 sticky top-0 z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-bold">PairProgramming</h1>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link href="/" className="hover:text-blue-300 transition">
                Inicio
              </Link>
            </li>
            <li>
              <Link
                href="/servicios"
                className="hover:text-blue-300 transition"
              >
                Servicios
              </Link>
            </li>
            <li>
              <Link href="/nosotros" className="hover:text-blue-300 transition">
                Nosotros
              </Link>
            </li>
            <li>
              <Link href="/contacto" className="hover:text-blue-300 transition">
                Contacto
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
