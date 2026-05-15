"use client";
import { useRef, useCallback, useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";

const categoryColors = {
  blue:    { text: "text-blue-400",    bg: "bg-blue-500/10",    border: "border-blue-500/30",    hex: "#3b82f6" },
  amber:   { text: "text-amber-400",   bg: "bg-amber-500/10",   border: "border-amber-500/30",   hex: "#f59e0b" },
  emerald: { text: "text-emerald-400", bg: "bg-emerald-500/10", border: "border-emerald-500/30", hex: "#10b981" },
  purple:  { text: "text-purple-400",  bg: "bg-purple-500/10",  border: "border-purple-500/30",  hex: "#a855f7" },
  cyan:    { text: "text-cyan-400",    bg: "bg-cyan-500/10",    border: "border-cyan-500/30",    hex: "#06b6d4" },
  indigo:  { text: "text-indigo-400",  bg: "bg-indigo-500/10",  border: "border-indigo-500/30",  hex: "#6366f1" },
  gold:    { text: "text-yellow-400",  bg: "bg-yellow-500/10",  border: "border-yellow-500/30",  hex: "#c9920d" },
  rose:    { text: "text-rose-400",    bg: "bg-rose-500/10",    border: "border-rose-500/30",    hex: "#f43f5e" },
  violet:  { text: "text-violet-400",  bg: "bg-violet-500/10",  border: "border-violet-500/30",  hex: "#8b5cf6" },
  orange:  { text: "text-orange-400",  bg: "bg-orange-500/10",  border: "border-orange-500/30",  hex: "#f97316" },
};

const statusConfig = {
  "Producción":     { bg: "bg-emerald-500/10", text: "text-emerald-400", border: "border-emerald-500/30", dot: "bg-emerald-400" },
  "Production":     { bg: "bg-emerald-500/10", text: "text-emerald-400", border: "border-emerald-500/30", dot: "bg-emerald-400" },
  "Demo Activo":    { bg: "bg-brand-blue/10",  text: "text-brand-blue-light", border: "border-brand-blue/30",  dot: "bg-brand-blue-light" },
  "Active Demo":    { bg: "bg-brand-blue/10",  text: "text-brand-blue-light", border: "border-brand-blue/30",  dot: "bg-brand-blue-light" },
  "En Desarrollo":  { bg: "bg-brand-gold/10",  text: "text-brand-gold-light", border: "border-brand-gold/30",  dot: "bg-brand-gold-light" },
  "In Development": { bg: "bg-brand-gold/10",  text: "text-brand-gold-light", border: "border-brand-gold/30",  dot: "bg-brand-gold-light" },
};

// ── Modal de detalle completo ──────────────────────────────────────────────────
function ProjectModal({ project, onClose }) {
  const t = useTranslations("projectCard");
  const colors = categoryColors[project.categoryColor] || categoryColors.blue;
  const status = statusConfig[project.duration] || statusConfig["Producción"];

  // Cerrar con Escape
  useEffect(() => {
    const handler = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  // Bloquear scroll del body mientras el modal está abierto
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

      {/* Panel */}
      <div
        className="relative z-10 w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-background-card border border-border-color rounded-2xl shadow-2xl animate-fade-in-up"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Screenshot */}
        <div className="relative h-56 sm:h-64 overflow-hidden rounded-t-2xl flex-shrink-0 bg-background-secondary">
          {project.image ? (
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover object-top"
              sizes="(max-width: 640px) 100vw, 672px"
            />
          ) : (
            <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient}`} />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-background-card/70 via-transparent to-transparent" />

          {/* Status */}
          <div className="absolute top-4 left-4">
            <span className={`inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full backdrop-blur-sm ${status.bg} ${status.text} border ${status.border}`}>
              <span className={`w-1.5 h-1.5 rounded-full animate-pulse ${status.dot}`} />
              {project.duration}
            </span>
          </div>

          {/* Botón cerrar */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-xl bg-black/40 hover:bg-black/60 backdrop-blur-sm border border-white/10 flex items-center justify-center transition-all duration-200 group"
            aria-label={t("close")}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-white/70 group-hover:text-white transition-colors">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Contenido */}
        <div className="p-6 sm:p-8">
          {/* Category */}
          <span className={`inline-flex w-fit items-center text-xs font-semibold px-2.5 py-0.5 rounded-full mb-4 ${colors.bg} ${colors.text} border ${colors.border}`}>
            {project.category}
          </span>

          <h2 className="text-xl sm:text-2xl font-bold text-foreground leading-tight mb-3">
            {project.title}
          </h2>

          <p className="text-secondary-text text-sm leading-relaxed mb-6">
            {project.description}
          </p>

          {/* Stack completo */}
          <div className="mb-6">
            <p className="text-xs font-semibold uppercase tracking-widest text-secondary-text mb-3">
              {t("techStack")}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, i) => (
                <span
                  key={i}
                  className="bg-background-secondary text-secondary-text text-xs font-medium px-3 py-1 rounded-lg border border-border-color hover:border-brand-blue/40 hover:text-foreground transition-all duration-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Features completas */}
          {project.features?.length > 0 && (
            <div className="mb-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-secondary-text mb-3">
                {t("keyFeatures")}
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {project.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <span className={`flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full ${colors.text.replace("text-", "bg-")}`} />
                    <span className="text-secondary-text text-sm leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Acciones */}
          <div className="flex items-center gap-3 pt-4 border-t border-border-color">
            {project.url && (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-brand-blue hover:bg-brand-blue-light text-white px-5 py-2.5 rounded-xl font-semibold text-sm transition-all duration-200 group shadow-lg shadow-brand-blue/20"
              >
                {t("visitProject")}
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-0.5 transition-transform duration-200">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
              </a>
            )}
            <button
              onClick={onClose}
              className="px-5 py-2.5 rounded-xl border border-border-color hover:border-brand-blue/40 text-secondary-text hover:text-foreground text-sm font-medium transition-all duration-200"
            >
              {t("close")}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Card individual ────────────────────────────────────────────────────────────
function ProjectCard({ project, onDetail }) {
  const t = useTranslations("projectCard");
  const colors = categoryColors[project.categoryColor] || categoryColors.blue;
  const status = statusConfig[project.duration] || statusConfig["Producción"];

  return (
    <div
      className="group h-full flex flex-col rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-1"
      style={{
        background: "#111b2a",
        border: "1px solid rgba(238,242,247,0.07)",
        boxShadow: "none",
      }}
      onMouseEnter={e => { e.currentTarget.style.border = "1px solid rgba(74,143,196,0.2)"; e.currentTarget.style.boxShadow = "0 20px 40px rgba(0,0,0,0.3)"; }}
      onMouseLeave={e => { e.currentTarget.style.border = "1px solid rgba(238,242,247,0.07)"; e.currentTarget.style.boxShadow = "none"; }}
      onClick={onDetail}
    >
      {/* Color top bar */}
      <div style={{
        height: 3,
        background: `linear-gradient(90deg, ${colors.hex || "#2e6da4"}, #e8b84b)`,
        flexShrink: 0,
      }}/>
      {/* Screenshot */}
      <div className="relative h-52 overflow-hidden flex-shrink-0 bg-background-secondary">
        {project.image ? (
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 90vw, (max-width: 1024px) 50vw, 33vw"
          />
        ) : (
          <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient}`} />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-background-card/50 via-transparent to-transparent" />

        {/* Status badge */}
        <div className="absolute top-3 right-3">
          <span className={`inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full backdrop-blur-sm ${status.bg} ${status.text} border ${status.border}`}>
            <span className={`w-1.5 h-1.5 rounded-full ${status.dot}`} />
            {project.duration}
          </span>
        </div>

        {/* Hover overlay hint */}
        <div className="absolute inset-0 bg-brand-blue/0 group-hover:bg-brand-blue/5 transition-colors duration-300 flex items-center justify-center">
          <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/50 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1.5 rounded-full border border-white/20">
            {t("viewDetails").replace(" →", "")}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5">
        <span className={`inline-flex w-fit items-center text-xs font-semibold px-2.5 py-0.5 rounded-full mb-3 ${colors.bg} ${colors.text} border ${colors.border}`}>
          {project.category}
        </span>

        <h3 className="font-bold text-foreground text-base leading-snug mb-2 line-clamp-2 group-hover:text-brand-blue transition-colors duration-200">
          {project.title.split(" - ")[0]}
        </h3>

        <p className="text-secondary-text text-sm leading-relaxed line-clamp-2 mb-4 flex-1">
          {project.description}
        </p>

        {/* Tech tags preview */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.technologies.slice(0, 3).map((tech, i) => (
            <span
              key={i}
              className="bg-background-secondary text-secondary-text text-xs px-2 py-0.5 rounded-md border border-border-color"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="text-secondary-text/60 text-xs px-1 py-0.5">
              +{project.technologies.length - 3}
            </span>
          )}
        </div>

        {/* Actions row */}
        <div className="flex items-center justify-between">
          <button
            onClick={onDetail}
            className={`text-xs font-semibold ${colors.text} hover:opacity-80 transition-opacity`}
          >
            {t("viewDetails")}
          </button>

          {project.url && (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-secondary-text hover:text-foreground text-xs transition-colors duration-200"
              onClick={(e) => e.stopPropagation()}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
              {t("visit")}
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

// ── Carrusel principal ─────────────────────────────────────────────────────────
export default function ProjectList({ projects, currentVideo, onVideoSelect }) {
  const t = useTranslations("projectCard");
  const trackRef = useRef(null);
  const total = projects.length;
  const [selectedProject, setSelectedProject] = useState(null);

  const scrollToCard = useCallback(
    (index) => {
      onVideoSelect(index);
      const track = trackRef.current;
      if (!track || !track.children[index]) return;
      const card = track.children[index];
      track.scrollTo({
        left: card.offsetLeft - track.offsetLeft,
        behavior: "smooth",
      });
    },
    [onVideoSelect]
  );

  // Sync current index con lo que está visible al hacer swipe
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length === 0) return;
        const best = visible.reduce((a, b) =>
          a.intersectionRatio > b.intersectionRatio ? a : b
        );
        onVideoSelect(Number(best.target.dataset.index));
      },
      { root: track, threshold: 0.5 }
    );

    Array.from(track.children).forEach((child) => observer.observe(child));
    return () => observer.disconnect();
  }, [onVideoSelect]);

  const prev = () => scrollToCard(Math.max(0, currentVideo - 1));
  const next = () => scrollToCard(Math.min(total - 1, currentVideo + 1));

  return (
    <>
      <div className="relative">
        {/* Carrusel */}
        <div
          ref={trackRef}
          className="flex gap-4 lg:gap-5 overflow-x-auto pb-2"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            scrollSnapType: "x mandatory",
          }}
        >
          {projects.map((project, index) => (
            <div
              key={project.id}
              data-index={index}
              className="flex-shrink-0 w-[calc(100%-1rem)] sm:w-[calc(50%-10px)] lg:w-[calc(33.333%-14px)]"
              style={{ scrollSnapAlign: "start" }}
            >
              <ProjectCard
                project={project}
                onDetail={() => setSelectedProject(project)}
              />
            </div>
          ))}
        </div>

        {/* Barra de navegación */}
        <div className="flex items-center justify-between mt-5 pt-4" style={{ borderTop: "1px solid rgba(238,242,247,0.07)" }}>
          <div className="flex gap-2">
            <button
              onClick={prev}
              disabled={currentVideo === 0}
              className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-200 group disabled:opacity-30 disabled:cursor-not-allowed"
              style={{ background: "#0d1520", border: "1px solid rgba(238,242,247,0.07)" }}
              onMouseEnter={e => { if (!e.currentTarget.disabled) e.currentTarget.style.borderColor = "rgba(74,143,196,0.3)"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(238,242,247,0.07)"; }}
              aria-label={t("prevProject")}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: "rgba(238,242,247,0.42)" }}>
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>
            <button
              onClick={next}
              disabled={currentVideo === total - 1}
              className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-200 group disabled:opacity-30 disabled:cursor-not-allowed"
              style={{ background: "#0d1520", border: "1px solid rgba(238,242,247,0.07)" }}
              onMouseEnter={e => { if (!e.currentTarget.disabled) e.currentTarget.style.borderColor = "rgba(74,143,196,0.3)"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(238,242,247,0.07)"; }}
              aria-label={t("nextProject")}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: "rgba(238,242,247,0.42)" }}>
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          </div>

          <div className="flex-1 mx-6 h-1 rounded-full overflow-hidden" style={{ background: "rgba(238,242,247,0.07)" }}>
            <div
              className="h-1 rounded-full transition-all duration-500 ease-out"
              style={{ width: `${((currentVideo + 1) / total) * 100}%`, background: "linear-gradient(90deg,#2e6da4,#e8b84b)" }}
            />
          </div>

          <span className="text-xs font-mono tabular-nums whitespace-nowrap" style={{ color: "rgba(238,242,247,0.42)" }}>
            {String(currentVideo + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
          </span>
        </div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </>
  );
}
