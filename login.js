document.addEventListener("DOMContentLoaded", () => {
  // -------- CONFIG ----------
  const claveCorrecta = "rosemiliaytrina21";
  const mensajes = {
    14: "Feliz San Valentín, amor. Admiro tu mente brillante que entiende emociones ajenas y tu disciplina que transforma tu propio cuerpo. Eres fortaleza y ternura al mismo tiempo… y yo tengo la suerte de amarte.",
    15: "Amo que trabajas tanto en ti como en nosotras como relación. Me motivas todos los dias a ser una mejor version para mí, para nosotras y quienes nos rodean💕",
    16: "El amor no es necesidad, es elección… y cada día vuelvo a elegirte, incluso sin darme cuenta porque celebro cada paso que doy a tu lado",
    17: "Mientras ayudas a otros a entender su mente, yo intento entender cómo tuve tanta suerte de compartir mi vida contigo mi Nonna. 💓",
    18: "tu cuerpo me vuelve loca, pero me desarma tu inteligencia. Eres hermosa por fuera, profunda, analítica y brillante.🥰",
    19: "Nuestro amor huele a maletas abiertas, playlists en el carro y planes que terminan siendo perfectos. Llenos de aprendizaje, besos y siempre un hogar al cual regresar",
    20: "Me encanta cuando te desinhibes conmigo… cuando dejas a un lado racional y me miras con esa intensidad que dice todo sin palabras. Verte entregarte así, libre y segura, me vuelve loca.",
    21: "Hoy cumplo años… pero el mejor regalo lo tengo todos los días cuando te miro y recuerdo que te amo. Que la vida me regale muchos años más, pero que todos me encuentren a tu lado."
  };

  // -------- DOM ----------
  const loginWrapper = document.getElementById("login-wrapper");
  const cardsWrapper = document.getElementById("cards-wrapper");
  const cardsGrid = document.getElementById("cardsGrid");
  const entrarBtn = document.getElementById("entrarBtn");
  const claveInput = document.getElementById("clave");
  const fleeingButton = document.getElementById("fleeingButton");

  // ---------- CHECK LOGIN ON REFRESH ----------
if (localStorage.getItem("loggedIn") === "true") {
  loginWrapper.classList.add("hidden");
  cardsWrapper.classList.remove("hidden");
  fleeingButton.style.display = "none";
  generarCartas(); // Show the cards immediately
}
  // -------- LOGIN ----------
  function validarLogin() {
    const claveIngresada = claveInput.value.trim().toLowerCase();

    if (claveIngresada === claveCorrecta.toLowerCase()) {
     loginWrapper.classList.add("hidden");
      cardsWrapper.classList.remove("hidden");  // Muestra las cartas
      fleeingButton.style.display = "none";     // Desaparece botón "Romper"


      generarCartas(); // Genera cartas
    } else {
      alert("Clave incorrecta 💔");
      claveInput.value = "";
      claveInput.focus();
    }
  }

  entrarBtn.addEventListener("click", validarLogin);

  claveInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") validarLogin();
  });

  // -------- GENERAR CARTAS ----------
  function generarCartas() {
    cardsGrid.innerHTML = ""; // Limpiar grid
    const hoy = new Date().getDate();

    for (let dia = 14; dia <= 21; dia++) {
      const card = document.createElement("div");
      card.classList.add("card");
      if (dia > hoy) card.classList.add("locked");

      const cardInner = document.createElement("div");
      cardInner.classList.add("card-inner");

      const cardFront = document.createElement("div");
      cardFront.classList.add("card-front");
      cardFront.textContent = `Día ${dia}`;
      if (dia > hoy) cardFront.textContent += " 🔒";

      const cardBack = document.createElement("div");
      cardBack.classList.add("card-back");
      cardBack.textContent = mensajes[dia] || "Un mensaje especial 💌";

      cardInner.appendChild(cardFront);
      cardInner.appendChild(cardBack);
      card.appendChild(cardInner);

      // Solo se puede girar si no está bloqueada
      if (dia <= hoy) {
        card.addEventListener("click", () => {
          card.classList.toggle("flipped");
        });
      }

      cardsGrid.appendChild(card);
    }
  }
});
