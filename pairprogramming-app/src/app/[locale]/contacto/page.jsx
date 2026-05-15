import { getTranslations, setRequestLocale } from "next-intl/server";
import Contacto from "@/app/components/contacto";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata" });

  return {
    title: t("contactTitle"),
    description: t("contactDescription"),
    alternates: {
      canonical: "https://pairprogramming.com.ar/contacto",
      languages: {
        es: "https://pairprogramming.com.ar/contacto",
        en: "https://pairprogramming.com.ar/en/contacto",
      },
    },
    openGraph: {
      title: `${t("contactTitle")} | PairProgramming`,
      description: t("contactDescription"),
      url: "https://pairprogramming.com.ar/contacto",
      type: "website",
    },
  };
}

export default async function ContactoPage({ params }) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <Contacto />;
}
