"use client";

import { useState } from "react";

type LazyYoutubeProps = {
  videoId: string;
  title: string;
};

export default function LazyYoutube({ videoId, title }: LazyYoutubeProps) {
  const [isIframeLoaded, setIsIframeLoaded] = useState(false);

  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

  return (
    <div
      className="relative w-full h-0 overflow-hidden rounded-xl cursor-pointer"
      style={{ paddingBottom: "177.77%" }} // Aspect ratio 9:16
      onClick={() => setIsIframeLoaded(true)}
    >
      {isIframeLoaded ? (
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <div className="absolute top-0 left-0 w-full h-full bg-black">
          <img
            src={thumbnailUrl}
            alt={`Thumbnail ${title}`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            {/* Tombol Play SVG */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="80"
              height="80"
              viewBox="0 0 100 100"
              className="transition-transform duration-200 ease-in-out hover:scale-110"
            >
              <circle
                cx="50"
                cy="50"
                r="48"
                fill="#023274"
                stroke="white"
                strokeWidth="4"
              />
              <polygon points="40,30 70,50 40,70" fill="white" />
            </svg>
          </div>
        </div>
      )}
    </div>
  );
}
