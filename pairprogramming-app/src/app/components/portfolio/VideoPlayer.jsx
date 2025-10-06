"use client";
import { getYouTubeEmbedUrl } from "../utils/youtube";

export default function VideoPlayer({ video }) {
  return (
    <div className="bg-card-bg rounded-xl p-4 mb-6 fade-in border border-border-color">
      <div className="aspect-w-16 aspect-h-9 bg-black rounded-lg overflow-hidden">
        <iframe
          src={getYouTubeEmbedUrl(video.youtubeId)}
          title={video.title}
          className="w-full h-64 sm:h-80 lg:h-96"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}
