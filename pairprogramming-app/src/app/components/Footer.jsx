import Link from "next/link";

const SERVICIOS_LINKS = [
  { href: "/servicios/saas-b2b", label: "Arquitectura B2B SaaS" },
  { href: "/servicios/crm-automatizacion", label: "CRM & Automatización" },
  { href: "/servicios/productos-digitales", label: "Productos Digitales" },
  { href: "/servicios/cloud-devops", label: "Cloud & DevOps" },
  { href: "/servicios/seo-contenido", label: "SEO & Contenido" },
];

const EMPRESA_LINKS = [
  { href: "/nosotros", label: "Nosotros" },
  { href: "/portafolio", label: "Portafolio" },
  { href: "/contacto", label: "Contacto" },
  { href: "/faq", label: "FAQ" },
];

const LEGAL_LINKS = [
  { href: "/terminos-condiciones", label: "Términos y condiciones" },
  { href: "/privacidad", label: "Privacidad" },
];

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
              Plataformas B2B SaaS, CRM y productos digitales
              escalables. Desde Buenos Aires y Madrid para Latinoamérica.
            </p>
          </div>

          <FooterColumn title="Servicios" links={SERVICIOS_LINKS} />
          <FooterColumn title="Empresa" links={EMPRESA_LINKS} />
          <FooterColumn title="Legal" links={LEGAL_LINKS} />
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-hairline flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-caption text-ink-tertiary">
            &copy; {new Date().getFullYear()} PairProgramming. Todos los derechos reservados.
          </p>
          <p className="text-caption text-ink-tertiary">
            Fundado por Esteban Aleart en 2022.
          </p>
        </div>
      </div>
    </footer>
  );
}
