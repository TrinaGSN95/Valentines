document.addEventListener("DOMContentLoaded", () => {


  // -------- MODAL AMALIA --------
  const amaliaLink = document.getElementById("amaliaLink");
  const amaliaModal = document.getElementById("amaliaModal");
  const closeAmalia = document.getElementById("closeAmalia");

  amaliaLink.addEventListener("click", (e) => {
    e.preventDefault();
    amaliaModal.classList.remove("hidden");
  });

  closeAmalia.addEventListener("click", () => {
    amaliaModal.classList.add("hidden");
  });

  amaliaModal.addEventListener("click", (e) => {
    if (e.target === amaliaModal) {
      amaliaModal.classList.add("hidden");
    }
  });

  // -------- BOTÓN ROMPER --------
  fleeingButton.style.position = "fixed";
  fleeingButton.style.zIndex = "9999";

  function moveButton() {
    const rect = fleeingButton.getBoundingClientRect();
    const maxX = window.innerWidth - rect.width - 10;
    const maxY = window.innerHeight - rect.height - 10;

    const x = Math.random() * maxX;
    const y = Math.random() * maxY;

    fleeingButton.style.left = `${x}px`;
    fleeingButton.style.top = `${y}px`;
  }

  moveButton(); // posición inicial

  fleeingButton.addEventListener("mouseenter", moveButton);
});
