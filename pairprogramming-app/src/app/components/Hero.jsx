import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

export default function Hero() {
  const t = useTranslations("hero");

  return (
    <section className="relative flex flex-col items-center justify-center text-center py-[120px] md:py-[140px] px-8 overflow-hidden">
      {/* Status pill */}
      <div className="inline-flex items-center gap-2 px-3 py-1 bg-surface-1 border border-hairline rounded-pill mb-8 animate-fade-in-up">
        <span className="w-1.5 h-1.5 rounded-full bg-success animate-blink" />
        <span className="font-mono text-[13px] font-medium text-ink-subtle tracking-[0.4px] uppercase">
          {t("status")}
        </span>
      </div>

      {/* H1 */}
      <h1 className="display-xl text-ink max-w-[800px] mb-6 animate-fade-in-up stagger-1">
        {t("heading1")}{" "}
        <br className="hidden sm:block" />
        {t("heading2")}
      </h1>

      {/* Lead */}
      <p className="text-body-lg text-ink-subtle max-w-[520px] mb-10 animate-fade-in-up stagger-2">
        {t("lead")}
      </p>

      {/* CTAs */}
      <div className="flex flex-wrap items-center justify-center gap-3 animate-fade-in-up stagger-3">
        <Link
          href="/contacto"
          className="bg-primary hover:bg-primary-hover text-on-primary font-medium text-[15px] px-5 py-3 rounded-md transition-colors duration-150"
        >
          {t("ctaPrimary")}
        </Link>
        <Link
          href="/portafolio"
          className="bg-surface-1 hover:bg-surface-2 text-ink border border-hairline hover:border-hairline-strong font-medium text-[15px] px-5 py-3 rounded-md transition-all duration-150"
        >
          {t("ctaSecondary")}
        </Link>
      </div>
    </section>
  );
}
