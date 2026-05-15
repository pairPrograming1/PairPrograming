"use client";

import { useTranslations } from "next-intl";
import { portfolioVideos } from "../../data/portfolioVideos";

export default function PortfolioHeader() {
  const t = useTranslations("portfolioHeader");

  const productionCount = portfolioVideos.filter(
    (p) => p.duration === "Producción"
  ).length;

  const industryCount = [...new Set(portfolioVideos.map((p) => p.category))].length;

  return (
    <div className="text-center mb-16">
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-blue/10 border border-brand-blue/20 mb-6 animate-fade-in-up">
        <span className="w-2 h-2 rounded-full bg-brand-gold" />
        <span className="text-sm font-medium text-brand-blue-light">
          {t("badge")}
        </span>
      </div>

      <h1
        className={`font-bold mb-6 text-foreground tracking-tight leading-tight transition-all duration-300 animate-fade-in-up stagger-1 text-4xl lg:text-5xl`}
      >
        {t("heading1")}
        <span className="text-brand-blue">{t("heading2")}</span>
      </h1>

      <p className="text-secondary-text max-w-2xl mx-auto text-base lg:text-lg leading-relaxed mb-8 animate-fade-in-up stagger-2">
        {t("lead")}
      </p>

      <div className="flex items-center justify-center gap-8 animate-fade-in-up stagger-3">
        <div className="text-center">
          <div className="text-2xl font-bold text-brand-blue">{portfolioVideos.length}</div>
          <div className="text-xs text-secondary-text">{t("projects")}</div>
        </div>
        <div className="w-px h-8 bg-border-color" />
        <div className="text-center">
          <div className="text-2xl font-bold text-brand-gold">{productionCount}</div>
          <div className="text-xs text-secondary-text">{t("inProduction")}</div>
        </div>
        <div className="w-px h-8 bg-border-color" />
        <div className="text-center">
          <div className="text-2xl font-bold text-brand-blue">{industryCount}</div>
          <div className="text-xs text-secondary-text">{t("industries")}</div>
        </div>
      </div>
    </div>
  );
}
