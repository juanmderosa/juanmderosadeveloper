const sections = document.querySelectorAll(".oculto");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    entry.target.classList.toggle("mostrar", entry.isIntersecting);
  }),
    { treshhold: 0, rootMargin: "0px 0px 0px 0px", root: null };
});

sections.forEach((section) => {
  observer.observe(section);
});

export default observer;
