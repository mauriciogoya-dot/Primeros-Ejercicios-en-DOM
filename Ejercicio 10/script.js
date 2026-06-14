// 1. Seleccionamos los elementos principales
const inputTarea = document.getElementById("nueva-tarea");
const btnAgregar = document.getElementById("btn-agregar-tarea");
const zonasDrop = document.querySelectorAll(".zona-drop");

// Variable global para la tarjeta arrastrada
let tarjetaArrastrada = null;

// ==========================================
// FUNCIÓN PRINCIPAL: GUARDAR EN LOCALSTORAGE
// ==========================================
function guardarTablero() {
  // Creamos un objeto para mapear qué tareas hay en cada columna
  const datosTablero = {
    "zona-pendiente": [],
    "zona-proceso": [],
    "zona-finalizado": [],
  };

  // Recorremos cada zona de caída y guardamos los textos de sus tarjetas
  for (const idZona in datosTablero) {
    const tarjetas = document.querySelectorAll(`#${idZona} .tarea-card`);
    tarjetas.forEach((tarjeta) => {
      // El texto de la tarjeta viene con la "X" al final, se la quitamos para guardar solo el texto limpio
      const textoLimpio = tarjeta.firstChild.textContent;
      datosTablero[idZona].push(textoLimpio);
    });
  }

  // Convertimos el objeto a texto con JSON.stringify y lo guardamos
  localStorage.setItem("kanban-tareas", JSON.stringify(datosTablero));
}

// ==========================================
// FUNCIÓN PRINCIPAL: CARGAR DESDE LOCALSTORAGE
// ==========================================
function cargarTablero() {
  const datosGuardados = localStorage.getItem("kanban-tareas");
  if (!datosGuardados) return; // Si no hay nada guardado, no hacemos nada

  // Convertimos el texto de vuelta a objeto con JSON.parse
  const datosTablero = JSON.parse(datosGuardados);

  // Recorremos el objeto y volvemos a crear las tarjetas en su columna correspondiente
  for (const idZona in datosTablero) {
    datosTablero[idZona].forEach((textoTarea) => {
      crearTarjetaTarea(textoTarea, idZona);
    });
  }
}

// 2. Función que crea la tarjeta en el DOM
function crearTarjetaTarea(texto, columnaId) {
  const card = document.createElement("div");
  card.classList.add("tarea-card");
  card.setAttribute("draggable", "true");
  card.textContent = texto;

  const btnEliminar = document.createElement("button");
  btnEliminar.classList.add("btn-eliminar-tarea");
  btnEliminar.textContent = "X";

  btnEliminar.addEventListener("click", () => {
    card.remove();
    guardarTablero(); // ¡CAMBIO! Guardamos el tablero inmediatamente al eliminar
  });

  card.appendChild(btnEliminar);

  // Eventos de arrastre de la tarjeta
  card.addEventListener("dragstart", () => {
    tarjetaArrastrada = card;
    card.classList.add("dragging");
  });

  card.addEventListener("dragend", () => {
    tarjetaArrastrada = null;
    card.classList.remove("dragging");
  });

  // Insertamos la tarjeta en la columna
  document.getElementById(columnaId).appendChild(card);
}

// 3. Evento para el botón de agregar
btnAgregar.addEventListener("click", () => {
  const texto = inputTarea.value.trim();
  if (texto === "") return;

  crearTarjetaTarea(texto, "zona-pendiente");
  guardarTablero(); // ¡CAMBIO! Guardamos el tablero al añadir una nueva tarea
  inputTarea.value = "";
});

// 4. Configuramos los eventos para las zonas de caída (Columnas)
zonasDrop.forEach((zona) => {
  zona.addEventListener("dragover", (e) => {
    e.preventDefault();
    zona.classList.add("hover");
  });

  zona.addEventListener("dragleave", () => {
    zona.classList.remove("hover");
  });

  zona.addEventListener("drop", () => {
    zona.classList.remove("hover");

    if (tarjetaArrastrada) {
      zona.appendChild(tarjetaArrastrada);
      guardarTablero(); // ¡CAMBIO! Guardamos el tablero cada vez que una tarea cambia de columna
    }
  });
});

// =======================================================
// AL RECARGAR LA PÁGINA: Ejecutamos la carga automática
// =======================================================
cargarTablero();
