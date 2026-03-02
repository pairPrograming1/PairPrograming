export const metadata = {
  title: "Nosotros",
  description:
    "Somos PairProgramming, una agencia de desarrollo de software con +5 años de experiencia y 100% de clientes satisfechos. Especializados en arquitectura B2B SaaS para Latinoamérica.",
  alternates: { canonical: "https://www.pairprogramming.com.ar/nosotros" },
  openGraph: {
    title: "Quiénes Somos | PairProgramming",
    description:
      "+5 años construyendo plataformas B2B SaaS, CRM y productos digitales con 100% de satisfacción.",
    url: "https://www.pairprogramming.com.ar/nosotros",
    type: "website",
  },
};

import Sidebar from "../components/Sidebar";
import Nosotros from "../components/Nosotros";
import Footer from "../components/Footer";
import CallToAction from "../components/CallToAction";
import MainContainer from "../components/MainContainer";

export default function NosotrosPage() {
  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <MainContainer>
        <Nosotros />
        <CallToAction />
        <Footer />
      </MainContainer>
    </div>
  );
}
