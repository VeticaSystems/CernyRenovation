
interface CarouselProgressBarProps {
  progress: number;
  paused: boolean;
}

const CarouselProgressBar = ({ progress, paused }: CarouselProgressBarProps) => {
  return (
    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[120px] h-1 bg-white/30 rounded overflow-hidden z-50">
      <div
        className="bg-light-purple h-1 transition-all duration-100"
        style={{
          width: `${paused ? 0 : progress}%`,
          transition: paused ? 'none' : 'width 80ms linear'
        }}
      />
    </div>
  );
};

export default CarouselProgressBar;
