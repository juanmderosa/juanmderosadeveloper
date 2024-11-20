const seccionesOcultas = document.querySelectorAll(".oculto");

const observer = new IntersectionObserver((entradas) => {
  entradas.forEach((entrada) => {
    entrada.target.classList.toggle("mostrar", entrada.isIntersecting);
  }),
    { treshhold: 0, rootMargin: "0px 0px 0px 0px", root: null };
});

seccionesOcultas.forEach((seccion) => {
  observer.observe(seccion);
});

export default observer;
