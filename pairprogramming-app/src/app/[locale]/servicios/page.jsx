import { getTranslations, setRequestLocale } from "next-intl/server";
import Services from "@/app/components/Services";
import CallToAction from "@/app/components/CallToAction";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata" });

  return {
    title: t("servicesTitle"),
    description: t("servicesDescription"),
    alternates: {
      canonical: "https://pairprogramming.com.ar/servicios",
      languages: {
        es: "https://pairprogramming.com.ar/servicios",
        en: "https://pairprogramming.com.ar/en/servicios",
      },
    },
    openGraph: {
      title: `${t("servicesTitle")} | PairProgramming`,
      description: t("servicesDescription"),
      url: "https://pairprogramming.com.ar/servicios",
      type: "website",
    },
  };
}

export default async function Servicios({ params }) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Services />
      <CallToAction />
    </>
  );
}
