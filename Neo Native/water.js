const orbContainer = document.querySelector(".aero-orbs");
const revealTargets = document.querySelectorAll("[data-reveal]");

const createOrbs = () => {
  if (!orbContainer) return;

  const orbCount = 8;
  for (let i = 0; i < orbCount; i += 1) {
    const orb = document.createElement("div");
    orb.className = "aero-orb";
    const size = 120 + Math.random() * 200;
    orb.style.width = `${size}px`;
    orb.style.height = `${size}px`;
    orb.style.top = `${Math.random() * 110 - 10}%`;
    orb.style.left = `${Math.random() * 110 - 10}%`;
    orb.style.animationDelay = `${Math.random() * 6}s`;
    orbContainer.appendChild(orb);
  }
};

const revealOnScroll = () => {
  const trigger = window.innerHeight * 0.85;
  revealTargets.forEach((target) => {
    const { top } = target.getBoundingClientRect();
    if (top < trigger) {
      target.classList.add("reveal");
    }
  });
};

const parallaxGlow = () => {
  const glow = document.querySelector(".aero-glow");
  if (!glow) return;

  window.addEventListener("mousemove", (event) => {
    const x = (event.clientX / window.innerWidth) * 100;
    const y = (event.clientY / window.innerHeight) * 100;
    glow.style.background = `radial-gradient(circle at ${x}% ${y}%, rgba(255, 255, 255, 0.55), transparent 55%)`;
  });
};

createOrbs();
revealOnScroll();
parallaxGlow();
window.addEventListener("scroll", revealOnScroll);
