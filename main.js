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

// IntersectionObserver
function onEntry(entry) {
  entry.forEach((change) => {
    if (change.isIntersecting) {
      change.target.classList.add("element-show");
    }
  });
}

let options = {
  threshold: [0.5],
};

let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll(".element-animation");

for (let elm of elements) {
  observer.observe(elm);
}
// /IntersectionObserver

// Modals
let modalImg = document.querySelectorAll(".image-modal");
let closeBtn = document.querySelectorAll(".close");

modalImg.forEach(function (img) {
  img.onclick = function () {
    let modal = img.getAttribute("data-modal");

    document.getElementById(modal).style.display = "block";
  };
});

closeBtn.forEach(function (btn) {
  btn.onclick = function () {
    let modal = btn.getAttribute("data-target");

    document.getElementById(modal).style.display = "none";
  };
});
// /Modals

// Filter
let filterBtns = document.querySelectorAll(".products-cat__list button");
let filterProducts = document.querySelectorAll(".products .product");

for (let i = 0; i < filterBtns.length; i++) {
  filterBtns[i].addEventListener("click", filterProduct);
}

function setActiveBtn(e) {
  filterBtns.forEach((btn) => {
    btn.classList.remove("btn-clicked");
  });

  e.target.classList.add("btn-clicked");
}

function filterProduct(e) {
  setActiveBtn(e);

  filterProducts.forEach((product) => {
    product.classList.remove("product-shrink");
    product.classList.add("product-expand");

    const productType = parseInt(product.dataset.product);
    const btnType = parseInt(e.target.dataset.btn);

    if (productType != btnType) {
      product.classList.remove("product-expand");
      product.classList.add("product-shrink");
    }
  });
}
// /Filter
