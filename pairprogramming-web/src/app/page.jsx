// app/page.js
import Sidebar from "./components/Sidebar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Values from "./components/Values";
import CallToAction from "./components/CallToAction";
import MainContainer from "./components/MainContainer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <MainContainer>
        <Hero />
        <Values />
        <CallToAction />
        <Footer />
      </MainContainer>
    </div>
  );
}
