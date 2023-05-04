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
const scrollToTopButton = document.getElementById("scroll-to-top");

scrollToTopButton.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});
