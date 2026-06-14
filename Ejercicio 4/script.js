const inputTarea = document.getElementById("inpt-tarea");
const btnAgregar = document.getElementById("btn-agregar");
const listaTareas = document.getElementById("lista-tareas");
btnAgregar.addEventListener("click", () => {
  const tarea = inputTarea.value.trim();
  if (tarea === "") {
    return;
  }
  const nuevoLi = document.createElement("li");
  nuevoLi.textContent = tarea + " ";
  const botonEliminar = document.createElement("button");
  botonEliminar.textContent = "Eliminar";
  botonEliminar.addEventListener("click", () => {
    nuevoLi.remove();
  });
  nuevoLi.appendChild(botonEliminar);
  listaTareas.appendChild(nuevoLi);
  inputTarea.value = "";
});
