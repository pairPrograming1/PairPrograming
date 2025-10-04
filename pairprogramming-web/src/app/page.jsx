import Header from "../components/Header";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Values from "../components/Values";
import CallToAction from "../components/CallToAction";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <Hero />
      <Services />
      <Values />
      <CallToAction />
      <Footer />
    </div>
  );
}
