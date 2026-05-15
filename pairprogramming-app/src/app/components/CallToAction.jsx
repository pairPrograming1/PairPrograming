import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

export default function CallToAction() {
  const t = useTranslations("cta");

  return (
    <section className="py-section px-8">
      <div className="max-w-container mx-auto">
        <div className="bg-surface-1 border border-hairline rounded-xl py-16 px-12 text-center">
          <h2 className="display-md text-ink max-w-[600px] mx-auto mb-4">
            {t("heading")}
          </h2>
          <p className="text-body-lg text-ink-subtle mb-8">
            {t("subtext")}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/contacto"
              className="bg-primary hover:bg-primary-hover text-on-primary font-medium text-[15px] px-5 py-3 rounded-md transition-colors duration-150"
            >
              {t("primary")}
            </Link>
            <Link
              href="/portafolio"
              className="bg-surface-2 hover:bg-surface-3 text-ink border border-hairline hover:border-hairline-strong font-medium text-[15px] px-5 py-3 rounded-md transition-all duration-150"
            >
              {t("secondary")}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
