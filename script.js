// script.js

// ===== Mobile Navigation Toggle =====
const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");
const navIcon = navToggle.querySelector("i");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    // Change icon between menu and close
    if (navMenu.classList.contains("active")) {
      navIcon.classList.remove("bi-list");
      navIcon.classList.add("bi-x");
    } else {
      navIcon.classList.remove("bi-x");
      navIcon.classList.add("bi-list");
    }
  });
}

// ===== Close Menu on Link Click (for mobile) =====
const navLinks = document.querySelectorAll(".nav-menu a");

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    if (navMenu.classList.contains("active")) {
      navMenu.classList.remove("active");
      navIcon.classList.remove("bi-x");
      navIcon.classList.add("bi-list");
    }
  });
});

// ===== Sticky Header on Scroll =====
const header = document.querySelector(".header");
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
});