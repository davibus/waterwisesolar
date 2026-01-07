'use client';

import { useEffect, useRef, useState } from 'react';

export default function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Detect mobile device
    const checkMobile = () => {
      const mobile = window.innerWidth <= 968 || /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
      setIsMobile(mobile);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    const video = videoRef.current;
    if (!video) return;

    // Skip video loading on mobile to save bandwidth
    if (isMobile) {
      setIsLoaded(true);
      return () => {
        window.removeEventListener('resize', checkMobile);
      };
    }

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
      window.removeEventListener('resize', checkMobile);
    };
  }, [isMobile]);

  return (
    <video
      ref={videoRef}
      className={`hero-video ${isLoaded ? 'loaded' : ''}`}
      autoPlay={!isMobile}
      loop
      muted
      playsInline
      preload={isMobile ? 'none' : 'auto'}
      poster="/images/waterwisesolar-hero-image.jpg"
      aria-label="Floating solar panels on water reservoir - water-wise renewable energy"
    >
      {!isMobile && (
        <>
          {/* Optimized MP4 (1.7MB, 720p, all browsers) */}
          <source src="/videos/hero-video.mp4" type="video/mp4" />
        </>
      )}
      Your browser does not support the video tag.
    </video>
  );
}
