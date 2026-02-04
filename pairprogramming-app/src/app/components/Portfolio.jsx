"use client";
import { useState } from "react";
import { useSidebar } from "../context/SidebarContext";
import { Container } from "./ui/Container";
import { portfolioVideos } from "../data/portfolioVideos";
import PortfolioHeader from "./portfolio/PortfolioHeader";
import ProjectList from "./portfolio/ProjectList";
import VideoPlayer from "./portfolio/VideoPlayer";
import ProjectDetails from "./portfolio/ProjectDetails";
import PortfolioCTA from "./portfolio/PortfolioCTA";

export default function Portfolio() {
  const { isSidebarExpanded } = useSidebar();
  const [currentVideo, setCurrentVideo] = useState(0);

  const handleVideoSelect = (index) => {
    setCurrentVideo(index);
  };

  const currentVideoData = portfolioVideos[currentVideo];

  return (
    <section className="py-16 lg:py-20 bg-black text-white min-h-screen relative border-b border-gray-800">
      <Container size="full">
          <PortfolioHeader isSidebarExpanded={isSidebarExpanded} />

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-8">
            <ProjectList
              projects={portfolioVideos}
              currentVideo={currentVideo}
              onVideoSelect={handleVideoSelect}
              isSidebarExpanded={isSidebarExpanded}
            />

            <div
              className={`${
                isSidebarExpanded ? "lg:col-span-3" : "lg:col-span-3"
              }`}
            >
              {/* <VideoPlayer video={currentVideoData} /> */}
              <ProjectDetails video={currentVideoData} />
              <PortfolioCTA />
            </div>
          </div>
        </Container>
    </section>
  );
}
