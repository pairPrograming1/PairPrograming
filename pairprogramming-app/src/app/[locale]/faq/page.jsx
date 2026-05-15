import { getTranslations, setRequestLocale } from "next-intl/server";
import FAQContent from "@/app/components/FAQContent";
import { faqData } from "@/app/data/faqData";
import { getLocalizedItem } from "@/app/lib/i18n-helpers";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata" });

  return {
    title: t("faqTitle"),
    description: t("faqDescription"),
    alternates: {
      canonical: "https://pairprogramming.com.ar/faq",
      languages: {
        es: "https://pairprogramming.com.ar/faq",
        en: "https://pairprogramming.com.ar/en/faq",
      },
    },
    openGraph: {
      title: `${t("faqTitle")} | PairProgramming`,
      description: t("faqDescription"),
      url: "https://pairprogramming.com.ar/faq",
      type: "website",
    },
  };
}

export default async function FAQPage({ params }) {
  const { locale } = await params;
  setRequestLocale(locale);

  // Localize FAQ data for JSON-LD
  const localizedCategories = faqData.map((cat) => getLocalizedItem(cat, locale));
  const allQAs = localizedCategories.flatMap((cat) => cat.questions);

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
