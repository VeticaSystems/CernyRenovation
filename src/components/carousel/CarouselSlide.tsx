
import { Slide } from './types';

interface CarouselSlideProps {
  slide: Slide;
  index: number;
  currentSlide: number;
  showImage: string | undefined;
  isWindowSlide: boolean;
  paused: boolean;
}

const CarouselSlide = ({ 
  slide, 
  index, 
  currentSlide, 
  showImage, 
  isWindowSlide, 
  paused 
}: CarouselSlideProps) => {
  return (
    <div
      key={index}
      className={`absolute inset-0 transition-opacity duration-1000 will-change-opacity ${
        index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
      }`}
      aria-hidden={index !== currentSlide}
      style={
        isWindowSlide
          ? {
              background: '#111827',
              position: 'absolute',
              inset: 0,
            }
          : {
              backgroundImage: showImage ? `url(${showImage})` : undefined,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              backgroundColor: '#18181b',
            }
      }
    >
      {isWindowSlide && showImage ? (
        <>
          <div className="absolute inset-0 flex justify-center items-center z-10">
            <img
              src={showImage}
              alt=""
              className="w-full h-full object-contain"
              style={{
                maxWidth: '100%',
                maxHeight: '100%',
              }}
              draggable={false}
            />
          </div>
          <div className="absolute inset-0 bg-black/20 z-20" />
        </>
      ) : (
        <>
          {!showImage && (
            <div className="w-full h-full flex justify-center items-center bg-cerny-light-gray">
              <div className="rounded-full w-20 h-20 animate-pulse bg-muted" />
            </div>
          )}
          <div className="absolute inset-0 bg-black/40" />
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
          {index === currentSlide && paused && !isWindowSlide && (
            <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-black/60 text-white text-xs font-semibold shadow">
              Paused
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default CarouselSlide;
