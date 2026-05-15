import { getTranslations, setRequestLocale } from "next-intl/server";
import TerminosCondicionesContent from "@/app/components/TerminosCondicionesContent";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata" });

  return {
    title: t("termsTitle"),
    description: t("termsDescription"),
    alternates: {
      canonical: "https://pairprogramming.com.ar/terminos-condiciones",
      languages: {
        es: "https://pairprogramming.com.ar/terminos-condiciones",
        en: "https://pairprogramming.com.ar/en/terminos-condiciones",
      },
    },
  };
}

export default async function TerminosCondicionesPage({ params }) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <TerminosCondicionesContent />;
}
