"use client";
import { useState } from "react";
import { useSidebar } from "../context/SidebarContext";
import { Container } from "./ui/Container";
import { portfolioVideos } from "../data/portfolioVideos";
import PortfolioHeader from "./portfolio/PortfolioHeader";
import ProjectList from "./portfolio/ProjectList";
import ProjectDetails from "./portfolio/ProjectDetails";
import PortfolioCTA from "./portfolio/PortfolioCTA";

export default function Portfolio() {
  const { isSidebarExpanded } = useSidebar();
  const [currentVideo, setCurrentVideo] = useState(0);

  const handleVideoSelect = (index) => {
    setCurrentVideo(index);
    // Smooth scroll to top of details on mobile
    if (window.innerWidth < 1024) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const currentVideoData = portfolioVideos[currentVideo];

  return (
    <section className="py-16 lg:py-24 bg-black text-white min-h-screen relative border-b border-gray-800">
      <Container size="full">
        <PortfolioHeader isSidebarExpanded={isSidebarExpanded} />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          {/* Lista de proyectos - Sidebar */}
          <div className="lg:col-span-4 xl:col-span-3">
            <ProjectList
              projects={portfolioVideos}
              currentVideo={currentVideo}
              onVideoSelect={handleVideoSelect}
              isSidebarExpanded={isSidebarExpanded}
            />
          </div>

          {/* Detalles del proyecto - Área principal */}
          <div className="lg:col-span-8 xl:col-span-9">
            <ProjectDetails video={currentVideoData} />
            {/* <PortfolioCTA /> */}
          </div>
        </div>
      </Container>
    </section>
  );
}
