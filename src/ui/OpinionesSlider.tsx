import { useEffect, useState } from "react";
import "../styles/opinionesSlider.css";
import "../styles/slidernav.css";
import { useSlides } from "../hooks/useSlides";

interface OpinionData {
  name: string;
  company: string;
  opinion: string;
}
interface Opinion {
  id: string;
  slug: string;
  data: OpinionData;
}

export const OpinionSlider = ({ opinions }: { opinions: Opinion[] }) => {
  const [isHovered, setIsHovered] = useState(false);

  const [windowWidth, setWindowWidth] = useState(window.innerWidth); // Estado para detectar ancho de la pantalla

  const { currentIndex, totalSlides, goToNextSlide, goToSlide } = useSlides({
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

  useEffect(() => {
    if (!isHovered) {
      const intervalId = setInterval(goToNextSlide, 5000) as NodeJS.Timeout;

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
              <h4 className="opinion-name">{opinion.data.name}</h4>
              <h5 className="opinion-empresa">{opinion.data.company}</h5>
              <p className="opinion-opinion">{opinion.data.opinion}</p>
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
