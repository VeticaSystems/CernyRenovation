
export interface Slide {
  image: string;
  title: string;
  subtitle: string;
}

export interface CarouselState {
  currentSlide: number;
  paused: boolean;
  loadedImages: boolean[];
  imageErrors: boolean[];
  touchStartX: number | null;
  progress: number;
}
