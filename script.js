// Hämta alla element vi behöver från HTML
const popup = document.getElementById('popup');
const popupText = document.getElementById('popup-text');
const closeBtn = document.getElementById('close-btn');
const personButtons = document.querySelectorAll('.person-btn');

// Lägg till klick-lyssnare på varje person-knapp
personButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Hämta texten från data-info
    const infoText = button.getAttribute('data-info');
    
    // Lägg in texten i pop-upen och visa den
    popupText.textContent = infoText;
    popup.showModal();
  });
});

// Stäng pop-upen när man klickar på Stäng-knappen
closeBtn.addEventListener('click', () => {
  popup.close();
});
