import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="fixed top-0 left-0 bg-blue-900 text-white w-64 h-screen p-6 flex flex-col shadow-md overflow-y-auto">
      <h1 className="text-3xl font-bold mb-8">PairProgramming</h1>
      <nav>
        <ul className="space-y-4">
          <li>
            <Link href="/" className="hover:text-blue-300 transition">
              Inicio
            </Link>
          </li>
          <li>
            <Link href="/servicios" className="hover:text-blue-300 transition">
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
    </aside>
  );
}
