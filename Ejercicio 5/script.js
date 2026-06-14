const buscador = document.getElementById("buscador");
const destinos = document.querySelectorAll("#lista-destinos li");
buscador.addEventListener("input", () => {
  const textoBusqueda = buscador.value.toLowerCase();
  destinos.forEach((destino) => {
    const textoDestino = destino.textContent.toLowerCase();
    if (textoDestino.includes(textoBusqueda)) {
      destino.style.display = "block";
    } else {
      destino.style.display = "none";
    }
  });
});
