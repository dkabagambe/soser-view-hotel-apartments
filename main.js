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

// Fetch Uganda (Kampala) temperature from Open-Meteo
async function updateUgandaTemp() {
  const el = document.getElementById("uganda-weather");
  if (!el) return;
  try {
    const res = await fetch(
      "https://api.open-meteo.com/v1/forecast?latitude=0.3476&longitude=32.5825&current_weather=true"
    );
    const data = await res.json();
    el.textContent = data.current_weather.temperature + "°C";
  } catch {
    el.textContent = "--°C";
  }
}

updateUgandaTemp();
setInterval(updateUgandaTemp, 10 * 60 * 1000); // refresh every 10 min

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
