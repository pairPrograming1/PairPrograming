import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

function FooterColumn({ title, links }) {
  return (
    <div>
      <h3 className="font-mono text-[12px] font-medium uppercase text-ink-tertiary tracking-[0.4px] mb-4">
        {title}
      </h3>
      <ul className="flex flex-col gap-2.5">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-body-sm text-ink-subtle hover:text-ink transition-colors duration-150"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  const t = useTranslations("footer");

  const SERVICIOS_LINKS = [
    { href: "/servicios/saas-b2b", label: t("svcSaas") },
    { href: "/servicios/crm-automatizacion", label: t("svcCrm") },
    { href: "/servicios/productos-digitales", label: t("svcProducts") },
    { href: "/servicios/cloud-devops", label: t("svcCloud") },
    { href: "/servicios/seo-contenido", label: t("svcSeo") },
  ];

  const EMPRESA_LINKS = [
    { href: "/nosotros", label: t("linkAbout") },
    { href: "/portafolio", label: t("linkPortfolio") },
    { href: "/blog", label: t("linkBlog") },
    { href: "/contacto", label: t("linkContact") },
    { href: "/faq", label: t("linkFaq") },
  ];

  const LEGAL_LINKS = [
    { href: "/terminos-condiciones", label: t("linkTerms") },
    { href: "/privacidad", label: t("linkPrivacy") },
  ];

  return (
    <footer className="border-t border-hairline">
      <div className="max-w-container mx-auto px-8 pt-16 pb-12">
        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-12 lg:gap-8">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2.5 mb-4">
              <div className="w-4 h-4 rounded-xs bg-primary" />
              <span className="text-ink font-semibold text-[15px] tracking-[-0.3px]">
                PairProgramming
              </span>
            </Link>
            <p className="text-body-sm text-ink-subtle max-w-[280px] leading-relaxed">
              {t("tagline")}
            </p>
          </div>

          <FooterColumn title={t("colServices")} links={SERVICIOS_LINKS} />
          <FooterColumn title={t("colCompany")} links={EMPRESA_LINKS} />
          <FooterColumn title={t("colLegal")} links={LEGAL_LINKS} />
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-hairline flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-caption text-ink-tertiary">
            &copy; {new Date().getFullYear()} {t("copyright")}
          </p>
          <p className="text-caption text-ink-tertiary">
            {t("founded")}
          </p>
        </div>
      </div>
    </footer>
  );
}
