"use client";
import { useTranslations } from "next-intl";
import { HelpCircle, Sparkles } from "lucide-react";

export function FAQHeader() {
  const t = useTranslations("faqPage");

  return (
    <div className="text-center mb-12 fade-in">
      <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-primary mb-4">
        <Sparkles className="w-4 h-4" />
        {t("helpCenter")}
      </div>
      <h1
        className={`font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent transition-all duration-300 text-3xl lg:text-4xl`}
      >
        {t("heading")}
      </h1>
      <p className="text-secondary-text max-w-2xl mx-auto text-sm lg:text-lg">
        {t("lead")}
      </p>
      <div className="mt-6 inline-flex items-center gap-2 text-xs text-secondary-text/90 border border-border-color rounded-full px-3 py-1.5 bg-card-bg/60">
        <HelpCircle className="w-4 h-4 text-primary" />
        {t("clearAnswers")}
      </div>
    </div>
  );
}
