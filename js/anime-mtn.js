document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger);

  let tl = gsap.timeline();

  tl.from(".js-hero", {
    x: -100,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
  });
  tl.from(".js-categories", {
    x: -100,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
  });
  tl.from(
    ".js-destinations",
    {
      x: -100,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
    },
    "<"
  );
  gsap.from(".js-recently", {
    scrollTrigger: ".js-recently",
    x: -100,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
  });
  gsap.from(".js-packages", {
    scrollTrigger: ".js-packages",
    x: -100,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
  });
  gsap.from(".js-honeymoon", {
    scrollTrigger: ".js-honeymoon",
    x: -100,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
  });
});
