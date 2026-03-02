export const metadata = {
  title: "PairProgramming - Desarrollo de Software B2B SaaS",
  description:
    "Diseñamos y construimos plataformas B2B SaaS, CRM, ERP y productos digitales escalables para empresas de Latinoamérica. +5 años de experiencia, 100% clientes satisfechos.",
  alternates: { canonical: "https://www.pairprogramming.com.ar" },
};

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
