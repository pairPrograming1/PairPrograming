import Sidebar from "../components/Sidebar";
import Nosotros from "../components/Nosotros";
import Footer from "../components/Footer";

export default function NosotrosPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar />
      <main className="lg:ml-64 flex flex-col">
        <Nosotros />
        <Footer />
      </main>
    </div>
  );
}
