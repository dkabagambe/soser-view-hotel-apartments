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
  // Disable horizontal scrolling on the html and body elements
  document.documentElement.style.overflowX = "hidden";
  document.body.style.overflowX = "hidden";

  // Add touch event listeners to prevent scrolling on touch devices
  let isTouchDevice = "ontouchstart" in document.documentElement;
  if (isTouchDevice) {
    let touchStartX;

    document.addEventListener(
      "touchstart",
      function (event) {
        // Disable horizontal scrolling if the touch starts on the html or body elements
        if (
          event.target === document.documentElement ||
          event.target === document.body
        ) {
          touchStartX = event.touches[0].clientX;
          event.preventDefault();
        }
      },
      { passive: false }
    );

    document.addEventListener(
      "touchmove",
      function (event) {
        let touchMoveX = event.touches[0].clientX;
        let touchDistanceX = touchMoveX - touchStartX;
        if (Math.abs(touchDistanceX) > 10) {
          event.preventDefault();
        }
      },
      { passive: false }
    );
  }
});
