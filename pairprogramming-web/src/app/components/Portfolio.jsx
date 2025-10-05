"use client";
import { useState } from "react";
import { useSidebar } from "../context/SidebarContext";
import { Container } from "./ui/Container";
import { Card } from "./ui/Card";
import { Button } from "./ui/Button";

export default function Portfolio() {
  const { isSidebarExpanded } = useSidebar();
  const [currentVideo, setCurrentVideo] = useState(0);

  const portfolioVideos = [
    {
      id: 1,
      title: "E-commerce Platform - Demo Completo",
      description:
        "Plataforma de e-commerce desarrollada con React, Node.js y MongoDB. Incluye carrito de compras, pasarela de pagos y panel administrativo.",
      youtubeId: "dQw4w9WgXcQ",
      category: "E-commerce",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      duration: "2:30",
    },
    {
      id: 2,
      title: "SaaS Dashboard - Análisis en Tiempo Real",
      description:
        "Dashboard empresarial con métricas en tiempo real, gráficos interactivos y reportes automatizados.",
      youtubeId: "dQw4w9WgXcQ",
      category: "SaaS",
      technologies: ["Vue.js", "Python", "PostgreSQL", "D3.js"],
      duration: "3:15",
    },
    {
      id: 3,
      title: "Mobile App - Gestión de Proyectos",
      description:
        "Aplicación móvil para gestión de proyectos con sincronización en la nube y colaboración en equipo.",
      youtubeId: "dQw4w9WgXcQ",
      category: "Mobile",
      technologies: ["React Native", "Firebase", "Redux"],
      duration: "4:20",
    },
    {
      id: 4,
      title: "CRM Personalizado - Demo Funcional",
      description:
        "Sistema CRM desarrollado a medida con pipeline de ventas, automatización de emails y analytics.",
      youtubeId: "dQw4w9WgXcQ",
      category: "CRM",
      technologies: ["Angular", "NestJS", "MySQL", "Redis"],
      duration: "5:10",
    },
    {
      id: 5,
      title: "Portal Educativo - Plataforma de Cursos",
      description:
        "Plataforma de educación online con videos, quizzes, progreso de estudiantes y certificados.",
      youtubeId: "dQw4w9WgXcQ",
      category: "Educación",
      technologies: ["Next.js", "Express", "MongoDB", "AWS S3"],
      duration: "3:45",
    },
    {
      id: 6,
      title: "App de Delivery - UI/UX Demo",
      description:
        "Aplicación de delivery con tracking en tiempo real, pagos integrados y sistema de repartidores.",
      youtubeId: "dQw4w9WgXcQ",
      category: "Delivery",
      technologies: ["Flutter", "Node.js", "MongoDB", "Google Maps"],
      duration: "2:55",
    },
  ];

  const getYouTubeId = (urlOrId) => {
    if (!urlOrId) return "";
    if (urlOrId.length === 11) return urlOrId;
    const regExp =
      /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    const match = urlOrId.match(regExp);
    return match && match[7].length === 11 ? match[7] : urlOrId;
  };

  const handleVideoSelect = (index) => {
    setCurrentVideo(index);
  };

  const currentVideoData = portfolioVideos[currentVideo];

  return (
    <section className="py-16 lg:py-20 bg-background text-white min-h-screen">
      {/* Usamos size="full" para que el contenedor no se vea afectado por el sidebar */}
      <Container size="full">
        <div className="text-center mb-12 fade-in">
          <h1
            className={`font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent transition-all duration-300 ${
              isSidebarExpanded
                ? "text-2xl lg:text-3xl"
                : "text-3xl lg:text-4xl"
            }`}
          >
            Nuestro Portafolio
          </h1>
          <p className="text-secondary-text max-w-3xl mx-auto text-lg leading-relaxed">
            Descubre algunos de nuestros proyectos más destacados. Cada demo
            muestra soluciones reales que hemos desarrollado para nuestros
            clientes.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-8">
          {/* Columna de lista de proyectos - ajustamos el ancho según el sidebar */}
          <div
            className={`${
              isSidebarExpanded ? "lg:col-span-1" : "lg:col-span-1"
            }`}
          >
            <Card padding="md" className="sticky top-4">
              <h3 className="text-lg font-bold text-primary mb-4">
                Proyectos ({portfolioVideos.length})
              </h3>
              <div
                className={`space-y-3 overflow-y-auto pr-2 ${
                  isSidebarExpanded ? "max-h-80" : "max-h-96 lg:max-h-[500px]"
                }`}
              >
                {portfolioVideos.map((video, index) => (
                  <button
                    key={video.id}
                    onClick={() => handleVideoSelect(index)}
                    className={`w-full text-left p-3 rounded-lg transition-all duration-300 hover:bg-hover-bg group ${
                      currentVideo === index
                        ? "bg-primary/20 border-l-4 border-primary"
                        : "bg-background/50"
                    }`}
                  >
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-10 h-10 bg-primary/20 rounded flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                        <span className="text-primary text-sm">▶️</span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-white text-sm leading-tight line-clamp-2">
                          {video.title}
                        </h4>
                        <div className="flex items-center mt-1 space-x-2">
                          <span className="text-primary text-xs font-medium">
                            {video.category}
                          </span>
                          <span className="text-secondary-text text-xs">
                            • {video.duration}
                          </span>
                        </div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </Card>
          </div>

          {/* Columna de contenido principal - ajustamos el ancho según el sidebar */}
          <div
            className={`${
              isSidebarExpanded ? "lg:col-span-3" : "lg:col-span-3"
            }`}
          >
            <Card padding="md" className="mb-6 fade-in">
              <div className="aspect-w-16 aspect-h-9 bg-black rounded-lg overflow-hidden">
                <iframe
                  src={`https://www.youtube.com/embed/${getYouTubeId(
                    currentVideoData.youtubeId
                  )}?autoplay=1&rel=0`}
                  title={currentVideoData.title}
                  className="w-full h-64 sm:h-80 lg:h-96"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </Card>

            <Card padding="md" animate animationDelay="0.1s">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                <div className="flex-1">
                  <h2 className="text-xl lg:text-2xl font-bold text-white mb-2">
                    {currentVideoData.title}
                  </h2>
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span className="bg-primary/20 text-primary text-sm px-3 py-1 rounded-full">
                      {currentVideoData.category}
                    </span>
                    <span className="text-secondary-text text-sm">
                      Duración: {currentVideoData.duration}
                    </span>
                  </div>
                </div>
              </div>

              <p className="text-secondary-text mb-6 leading-relaxed text-sm lg:text-base">
                {currentVideoData.description}
              </p>

              <div className="mb-6">
                <h4 className="font-semibold text-white mb-3">
                  Tecnologías utilizadas:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {currentVideoData.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-card-bg text-secondary-text text-xs lg:text-sm px-3 py-1 rounded-full border border-border-color"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-white mb-3">
                  Características destacadas:
                </h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-secondary-text">
                  <li className="flex items-center space-x-2">
                    <span className="text-primary text-sm">✓</span>
                    <span className="text-sm">Diseño responsive</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-primary text-sm">✓</span>
                    <span className="text-sm">Optimización SEO</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-primary text-sm">✓</span>
                    <span className="text-sm">Alta performance</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-primary text-sm">✓</span>
                    <span className="text-sm">Escalabilidad</span>
                  </li>
                </ul>
              </div>
            </Card>

            <div
              className="text-center mt-6 lg:mt-8 fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              <Card padding="md">
                <h3 className="text-lg font-bold text-primary mb-3">
                  ¿Te gustó lo que viste?
                </h3>
                <p className="text-secondary-text mb-4 text-sm lg:text-base">
                  Podemos crear una solución similar o personalizada para tu
                  negocio.
                </p>
                <Button
                  onClick={() => (window.location.href = "/contacto")}
                  icon={
                    <svg
                      className="w-4 h-4 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                      />
                    </svg>
                  }
                >
                  Solicitar Cotización
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
