
"use client";
import { useSidebar } from "../context/SidebarContext";
import { Container } from "./ui/Container";
import { FAQHeader } from "./faq/FAQHeader";
import { FAQCategories } from "./faq/FAQCategories";
import { FAQContact } from "./faq/FAQContact";
import { faqData } from "../data/faqData";

export default function FAQContent() {
  const { isSidebarExpanded } = useSidebar();

  return (
    <section className="py-16 lg:py-20 bg-card-bg text-white min-h-screen">
      <Container size={isSidebarExpanded ? "expanded" : "default"}>
        <FAQHeader isSidebarExpanded={isSidebarExpanded} />
        <FAQCategories categories={faqData} />
        <FAQContact />
      </Container>
    </section>
  );
}
