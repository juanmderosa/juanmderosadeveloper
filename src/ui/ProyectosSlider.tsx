import "../styles/slider.css";
import { useSlides } from "../hooks/useSlides";

interface Proyecto {
  id: string;
  titulo: string;
  imagen: ImageMetadata;
  description: string;
  livesite: string;
}
export const ProyectosSlider = ({ projects }: { projects: Proyecto[] }) => {
  const {
    currentIndex,
    goToNextSlide,
    goToPreviousSlide,
    goToSlide,
    totalSlides,
  } = useSlides({
    slides: projects,
  });

  return (
    <div className="proyectos-slider-container">
      <div className="slider-wrapper">
        <div className="slider">
          <img
            id={`slide-${projects[currentIndex].id}`}
            src={projects[currentIndex].imagen.src}
            alt={projects[currentIndex].titulo}
          />
        </div>
        <div className="slider-description-container">
          <p className="project-description">
            {projects[currentIndex].description}
          </p>
          <a
            href={projects[currentIndex].livesite}
            className="visit-site-button">
            Visitar sitio
          </a>
        </div>
      </div>
      <div className="slider-nav">
        <button
          className="left"
          onClick={goToPreviousSlide}>
          prev
        </button>
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
        <button
          className="right"
          onClick={goToNextSlide}>
          next
        </button>
      </div>
    </div>
  );
};
