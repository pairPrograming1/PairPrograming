"use client";

export default function ProjectList({
  projects,
  currentVideo,
  onVideoSelect,
  isSidebarExpanded,
}) {
  return (
    <div className={`${isSidebarExpanded ? "lg:col-span-1" : "lg:col-span-1"}`}>
      <div className="bg-card-bg rounded-xl p-4 sticky top-4 border border-border-color">
        <h3 className="text-lg font-bold text-primary mb-4">
          Proyectos ({projects.length})
        </h3>
        <div
          className={`space-y-3 overflow-y-auto pr-2 ${
            isSidebarExpanded ? "max-h-80" : "max-h-96 lg:max-h-[500px]"
          }`}
        >
          {projects.map((video, index) => (
            <button
              key={video.id}
              onClick={() => onVideoSelect(index)}
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
      </div>
    </div>
  );
}
