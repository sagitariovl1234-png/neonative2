const buttons = document.querySelectorAll(".nav-btn");
const cards = document.querySelectorAll(".glass-card");

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    const section = btn.dataset.section;

    cards.forEach(card => {
      card.classList.remove("active");
    });

    document.getElementById(section).classList.add("active");
  });
});
