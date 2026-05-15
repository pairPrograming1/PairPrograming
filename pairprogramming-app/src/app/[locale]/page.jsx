import { getTranslations, setRequestLocale } from "next-intl/server";
import Hero from "@/app/components/Hero";
import Services from "@/app/components/Services";
import Values from "@/app/components/Values";
import CallToAction from "@/app/components/CallToAction";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata" });

  return {
    title: t("homeTitle"),
    description: t("homeDescription"),
    alternates: {
      canonical: "https://pairprogramming.com.ar",
      languages: {
        es: "https://pairprogramming.com.ar",
        en: "https://pairprogramming.com.ar/en",
      },
    },
    openGraph: {
      title: t("homeTitle"),
      description: t("homeDescription"),
      url: "https://pairprogramming.com.ar",
      type: "website",
    },
  };
}

export default async function Home({ params }) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Hero />
      <Services />
      <Values />
      <CallToAction />
    </>
  );
}
