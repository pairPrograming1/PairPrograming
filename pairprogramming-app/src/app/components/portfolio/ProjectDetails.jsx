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
};

const statusConfig = {
  "Producción":    { bg: "bg-emerald-500/10", text: "text-emerald-400", border: "border-emerald-500/30", dot: "bg-emerald-400" },
  "Demo Activo":   { bg: "bg-brand-blue/10",  text: "text-brand-blue-light", border: "border-brand-blue/30", dot: "bg-brand-blue-light" },
  "En Desarrollo": { bg: "bg-brand-gold/10",  text: "text-brand-gold-light", border: "border-brand-gold/30", dot: "bg-brand-gold-light" },
};

export default function ProjectDetails({ video }) {
  const colors = categoryColors[video.categoryColor] || categoryColors.blue;
  const status = statusConfig[video.duration] || statusConfig["Producción"];
  const features = video.features || [];

  return (
    <div className="bg-background-card h-full rounded-xl mb-6 border border-border-color overflow-hidden animate-fade-in-up">
      {/* Preview area — muestra screenshot si existe, degradado como fallback */}
      <div className="relative h-56 lg:h-64 overflow-hidden">
        {video.image ? (
          <Image
            src={video.image}
            alt={`Screenshot de ${video.title}`}
            fill
            className="object-cover object-top"
            sizes="(max-width: 1024px) 100vw, 75vw"
          />
        ) : (
          <div className={`w-full h-full bg-gradient-to-br ${video.gradient}`} />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-background-card via-background-card/20 to-transparent" />

        {/* Badges sobre la imagen */}
        <div className="absolute top-4 right-4">
          <span
            className={`inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full ${status.bg} ${status.text} border ${status.border} backdrop-blur-sm`}
          >
            <span className={`w-1.5 h-1.5 rounded-full ${status.dot}`} />
            {video.duration}
          </span>
        </div>
        <div className="absolute bottom-4 left-6 lg:left-8">
          <span
            className={`inline-flex items-center gap-1.5 text-sm font-medium px-3 py-1.5 rounded-full ${colors.bg} ${colors.text} border ${colors.border} backdrop-blur-sm`}
          >
            {video.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 lg:p-8">
        <h2 className="text-2xl lg:text-3xl font-bold text-foreground leading-tight mb-3">
          {video.title}
        </h2>

        <p className="text-secondary-text leading-relaxed text-sm lg:text-base mb-8 max-w-2xl">
          {video.description}
        </p>

        {/* Technologies */}
        <div className="mb-8">
          <h4 className="text-xs font-semibold uppercase tracking-widest text-secondary-text mb-3">
            Stack Tecnológico
          </h4>
          <div className="flex flex-wrap gap-2">
            {video.technologies.map((tech, index) => (
              <span
                key={index}
                className="bg-background-secondary text-secondary-text text-sm font-medium px-3 py-1.5 rounded-lg border border-border-color hover:border-brand-blue/40 hover:text-foreground transition-all duration-200 cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Features */}
        {features.length > 0 && (
          <div className="mb-8">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-secondary-text mb-3">
              Características Destacadas
            </h4>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center gap-2.5">
                  <span className={`flex-shrink-0 w-1.5 h-1.5 rounded-full ${colors.text.replace("text-", "bg-")}`} />
                  <span className="text-secondary-text text-sm leading-relaxed">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Visit button */}
        {video.url && (
          <div className="pt-6 border-t border-border-color">
            <a
              href={video.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-brand-blue hover:bg-brand-blue-light text-white px-6 py-3 rounded-xl font-semibold text-sm transition-colors duration-200 group"
            >
              Visitar Proyecto
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="group-hover:translate-x-0.5 transition-transform duration-200"
              >
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
