const hamburger = document.getElementById("hamburger");
hamburger.addEventListener("click", function (e) {
  const ul = document.querySelector("nav>ul");
  ul.classList.toggle("show");
  hamburger.classList.toggle("cross");
});
// ===========this is the next image slider==========
// get the element by its ID
const timeElement = document.getElementById("current-time");

// update the time every second
setInterval(() => {
  const now = new Date();
  const timeString = now.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });
  timeElement.innerText = timeString;
}, 1000);
