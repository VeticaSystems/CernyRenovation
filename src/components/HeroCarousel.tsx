
import { useState, useEffect } from 'react';

const slides = [
  {
    image: '/lovable-uploads/b27b4e29-6e0e-48ef-9c88-60280ab017a8.png',
    title: '', // No title for the window image slide.
    subtitle: '',
  },
  {
    image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=1600',
    title: 'Bathrooms That Feel Like Home',
    subtitle: 'Attention to Detail at Every Step',
  }
];

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
          <div className="absolute inset-0 flex items-center justify-center">
            {(slide.title || slide.subtitle) && (
              <div className="text-center text-light-purple max-w-4xl px-4 animate-fade-in">
                {slide.title && (
                  <h1 className="text-5xl md:text-6xl font-bold mb-4 font-montserrat">{slide.title}</h1>
                )}
                {slide.subtitle && (
                  <p className="text-xl md:text-2xl mb-8 font-montserrat text-tenorite">{slide.subtitle}</p>
                )}
              </div>
            )}
          </div>
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

