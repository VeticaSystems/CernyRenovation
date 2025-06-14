import { useState, useEffect, useRef, useCallback } from 'react';

// --- 1. Add TypeScript interfaces ---
interface Slide {
  image: string;
  title: string;
  subtitle: string;
}

// --- Slides array ---
const slides: Slide[] = [
  {
    image: '/lovable-uploads/5c3adc8d-2724-424a-909d-990f9100f555.png', // User's re-uploaded bright image
    title: '',
    subtitle: '',
  },
  {
    image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=1600', // Original bathroom pic
    title: 'Bathrooms That Feel Like Home',
    subtitle: '',
  }
];

// --- Image preload, returns a Promise ---
const preloadImage = (url: string) =>
  new Promise<boolean>((resolve) => {
    const img = new window.Image();
    img.onload = () => resolve(true);
    img.onerror = () => resolve(false);
    img.src = url;
  });

const FALLBACK_IMAGE = '/fallback-image.jpg';

const PROGRESS_DURATION = 5000; // 5 seconds

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [paused, setPaused] = useState<boolean>(false);
  const [loadedImages, setLoadedImages] = useState<boolean[]>(
    slides.map(() => false)
  );
  const [imageErrors, setImageErrors] = useState<boolean[]>(
    slides.map(() => false)
  );
  const timerRef = useRef<number | null>(null);
  const containerRef = useRef<HTMLElement | null>(null);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [progress, setProgress] = useState<number>(0);

  // --- 5. Improved loading states ---
  // Preload all images, set loaded/error state per image
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
  }, []);

  // --- Start/stop carousel interval ---
  const startCarousel = useCallback(() => {
    if (timerRef.current) window.clearInterval(timerRef.current);
    timerRef.current = window.setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
  }, []);

  const stopCarousel = useCallback(() => {
    if (timerRef.current) window.clearInterval(timerRef.current);
  }, []);

  useEffect(() => {
    if (!paused) {
      startCarousel();
    } else {
      stopCarousel();
    }
    return () => stopCarousel();
  }, [paused, startCarousel, stopCarousel]);

  // Pause/play on page hide/show (document hidden)
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

  // 4. Pause on hover for desktop users
  const handleMouseEnter = () => setPaused(true);
  const handleMouseLeave = () => setPaused(false);

  // 2. Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowRight') {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
      setPaused(true);
    } else if (e.key === 'ArrowLeft') {
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
      setPaused(true);
    } else if (e.key === ' ' || e.key === 'Spacebar') {
      // space bar toggles pause/play
      setPaused((prev) => !prev);
      e.preventDefault();
    }
  };

  // 3. Touch/swipe support for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX;
    if (Math.abs(dx) > 50) {
      // Only trigger if swipe distance is enough
      if (dx < 0) {
        // swipe left = next
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      } else {
        // swipe right = prev
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
      }
      setPaused(true);
    }
    setTouchStartX(null);
  };

  // 6. Accessibility: Focus indicators, ARIA, tab-trap
  // Trap tab key on indicators
  const indicatorsRef = useRef<HTMLDivElement | null>(null);

  // Focus main section so keyboard navigation is active when user tabs into carousel
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.setAttribute('tabIndex', '0');
    }
  }, []);

  // Animate progress bar for current slide
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
    // Reset progress when currentSlide or paused changes
  }, [currentSlide, paused]);

  return (
    <section
      className="relative w-full h-[70vh] overflow-hidden outline-none"
      tabIndex={0}
      ref={containerRef as any}
      aria-label="Showcase image carousel"
      aria-roledescription="carousel"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onKeyDown={handleKeyDown}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {slides.map((slide, index) => {
        const showImage = loadedImages[index]
          ? slide.image
          : imageErrors[index]
            ? FALLBACK_IMAGE
            : undefined; // loading

        return (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 will-change-opacity ${
              index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
            aria-hidden={index !== currentSlide}
            style={{
              backgroundImage: showImage ? `url(${showImage})` : undefined,
              backgroundSize: 'contain', // show more of image, less cropping
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              backgroundColor: '#18181b', // fallback behind transparent images / contain mode gaps
            }}
          >
            {/* Loading skeleton for image */}
            {!showImage && (
              <div className="w-full h-full flex justify-center items-center bg-cerny-light-gray">
                <div className="rounded-full w-20 h-20 animate-pulse bg-muted" />
              </div>
            )}
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40" />
            {/* Slide text overlay */}
            {index !== 0 && (slide.title || slide.subtitle) && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-light-purple max-w-4xl px-4 animate-fade-in">
                  {slide.title && (
                    <h1 className="text-[clamp(2rem,5vw,3.75rem)] font-bold mb-4 font-montserrat">
                      {slide.title}
                    </h1>
                  )}
                  {slide.subtitle && (
                    <p className="text-[clamp(1rem,2vw,1.5rem)] mb-8 font-montserrat text-tenorite">
                      {slide.subtitle}
                    </p>
                  )}
                </div>
              </div>
            )}
            {/* Paused badge */}
            {index === currentSlide && paused && (
              <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-black/60 text-white text-xs font-semibold shadow">
                Paused
              </div>
            )}
          </div>
        );
      })}

      {/* Slide indicators */}
      <div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2"
        role="tablist"
        aria-label="Slide navigation"
        ref={indicatorsRef}
      >
        {slides.map((_, index) => (
          <button
            key={index}
            className={`
              w-3 h-3 rounded-full transition-colors outline-none ring-cerny-orange focus:ring-2 
              ${index === currentSlide ? 'bg-white' : 'bg-white/50'}
            `}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
            role="tab"
            aria-selected={index === currentSlide}
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                setCurrentSlide(index);
                e.preventDefault();
              }
            }}
          />
        ))}
      </div>
      {/* Progress bar for auto-advancing (optically shows timer) */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[120px] h-1 bg-white/30 rounded overflow-hidden z-50">
        <div
          className="bg-light-purple h-1 transition-all duration-100"
          style={{
            width: `${paused ? 0 : progress}%`,
            transition: paused ? 'none' : 'width 80ms linear'
          }}
        />
      </div>
    </section>
  );
};

export default HeroCarousel;
