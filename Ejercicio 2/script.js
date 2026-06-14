const caja = document.getElementById("mi-caja");
const botonCaja = document.getElementById("btn-estilo-caja");
botonCaja.addEventListener("click", () => {
  caja.classList.toggle("caja-modificada");
  if (caja.classList.contains("caja-modificada")) {
    caja.textContent = "¡Estilo modificado!";
  } else {
    caja.textContent = "Caja";
  }
});
