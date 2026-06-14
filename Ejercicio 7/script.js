// 1. Seleccionamos todos los botones y todas las secciones de contenido
const botones = document.querySelectorAll(".btn-tab");
const secciones = document.querySelectorAll(".tab-seccion");

// 2. Recorremos los botones para escuchar los clics
botones.forEach((boton) => {
  boton.addEventListener("click", () => {
    // PASO A: Limpiar clase 'activo' en botones y ponérsela a este botón
    botones.forEach((b) => b.classList.remove("activo"));
    boton.classList.add("activo");

    // PASO B: Capturar el valor del atributo data-tab usando dataset
    const categoria = boton.dataset.tab;

    // PASO C: Limpiar la clase 'visible' de TODAS las secciones antes de mostrar la correcta
    // (Acá tenés que hacer un forEach recorriendo 'secciones' y removiendo 'visible')
    secciones.forEach((seccion) => {
      seccion.classList.remove("visible");
    });
    // PASO D: Seleccionar la sección que tenga el ID igual a la variable 'categoria'
    // y agregarle la clase 'visible'
    document.getElementById(categoria).classList.add("visible");
  });
});
