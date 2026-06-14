const contadorPantalla = document.getElementById("contador");
const btnSumar = document.getElementById("btn-sumar");
const btnRestar = document.getElementById("btn-restar");
const btnReiniciar = document.getElementById("btn-reiniciar");

let numero = 0;
btnSumar.addEventListener("click", () => {
  numero++;
  contadorPantalla.textContent = numero;
  actualizarColor();
});
btnRestar.addEventListener("click", () => {
  numero--;
  contadorPantalla.textContent = numero;
  actualizarColor();
});
btnReiniciar.addEventListener("click", () => {
  numero = 0;
  contadorPantalla.textContent = numero;
  actualizarColor();
});
function actualizarColor() {
  if (numero > 0) {
    contadorPantalla.className = "positivo";
  } else if (numero < 0) {
    contadorPantalla.className = "negativo";
  } else {
    contadorPantalla.className = "neutro";
  }
}
