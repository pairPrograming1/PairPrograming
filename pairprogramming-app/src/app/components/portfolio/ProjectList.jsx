"use client";

export default function ProjectList({
  projects,
  currentVideo,
  onVideoSelect,
  isSidebarExpanded,
}) {
  return (
    <div className={`${isSidebarExpanded ? "lg:col-span-1" : "lg:col-span-1"}`}>
      <div className="bg-gray-900 rounded-xl p-4 sticky top-4 border border-gray-800">
        <h3 className="text-lg font-bold text-blue-500 mb-4">
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
              className={`w-full text-left p-3 rounded-lg transition-all duration-300 hover:bg-gray-800 group ${
                currentVideo === index
                  ? "bg-blue-600/20 border-l-4 border-blue-500"
                  : "bg-gray-900/50"
              }`}
            >
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-600/20 rounded flex items-center justify-center group-hover:bg-blue-600/30 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-blue-500">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold text-white text-sm leading-tight line-clamp-2">
                    {video.title}
                  </h4>
                  <div className="flex items-center mt-1 space-x-2">
                    <span className="text-blue-500 text-xs font-medium">
                      {video.category}
                    </span>
                    <span className="text-gray-400 text-xs">
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
