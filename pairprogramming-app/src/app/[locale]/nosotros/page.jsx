export const metadata = {
  title: "Nosotros",
  description:
    "Somos PairProgramming, una agencia de desarrollo de software con +5 años de experiencia y 100% de clientes satisfechos. Especializados en arquitectura B2B SaaS para Latinoamérica.",
  alternates: { canonical: "https://pairprogramming.com.ar/nosotros" },
  openGraph: {
    title: "Quiénes Somos | PairProgramming",
    description:
      "+5 años construyendo plataformas B2B SaaS, CRM y productos digitales con 100% de satisfacción.",
    url: "https://pairprogramming.com.ar/nosotros",
    type: "website",
  },
};

import Nosotros from "@/app/components/Nosotros";
import CallToAction from "@/app/components/CallToAction";

export default function NosotrosPage() {
  return (
    <>
      <Nosotros />
      <CallToAction />
    </>
  );
}
