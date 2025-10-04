// app/page.js
import Sidebar from "../components/Sidebar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Values from "../components/Values";
import CallToAction from "../components/CallToAction";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar />
      <main className="lg:ml-64 flex flex-col">
        <Hero />
        <Services />
        <Values />
        <CallToAction />
        <Footer />
      </main>
    </div>
  );
}
