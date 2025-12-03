import "../styles/slider.css";
import "../styles/slidernav.css";
import { useSlides } from "../hooks/useSlides";

interface ProyectoImage {
  src: string;
  width: number;
  height: number;
  format: string;
}

interface ProyectoData {
  id: string;
  title: string;
  image: ProyectoImage;
  description: string;
  livesite: string;
}

interface Proyecto {
  id: string;
  slug: string;
  data: ProyectoData;
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

  const current = projects[currentIndex].data;

  return (
    <div className="proyectos-slider-container">
      <div className="slider-wrapper">
        <div className="slider">
          <img
            src={current.image.src}
            alt={current.title}
            loading="lazy"
          />
        </div>

        <div className="slider-description-container">
          <h3>{current.title}</h3>
          <p className="project-description">{current.description}</p>
          <a
            href={current.livesite}
            target="_blank"
            rel="noopener noreferrer"
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
