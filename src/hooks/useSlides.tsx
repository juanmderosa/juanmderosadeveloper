import { useState } from "react";

export const useSlides = ({ slides }: any) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const totalSlides = slides.length;
  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
  };

  const goToPreviousSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0
        ? totalSlides - 1
        : (prevIndex - 1 + totalSlides) % totalSlides
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const visibleSlides = [
    slides[currentIndex],
    slides[(currentIndex + 1) % totalSlides],
  ];

  return {
    currentIndex,
    totalSlides,
    goToNextSlide,
    goToPreviousSlide,
    goToSlide,
    visibleSlides,
  };
};
