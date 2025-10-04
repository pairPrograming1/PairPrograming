import "./globals.css";
import Navbar from "../app/components/Navbar";
import Footer from "../app/components/Footer";

export const metadata = {
  title: "PairProgramming - Soluciones Digitales",
  description:
    "Transformamos ideas en soluciones digitales eficientes y escalables.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="font-sans">
        <Navbar />
        <main className="min-h-screen bg-gray-50">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
