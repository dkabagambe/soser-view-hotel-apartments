const hamburger = document.getElementById("hamburger");
hamburger.addEventListener("click", function (e) {
  const ul = document.querySelector("nav>ul");
  ul.classList.toggle("show");
  hamburger.classList.toggle("cross");
});

// this is the javascript for the time
function getUgandaTime() {
  const options = {
    timeZone: "Africa/Kampala",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  };
  return new Date().toLocaleTimeString("en-US", options);
}

// Update Uganda time every second
function updateUgandaTime() {
  const ugandaTimeElement = document.getElementById("uganda-time");
  if (ugandaTimeElement) {
    ugandaTimeElement.textContent = getUgandaTime();
  }
}

// Call updateUgandaTime function every second
setInterval(updateUgandaTime, 1000);

// this is the javascript for button up
//Get the button
const mybutton = document.getElementById("myBtn");

// Show the button when the user scrolls down 20px from the top of the document
window.addEventListener("scroll", function () {
  if (window.pageYOffset > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
});

// Scroll to the top of the document when the user clicks on the button
mybutton.addEventListener("click", function () {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});

// this is setting for disabling the scroll
// Wait for the DOM to load before adding event listeners
document.addEventListener("DOMContentLoaded", function () {
  // Track the starting touch position
  let startX;

  // Add a touchstart event listener to track the starting touch position
  document.addEventListener("touchstart", function (event) {
    startX = event.touches[0].clientX;
  });

  // Add a touchmove event listener to prevent horizontal scrolling
  document.addEventListener(
    "touchmove",
    function (event) {
      // Get the distance moved since the touchstart event
      const distanceX = event.touches[0].clientX - startX;

      // If the distance moved is greater than 10px, prevent scrolling horizontally
      if (Math.abs(distanceX) > 10) {
        event.preventDefault();
      }
    },
    { passive: false }
  );
});
