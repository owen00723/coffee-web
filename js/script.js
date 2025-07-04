const searchInput = document.getElementById("search");
const coffeeCards = document.querySelectorAll(".coffee-card");

searchInput.addEventListener("input", () => {
  const keyword = searchInput.value.toLowerCase();
  coffeeCards.forEach(card => {
    const name = card.querySelector("h3").textContent.toLowerCase();
    card.classList.toggle("hidden", !name.includes(keyword));
  });
});
