document.addEventListener("DOMContentLoaded", () => {
  const claveCorrecta = "rosemiliaytrina21";

  // DOM elements
  const loginWrapper = document.getElementById("login-wrapper");
  const cardsWrapper = document.getElementById("cards-wrapper");
  const entrarBtn = document.getElementById("entrarBtn");
  const claveInput = document.getElementById("clave");
  const fleeingButton = document.getElementById("fleeingButton");
  const logoutBtn = document.getElementById("logoutBtn");

  // ---------- LOGIN FUNCTION ----------
  function iniciarSesion() {
    loginWrapper.classList.add("hidden");
    cardsWrapper.classList.remove("hidden");
    fleeingButton.style.display = "none";
    logoutBtn.classList.remove("hidden");

    // Persist login state
    localStorage.setItem("loggedIn", "true");
  }

  function validarLogin() {
    const claveIngresada = claveInput.value.trim().toLowerCase();
    if (claveIngresada === claveCorrecta.toLowerCase()) {
      iniciarSesion();
    } else {
      alert("Clave incorrecta 💔");
      claveInput.value = "";
      claveInput.focus();
    }
  }

  entrarBtn.addEventListener("click", validarLogin);
  claveInput.addEventListener("keydown", e => {
    if (e.key === "Enter") validarLogin();
  });

  // ---------- LOGOUT FUNCTION ----------
  logoutBtn.addEventListener("click", () => {
    // Clear login state
    localStorage.removeItem("loggedIn");

    // Reset UI
    loginWrapper.classList.remove("hidden");
    cardsWrapper.classList.add("hidden");
    fleeingButton.style.display = "block";
    logoutBtn.classList.add("hidden");

    claveInput.value = "";
    claveInput.focus();
  });

  // ---------- STATE PERSISTENCE ON REFRESH ----------
  if (localStorage.getItem("loggedIn") === "true") {
    // If user was logged in before refresh
    iniciarSesion();
  }
});
