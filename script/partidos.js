let fechaPartido = document.getElementById("inputFechaPartido");
let horaPartido = document.getElementById("inputHoraPartido");
let equipoLocal = document.getElementById("inputEquipoLocal");
let equipoVisitante = document.getElementById("inputEquipoVisitante");
let canchaPartido = document.getElementById("inputCanchaPartido");
let tablaPartidos = document.getElementById("tablaPartidos");
let botonAgregar = document.getElementById("btnAgregarPartido");

let contadorId = 1;
let partidoEditando = null;

botonAgregar.addEventListener("click", agregarPartido);

function agregarPartido() {
  if (
    fechaPartido.value === "" ||
    horaPartido.value === "" ||
    canchaPartido.value === "" ||
    equipoLocal.value === "" ||
    equipoVisitante.value === ""
  ) {
    alert("Por favor complete todos los campos");
    return;
  }

  if (partidoEditando !== null) {
    partidoEditando.celdaFecha.textContent = fechaPartido.value;
    partidoEditando.celdaHora.textContent = horaPartido.value;
    partidoEditando.celdaCancha.textContent = canchaPartido.value;
    partidoEditando.celdaLocal.textContent = equipoLocal.value;
    partidoEditando.celdaVisitante.textContent = equipoVisitante.value;

    partidoEditando = null;

    botonAgregar.textContent = "Agregar Partido";

    fechaPartido.value = "";
    horaPartido.value = "";
    canchaPartido.value = "";
    equipoLocal.value = "";
    equipoVisitante.value = "";

    return;
  }

  let fila = document.createElement("tr");

  let celdaId = document.createElement("td");
  celdaId.textContent = contadorId;

  let celdaFecha = document.createElement("td");
  celdaFecha.textContent = fechaPartido.value;

  let celdaHora = document.createElement("td");
  celdaHora.textContent = horaPartido.value;

  let celdaCancha = document.createElement("td");
  celdaCancha.textContent = canchaPartido.value;

  let celdaLocal = document.createElement("td");
  celdaLocal.textContent = equipoLocal.value;

  let celdaVisitante = document.createElement("td");
  celdaVisitante.textContent = equipoVisitante.value;

  let celdaResultado = document.createElement("td");
  celdaResultado.textContent = "-";

  let celdaAcciones = document.createElement("td");

  let botonEditar = document.createElement("button");
  botonEditar.textContent = "Editar";
  botonEditar.classList.add("btn", "btn-warning", "me-2");

  fila.appendChild(celdaId);
  fila.appendChild(celdaFecha);
  fila.appendChild(celdaHora);
  fila.appendChild(celdaCancha);
  fila.appendChild(celdaLocal);
  fila.appendChild(celdaVisitante);
  fila.appendChild(celdaResultado);
  fila.appendChild(celdaAcciones);

  botonEditar.addEventListener("click", function () {
    fechaPartido.value = celdaFecha.textContent;
    horaPartido.value = celdaHora.textContent;
    canchaPartido.value = celdaCancha.textContent;
    equipoLocal.value = celdaLocal.textContent;
    equipoVisitante.value = celdaVisitante.textContent;

    partidoEditando = {
      celdaFecha: celdaFecha,
      celdaHora: celdaHora,
      celdaCancha: celdaCancha,
      celdaLocal: celdaLocal,
      celdaVisitante: celdaVisitante,
    };

    botonAgregar.textContent = "Guardar Partido";
  });

  let botonEliminar = document.createElement("button");
  botonEliminar.textContent = "Eliminar";
  botonEliminar.classList.add("btn", "btn-danger");

  botonEliminar.addEventListener("click", function () {
    let confirmar = confirm("¿Estás seguro de eliminar el partido?");

    if (confirmar) {
      fila.remove();
    }
  });
  celdaAcciones.appendChild(botonEditar);
  celdaAcciones.appendChild(botonEliminar);

  tablaPartidos.appendChild(fila);

  contadorId++;

  fechaPartido.value = "";
  horaPartido.value = "";
  canchaPartido.value = "";
  equipoLocal.value = "";
  equipoVisitante.value = "";
}
