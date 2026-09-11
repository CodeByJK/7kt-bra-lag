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
