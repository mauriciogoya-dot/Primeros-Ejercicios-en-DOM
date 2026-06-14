// 1. Seleccionamos los elementos del DOM
const formulario = document.getElementById("formulario");
const inputNombre = document.getElementById("nombre");
const inputEmail = document.getElementById("email");
const inputPassword = document.getElementById("password");

const errorNombre = document.getElementById("error-nombre");
const errorEmail = document.getElementById("error-email");
const errorPassword = document.getElementById("error-password");
const mensajeExito = document.getElementById("mensaje-exito");

// 2. Validación del Nombre en vivo
inputNombre.addEventListener("input", () => {
  if (inputNombre.value.trim().length < 3) {
    errorNombre.textContent = "El nombre debe tener al menos 3 caracteres.";
  } else {
    errorNombre.textContent = ""; // Quitamos el error si es válido
  }
});

// 3. Validación del Email en vivo
inputEmail.addEventListener("input", () => {
  const emailValue = inputEmail.value.trim();

  // if/else que revise si el email NO incluye '@' O NO incluye '.'
  // Si no los incluye, mostrá un mensaje en 'errorEmail.textContent'.
  // Si los incluye, dejá 'errorEmail.textContent' vacío ("").
  if (!emailValue.includes("@") || !emailValue.includes(".")) {
    errorEmail.textContent = "El email debe contener '@' y '.'.";
  } else {
    errorEmail.textContent = ""; // Quitamos el error si es válido
  }
});
inputPassword.addEventListener("input", () => {
  // Siguiendo la consigna: que tenga al menos 6 caracteres
  if (inputPassword.value.length < 6) {
    errorPassword.textContent =
      "La contraseña debe tener al menos 6 caracteres.";
  } else {
    errorPassword.textContent = ""; // Quitamos el error si es válido
  }
});

// 4. Control del Envío del Formulario
formulario.addEventListener("submit", (e) => {
  e.preventDefault(); // Evita que la página se recargue automáticamente

  // Revisá que ambos campos sean válidos antes de mostrar el éxito.
  // Una forma fácil es verificar si los inputs no están vacíos Y los mensajes de error están vacíos ("").
  if (
    inputNombre.value.trim() !== "" &&
    inputEmail.value.trim() !== "" &&
    inputPassword.value.trim() !== "" &&
    errorNombre.textContent === "" &&
    errorEmail.textContent === "" &&
    errorPassword.textContent === ""
  ) {
    mensajeExito.textContent = "¡Registro exitoso!";
  } else {
    mensajeExito.textContent = ""; // No mostramos el mensaje de éxito si hay errores
  }
});
