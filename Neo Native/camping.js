const revealItems = document.querySelectorAll("[data-reveal]");
const glow = document.querySelector(".sun-glow");
const modal = document.querySelector("#plant-modal");
const modalTitle = document.querySelector("#plant-title");
const modalWhy = document.querySelector("#plant-why");
const modalUses = document.querySelector("#plant-uses");
const modalCare = document.querySelector("#plant-care");
const plantButtons = document.querySelectorAll(".plant-grid .plant");

const plantData = {
  helechos: {
    title: "Helechos",
    why: "Son ideales para sombra y humedad constante, perfectos para muros con poca luz directa.",
    uses: "Aportan volumen y textura, mejoran la humedad ambiental y dan un aspecto frondoso.",
    care: "Riego frecuente sin encharcar, sustrato húmedo y luz indirecta.",
  },
  suculentas: {
    title: "Suculentas",
    why: "Requieren poca agua y resisten bien en módulos con drenaje eficiente.",
    uses: "Crean patrones visuales y requieren poco mantenimiento.",
    care: "Riego espaciado, mucha luz y sustrato arenoso.",
  },
  pothos: {
    title: "Pothos",
    why: "Muy resistente y adaptable, crece rápido en interior.",
    uses: "Purifica el aire y cubre superficies con sus enredaderas.",
    care: "Riego moderado, luz indirecta y poda ocasional.",
  },
  hiedra: {
    title: "Hiedra",
    why: "Se adapta a climas variados y se fija bien en estructuras verticales.",
    uses: "Cubre muros rápidamente y ayuda al aislamiento térmico.",
    care: "Riego regular, poda para controlar crecimiento y luz media.",
  },
  lavanda: {
    title: "Lavanda",
    why: "Tolera el sol directo y aporta aroma natural.",
    uses: "Atrae polinizadores y se usa en infusiones o aromaterapia.",
    care: "Riego bajo, mucho sol y sustrato con buen drenaje.",
  },
  menta: {
    title: "Menta",
    why: "Crece rápido y es ideal para huertos verticales.",
    uses: "Uso culinario y medicinal, aroma fresco.",
    care: "Riego frecuente, sombra parcial y recorte continuo.",
  },
  fresas: {
    title: "Fresas",
    why: "Se desarrollan bien en bolsillos o módulos pequeños.",
    uses: "Fruta comestible, ideal para huertos urbanos.",
    care: "Riego constante, sol parcial y sustrato rico en nutrientes.",
  },
  lechuga: {
    title: "Lechuga",
    why: "Ciclo corto y fácil de cultivar en vertical.",
    uses: "Hortaliza para consumo rápido y continuo.",
    care: "Riego regular, sombra ligera y sustrato húmedo.",
  },
};

const revealOnScroll = () => {
  const trigger = window.innerHeight * 0.85;
  revealItems.forEach((item) => {
    const { top } = item.getBoundingClientRect();
    if (top < trigger) {
      item.classList.add("show");
    }
  });
};

const parallaxSun = () => {
  if (!glow) return;
  window.addEventListener("mousemove", (event) => {
    const offsetX = (event.clientX / window.innerWidth - 0.5) * 30;
    const offsetY = (event.clientY / window.innerHeight - 0.5) * 30;
    glow.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
  });
};

const openModal = (key) => {
  if (!modal || !plantData[key]) return;
  const data = plantData[key];
  modalTitle.textContent = data.title;
  modalWhy.textContent = `Por qué se puede plantar: ${data.why}`;
  modalUses.textContent = `Usos: ${data.uses}`;
  modalCare.textContent = `Cuidados: ${data.care}`;
  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
};

const closeModal = () => {
  if (!modal) return;
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
};

plantButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const key = button.dataset.plant;
    openModal(key);
  });
});

document.addEventListener("click", (event) => {
  const target = event.target;
  if (!target) return;
  if (target.matches("[data-close='modal']")) {
    closeModal();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeModal();
  }
});

revealOnScroll();
parallaxSun();
window.addEventListener("scroll", revealOnScroll);
