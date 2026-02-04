"use client";

export default function ProjectDetails({ video }) {
  const features = [
    "Diseño responsive y adaptativo",
    "Optimización SEO avanzada",
    "Alta performance y velocidad",
    "Escalabilidad empresarial",
    "Código limpio y mantenible",
    "Integración de APIs modernas",
  ];

  return (
    <div className="bg-gray-900 rounded-xl p-6 lg:p-8 mb-6 border border-gray-800 shadow-xl fade-in">
      {/* Header del proyecto */}
      <div className="mb-6 pb-6 border-b border-gray-800">
        <div className="flex items-start justify-between gap-4 mb-4">
          <h2 className="text-2xl lg:text-3xl font-bold text-white leading-tight flex-1">
            {video.title}
          </h2>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <span className="inline-flex items-center gap-2 bg-blue-600/20 text-blue-400 text-sm font-medium px-4 py-2 rounded-full border border-blue-500/30">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
              <line x1="9" y1="3" x2="9" y2="21" />
            </svg>
            {video.category}
          </span>
          <span className="inline-flex items-center gap-2 text-gray-400 text-sm px-4 py-2 bg-gray-800 rounded-full border border-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
            {video.duration}
          </span>
        </div>
      </div>

      {/* Descripción */}
      <div className="mb-8">
        <p className="text-gray-300 leading-relaxed text-base lg:text-lg">
          {video.description}
        </p>
      </div>

      {/* Tecnologías */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500">
            <polyline points="16 18 22 12 16 6" />
            <polyline points="8 6 2 12 8 18" />
          </svg>
          <h4 className="font-bold text-white text-lg">
            Stack Tecnológico
          </h4>
        </div>
        <div className="flex flex-wrap gap-2">
          {video.technologies.map((tech, index) => (
            <span
              key={index}
              className="bg-gray-800 text-gray-200 text-sm font-medium px-4 py-2 rounded-lg border border-gray-700 hover:border-blue-500/50 hover:bg-gray-700 transition-all"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Características */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
          <h4 className="font-bold text-white text-lg">
            Características Destacadas
          </h4>
        </div>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-3 group">
              <div className="flex-shrink-0 w-6 h-6 bg-blue-600/20 rounded-full flex items-center justify-center group-hover:bg-blue-600/30 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <span className="text-gray-300 text-sm leading-relaxed flex-1">
                {feature}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Botón de visitar */}
      {video.url && (
        <div className="pt-6 border-t border-gray-800">
          <a
            href={video.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg shadow-blue-600/20 hover:shadow-blue-500/30 hover:scale-105 group"
          >
            <span className="text-lg">Visitar Proyecto</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform">
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
