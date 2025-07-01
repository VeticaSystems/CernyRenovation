
interface CarouselIndicatorsProps {
  slidesLength: number;
  currentSlide: number;
  onSlideChange: (index: number) => void;
}

const CarouselIndicators = ({ 
  slidesLength, 
  currentSlide, 
  onSlideChange 
}: CarouselIndicatorsProps) => {
  return (
    <div
      className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2"
      role="tablist"
      aria-label="Slide navigation"
    >
      {Array.from({ length: slidesLength }).map((_, index) => (
        <button
          key={index}
          className={`
            w-3 h-3 rounded-full transition-colors outline-none ring-cerny-orange focus:ring-2 
            ${index === currentSlide ? 'bg-white' : 'bg-white/50'}
          `}
          onClick={() => onSlideChange(index)}
          aria-label={`Go to slide ${index + 1}`}
          role="tab"
          aria-selected={index === currentSlide}
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              onSlideChange(index);
              e.preventDefault();
            }
          }}
        />
      ))}
    </div>
  );
};

export default CarouselIndicators;
