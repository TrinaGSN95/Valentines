document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("clave");
  const eye = document.getElementById("togglePassword");

  if (!input || !eye) return;

  eye.addEventListener("click", () => {
    const isPassword = input.type === "password";
    input.type = isPassword ? "text" : "password";
    eye.textContent = isPassword ? "🙈" : "👁️";
  });
});
