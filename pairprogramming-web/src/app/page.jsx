import Sidebar from "./components/Sidebar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Values from "./components/Values";
import CallToAction from "./components/CallToAction";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Sidebar />
      <main className="lg:ml-64 flex flex-col">
        <Hero />
        <Values />
        <CallToAction />
        <Footer />
      </main>
    </div>
  );
}
