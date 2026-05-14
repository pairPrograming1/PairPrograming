
"use client";
import { Container } from "./ui/Container";
import { FAQHeader } from "./faq/FAQHeader";
import { FAQCategories } from "./faq/FAQCategories";
import { FAQContact } from "./faq/FAQContact";
import { faqData } from "../data/faqData";

export default function FAQContent() {
  return (
    <section className="py-16 lg:py-20 bg-card-bg text-white min-h-screen">
      <Container size="default">
        <FAQHeader />
        <FAQCategories categories={faqData} />
        <FAQContact />
      </Container>
    </section>
  );
}
