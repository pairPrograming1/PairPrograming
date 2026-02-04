"use client";

export default function ProjectList({
  projects,
  currentVideo,
  onVideoSelect,
  isSidebarExpanded,
}) {
  return (
    <div className="h-full">
      <div className="bg-gray-900 rounded-xl p-5 lg:p-6 border border-gray-800 shadow-xl h-full flex flex-col">
        <div className="flex items-center justify-between mb-5">
          <h3 className="text-xl font-bold text-blue-500">
            Proyectos
          </h3>
          <span className="bg-blue-600/20 text-blue-500 text-sm font-semibold px-3 py-1 rounded-full">
            {projects.length}
          </span>
        </div>

        <div className="space-y-2 flex-1 overflow-visible">
          {projects.map((video, index) => (
            <button
              key={video.id}
              onClick={() => onVideoSelect(index)}
              className={`w-full text-left p-4 rounded-lg transition-all duration-300 group relative overflow-hidden ${
                currentVideo === index
                  ? "bg-blue-600/20 border border-blue-500/50 shadow-lg shadow-blue-500/10"
                  : "bg-gray-800/50 border border-transparent hover:bg-gray-800 hover:border-gray-700"
              }`}
            >
              {currentVideo === index && (
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-500"></div>
              )}

              <div className="flex items-start gap-3 pl-2">
                <div className={`flex-shrink-0 w-11 h-11 rounded-lg flex items-center justify-center transition-all ${
                  currentVideo === index
                    ? "bg-blue-600/30 text-blue-400"
                    : "bg-gray-700/50 text-gray-400 group-hover:bg-blue-600/20 group-hover:text-blue-500"
                }`}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>

                <div className="flex-1 min-w-0">
                  <h4 className={`font-semibold text-sm leading-tight mb-2 line-clamp-2 ${
                    currentVideo === index ? "text-white" : "text-gray-200 group-hover:text-white"
                  }`}>
                    {video.title}
                  </h4>

                  <div className="flex items-center gap-2 flex-wrap">
                    <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                      currentVideo === index
                        ? "bg-blue-500/20 text-blue-300"
                        : "bg-gray-700/50 text-gray-400 group-hover:text-gray-300"
                    }`}>
                      {video.category}
                    </span>
                    <span className="text-xs text-gray-500">
                      {video.duration}
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
