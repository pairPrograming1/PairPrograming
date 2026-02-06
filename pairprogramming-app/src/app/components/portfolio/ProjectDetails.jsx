"use client";

const categoryColors = {
  blue:    { text: "text-blue-400",    bg: "bg-blue-500/15",    border: "border-blue-500/30" },
  amber:   { text: "text-amber-400",   bg: "bg-amber-500/15",   border: "border-amber-500/30" },
  emerald: { text: "text-emerald-400", bg: "bg-emerald-500/15", border: "border-emerald-500/30" },
  purple:  { text: "text-purple-400",  bg: "bg-purple-500/15",  border: "border-purple-500/30" },
  cyan:    { text: "text-cyan-400",    bg: "bg-cyan-500/15",    border: "border-cyan-500/30" },
  indigo:  { text: "text-indigo-400",  bg: "bg-indigo-500/15",  border: "border-indigo-500/30" },
  gold:    { text: "text-yellow-400",  bg: "bg-yellow-500/15",  border: "border-yellow-500/30" },
};

const statusConfig = {
  "Producción":    { bg: "bg-emerald-500/15", text: "text-emerald-400", border: "border-emerald-500/30", dot: "bg-emerald-400" },
  "Demo Activo":   { bg: "bg-brand-blue/15",  text: "text-brand-blue-light", border: "border-brand-blue/30", dot: "bg-brand-blue-light" },
  "En Desarrollo": { bg: "bg-brand-gold/15",  text: "text-brand-gold-light", border: "border-brand-gold/30", dot: "bg-brand-gold-light" },
};

export default function ProjectDetails({ video }) {
  const colors = categoryColors[video.categoryColor] || categoryColors.blue;
  const status = statusConfig[video.duration] || statusConfig["Producción"];
  const features = video.features || [];

  return (
    <div className="bg-background-card h-full rounded-xl mb-6 border border-border-color shadow-2xl shadow-brand-blue/5 overflow-hidden animate-fade-in-up">
      {/* Gradient hero area */}
      <div className={`relative h-40 lg:h-48 bg-gradient-to-br ${video.gradient} overflow-hidden`}>
        <div className="absolute inset-0 bg-gradient-to-t from-background-card via-transparent to-transparent" />
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
            className={`inline-flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-full ${colors.bg} ${colors.text} border ${colors.border} backdrop-blur-sm`}
          >
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
            >
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
              <line x1="9" y1="3" x2="9" y2="21" />
            </svg>
            {video.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 lg:p-8">
        <h2 className="text-2xl lg:text-3xl font-bold text-foreground leading-tight mb-4">
          {video.title}
        </h2>

        <p className="text-secondary-text leading-relaxed text-base lg:text-lg mb-8">
          {video.description}
        </p>

        {/* Technologies */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-brand-blue"
            >
              <polyline points="16 18 22 12 16 6" />
              <polyline points="8 6 2 12 8 18" />
            </svg>
            <h4 className="font-bold text-foreground text-lg">Stack Tecnológico</h4>
          </div>
          <div className="flex flex-wrap gap-2">
            {video.technologies.map((tech, index) => (
              <span
                key={index}
                className="bg-background-secondary text-foreground/80 text-sm font-medium px-4 py-2 rounded-lg border border-border-color hover:border-brand-blue/50 hover:bg-hover-bg hover:shadow-md hover:shadow-brand-blue/10 hover:text-foreground transition-all duration-300 cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Features */}
        {features.length > 0 && (
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-brand-gold"
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
              <h4 className="font-bold text-foreground text-lg">
                Características Destacadas
              </h4>
            </div>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3 group">
                  <div
                    className={`flex-shrink-0 w-6 h-6 ${colors.bg} rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className={colors.text}
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <span className="text-secondary-text text-sm leading-relaxed flex-1 group-hover:text-foreground/90 transition-colors duration-300">
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
              className="inline-flex items-center gap-3 bg-gradient-to-r from-brand-blue to-brand-gold hover:from-brand-blue-light hover:to-brand-gold-light text-white px-8 py-4 rounded-xl font-bold transition-all duration-300 shadow-lg shadow-brand-blue/20 hover:shadow-brand-blue/30 hover:scale-105 group"
            >
              <span className="text-lg">Visitar Proyecto</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="group-hover:translate-x-1 transition-transform duration-300"
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
