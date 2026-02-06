"use client";
import Link from "next/link";
import { useSidebar } from "../context/SidebarContext";
import { Container } from "./ui/Container";

export default function Footer() {
  const { isSidebarExpanded } = useSidebar();

  const links = [
    { href: "/faq", label: "FAQ" },
    { href: "/terminos-condiciones", label: "Términos y Condiciones" },
    { href: "/privacidad", label: "Privacidad" },
  ];

  return (
    <footer className="bg-background border-t border-border-color text-foreground">
      <Container size={isSidebarExpanded ? "expanded" : "default"}>
        <div className="py-8 px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div>
              <p className="text-secondary-text text-sm">
                &copy; {new Date().getFullYear()}{" "}
                <span className="text-brand-blue font-semibold">pair</span>
                <span className="text-foreground font-semibold">programming</span>
                . Todos los derechos reservados.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-6">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-secondary-text hover:text-brand-blue transition-colors duration-200 text-sm font-medium"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
