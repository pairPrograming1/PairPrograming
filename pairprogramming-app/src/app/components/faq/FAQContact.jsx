"use client";
import { useTranslations } from "next-intl";
import { ArrowRight, LifeBuoy, MessageCircle } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { Card } from "../ui/Card";

export function FAQContact() {
  const t = useTranslations("faqPage");

  return (
    <div
      className="mt-12 text-center fade-in"
      style={{ animationDelay: "0.4s" }}
    >
      <Card padding="md" className="max-w-2xl mx-auto border border-border-color/80 bg-card-bg/70 backdrop-blur-sm">
        <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.1em] text-primary mb-4">
          <LifeBuoy className="w-4 h-4" />
          {t("humanSupport")}
        </div>
        <h3 className="text-lg lg:text-xl font-bold text-primary mb-3">
          {t("contactHeading")}
        </h3>
        <p className="text-secondary-text mb-4 text-sm lg:text-base">
          {t("contactText")}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contacto"
            className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 inline-flex items-center justify-center gap-2 focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
          >
            <MessageCircle className="w-5 h-5" />
            {t("contactCta")}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </Card>
    </div>
  );
}
