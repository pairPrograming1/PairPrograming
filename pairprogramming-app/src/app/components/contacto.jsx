
"use client";
import { useSidebar } from "../context/SidebarContext";
import { Container } from "./ui/Container";
import { ContactHeader } from "./contact/ContactHeader";
import { ContactForm } from "./contact/ContactForm";
import { ContactInfo } from "./sections/ContactInfo";
import { ContactMeeting } from "./contact/ContactMeeting";

export default function Contacto() {
  const { isSidebarExpanded } = useSidebar();

  return (
    <section className="py-16 lg:py-20 bg-black text-white min-h-screen border-b border-gray-800">
      <Container size={isSidebarExpanded ? "expanded" : "default"}>
        <ContactHeader isSidebarExpanded={isSidebarExpanded} />

        {/* Añadimos items-stretch aquí para igualar alturas */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          <div className="lg:col-span-1 space-y-6 fade-in h-full">
            <ContactInfo />
          </div>

          <div
            className="lg:col-span-2 fade-in h-full"
            style={{ animationDelay: "0.2s" }}
          >
            <ContactForm />
          </div>
        </div>
        {/* 
        <ContactMeeting /> */}
      </Container>
    </section>
  );
}
