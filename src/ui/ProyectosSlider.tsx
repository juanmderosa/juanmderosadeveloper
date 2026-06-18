import "../styles/slider.css";
import "../styles/slidernav.css";
import { useRef, useState, type PointerEvent } from "react";
import { useSlides } from "../hooks/useSlides";
import type { Proyecto } from "../types/types";

interface Props {
  projects: Proyecto[];
  visitLabel: string;
  fallbackTags: string[];
}

export const ProyectosSlider = ({
  projects,
  visitLabel,
  fallbackTags,
}: Props) => {
  const dragStartX = useRef(0);
  const dragCurrentX = useRef(0);
  const isPointerDown = useRef(false);
  const hasDragged = useRef(false);
  const hasNavigated = useRef(false);
  const [isDragging, setIsDragging] = useState(false);

  const {
    currentIndex,
    goToNextSlide,
    goToPreviousSlide,
    goToSlide,
    totalSlides,
  } = useSlides({
    slides: projects,
  });

  const current = projects[currentIndex];
  const tags = current.tags?.length ? current.tags : fallbackTags;

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

  return (
    <div className="proyectos-slider-container">
      <div
        className={
          isDragging
            ? "slider-wrapper slider-wrapper-dragging"
            : "slider-wrapper"
        }
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerEnd}
        onPointerCancel={handlePointerEnd}
        onPointerLeave={handlePointerEnd}>
        <div className="slider">
          <img
            src={current.image.src}
            alt={current.title}
            loading="lazy"
          />
        </div>

        <div className="slider-description-container">
          <div className="project-tags">
            {tags.map((tag) => (
              <span className="chip" key={tag}>
                {tag}
              </span>
            ))}
          </div>
          <h3>{current.title}</h3>
          <p className="project-description">{current.description}</p>
          <a
            href={current.livesite}
            target="_blank"
            rel="noopener noreferrer"
            className="visit-site-button">
            {visitLabel}
          </a>
        </div>
      </div>

      <div className="slider-nav">
        <button
          className="left"
          onClick={goToPreviousSlide}>
          prev
        </button>

        {Array.from({ length: totalSlides }).map((_, i) => (
          <span
            key={i}
            onClick={() => goToSlide(i)}
            className={
              i === currentIndex
                ? "slider-nav-circles slider-nav-circles-active"
                : "slider-nav-circles"
            }
          />
        ))}

        <button
          className="right"
          onClick={goToNextSlide}>
          next
        </button>
      </div>
    </div>
  );
};
