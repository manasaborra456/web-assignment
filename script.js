// STICKY HEADER EFFECT

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

  if (window.scrollY > 50) {

    header.style.boxShadow = "0 2px 15px rgba(0,0,0,0.08)";
    header.style.padding = "18px 0";

  } else {

    header.style.boxShadow = "none";
    header.style.padding = "25px 0";

  }

});


// SMOOTH BUTTON HOVER INTERACTION

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {

  button.addEventListener("mouseenter", () => {

    button.style.transform = "translateY(-3px)";

  });

  button.addEventListener("mouseleave", () => {

    button.style.transform = "translateY(0px)";

  });

});


// SIMPLE PAGE LOAD ANIMATION

window.addEventListener("load", () => {

  document.body.style.opacity = "1";

});
// CAROUSEL FUNCTIONALITY

const track = document.querySelector(".carousel-track");

const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");

let scrollAmount = 0;

nextBtn.addEventListener("click", () => {

  scrollAmount += 350;

  track.scrollTo({
    left: scrollAmount,
    behavior: "smooth"
  });

});

prevBtn.addEventListener("click", () => {

  scrollAmount -= 350;

  if (scrollAmount < 0) {
    scrollAmount = 0;
  }

  track.scrollTo({
    left: scrollAmount,
    behavior: "smooth"
  });

});