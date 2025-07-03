
import { useRef, useEffect } from 'react';
import { Slide } from './carousel/types';
import { FALLBACK_IMAGE } from './carousel/imageUtils';
import { useCarouselLogic } from './carousel/useCarouselLogic';
import CarouselSlide from './carousel/CarouselSlide';
import CarouselIndicators from './carousel/CarouselIndicators';
import CarouselProgressBar from './carousel/CarouselProgressBar';

const slides: Slide[] = [
  {
    image: '/lovable-uploads/074251b5-6a3f-461d-a1c3-523ebce91a73.png',
    title: '',
    subtitle: '',
  },
  {
    image: '/lovable-uploads/b27b4e29-6e0e-48ef-9c88-60280ab017a8.png',
    title: '',
    subtitle: '',
  }
];

const HeroCarousel = () => {
  const containerRef = useRef<HTMLElement | null>(null);
  const {
    currentSlide,
    setCurrentSlide,
    paused,
    setPaused,
    loadedImages,
    imageErrors,
    touchStartX,
    setTouchStartX,
    progress,
  } = useCarouselLogic(slides);

  // Event handlers
  const handleMouseEnter = () => setPaused(true);
  const handleMouseLeave = () => setPaused(false);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowRight') {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
      setPaused(true);
    } else if (e.key === 'ArrowLeft') {
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
      setPaused(true);
    } else if (e.key === ' ' || e.key === 'Spacebar') {
      setPaused((prev) => !prev);
      e.preventDefault();
    }
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX;
    if (Math.abs(dx) > 50) {
      if (dx < 0) {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      } else {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
      }
      setPaused(true);
    }
    setTouchStartX(null);
  };

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.setAttribute('tabIndex', '0');
    }
  }, []);

  return (
    <section
      className="relative w-full overflow-hidden outline-none"
      style={{ 
        height: 'calc(100vh - 5rem)',
        width: '100vw',
        marginLeft: 'calc(-50vw + 50%)',
        marginRight: 'calc(-50vw + 50%)',
      }}
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
            : undefined;

        const isWindowSlide = index === 0;

        return (
          <CarouselSlide
            key={index}
            slide={slide}
            index={index}
            currentSlide={currentSlide}
            showImage={showImage}
            isWindowSlide={isWindowSlide}
            paused={paused}
          />
        );
      })}

      <CarouselIndicators
        slidesLength={slides.length}
        currentSlide={currentSlide}
        onSlideChange={setCurrentSlide}
      />

      <CarouselProgressBar progress={progress} paused={paused} />
    </section>
  );
};

export default HeroCarousel;
