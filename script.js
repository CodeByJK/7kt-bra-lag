// Hämta alla element vi behöver från HTML
const popup = document.getElementById("popup");
const popupText = document.getElementById("popup-text");
const closeBtn = document.getElementById("close-btn");
const personButtons = document.querySelectorAll(".person-btn");

const cursorDot = document.querySelector(".cursor-dot");
const cursorRing = document.querySelector(".cursor-ring");
const interactiveElements = document.querySelectorAll("a, button");

if (cursorDot && cursorRing) {
  window.addEventListener("pointermove", (event) => {
    cursorDot.style.left = `${event.clientX}px`;
    cursorDot.style.top = `${event.clientY}px`;
    cursorRing.animate(
      {
        left: `${event.clientX}px`,
        top: `${event.clientY}px`,
      },
      { duration: 180, fill: "forwards", easing: "ease-out" },
    );
  });

  interactiveElements.forEach((element) => {
    element.addEventListener("pointerenter", () => {
      document.body.classList.add("cursor-hover");
    });

    element.addEventListener("pointerleave", () => {
      document.body.classList.remove("cursor-hover");
    });
  });
}

// Lägg till klick-lyssnare på varje person-knapp
personButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Hämta texten från data-info
    const infoText = button.getAttribute("data-info");

    // Lägg in texten i pop-upen och visa den
    popupText.textContent = infoText;
    popup.showModal();
  });
});

// Stäng pop-upen när man klickar på Stäng-knappen
closeBtn.addEventListener("click", () => {
  popup.close();
});

// 1. Deklarera räknaren UTANFÖR klickfunktionen så den inte nollställs
let count = 0;

// 2. Hämta HTML-elementen
const clickBtn = document.getElementById("click-btn");
const countDisplay = document.getElementById("click-count");

// 3. Lägg till en klick-lyssnare på knappen
clickBtn.addEventListener("click", () => {
  // Öka räknaren med 1
  count++;

  // Uppdatera texten på sidan med den nya siffran
  countDisplay.textContent = count;
});

const getTime = new Date().getTime;
const DestineTime = getTime + 10000;

const timerInterval = setInterval(function () {
  const difference = DestineTime - new Date().getTime();

  if (difference <= 0) {
    clearInterval(timerInterval);
    const display = document.getElementById("countdown");
    display.innerHTML = "Dags för redovisning!";
    display.classList.add("expired-message");
    return;
  }
});
