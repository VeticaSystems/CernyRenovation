
import { useState, useEffect, useRef, useCallback } from 'react';
import { Slide, CarouselState } from './types';
import { preloadImage } from './imageUtils';

const PROGRESS_DURATION = 5000; // 5 seconds

export const useCarouselLogic = (slides: Slide[]) => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [paused, setPaused] = useState<boolean>(false);
  const [loadedImages, setLoadedImages] = useState<boolean[]>(
    slides.map(() => false)
  );
  const [imageErrors, setImageErrors] = useState<boolean[]>(
    slides.map(() => false)
  );
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [progress, setProgress] = useState<number>(0);
  const timerRef = useRef<number | null>(null);

  // Preload all images
  useEffect(() => {
    slides.forEach((slide, index) => {
      preloadImage(slide.image).then((result) => {
        setLoadedImages((prev) => {
          const updated = [...prev];
          updated[index] = result;
          return updated;
        });
        setImageErrors((prev) => {
          const updated = [...prev];
          updated[index] = !result;
          return updated;
        });
      });
    });
  }, [slides]);

  // Carousel control functions
  const startCarousel = useCallback(() => {
    if (timerRef.current) window.clearInterval(timerRef.current);
    timerRef.current = window.setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
  }, [slides.length]);

  const stopCarousel = useCallback(() => {
    if (timerRef.current) window.clearInterval(timerRef.current);
  }, []);

  // Auto-play logic
  useEffect(() => {
    if (!paused) {
      startCarousel();
    } else {
      stopCarousel();
    }
    return () => stopCarousel();
  }, [paused, startCarousel, stopCarousel]);

  // Visibility change handling
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        stopCarousel();
      } else if (!paused) {
        startCarousel();
      }
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () =>
      document.removeEventListener('visibilitychange', handleVisibilityChange);
  }, [paused, startCarousel, stopCarousel]);

  // Progress bar animation
  useEffect(() => {
    if (paused) {
      setProgress(0);
      return;
    }
    setProgress(0);
    let frame: number;
    let start: number | null = null;

    const animate = (timestamp: number) => {
      if (!start) start = timestamp;
      const elapsed = timestamp - start;
      const newProgress = Math.min((elapsed / PROGRESS_DURATION) * 100, 100);
      setProgress(newProgress);
      if (elapsed < PROGRESS_DURATION) {
        frame = requestAnimationFrame(animate);
      }
    };

    frame = requestAnimationFrame(animate);

    return () => {
      setProgress(0);
      cancelAnimationFrame(frame);
    };
  }, [currentSlide, paused]);

  return {
    currentSlide,
    setCurrentSlide,
    paused,
    setPaused,
    loadedImages,
    imageErrors,
    touchStartX,
    setTouchStartX,
    progress,
  };
};
