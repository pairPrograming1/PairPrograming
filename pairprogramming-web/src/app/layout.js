import { Inter } from "next/font/google";
import "./globals.css";
import DarkModeToggle from "./components/DarkModeToggle";

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
    <html lang="es">
      <body className={`${inter.variable} antialiased dark:bg-gray-900`}>
        <DarkModeToggle />
        {children}
      </body>
    </html>
  );
}
