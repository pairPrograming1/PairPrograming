import Sidebar from "../components/Sidebar";
import Services from "../components/Services";
import Footer from "../components/Footer";

export default function Servicios() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar />
      <main className="lg:ml-64 flex flex-col">
        <Services />
        <Footer />
      </main>
    </div>
  );
}
