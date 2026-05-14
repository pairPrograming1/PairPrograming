// components/TerminosCondicionesContent.jsx
"use client";
import { Container } from "./ui/Container";
import { Card } from "./ui/Card";
import TerminosHeader from "./terminos/TerminosHeader";
import TerminosNotice from "./terminos/TerminosNotice";
import TerminosSection from "./terminos/TerminosSection";
import TerminosContact from "./terminos/TerminosContact";
import { terminosData } from "../data/terminosData";

export default function TerminosCondicionesContent() {
  return (
    <section className="py-16 lg:py-20 bg-card-bg text-white min-h-screen">
      <Container size="default">
        <TerminosHeader />

        <Card padding="lg" className="fade-in">
          <div className="prose prose-invert max-w-none">
            <TerminosNotice />

            <div className="space-y-8">
              {terminosData.map((section, index) => (
                <TerminosSection
                  key={section.id}
                  title={section.title}
                  content={section.content}
                  isLast={index === terminosData.length - 1}
                />
              ))}
            </div>

            {/* <TerminosContact /> */}
          </div>
        </Card>
      </Container>
    </section>
  );
}
