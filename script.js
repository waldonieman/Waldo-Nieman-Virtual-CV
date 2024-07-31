//Waldo Nieman, 37943278
// script.js
// Here I added extra functionalities such as the progress bar etc.

document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll(".section");

//Add in a funtion bar to have an extra functionality on the website
  // Create and style the progress bar
  const progressBar = document.createElement("div");
  progressBar.id = "progress-bar";
  document.body.appendChild(progressBar);
  progressBar.style.position = "fixed";
  progressBar.style.top = 0;
  progressBar.style.left = 0;
  progressBar.style.height = "5px";
  progressBar.style.backgroundColor = "#4caf50";
  progressBar.style.width = "0%";
  progressBar.style.zIndex = 1000;

  // Add a new class for fade-in animation
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

  // Function to update the progress bar for extra funtionality
  function updateProgressBar() {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      progressBar.style.width = scrollPercent + "%";
  }

  // Initial check for sections in the viewport
  addAnimationClass();
  updateProgressBar();

  // Check for sections in the viewport on scroll, as well as when the page is fully loaded
  window.addEventListener("scroll", () => {
      addAnimationClass();
      updateProgressBar();
  });
  window.addEventListener("load", addAnimationClass);

  // Mobile navigation toggle
  const mobileNavToggle = document.getElementById("mobile-nav-toggle");
  if (mobileNavToggle) {
      const mobileNav = document.querySelector(".mobile-nav");
      mobileNavToggle.addEventListener("click", function () {
          mobileNav.classList.toggle("active");
      });
  }
});
