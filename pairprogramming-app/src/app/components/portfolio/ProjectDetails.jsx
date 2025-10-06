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
      className="bg-card-bg rounded-xl p-4 mb-6 fade-in border border-border-color"
      style={{ animationDelay: "0.1s" }}
    >
      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
        <div className="flex-1">
          <h2 className="text-xl lg:text-2xl font-bold text-white mb-2">
            {video.title}
          </h2>
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="bg-primary/20 text-primary text-sm px-3 py-1 rounded-full">
              {video.category}
            </span>
            <span className="text-secondary-text text-sm">
              Duración: {video.duration}
            </span>
          </div>
        </div>
      </div>

      <p className="text-secondary-text mb-6 leading-relaxed text-sm lg:text-base">
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
              className="bg-background text-secondary-text text-xs lg:text-sm px-3 py-1 rounded-full border border-border-color"
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
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-secondary-text">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center space-x-2">
              <span className="text-primary text-sm">✓</span>
              <span className="text-sm">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
