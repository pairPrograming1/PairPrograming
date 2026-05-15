import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
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

export const metadata = {
  metadataBase: new URL(BASE_URL),

  title: {
    default: "PairProgramming — Desarrollo de Software B2B SaaS",
    template: "%s | PairProgramming",
  },
  description:
    "Diseñamos y construimos plataformas B2B SaaS, CRM, ERP y productos digitales escalables para empresas de Latinoamérica. Desde 2022, 100% clientes satisfechos.",
  keywords: [
    "desarrollo software B2B SaaS",
    "arquitectura SaaS multi-tenant",
    "desarrollo plataformas digitales",
    "CRM a medida",
    "ERP personalizado",
    "desarrollo Next.js Argentina",
    "agencia desarrollo web",
    "software empresarial",
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
    title: "PairProgramming — Desarrollo de Software B2B SaaS",
    description:
      "Diseñamos y construimos plataformas B2B SaaS, CRM, ERP y productos digitales escalables para empresas de Latinoamérica.",
    url: BASE_URL,
    siteName: "PairProgramming",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "PairProgramming — Desarrollo B2B SaaS" }],
    locale: "es_AR",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "PairProgramming — Desarrollo de Software B2B SaaS",
    description:
      "Diseñamos y construimos plataformas B2B SaaS, CRM, ERP y productos digitales escalables.",
    images: [OG_IMAGE],
  },

  alternates: {
    canonical: BASE_URL,
  },

  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/icon1", sizes: "192x192", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: { url: "/apple-icon", sizes: "180x180", type: "image/png" },
  },

  verification: {
    google: "c0n5-H_sk_Zh-sKTmJ4OzTvdGp1xN2n5etlKXugPpF8",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`${inter.variable} ${mono.variable}`}>
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
                "Agencia especializada en desarrollo de software B2B SaaS, arquitectura multi-tenant, CRM, ERP y productos digitales escalables para empresas de Latinoamérica.",
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
                "Arquitectura B2B SaaS",
                "Desarrollo Next.js",
                "CRM a medida",
                "ERP empresarial",
                "Automatización de procesos",
                "Cloud & DevOps",
              ],
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "customer service",
                availableLanguage: "Spanish",
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

        <Nav />
        <main className="min-h-screen pt-14">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
