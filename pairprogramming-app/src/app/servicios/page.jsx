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

import Services from "../components/Services";
import CallToAction from "../components/CallToAction";

export default function Servicios() {
  return (
    <>
      <Services />
      <CallToAction />
    </>
  );
}
