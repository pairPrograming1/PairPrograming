import FAQContent from "@/app/components/FAQContent";
import { faqData } from "@/app/data/faqData";

export const metadata = {
  title: "Preguntas Frecuentes",
  description:
    "Respondemos las dudas más comunes sobre nuestros servicios de desarrollo de software: procesos, tecnologías, precios, tiempos y garantías.",
  alternates: { canonical: "https://pairprogramming.com.ar/faq" },
  openGraph: {
    title: "Preguntas Frecuentes | PairProgramming",
    description:
      "Todo lo que necesitás saber sobre nuestros servicios de desarrollo B2B SaaS, procesos y garantías.",
    url: "https://pairprogramming.com.ar/faq",
    type: "website",
  },
};

// Aplana todas las preguntas de todas las categorías
const allQAs = faqData.flatMap((cat) => cat.questions);

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: allQAs.map(({ question, answer }) => ({
    "@type": "Question",
    name: question,
    acceptedAnswer: {
      "@type": "Answer",
      text: answer.replace(/\n/g, " ").replace(/•/g, "-"),
    },
  })),
};

export default function FAQPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <FAQContent />
    </>
  );
}
