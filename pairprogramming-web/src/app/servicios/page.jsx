import Sidebar from "../components/Sidebar";
import Services from "../components/Services";
import Footer from "../components/Footer";
import CallToAction from "../components/CallToAction";

export default function Servicios() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Sidebar />
      <main className="lg:ml-64 flex flex-col">
        <Services />
        <CallToAction />
        <Footer />
      </main>
    </div>
  );
}
