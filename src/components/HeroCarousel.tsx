
import { useState, useEffect } from 'react';

const slides = [
  {
    image: '/lovable-uploads/b27b4e29-6e0e-48ef-9c88-60280ab017a8.png', // window image
    title: '', // no normal content for window slide
    subtitle: '', // we do custom overlay for this slide
  },
  {
    image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=1600',
    title: 'Bathrooms That Feel Like Home',
    subtitle: '',
  }
];

const WindowTextOverlay = () => (
  <div className="absolute inset-0 pointer-events-none">
    {/* "Attention to detail" on left wall */}
    <span
      className="absolute text-[clamp(18px,3vw,36px)] font-semibold text-light-purple"
      style={{
        left: '7%',
        top: '19%',
        letterSpacing: '.01em',
        transform: 'rotateY(-16deg) rotateZ(-5deg) skewY(1deg) perspective(24px)',
        textShadow: '2px 2px 16px rgba(0,0,0,0.14), 0 2px 24px #fff3',
        whiteSpace: 'nowrap',
        opacity: 0.95,
      }}
    >
      Attention to detail
    </span>
    {/* "at every step" on window wall */}
    <span
      className="absolute text-[clamp(17px,2.8vw,35px)] font-semibold text-light-purple"
      style={{
        left: '40.5%',
        top: '22.7%',
        letterSpacing: '.01em',
        transform:
          'rotateY(26deg) skewY(-6deg) perspective(34px)',
        textShadow: '2px 2px 14px rgba(0,0,0,0.14), 0px 3px 24px #fff3',
        whiteSpace: 'nowrap',
        opacity: 0.98,
      }}
    >
      at every step
    </span>
  </div>
);

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full h-[70vh] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
          style={{
            backgroundImage: `url(${slide.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="absolute inset-0 bg-black/40" />
          {/* If window slide, show custom overlay */}
          {index === 0 && <WindowTextOverlay />}
          {/* Default text overlay for other slides */}
          {index !== 0 && (slide.title || slide.subtitle) && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-light-purple max-w-4xl px-4 animate-fade-in">
                {slide.title && (
                  <h1 className="text-5xl md:text-6xl font-bold mb-4 font-montserrat">{slide.title}</h1>
                )}
                {slide.subtitle && (
                  <p className="text-xl md:text-2xl mb-8 font-montserrat text-tenorite">{slide.subtitle}</p>
                )}
              </div>
            </div>
          )}
        </div>
      ))}

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide ? 'bg-white' : 'bg-white/50'
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroCarousel;

