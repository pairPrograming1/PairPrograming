export const metadata = {
  title: "Servicios",
  description:
    "Arquitectura B2B SaaS multi-tenant, desarrollo de plataformas digitales, CRM, ERP, automatización con n8n, Cloud & DevOps y más. Soluciones a medida para empresas.",
  alternates: { canonical: "https://www.pairprogramming.com.ar/servicios" },
  openGraph: {
    title: "Servicios de Desarrollo de Software | PairProgramming",
    description:
      "Arquitectura B2B SaaS, CRM, ERP, automatización y Cloud & DevOps. Transformamos tu negocio con tecnología escalable.",
    url: "https://www.pairprogramming.com.ar/servicios",
    type: "website",
  },
};

import Sidebar from "../components/Sidebar";
import Services from "../components/Services";
import Footer from "../components/Footer";
import CallToAction from "../components/CallToAction";
import MainContainer from "../components/MainContainer";

export default function Servicios() {
  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <MainContainer>
        <Services />
        <CallToAction />
        <Footer />
      </MainContainer>
    </div>
  );
}
