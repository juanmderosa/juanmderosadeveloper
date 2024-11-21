import "../styles/slider.css";
import "../styles/slidernav.css";
import { useSlides } from "../hooks/useSlides";

interface ProyectoData {
  id: string;
  title: string;
  image: string;
  description: string;
  livesite: string;
}

interface Proyecto {
  id: string;
  slug: string;
  data: ProyectoData;
}
export const ProyectosSlider = ({ projects }: any) => {
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
            src={projects[currentIndex].data.image}
            alt={projects[currentIndex].data.title}
          />
        </div>
        <div className="slider-description-container">
          <h3>{projects[currentIndex].data.title}</h3>
          <p className="project-description">
            {projects[currentIndex].data.description}
          </p>
          <a
            href={projects[currentIndex].data?.livesite}
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
