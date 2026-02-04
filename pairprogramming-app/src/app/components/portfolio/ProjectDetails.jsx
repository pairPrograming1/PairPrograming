"use client";

export default function ProjectDetails({ video }) {
  const features = [
    "Diseño responsive",
    "Optimización SEO",
    "Alta performance",
    "Escalabilidad",
  ];

  return (
    <div
      className="bg-gray-900 rounded-xl p-4 mb-6 fade-in border border-gray-800"
      style={{ animationDelay: "0.1s" }}
    >
      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
        <div className="flex-1">
          <h2 className="text-xl lg:text-2xl font-bold text-white mb-2">
            {video.title}
          </h2>
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="bg-blue-600/20 text-blue-500 text-sm px-3 py-1 rounded-full">
              {video.category}
            </span>
            <span className="text-gray-400 text-sm">
              Duración: {video.duration}
            </span>
          </div>
        </div>
      </div>

      <p className="text-gray-400 mb-6 leading-relaxed text-sm lg:text-base">
        {video.description}
      </p>

      <div className="mb-6">
        <h4 className="font-semibold text-white mb-3">
          Tecnologías utilizadas:
        </h4>
        <div className="flex flex-wrap gap-2">
          {video.technologies.map((tech, index) => (
            <span
              key={index}
              className="bg-gray-800 text-gray-300 text-xs lg:text-sm px-3 py-1 rounded-full border border-gray-700"
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
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-gray-400">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center space-x-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500 flex-shrink-0">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <span className="text-sm">{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      {video.url && (
        <div className="mt-6 pt-6 border-t border-gray-800">
          <a
            href={video.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"
          >
            <span>Visitar Proyecto</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
          </a>
        </div>
      )}
    </div>
  );
}
