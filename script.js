// =======================
// MOBILE MENU TOGGLE
// =======================
const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector("nav ul");

menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});


// =======================
// HERO SLIDER (AUTO)
// =======================
const heroSwiper = new Swiper(".heroSwiper", {
  loop: true,
  autoplay: {
    delay: 4000, // 4 sec me image change
    disableOnInteraction: false,
  },
  speed: 1000,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});


// =======================
// BOOKING FORM → WHATSAPP
// =======================
const form = document.querySelector(".booking-form");

if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    let name = this.querySelector("input[type='text']").value;
    let phone = this.querySelector("input[type='tel']").value;
    let message = this.querySelector("textarea").value;

    let url = "https://wa.me/919829498001?text="
      + "Hello RDR Tour & Travels%0A"
      + "Name: " + name + "%0A"
      + "Phone: " + phone + "%0A"
      + "Travel Plan: " + message;

    window.open(url, "_blank");
  });
}


// =======================
// SMOOTH SCROLL (OPTIONAL)
// =======================
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    target.scrollIntoView({
      behavior: "smooth"
    });
  });
});
// ABOUT SLIDER
const aboutSwiper = new Swiper(".aboutSwiper", {
  loop: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
// ABOUT SLIDER
// =======================
const reviewSlider = new Swiper(".reviewSwiper", {
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  speed: 800,
  spaceBetween: 20,
  pagination: {
    el: ".reviewSwiper .swiper-pagination",
    clickable: true,
  },
});