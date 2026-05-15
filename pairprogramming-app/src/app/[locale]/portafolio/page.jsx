import { getTranslations, setRequestLocale } from "next-intl/server";
import Portfolio from "@/app/components/Portfolio";
import CallToAction from "@/app/components/CallToAction";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata" });

  return {
    title: t("portfolioTitle"),
    description: t("portfolioDescription"),
    alternates: {
      canonical: "https://pairprogramming.com.ar/portafolio",
      languages: {
        es: "https://pairprogramming.com.ar/portafolio",
        en: "https://pairprogramming.com.ar/en/portafolio",
      },
    },
    openGraph: {
      title: `${t("portfolioTitle")} | PairProgramming`,
      description: t("portfolioDescription"),
      url: "https://pairprogramming.com.ar/portafolio",
      type: "website",
    },
  };
}

export default async function PortafolioPage({ params }) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Portfolio />
      <CallToAction />
    </>
  );
}
