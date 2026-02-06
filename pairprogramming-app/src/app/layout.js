
import { Inter } from "next/font/google";
import "./globals.css";
import { SidebarProvider } from "./context/SidebarContext";
import FloatingWidgets from "./components/FloatingWidgets";
import Header from "./components/Header";
import Script from "next/script";
import ClickListener from "./components/utils/clickListener";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  title: "PairProgramming - Transformamos Ideas en Soluciones Digitales",
  description:
    "Co-creamos soluciones digitales que integran tecnología y estrategia",
};

// export default function RootLayout({ children }) {
//   return (
//     <html lang="es">
//       <body className={`${inter.variable} antialiased`}>
//         <SidebarProvider>
//           <Header />
//           {children}
//           <FloatingWidgets />
//         </SidebarProvider>
//       </body>
//     </html>
//   );
// }
export default function RootLayout({ children }) {

  // useEffect(() => {
  //   const handleClick = (e) => {
  //     const target = e.target;
  //     window.dataLayer = window.dataLayer || [];
  //     window.dataLayer.push({
  //       event: "click_general",
  //       tagName: target.tagName,
  //       id: target.id || "",
  //       classes: target.className || "",
  //       text: target.innerText?.slice(0, 50) || "",
  //       timestamp: new Date().toISOString(),
  //     });
  //     console.log("GTM Event pushed: click_general");
  //   };

  //   document.addEventListener("click", handleClick);
  //   return () => document.removeEventListener("click", handleClick);
  // }, []);

  return (
    <html lang="es" className="dark">
      <head>
        {/* Google analytics */}
        <Script
          id="ga4-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-ZMRX7X4E49'); // tu Measurement ID GA4`,
          }}
        />
        {/* Google Tag Manager */}
        <Script id="gtm-init" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-W9B7K49F');`}
        </Script>
        {/* End Google Tag Manager */}
      </head>

      <body className={`${inter.variable} antialiased`}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-W9B7K49F"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}

        <SidebarProvider>
          <Header />
          <ClickListener />
          {children}
          <FloatingWidgets />
        </SidebarProvider>
      </body>
    </html>
  );
}
