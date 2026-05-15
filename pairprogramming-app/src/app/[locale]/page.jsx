import Hero from "@/app/components/Hero";
import Services from "@/app/components/Services";
import Values from "@/app/components/Values";
import CallToAction from "@/app/components/CallToAction";

export const metadata = {
  title: "PairProgramming — Desarrollo de Software B2B SaaS",
  description:
    "Diseñamos y construimos plataformas B2B SaaS, CRM, ERP y productos digitales escalables para empresas de Latinoamérica. Desde 2022, 100% clientes satisfechos.",
  alternates: { canonical: "https://pairprogramming.com.ar" },
};

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Values />
      <CallToAction />
    </>
  );
}
