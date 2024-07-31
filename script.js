//Waldo Nieman, 37943278
// script.js

document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll(".section");
  const navLinks = document.querySelectorAll(".nav-link");
  const backToTopButton = document.createElement("button");
  backToTopButton.textContent = "Top";
  backToTopButton.id = "back-to-top";
  document.body.appendChild(backToTopButton);

  // Function to add a class for fade-in animation
  function addAnimationClass() {
      sections.forEach((section) => {
          const sectionTop = section.getBoundingClientRect().top;
          const sectionHeight = section.offsetHeight;
          const pageHeight = document.documentElement.scrollHeight;
          const threshold = window.innerHeight - 290;

          if (
              sectionTop < threshold ||
              window.scrollY + window.innerHeight >= pageHeight - sectionHeight / 2
          ) {
              section.classList.add("animate");
          }
      });
  }

  // Function to highlight the current section in the navigation
  function highlightCurrentSection() {
      let index = sections.length;

      while (--index && window.scrollY + 50 < sections[index].offsetTop) {}

      navLinks.forEach((link) => link.classList.remove("active"));
      navLinks[index].classList.add("active");
  }

  // Function to handle smooth scrolling
  function smoothScroll(event) {
      event.preventDefault();
      const targetId = event.currentTarget.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);

      window.scrollTo({
          top: targetSection.offsetTop,
          behavior: "smooth"
      });
  }

  // Function to show/hide the back-to-top button
  function toggleBackToTopButton() {
      if (window.scrollY > 300) {
          backToTopButton.classList.add("visible");
      } else {
          backToTopButton.classList.remove("visible");
      }
  }

  // Initial check for sections in the viewport
  addAnimationClass();
  highlightCurrentSection();
  toggleBackToTopButton();

  // Event listeners
  window.addEventListener("scroll", () => {
      addAnimationClass();
      highlightCurrentSection();
      toggleBackToTopButton();
  });
  window.addEventListener("load", addAnimationClass);

  navLinks.forEach((link) => link.addEventListener("click", smoothScroll));

  backToTopButton.addEventListener("click", () => {
      window.scrollTo({
          top: 0,
          behavior: "smooth"
      });
  });

  // Mobile navigation toggle
  const mobileNavToggle = document.getElementById("mobile-nav-toggle");
  if (mobileNavToggle) {
      const mobileNav = document.querySelector(".mobile-nav");
      mobileNavToggle.addEventListener("click", function () {
          mobileNav.classList.toggle("active");
      });
  }
});


  