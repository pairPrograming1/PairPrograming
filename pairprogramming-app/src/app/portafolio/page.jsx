export const metadata = {
  title: "Portafolio",
  description:
    "Conocé los proyectos que desarrollamos: plataformas SaaS de seguros, CRM empresariales, gestión de eventos, inmobiliarias, fintech y más. +20 proyectos en producción.",
  alternates: { canonical: "https://www.pairprogramming.com.ar/portafolio" },
  openGraph: {
    title: "Portafolio de Proyectos | PairProgramming",
    description:
      "+20 proyectos en producción: SaaS de seguros, CRM, gestión de eventos, inmobiliaria y fintech.",
    url: "https://www.pairprogramming.com.ar/portafolio",
    type: "website",
  },
};

import Sidebar from "../components/Sidebar";
import Portfolio from "../components/Portfolio";
import Footer from "../components/Footer";
import CallToAction from "../components/CallToAction";
import MainContainer from "../components/MainContainer";

export default function PortafolioPage() {
  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <MainContainer>
        <Portfolio />
        <CallToAction />
        <Footer />
      </MainContainer>
    </div>
  );
}
