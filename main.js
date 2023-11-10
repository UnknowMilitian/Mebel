const navbarBar = document.querySelector(".bar");
const navbarContent = document.querySelector(".navbar-content");
const navbarHide = document.querySelector(".hide");

navbarBar.addEventListener("click", () => {
  navbarContent.classList.toggle("show");
});

// Splide
let splide = new Splide(".splide", {
  type: "loop",
  perPage: 6,
  perMove: 1,
  gap: "7rem",
  loop: true,
  arrows: false,
  pagination: false,
  autoplay: true,

  breakpoints: {
    1000: {
      perPage: 4,
      gap: "4rem",
    },

    800: {
      perPage: 3,
      gap: "6rem",
    },

    800: {
      perPage: 3,
      gap: "6rem",
    },

    500: {
      perPage: 2,
      gap: "6rem",
    },
  },
});

splide.mount();
// /Splide
