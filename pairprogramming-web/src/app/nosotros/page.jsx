import Sidebar from "../components/Sidebar";
import Nosotros from "../components/Nosotros";
import Footer from "../components/Footer";
import CallToAction from "../components/CallToAction";

export default function NosotrosPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Sidebar />
      <main className="lg:ml-64 flex flex-col">
        <Nosotros />
        <CallToAction />
        <Footer />
      </main>
    </div>
  );
}
