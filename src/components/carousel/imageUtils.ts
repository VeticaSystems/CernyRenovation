
export const preloadImage = (url: string) =>
  new Promise<boolean>((resolve) => {
    const img = new window.Image();
    img.onload = () => resolve(true);
    img.onerror = () => resolve(false);
    img.src = url;
  });

export const FALLBACK_IMAGE = '/fallback-image.jpg';
