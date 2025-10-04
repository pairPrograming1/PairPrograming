import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

export default function Nosotros() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar />
      <main className="lg:ml-64 flex flex-col">
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h3 className="text-3xl font-semibold text-center mb-12">
              Sobre Nosotros
            </h3>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              En PairProgramming, somos un equipo apasionado por transformar
              ideas en soluciones digitales innovadoras. Combinamos tecnología,
              diseño y estrategia para crear productos que impulsan el
              crecimiento de tu negocio.
            </p>
          </div>
        </section>
        <Footer />
      </main>
    </div>
  );
}
