import { useRef, useState, type PointerEvent } from "react";

export const useSlides = ({ slides }: any) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const dragStartX = useRef(0);
  const dragCurrentX = useRef(0);
  const isPointerDown = useRef(false);
  const hasDragged = useRef(false);
  const hasNavigated = useRef(false);
  const [isDragging, setIsDragging] = useState(false);

  const getSwipeThreshold = (target: EventTarget | null) => {
    const element =
      target instanceof Element ? target.closest(".slider-wrapper") : null;
    const width = element?.getBoundingClientRect().width ?? 250;

    return Math.min(50, width * 0.2);
  };

  const isInteractiveTarget = (target: EventTarget | null) =>
    target instanceof Element && Boolean(target.closest("a, button"));

  const handlePointerDown = (event: PointerEvent<HTMLDivElement>) => {
    if (event.button !== 0) return;
    if (isInteractiveTarget(event.target)) return;

    dragStartX.current = event.clientX;
    dragCurrentX.current = event.clientX;
    hasDragged.current = false;
    hasNavigated.current = false;
    isPointerDown.current = true;
    setIsDragging(true);
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (!isPointerDown.current || hasNavigated.current) return;

    dragCurrentX.current = event.clientX;
    const deltaX = dragCurrentX.current - dragStartX.current;
    const threshold = getSwipeThreshold(event.currentTarget);

    if (Math.abs(deltaX) < threshold) return;

    hasDragged.current = true;
    hasNavigated.current = true;

    if (deltaX < 0) {
      goToNextSlide();
    } else {
      goToPreviousSlide();
    }
  };

  const handlePointerEnd = (event: PointerEvent<HTMLDivElement>) => {
    if (!isPointerDown.current) return;

    isPointerDown.current = false;
    setIsDragging(false);

    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
  };

  const totalSlides = slides.length;
  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
  };

  const goToPreviousSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0
        ? totalSlides - 1
        : (prevIndex - 1 + totalSlides) % totalSlides,
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return {
    currentIndex,
    totalSlides,
    goToNextSlide,
    goToPreviousSlide,
    goToSlide,
    handlePointerMove,
    handlePointerEnd,
    isDragging,
    handlePointerDown,
  };
};
