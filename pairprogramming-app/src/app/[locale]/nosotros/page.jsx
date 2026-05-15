import { getTranslations, setRequestLocale } from "next-intl/server";
import Nosotros from "@/app/components/Nosotros";
import CallToAction from "@/app/components/CallToAction";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata" });

  return {
    title: t("aboutTitle"),
    description: t("aboutDescription"),
    alternates: {
      canonical: "https://pairprogramming.com.ar/nosotros",
      languages: {
        es: "https://pairprogramming.com.ar/nosotros",
        en: "https://pairprogramming.com.ar/en/nosotros",
      },
    },
    openGraph: {
      title: `${t("aboutTitle")} | PairProgramming`,
      description: t("aboutDescription"),
      url: "https://pairprogramming.com.ar/nosotros",
      type: "website",
    },
  };
}

export default async function NosotrosPage({ params }) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Nosotros />
      <CallToAction />
    </>
  );
}
