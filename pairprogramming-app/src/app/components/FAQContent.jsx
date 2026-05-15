
"use client";
import { useLocale } from "next-intl";
import { Container } from "./ui/Container";
import { FAQHeader } from "./faq/FAQHeader";
import { FAQCategories } from "./faq/FAQCategories";
import { FAQContact } from "./faq/FAQContact";
import { faqData } from "../data/faqData";
import { getLocalizedItem } from "@/app/lib/i18n-helpers";

export default function FAQContent() {
  const locale = useLocale();

  const localizedCategories = faqData.map((cat) => {
    const localized = getLocalizedItem(cat, locale);
    return localized;
  });

  return (
    <section className="py-16 lg:py-20 bg-card-bg text-white min-h-screen">
      <Container size="default">
        <FAQHeader />
        <FAQCategories categories={localizedCategories} />
        <FAQContact />
      </Container>
    </section>
  );
}
