// STICKY HEADER EFFECT

const header = document.querySelector(".header");

const header = document.querySelector(".header");

let lastScroll = 0;

window.addEventListener("scroll", () => {

  const currentScroll = window.pageYOffset;

  // SHADOW EFFECT

  if (currentScroll > 50) {

    header.style.boxShadow =
      "0 2px 15px rgba(0,0,0,0.08)";

  } else {

    header.style.boxShadow = "none";

  }

  // HIDE / SHOW NAVBAR

  if (currentScroll > lastScroll &&
      currentScroll > 100) {

    header.style.transform = "translateY(-100%)";

  } else {

    header.style.transform = "translateY(0)";
  }

  lastScroll = currentScroll;

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
// MOBILE MENU

const hamburger = document.querySelector(".hamburger");

const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {

  navLinks.classList.toggle("active");

});