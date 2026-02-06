"use client";
import { useSidebar } from "../context/SidebarContext";
import { Container } from "./ui/Container";
import { ContactHeader } from "./contact/ContactHeader";
import { ContactForm } from "./contact/ContactForm";
import { ContactInfo } from "./sections/ContactInfo";

export default function Contacto() {
  const { isSidebarExpanded } = useSidebar();

  return (
    <section className="py-16 lg:py-24 bg-background text-foreground min-h-screen relative overflow-hidden border-b border-border-color">
      {/* Background blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-brand-blue/10 rounded-full blur-3xl animate-float-blob" />
        <div
          className="absolute -bottom-40 -left-40 w-[400px] h-[400px] bg-brand-gold/8 rounded-full blur-3xl animate-float-blob"
          style={{ animationDelay: "4s" }}
        />
      </div>

      <Container
        size={isSidebarExpanded ? "expanded" : "default"}
        className="relative z-10"
      >
        <ContactHeader isSidebarExpanded={isSidebarExpanded} />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          <div className="lg:col-span-1 space-y-6 h-full animate-fade-in-up stagger-3">
            <ContactInfo />
          </div>

          <div className="lg:col-span-2 h-full animate-fade-in-up stagger-4">
            <ContactForm />
          </div>
        </div>
      </Container>
    </section>
  );
}
