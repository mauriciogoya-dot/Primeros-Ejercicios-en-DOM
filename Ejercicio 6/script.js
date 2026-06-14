const botonVerMas = document.getElementById("btn-ver-mas");
const botonCerrar = document.getElementById("btn-cerrar");
const contendorOscuro = document.getElementById("modal-overlay");
botonVerMas.addEventListener("click", () => {
  contendorOscuro.classList.add("visible");
});
botonCerrar.addEventListener("click", () => {
  contendorOscuro.classList.remove("visible");
});
// Cierre opcional: si hace clic en el fondo oscuro exterior, también se cierra
contendorOscuro.addEventListener("click", (e) => {
  if (e.target === contendorOscuro) {
    contendorOscuro.classList.remove("visible");
  }
});
