"use client";
import Image from "next/image";

const categoryColors = {
  blue:    { text: "text-blue-400",    bg: "bg-blue-500/10",    border: "border-blue-500/30" },
  amber:   { text: "text-amber-400",   bg: "bg-amber-500/10",   border: "border-amber-500/30" },
  emerald: { text: "text-emerald-400", bg: "bg-emerald-500/10", border: "border-emerald-500/30" },
  purple:  { text: "text-purple-400",  bg: "bg-purple-500/10",  border: "border-purple-500/30" },
  cyan:    { text: "text-cyan-400",    bg: "bg-cyan-500/10",    border: "border-cyan-500/30" },
  indigo:  { text: "text-indigo-400",  bg: "bg-indigo-500/10",  border: "border-indigo-500/30" },
  gold:    { text: "text-yellow-400",  bg: "bg-yellow-500/10",  border: "border-yellow-500/30" },
  rose:    { text: "text-rose-400",    bg: "bg-rose-500/10",    border: "border-rose-500/30" },
  violet:  { text: "text-violet-400",  bg: "bg-violet-500/10",  border: "border-violet-500/30" },
  orange:  { text: "text-orange-400",  bg: "bg-orange-500/10",  border: "border-orange-500/30" },
};

const statusConfig = {
  "Producción":    { bg: "bg-emerald-500/10", text: "text-emerald-400", border: "border-emerald-500/30", dot: "bg-emerald-400" },
  "Demo Activo":   { bg: "bg-brand-blue/10",  text: "text-brand-blue-light", border: "border-brand-blue/30", dot: "bg-brand-blue-light" },
  "En Desarrollo": { bg: "bg-brand-gold/10",  text: "text-brand-gold-light", border: "border-brand-gold/30", dot: "bg-brand-gold-light" },
};

export default function ProjectDetails({ video, current, total, onPrev, onNext }) {
  const colors = categoryColors[video.categoryColor] || categoryColors.blue;
  const status = statusConfig[video.duration] || statusConfig["Producción"];

  return (
    <div className="relative mb-5 rounded-2xl overflow-hidden border border-border-color bg-background-card shadow-2xl animate-fade-in-up">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[460px]">

        {/* ── Left: Screenshot ── */}
        <div className="relative overflow-hidden min-h-[260px] lg:min-h-0">
          {video.image ? (
            <Image
              src={video.image}
              alt={`Screenshot de ${video.title}`}
              fill
              className="object-cover object-top transition-all duration-500"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          ) : (
            <div className={`absolute inset-0 bg-gradient-to-br ${video.gradient}`} />
          )}

          {/* Gradient — fade to card on the right (desktop), bottom (mobile) */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-background-card/95 hidden lg:block" />
          <div className="absolute inset-0 bg-gradient-to-t from-background-card/80 via-transparent to-transparent lg:hidden" />

          {/* Status badge */}
          <div className="absolute top-4 left-4">
            <span className={`inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full backdrop-blur-sm ${status.bg} ${status.text} border ${status.border}`}>
              <span className={`w-1.5 h-1.5 rounded-full animate-pulse ${status.dot}`} />
              {video.duration}
            </span>
          </div>

          {/* Counter */}
          <div className="absolute bottom-4 left-4">
            <span className="text-xs font-mono text-white/70 bg-black/40 backdrop-blur-sm px-2.5 py-1 rounded-lg">
              {String(current + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
            </span>
          </div>
        </div>

        {/* ── Right: Content ── */}
        <div className="p-6 lg:p-8 xl:p-10 flex flex-col justify-between">
          <div>
            {/* Category */}
            <span className={`inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full mb-4 ${colors.bg} ${colors.text} border ${colors.border}`}>
              {video.category}
            </span>

            <h2 className="text-2xl lg:text-3xl font-bold text-foreground leading-tight mb-3">
              {video.title}
            </h2>

            <p className="text-secondary-text leading-relaxed text-sm lg:text-base mb-6 line-clamp-4">
              {video.description}
            </p>

            {/* Stack tecnológico */}
            <div className="mb-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-secondary-text mb-2.5">
                Stack
              </p>
              <div className="flex flex-wrap gap-1.5">
                {video.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-background-secondary text-secondary-text text-xs font-medium px-2.5 py-1 rounded-lg border border-border-color hover:border-brand-blue/40 hover:text-foreground transition-all duration-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Features — primeras 4 */}
            {video.features?.length > 0 && (
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                {video.features.slice(0, 4).map((feature, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className={`flex-shrink-0 w-1.5 h-1.5 rounded-full ${colors.text.replace("text-", "bg-")}`} />
                    <span className="text-secondary-text text-xs leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* ── Bottom: nav arrows + visit button ── */}
          <div className="flex items-center justify-between pt-5 mt-5 border-t border-border-color">
            <div className="flex items-center gap-2">
              <button
                onClick={onPrev}
                className="w-10 h-10 rounded-xl bg-background-secondary hover:bg-hover-bg border border-border-color hover:border-brand-blue/40 flex items-center justify-center transition-all duration-200 group"
                aria-label="Proyecto anterior"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-secondary-text group-hover:text-foreground transition-colors">
                  <polyline points="15 18 9 12 15 6" />
                </svg>
              </button>
              <button
                onClick={onNext}
                className="w-10 h-10 rounded-xl bg-background-secondary hover:bg-hover-bg border border-border-color hover:border-brand-blue/40 flex items-center justify-center transition-all duration-200 group"
                aria-label="Proyecto siguiente"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-secondary-text group-hover:text-foreground transition-colors">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </button>
            </div>

            {video.url && (
              <a
                href={video.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-brand-blue hover:bg-brand-blue-light text-white px-5 py-2.5 rounded-xl font-semibold text-sm transition-all duration-200 group shadow-lg shadow-brand-blue/20"
              >
                Visitar Proyecto
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-0.5 transition-transform duration-200">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
