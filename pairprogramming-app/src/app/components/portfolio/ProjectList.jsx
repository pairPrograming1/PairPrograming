"use client";

const categoryColors = {
  blue:    { bg: "bg-blue-500/15",    border: "border-blue-500/40",    text: "text-blue-400",    hoverBorder: "hover:border-blue-500/50",    dot: "bg-blue-400",    selectedBg: "bg-blue-500/20" },
  amber:   { bg: "bg-amber-500/15",   border: "border-amber-500/40",   text: "text-amber-400",   hoverBorder: "hover:border-amber-500/50",   dot: "bg-amber-400",   selectedBg: "bg-amber-500/20" },
  emerald: { bg: "bg-emerald-500/15", border: "border-emerald-500/40", text: "text-emerald-400", hoverBorder: "hover:border-emerald-500/50", dot: "bg-emerald-400", selectedBg: "bg-emerald-500/20" },
  purple:  { bg: "bg-purple-500/15",  border: "border-purple-500/40",  text: "text-purple-400",  hoverBorder: "hover:border-purple-500/50",  dot: "bg-purple-400",  selectedBg: "bg-purple-500/20" },
  cyan:    { bg: "bg-cyan-500/15",    border: "border-cyan-500/40",    text: "text-cyan-400",    hoverBorder: "hover:border-cyan-500/50",    dot: "bg-cyan-400",    selectedBg: "bg-cyan-500/20" },
  indigo:  { bg: "bg-indigo-500/15",  border: "border-indigo-500/40",  text: "text-indigo-400",  hoverBorder: "hover:border-indigo-500/50",  dot: "bg-indigo-400",  selectedBg: "bg-indigo-500/20" },
  gold:    { bg: "bg-yellow-500/15",  border: "border-yellow-500/40",  text: "text-yellow-400",  hoverBorder: "hover:border-yellow-500/50",  dot: "bg-yellow-400",  selectedBg: "bg-yellow-500/20" },
};

const statusConfig = {
  "Producción":    { bg: "bg-emerald-500/15", text: "text-emerald-400", border: "border-emerald-500/30", dot: "bg-emerald-400" },
  "Demo Activo":   { bg: "bg-brand-blue/15",  text: "text-brand-blue-light", border: "border-brand-blue/30", dot: "bg-brand-blue-light" },
  "En Desarrollo": { bg: "bg-brand-gold/15",  text: "text-brand-gold-light", border: "border-brand-gold/30", dot: "bg-brand-gold-light" },
};

export default function ProjectList({
  projects,
  currentVideo,
  onVideoSelect,
}) {
  return (
    <div className="h-full">
      <div className="bg-background-card rounded-xl p-5 lg:p-6 border border-border-color shadow-xl h-full flex flex-col">
        <div className="flex items-center justify-between mb-5">
          <h3 className="text-xl font-bold text-brand-blue">Proyectos</h3>
          <span className="bg-brand-blue/15 text-brand-blue-light text-sm font-semibold px-3 py-1 rounded-full border border-brand-blue/20">
            {projects.length}
          </span>
        </div>

        <div className="space-y-2 flex-1 overflow-visible">
          {projects.map((video, index) => {
            const colors = categoryColors[video.categoryColor] || categoryColors.blue;
            const status = statusConfig[video.duration] || statusConfig["Producción"];
            const isSelected = currentVideo === index;
            const staggerClass = `stagger-${Math.min(index + 1, 8)}`;

            return (
              <button
                key={video.id}
                onClick={() => onVideoSelect(index)}
                className={`w-full text-left p-4 rounded-lg transition-all duration-300 group relative overflow-hidden animate-fade-in-up ${staggerClass} ${
                  isSelected
                    ? `${colors.selectedBg} ${colors.border} border shadow-lg pulse-glow-blue`
                    : `bg-background/50 border border-transparent hover:bg-hover-bg ${colors.hoverBorder} hover:scale-[1.02]`
                }`}
              >
                {isSelected && (
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-brand-blue to-brand-gold" />
                )}

                <div className="flex items-start gap-3 pl-2">
                  <div
                    className={`flex-shrink-0 w-11 h-11 rounded-lg flex items-center justify-center transition-all duration-300 ${
                      isSelected
                        ? `${colors.bg} ${colors.text}`
                        : "bg-background-secondary text-secondary-text"
                    }`}
                  >
                    <div
                      className={`w-3 h-3 rounded-full transition-transform duration-300 ${colors.dot} ${
                        isSelected ? "scale-110" : "scale-100 group-hover:scale-110"
                      }`}
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <h4
                      className={`font-semibold text-sm leading-tight mb-2 line-clamp-2 ${
                        isSelected
                          ? "text-foreground"
                          : "text-foreground/80 group-hover:text-foreground"
                      }`}
                    >
                      {video.title}
                    </h4>

                    <div className="flex items-center gap-2 flex-wrap">
                      <span
                        className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                          isSelected
                            ? `${colors.bg} ${colors.text}`
                            : "bg-background-secondary text-secondary-text"
                        }`}
                      >
                        {video.category}
                      </span>
                      <span
                        className={`inline-flex items-center gap-1.5 text-xs font-medium px-2 py-0.5 rounded-full ${status.bg} ${status.text} border ${status.border}`}
                      >
                        <span className={`w-1.5 h-1.5 rounded-full ${status.dot}`} />
                        {video.duration}
                      </span>
                    </div>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
