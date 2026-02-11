window.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("fleeingButton");
  if (!btn) return;

  btn.style.position = "fixed";
  btn.style.zIndex = "9999";

  const margin = 20;

  function randomPos() {
    const rect = btn.getBoundingClientRect();
    return {
      x: Math.random() * (window.innerWidth - rect.width - margin * 2) + margin,
      y: Math.random() * (window.innerHeight - rect.height - margin * 2) + margin
    };
  }

  function move() {
    const { x, y } = randomPos();
    btn.style.left = `${x}px`;
    btn.style.top = `${y}px`;
  }

  move();

  btn.addEventListener("mouseenter", move);
  btn.addEventListener("touchstart", move);

  // nunca permitir click
  btn.addEventListener("click", e => {
    e.preventDefault();
    move();
  });
});
