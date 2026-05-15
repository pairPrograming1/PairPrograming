import { Inter, JetBrains_Mono } from "next/font/google";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getMessages, getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import Nav from "@/app/components/Nav";
import Footer from "@/app/components/Footer";
import Script from "next/script";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const mono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

const BASE_URL = "https://pairprogramming.com.ar";
const OG_IMAGE = "https://res.cloudinary.com/dmjusy7sn/image/upload/v1758981340/usuarios/xkajcqpxdbggr4q7ywjy.jpg";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata" });

  return {
    title: {
      default: t("homeTitle"),
      template: "%s | PairProgramming",
    },
    description: t("homeDescription"),
    keywords: locale === "es"
      ? [
          "desarrollo software B2B SaaS",
          "arquitectura SaaS multi-tenant",
          "desarrollo plataformas digitales",
          "CRM a medida",
          "ERP personalizado",
          "desarrollo Next.js Argentina",
          "agencia desarrollo web",
          "software empresarial",
          "PairProgramming",
        ]
      : [
          "B2B SaaS software development",
          "SaaS multi-tenant architecture",
          "digital platform development",
          "custom CRM",
          "custom ERP",
          "Next.js development",
          "web development agency",
          "enterprise software",
          "PairProgramming",
        ],

    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },

    openGraph: {
      title: t("homeTitle"),
      description: t("homeDescription"),
      url: locale === "es" ? BASE_URL : `${BASE_URL}/en`,
      siteName: "PairProgramming",
      images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "PairProgramming — B2B SaaS" }],
      locale: locale === "es" ? "es_AR" : "en_US",
      type: "website",
    },

    twitter: {
      card: "summary_large_image",
      title: t("homeTitle"),
      description: t("homeDescription"),
      images: [OG_IMAGE],
    },

    alternates: {
      canonical: locale === "es" ? BASE_URL : `${BASE_URL}/en`,
      languages: {
        es: BASE_URL,
        en: `${BASE_URL}/en`,
      },
    },
  };
}

export default async function LocaleLayout({ children, params }) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  setRequestLocale(locale);

  const messages = await getMessages();

  return (
    <html lang={locale} className={`${inter.variable} ${mono.variable}`}>
      <head>
        {/* Google Tag Manager */}
        <Script id="gtm-init" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-W9B7K49F');`}
        </Script>
      </head>

      <body className="antialiased">
        {/* JSON-LD Organization schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "PairProgramming",
              url: BASE_URL,
              logo: `${BASE_URL}/icon.svg`,
              description:
                locale === "es"
                  ? "Agencia especializada en desarrollo de software B2B SaaS, arquitectura multi-tenant, CRM, ERP y productos digitales escalables para empresas de Latinoamérica."
                  : "Agency specialized in B2B SaaS software development, multi-tenant architecture, CRM, ERP and scalable digital products for Latin American companies.",
              foundingDate: "2022",
              founder: {
                "@type": "Person",
                name: "Esteban Aleart",
                url: `${BASE_URL}/equipo/esteban-aleart`,
              },
              numberOfEmployees: {
                "@type": "QuantitativeValue",
                value: 2,
              },
              areaServed: ["AR", "MX", "CL", "CO", "UY", "ES"],
              knowsAbout: [
                "B2B SaaS Architecture",
                "Next.js Development",
                "Custom CRM",
                "Enterprise ERP",
                "Process Automation",
                "Cloud & DevOps",
              ],
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "customer service",
                availableLanguage: ["Spanish", "English"],
                url: `${BASE_URL}/contacto`,
              },
              sameAs: [
                "https://www.linkedin.com/company/pairprogramming",
              ],
            }),
          }}
        />
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-W9B7K49F"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        <NextIntlClientProvider locale={locale} messages={messages}>
          <Nav />
          <main className="min-h-screen pt-14">{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
