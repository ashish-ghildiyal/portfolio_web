import { useState, useEffect } from "react";
import { BANNER_IMAGES, BANNER_LABELS } from "../data/banner";

/**
 * Manages the auto-advancing banner carousel.
 * Returns the current index, its image URL, its label, and a setter.
 */
export function useBannerSlider(interval = 4000) {
  const [bannerIndex, setBannerIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setBannerIndex((i) => (i + 1) % BANNER_IMAGES.length),
      interval
    );
    return () => clearInterval(id);
  }, [interval]);

  return {
    bannerIndex,
    setBannerIndex,
    currentImage: BANNER_IMAGES[bannerIndex],
    currentLabel: BANNER_LABELS[bannerIndex],
  };
}