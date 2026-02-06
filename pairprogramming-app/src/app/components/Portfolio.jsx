"use client";
import { useState } from "react";
import { useSidebar } from "../context/SidebarContext";
import { Container } from "./ui/Container";
import { portfolioVideos } from "../data/portfolioVideos";
import PortfolioHeader from "./portfolio/PortfolioHeader";
import ProjectList from "./portfolio/ProjectList";
import ProjectDetails from "./portfolio/ProjectDetails";

export default function Portfolio() {
  const { isSidebarExpanded } = useSidebar();
  const [currentVideo, setCurrentVideo] = useState(0);

  const handleVideoSelect = (index) => {
    setCurrentVideo(index);
    if (window.innerWidth < 1024) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const currentVideoData = portfolioVideos[currentVideo];

  return (
    <section className="py-16 lg:py-24 bg-background text-foreground min-h-screen relative overflow-hidden border-b border-border-color">
      {/* Animated background blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-brand-blue/15 rounded-full blur-3xl animate-float-blob" />
        <div
          className="absolute -bottom-40 -left-40 w-[450px] h-[450px] bg-brand-gold/10 rounded-full blur-3xl animate-float-blob"
          style={{ animationDelay: "3s" }}
        />
        <div
          className="absolute top-1/2 left-1/4 w-72 h-72 bg-brand-blue/8 rounded-full blur-3xl animate-float-blob"
          style={{ animationDelay: "5s" }}
        />
      </div>

      <Container size="full" className="relative z-10">
        <PortfolioHeader isSidebarExpanded={isSidebarExpanded} />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          <div className="lg:col-span-4 xl:col-span-3">
            <ProjectList
              projects={portfolioVideos}
              currentVideo={currentVideo}
              onVideoSelect={handleVideoSelect}
              isSidebarExpanded={isSidebarExpanded}
            />
          </div>

          <div className="lg:col-span-8 xl:col-span-9">
            <ProjectDetails key={currentVideo} video={currentVideoData} />
          </div>
        </div>
      </Container>
    </section>
  );
}
