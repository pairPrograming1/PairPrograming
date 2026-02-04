import Sidebar from "./components/Sidebar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Values from "./components/Values";
import CallToAction from "./components/CallToAction";
import MainContainer from "./components/MainContainer";
import FloatingWidgets from "./components/FloatingWidgets"; // Nueva importación (ajusta ruta si FloatingWidgets está en subcarpeta)

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <Sidebar />
      <MainContainer>
        <Hero />
        <Values />
        <CallToAction />
        <Footer />
      </MainContainer>

      {/* Widgets flotantes: se renderizan al final para estar encima de todo */}
      <FloatingWidgets />
    </div>
  );
}
