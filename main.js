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
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
