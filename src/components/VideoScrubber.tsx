import React, { useEffect, useRef, useState } from 'react';

interface VideoScrubberProps {
  videoSrc: string;
  className?: string;
  opacity?: number;
  onStatsUpdate?: (stats: {
    current: number;
    target: number;
    duration: number;
    progress: number;
    reducedMotion: boolean;
  }) => void;
}

export const VideoScrubber: React.FC<VideoScrubberProps> = ({
  videoSrc,
  className = '',
  opacity = 1,
  onStatsUpdate,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [loadError, setLoadError] = useState<string | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Strict requirement: Do not call play(). Explicitly pause.
    video.pause();

    let animId: number;
    let lastTime = performance.now();
    let current = 0;

    const checkReducedMotion = (): boolean => {
      return typeof window !== 'undefined' &&
        window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    };

    const loop = () => {
      const now = performance.now();
      const dt = Math.min((now - lastTime) / 1000, 0.1); // prevent extreme jumps on tab pause
      lastTime = now;

      const reducedMotion = checkReducedMotion();

      if (reducedMotion) {
        // Reduced motion: freeze on the first frame
        if (video.currentTime !== 0) {
          video.currentTime = 0;
        }
        if (onStatsUpdate) {
          onStatsUpdate({
            current: 0,
            target: 0,
            duration: video.duration || 1,
            progress: 0,
            reducedMotion: true,
          });
        }
      } else {
        const scrollY = window.scrollY;
        const maxScroll = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
        const progress = Math.min(1, Math.max(0, scrollY / maxScroll));
        const duration = Number.isFinite(video.duration) && video.duration > 0 ? video.duration : 1;
        const target = progress * duration;

        // User formula:
        // current += (target - current) * (1 - Math.exp(-dt * 8))
        // then video.currentTime = current
        current += (target - current) * (1 - Math.exp(-dt * 8));

        // Numerical safety clamps
        if (current < 0) current = 0;
        if (current > duration) current = duration;

        if (Number.isFinite(current) && Math.abs(video.currentTime - current) > 0.005) {
          video.currentTime = current;
        }

        if (onStatsUpdate) {
          onStatsUpdate({
            current,
            target,
            duration,
            progress,
            reducedMotion: false,
          });
        }
      }

      animId = requestAnimationFrame(loop);
    };

    const handleLoadedMetadata = () => {
      video.pause();
      setIsLoaded(true);
      current = 0;
      video.currentTime = 0;
    };

    const handleError = () => {
      setLoadError('Video failed to load.');
    };

    video.addEventListener('loadedmetadata', handleLoadedMetadata);
    video.addEventListener('error', handleError);

    animId = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(animId);
      video.removeEventListener('loadedmetadata', handleLoadedMetadata);
      video.removeEventListener('error', handleError);
    };
  }, [onStatsUpdate]);

  return (
    <div
      className={`fixed inset-0 w-full h-full pointer-events-none transition-opacity duration-500 overflow-hidden ${className}`}
      style={{ opacity }}
    >
      <video
        ref={videoRef}
        src={videoSrc}
        playsInline
        muted
        preload="auto"
        className="w-full h-full object-cover select-none"
        style={{ objectFit: 'cover' }}
        onPlay={(e) => {
          // Extra guard to never allow play()
          e.currentTarget.pause();
        }}
      />

      {loadError && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/80 text-rose-400 font-mono text-xs">
          <span>{loadError}</span>
        </div>
      )}
    </div>
  );
};
