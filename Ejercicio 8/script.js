const encabezados = document.querySelectorAll(".acordeon-header");
encabezados.forEach((encabezado) => {
  encabezado.addEventListener("click", () => {
    const itemPadre = encabezado.parentElement;
    itemPadre.classList.toggle("activo");
  });
});
