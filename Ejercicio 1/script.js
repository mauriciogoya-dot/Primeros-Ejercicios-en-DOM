const titulo = document.getElementById("titulo-principal");
const boton = document.getElementById("btn-cambiar");
boton.addEventListener("click", () => {
  titulo.textContent = "Título modificado desde JavaScript";
});
