'use client';

import { useEffect, useRef, useState } from 'react';

export default function SectionVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Set playback rate to 0.75 for slow, cinematic effect
    video.playbackRate = 0.75;

    // Handle video loaded event for smooth fade-in
    const handleLoadedData = () => {
      setIsLoaded(true);
      // Force play in case autoplay is blocked
      video.play().catch((error) => {
        console.log('Autoplay blocked:', error);
      });
    };

    const handleCanPlay = () => {
      setIsLoaded(true);
      video.play().catch((error) => {
        console.log('Autoplay blocked:', error);
      });
    };

    video.addEventListener('loadeddata', handleLoadedData);
    video.addEventListener('canplay', handleCanPlay);

    // Try to load and play immediately
    video.load();

    return () => {
      video.removeEventListener('loadeddata', handleLoadedData);
      video.removeEventListener('canplay', handleCanPlay);
    };
  }, []);

  return (
    <video
      ref={videoRef}
      className={`section-video ${isLoaded ? 'loaded' : ''}`}
      autoPlay
      loop
      muted
      playsInline
      preload="auto"
      aria-label="Floating solar panels on water - land vs water comparison"
    >
      {/* MP4 for best compatibility (13MB, all browsers) */}
      <source src="/videos/section-2-video.mp4" type="video/mp4" />
      {/* WebM alternative (20MB, Chrome, Firefox, Edge) */}
      <source src="/videos/section-2-video.webm" type="video/webm" />
      {/* MOV fallback (12MB, original quality) */}
      <source src="/videos/section-2-video.mov" type="video/quicktime" />
      Your browser does not support the video tag.
    </video>
  );
}
