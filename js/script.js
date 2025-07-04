const searchInput = document.getElementById("search");
const coffeeCards = document.querySelectorAll(".coffee-card");

if (searchInput) {
  searchInput.addEventListener("input", () => {
    const keyword = searchInput.value.toLowerCase();
    coffeeCards.forEach(card => {
      const name = card.querySelector("h3").textContent.toLowerCase();
      card.classList.toggle("hidden", !name.includes(keyword));
    });
  });
}

const toggleButton = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (toggleButton && navLinks) {
  toggleButton.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
}

