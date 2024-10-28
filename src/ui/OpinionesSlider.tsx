import { useEffect, useState } from "react";
import "../styles/opinionesSlider.css";
import "../styles/slidernav.css";
import { useSlides } from "../hooks/useSlides";

interface Opinion {
  nombre: string;
  empresa: string;
  opinion: string;
}

export const OpinionSlider = ({ opiniones }: { opiniones: Opinion[] }) => {
  const [isHovered, setIsHovered] = useState(false);
  /*   const { currentIndex, totalSlides, goToNextSlide, goToSlide } = useSlides({
    slides: opiniones,
  });

  const visibleSlides = [
    opiniones[currentIndex],
    opiniones[(currentIndex + 1) % totalSlides],
  ]; */

  const [windowWidth, setWindowWidth] = useState(window.innerWidth); // Estado para detectar ancho de la pantalla

  const { currentIndex, totalSlides, goToNextSlide, goToSlide } = useSlides({
    slides: opiniones,
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
      ? [opiniones[currentIndex]]
      : [opiniones[currentIndex], opiniones[(currentIndex + 1) % totalSlides]];

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
