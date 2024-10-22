import { useEffect, useState } from "react";
import "../styles/opinionesSlider.css";
import { useSlides } from "../hooks/useSlides";

interface Opinion {
  nombre: string;
  empresa: string;
  opinion: string;
}

export const OpinionSlider = ({ opiniones }: { opiniones: Opinion[] }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { currentIndex, totalSlides, goToNextSlide, goToSlide, visibleSlides } =
    useSlides({ slides: opiniones });

  useEffect(() => {
    if (!isHovered) {
      const intervalId = setInterval(goToNextSlide, 5000);

      return () => clearInterval(intervalId);
    }
  }, [isHovered, currentIndex]);

  return (
    <div className="opiniones-slider-container">
      <div className="opiniones-slider">
        <div className="opiniones-container">
          {visibleSlides.map((opinion, index) => (
            <aside
              key={index}
              className="opinion-container"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}>
              <h4 className="opinion-name">{opinion.nombre}</h4>
              <h5 className="opinion-empresa">{opinion.empresa}</h5>
              <p className="opinion-opinion">{opinion.opinion}</p>
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
