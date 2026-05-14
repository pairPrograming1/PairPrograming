"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { href: "/servicios", label: "Servicios" },
  { href: "/portafolio", label: "Portafolio" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/faq", label: "FAQ" },
];

export default function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 h-14 flex items-center border-b border-hairline"
      style={{
        background: "rgba(1, 1, 2, 0.85)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
      }}
    >
      <div className="w-full max-w-container mx-auto px-8 flex items-center justify-between">
        {/* Brand mark */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <svg width="24" height="24" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
            <defs>
              <linearGradient id="nav-gold" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#d4a017"/>
                <stop offset="100%" stopColor="#b8860b"/>
              </linearGradient>
              <linearGradient id="nav-blue" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#1e3a8a"/>
                <stop offset="100%" stopColor="#2563eb"/>
              </linearGradient>
            </defs>
            <rect x="56" y="56" width="400" height="400" rx="90" fill="none" stroke="#111" strokeWidth="18"/>
            <path d="M200 150 h120 a80 80 0 0 1 0 160 h-120 z" fill="url(#nav-gold)"/>
            <path d="M200 150 v260 a110 110 0 0 0 110 -110 a110 110 0 0 0 -110 -110 z" fill="url(#nav-blue)"/>
          </svg>
          <span className="text-ink font-semibold text-[15px] tracking-[-0.3px]">
            PairProgramming
          </span>
        </Link>

        {/* Nav links — desktop */}
        <div className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-1.5 rounded-md text-body-sm transition-colors duration-150 ${
                  active
                    ? "text-ink bg-surface-1"
                    : "text-ink-subtle hover:text-ink"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* CTA — desktop */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/contacto"
            className="bg-primary hover:bg-primary-hover text-on-primary text-button font-medium px-3.5 py-2 rounded-md transition-colors duration-150"
          >
            Hablemos
          </Link>
        </div>

        {/* Hamburger — mobile */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 text-ink-subtle hover:text-ink transition-colors"
          aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden absolute top-14 left-0 right-0 bg-surface-1 border-b border-hairline">
          <div className="flex flex-col p-4 gap-1">
            {NAV_LINKS.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`px-4 py-3 rounded-md text-body-sm transition-colors ${
                    active
                      ? "text-ink bg-surface-2"
                      : "text-ink-subtle hover:text-ink hover:bg-surface-2"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              href="/contacto"
              onClick={() => setMobileOpen(false)}
              className="mt-2 bg-primary hover:bg-primary-hover text-on-primary text-button font-medium px-4 py-3 rounded-md text-center transition-colors"
            >
              Hablemos
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
