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
    <section className="py-16 lg:py-20 bg-background text-white min-h-screen relative">
      {/* Cartel de "En Construcción" superpuesto */}
      {/* <div className="absolute inset-0 flex items-center justify-center z-50 pointer-events-none">
        <div className="bg-black/80 backdrop-blur-sm rounded-xl p-4 sm:p-6 md:p-8 max-w-xs sm:max-w-sm md:max-w-md text-center border border-yellow-500 shadow-2xl animate-pulse">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-yellow-400 mb-2 sm:mb-4">
            🚧 En Construcción 🚧
          </h2>
          <p className="text-white text-sm sm:text-base md:text-lg">
            Este portafolio está en desarrollo. Lo que ves es solo un ejemplo
            demostrativo y no representa proyectos reales finalizados.
          </p>
          <p className="text-gray-300 text-xs sm:text-sm mt-2">
            ¡Vuelve pronto para ver el contenido completo!
          </p>
        </div>
      </div> */}

      {/* Contenido original con opacidad reducida para indicar que es ejemplo */}
      <div className="opacity-70">
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
              <VideoPlayer video={currentVideoData} />
              <ProjectDetails video={currentVideoData} />
              <PortfolioCTA />
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
