"use client";
import { useState } from "react";
import { Link, usePathname, useRouter } from "@/i18n/navigation";
import { useLocale, useTranslations } from "next-intl";
import { Menu, X, MessageSquare } from "lucide-react";
import ChatDrawer from "./ChatDrawer";

export default function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);
  const pathname = usePathname();
  const locale = useLocale();
  const router = useRouter();
  const t = useTranslations("nav");

  const NAV_LINKS = [
    { href: "/servicios", label: t("services") },
    { href: "/portafolio", label: t("portfolio") },
    { href: "/blog", label: t("blog") },
    { href: "/nosotros", label: t("about") },
    { href: "/faq", label: t("faq") },
  ];

  const otherLocale = locale === "es" ? "en" : "es";

  function switchLocale() {
    router.replace(pathname, { locale: otherLocale });
  }

  return (
    <>
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
          <div className="hidden md:flex items-center gap-2">
            {/* Language switcher */}
            <button
              onClick={switchLocale}
              className="px-2 py-1.5 rounded-md text-body-sm text-ink-subtle hover:text-ink transition-colors duration-150 font-mono text-[13px]"
            >
              {otherLocale.toUpperCase()}
            </button>
            <button
              onClick={() => setChatOpen(true)}
              className="flex items-center gap-1.5 px-3 py-2 rounded-md text-body-sm text-ink-subtle hover:text-ink hover:bg-surface-1 transition-colors duration-150"
              aria-label={t("openChat")}
            >
              <MessageSquare size={15} />
              <span>{t("chat")}</span>
            </button>
            <Link
              href="/contacto"
              className="bg-primary hover:bg-primary-hover text-on-primary text-button font-medium px-3.5 py-2 rounded-md transition-colors duration-150"
            >
              {t("cta")}
            </Link>
          </div>

          {/* Hamburger — mobile */}
          <div className="md:hidden flex items-center gap-1">
            <button
              onClick={switchLocale}
              className="p-2 text-ink-subtle hover:text-ink transition-colors font-mono text-[13px]"
            >
              {otherLocale.toUpperCase()}
            </button>
            <button
              onClick={() => setChatOpen(true)}
              className="p-2 text-ink-subtle hover:text-ink transition-colors"
              aria-label={t("openChat")}
            >
              <MessageSquare size={20} />
            </button>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 text-ink-subtle hover:text-ink transition-colors"
              aria-label={mobileOpen ? t("closeMenu") : t("openMenu")}
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
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
                {t("cta")}
              </Link>
            </div>
          </div>
        )}
      </nav>

      <ChatDrawer open={chatOpen} onClose={() => setChatOpen(false)} />
    </>
  );
}
