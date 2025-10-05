"use client";
import { Container, Section } from "../layout";
import { Button } from "../ui";

export const HeroSection = ({
  title,
  subtitle,
  description,
  primaryAction,
  secondaryAction,
  image,
}) => {
  return (
    <Section
      background="gradient"
      padding="lg"
      className="relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid-white bg-[size:60px_60px]" />
      <div className="absolute top-10 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <Container className="text-center relative z-10">
        {image && (
          <div className="flex justify-center mb-8 fade-in">{image}</div>
        )}

        <div className="fade-in" style={{ animationDelay: "0.2s" }}>
          <h2 className="font-bold mb-6 bg-gradient-to-r from-white to-primary bg-clip-text text-transparent tracking-tight text-3xl lg:text-4xl">
            {title}
          </h2>
          <p className="mb-8 max-w-2xl mx-auto leading-relaxed text-lg lg:text-xl">
            {description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {primaryAction && <Button {...primaryAction} />}
            {secondaryAction && (
              <Button variant="outline" {...secondaryAction} />
            )}
          </div>
        </div>
      </Container>
    </Section>
  );
};
