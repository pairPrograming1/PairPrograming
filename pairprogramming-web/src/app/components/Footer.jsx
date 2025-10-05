// components/Footer.jsx (actualizado)
"use client";
import Link from "next/link";
import { useSidebar } from "../context/SidebarContext";
import { Container } from "./ui/Container";

export default function Footer() {
  const { isSidebarExpanded } = useSidebar();

  return (
    <footer className="bg-background border-t border-border-color text-white">
      <Container size={isSidebarExpanded ? "expanded" : "default"}>
        <div className="py-8 px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-secondary-text text-sm">
                &copy; 2025{" "}
                <span className="text-primary font-semibold">
                  PairProgramming
                </span>
                . Todos los derechos reservados.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-6">
              <Link
                href="/contacto"
                className="text-secondary-text hover:text-primary transition-colors duration-300 text-sm font-medium"
              >
                Contacto
              </Link>
              <Link
                href="/faq"
                className="text-secondary-text hover:text-primary transition-colors duration-300 text-sm font-medium"
              >
                FAQ
              </Link>
              <Link
                href="/terminos-condiciones"
                className="text-secondary-text hover:text-primary transition-colors duration-300 text-sm font-medium"
              >
                Términos
              </Link>
              <Link
                href="/privacidad"
                className="text-secondary-text hover:text-primary transition-colors duration-300 text-sm font-medium"
              >
                Privacidad
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
