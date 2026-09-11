// Hämta alla element vi behöver från HTML
const popup = document.getElementById("popup");
const popupText = document.getElementById("popup-text");
const closeBtn = document.getElementById("close-btn");
const personButtons = document.querySelectorAll(".person-btn");
const quoteText = document.getElementById("quote-text");
const newQuoteButton = document.getElementById("new-quote-btn");

const memberQuotes = [
  { name: "Oliver", quote: "En vacker dag du och Jag, vi har det bra." },
  { name: "Erico", quote: "Nära skjuter ingen hare!" },
  { name: "Hugo", quote: "Chips är Bra!" },
  { name: "Johanna", quote: "Gräset inte alltid grönare på andra sidan." },
  { name: "Christian", quote: '"Cash Me Ousside / How Bow Dah".' },
];

let currentQuoteIndex = -1;

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

newQuoteButton.addEventListener("click", () => {
  let nextQuoteIndex;

  do {
    nextQuoteIndex = Math.floor(Math.random() * memberQuotes.length);
  } while (nextQuoteIndex === currentQuoteIndex);

  currentQuoteIndex = nextQuoteIndex;
  const selectedQuote = memberQuotes[currentQuoteIndex];
  quoteText.textContent = `${selectedQuote.name}: ${selectedQuote.quote}`;
  launchConfetti(newQuoteButton);
});

function launchConfetti(button) {
  const colors = ["#f94144", "#f9c74f", "#43aa8b", "#277da1", "#f3722c"];
  const buttonPosition = button.getBoundingClientRect();

  for (let index = 0; index < 28; index += 1) {
    const piece = document.createElement("span");
    piece.className = "confetti-piece";
    piece.style.left = `${buttonPosition.left + buttonPosition.width / 2}px`;
    piece.style.top = `${buttonPosition.top + buttonPosition.height / 2}px`;
    piece.style.backgroundColor = colors[index % colors.length];
    piece.style.setProperty("--confetti-x", `${Math.random() * 240 - 120}px`);
    piece.style.setProperty("--confetti-y", `${Math.random() * 220 + 80}px`);
    piece.style.setProperty(
      "--confetti-rotation",
      `${Math.random() * 720 - 360}deg`,
    );
    document.body.appendChild(piece);

    piece.addEventListener("animationend", () => {
      piece.remove();
    });
  }
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

// Easter egg
document.addEventListener("keydown", function (event) {
  if (event.key.toLowerCase() === "r") {
    document.getElementById("råtta").style.display = "block";
  }
});
