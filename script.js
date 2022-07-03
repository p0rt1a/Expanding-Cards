const cards = document.querySelectorAll(".card");

cards.forEach((card) => {
  card.addEventListener("click", () => {
    removeActiveClasses(cards);
    card.classList.add("active");
  });
});

function removeActiveClasses(cards) {
  cards.forEach((card) => {
    card.classList.remove("active");
  });
}
