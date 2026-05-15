import { getTranslations, setRequestLocale } from "next-intl/server";
import PrivacidadContent from "@/app/components/PrivacidadContent";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata" });

  return {
    title: t("privacyTitle"),
    description: t("privacyDescription"),
    alternates: {
      canonical: "https://pairprogramming.com.ar/privacidad",
      languages: {
        es: "https://pairprogramming.com.ar/privacidad",
        en: "https://pairprogramming.com.ar/en/privacidad",
      },
    },
  };
}

export default async function PrivacidadPage({ params }) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <PrivacidadContent />;
}
