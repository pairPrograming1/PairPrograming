"use client";
import { useState } from "react";
import { Container } from "./ui/Container";
import { portfolioVideos } from "../data/portfolioVideos";
import PortfolioHeader from "./portfolio/PortfolioHeader";
import ProjectList from "./portfolio/ProjectList";
import PortfolioCTA from "./portfolio/PortfolioCTA";

export default function Portfolio() {
  const [current, setCurrent] = useState(0);

  return (
    <section className="py-16 lg:py-24 bg-background text-foreground min-h-screen relative overflow-hidden border-b border-border-color">
      {/* Background blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-brand-blue/10 rounded-full blur-3xl animate-float-blob" />
        <div
          className="absolute -bottom-40 -left-40 w-[450px] h-[450px] bg-brand-gold/10 rounded-full blur-3xl animate-float-blob"
          style={{ animationDelay: "3s" }}
        />
      </div>

      <Container size="full" className="relative z-10">
        <PortfolioHeader />

        <ProjectList
          projects={portfolioVideos}
          currentVideo={current}
          onVideoSelect={setCurrent}
        />

        <PortfolioCTA />
      </Container>
    </section>
  );
}
