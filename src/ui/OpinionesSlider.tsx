import {
  useEffect,
  useRef,
  useState,
  type PointerEvent,
} from "react";
import "../styles/opinionesSlider.css";
import "../styles/slidernav.css";
import { useSlides } from "../hooks/useSlides";
import type { OpinionData } from "../types/types";

export const OpinionSlider = ({ opinions }: { opinions: OpinionData[] }) => {
  const dragStartX = useRef(0);
  const dragCurrentX = useRef(0);
  const isPointerDown = useRef(false);
  const hasNavigated = useRef(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const {
    currentIndex,
    totalSlides,
    goToNextSlide,
    goToPreviousSlide,
    goToSlide,
  } = useSlides({
    slides: opinions,
  });

  // Actualiza el ancho de la ventana al redimensionar
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Condición para mostrar 1 slide si la ventana es < 768px, 2 en caso contrario
  const visibleSlides =
    windowWidth < 550
      ? [opinions[currentIndex]]
      : [opinions[currentIndex], opinions[(currentIndex + 1) % totalSlides]];

  const getInitial = (name: string) => {
    const trimmedName = name.trim();
    return Array.from(trimmedName)[0]?.toUpperCase() ?? "?";
  };

  const getSwipeThreshold = (target: EventTarget | null) => {
    const element =
      target instanceof Element ? target.closest(".opiniones-slider") : null;
    const width = element?.getBoundingClientRect().width ?? 250;

    return Math.min(50, width * 0.2);
  };

  const handlePointerDown = (event: PointerEvent<HTMLDivElement>) => {
    if (event.button !== 0) return;

    dragStartX.current = event.clientX;
    dragCurrentX.current = event.clientX;
    hasNavigated.current = false;
    isPointerDown.current = true;
    setIsDragging(true);
    setIsHovered(true);
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (!isPointerDown.current || hasNavigated.current) return;

    dragCurrentX.current = event.clientX;
    const deltaX = dragCurrentX.current - dragStartX.current;
    const threshold = getSwipeThreshold(event.currentTarget);

    if (Math.abs(deltaX) < threshold) return;

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
    setIsHovered(false);

    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
  };

  useEffect(() => {
    if (!isHovered) {
      const intervalId = setInterval(goToNextSlide, 5000) as NodeJS.Timeout;

      return () => clearInterval(intervalId);
    }
  }, [isHovered, currentIndex]);

  return (
    <div
      className={
        isDragging
          ? "opiniones-slider-container opiniones-slider-container-dragging"
          : "opiniones-slider-container"
      }>
      <div
        className="opiniones-slider"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerEnd}
        onPointerCancel={handlePointerEnd}
        onPointerLeave={handlePointerEnd}>
        <div className="opiniones-container">
          {visibleSlides.map((opinion) => (
            <aside
              key={`${opinion.id}-${opinion.data.name}`}
              className="opinion-container"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}>
              <p className="opinion-opinion">"{opinion.data.opinion}"</p>
              <div className="opinion-person">
                <span className="opinion-avatar">
                  {getInitial(opinion.data.name)}
                </span>
                <div>
                  <h4 className="opinion-name">{opinion.data.name.trim()}</h4>
                  <h5 className="opinion-empresa">{opinion.data.company}</h5>
                </div>
              </div>
            </aside>
          ))}
        </div>
      </div>
      <div className="slider-nav">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <span
            key={index}
            onClick={() => goToSlide(index)}
            className={
              index === currentIndex
                ? `slider-nav-circles slider-nav-circles-active`
                : `slider-nav-circles`
            }></span>
        ))}
      </div>
    </div>
  );
};
