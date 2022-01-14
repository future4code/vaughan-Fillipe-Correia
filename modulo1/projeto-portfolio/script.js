/* ScrollReveal: Mostrar elementos quando der scroll na página */
const scrollReveal = ScrollReveal({
  origin: "top",
  distance: "30px",
  duration: 700,
  reset: true,
});

scrollReveal.reveal(
  `#about-me .image, #about-me p,
    #about .image, #about .text,
    #work-experience, #academic-experience,
    #projects, #hard-skills,
    #contact,#social-media,
    footer p
    `,
  { interval: 100 }
);
