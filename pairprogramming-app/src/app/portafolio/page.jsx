export const metadata = {
  title: "Portafolio",
  description:
    "Conocé los proyectos que desarrollamos: plataformas SaaS de seguros, CRM empresariales, gestión de eventos, inmobiliarias, fintech y más. +20 proyectos en producción.",
  alternates: { canonical: "https://pairprogramming.com.ar/portafolio" },
  openGraph: {
    title: "Portafolio de Proyectos | PairProgramming",
    description:
      "+20 proyectos en producción: SaaS de seguros, CRM, gestión de eventos, inmobiliaria y fintech.",
    url: "https://pairprogramming.com.ar/portafolio",
    type: "website",
  },
};

import Portfolio from "../components/Portfolio";
import CallToAction from "../components/CallToAction";

export default function PortafolioPage() {
  return (
    <>
      <Portfolio />
      <CallToAction />
    </>
  );
}
