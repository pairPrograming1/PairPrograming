import { Inter } from "next/font/google";
import "./globals.css";
import { SidebarProvider } from "./context/SidebarContext";
import FloatingWidgets from "./components/FloatingWidgets";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  title: "PairProgramming - Transformamos Ideas en Soluciones Digitales",
  description:
    "Co-creamos soluciones digitales que integran tecnología y estrategia",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className="dark">
      <body className={`${inter.variable} antialiased`}>
        <SidebarProvider>
          {children}
          <FloatingWidgets />
        </SidebarProvider>
      </body>
    </html>
  );
}
