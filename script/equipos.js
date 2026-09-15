let nombreEquipo = document.getElementById("inputNombreEquipo");
let colorEquipo = document.getElementById("inputColorEquipo");
let tablaEquipos = document.getElementById("tablaEquipos");
let botonAgregar = document.getElementById("btnAgregarEquipo");
let contadorId = 1;
let equipoEditando = null;

function agregarEquipo() {
  if (nombreEquipo.value === "" || colorEquipo.value === "") {
    console.log("Complete Todos los campos");
    return;
  }
  if (equipoEditando !== null) {
    equipoEditando.celdaEquipo.textContent = nombreEquipo.value;
    equipoEditando.celdaColor.style.backgroundColor = colorEquipo.value;

    equipoEditando = null;
    nombreEquipo.value = "";
    colorEquipo.value = "#000000";

    botonAgregar.textContent = "Agregar Equipo";

    return;
  }

  let fila = document.createElement("tr");

  let celdaId = document.createElement("td");
  celdaId.textContent = contadorId;

  let celdaEquipo = document.createElement("td");
  celdaEquipo.textContent = nombreEquipo.value;

  let celdaColor = document.createElement("td");
  celdaColor.style.backgroundColor = colorEquipo.value;

  let celdaJugadores = document.createElement("td");
  celdaJugadores.textContent = 0;

  let celdaAcciones = document.createElement("td");

  let botonEditar = document.createElement("button");
  botonEditar.textContent = "Editar";
  botonEditar.classList.add("btn", "btn-warning", "me-2");

  let botonEliminar = document.createElement("button");
  botonEliminar.textContent = "Eliminar";
  botonEliminar.classList.add("btn", "btn-danger", "me-2");

  celdaAcciones.appendChild(botonEliminar);
  celdaAcciones.appendChild(botonEditar);

  botonEditar.addEventListener("click", function () {
    nombreEquipo.value = celdaEquipo.textContent;
    colorEquipo.value = celdaColor.style.backgroundColor;

    equipoEditando = {
      celdaEquipo: celdaEquipo,
      celdaColor: celdaColor,
    };
    botonAgregar.textContent = "Editar Equipo";
  });

  botonEliminar.addEventListener("click", function () {
    fila.remove();
  });

  fila.appendChild(celdaId);
  fila.appendChild(celdaEquipo);
  fila.appendChild(celdaColor);
  fila.appendChild(celdaJugadores);
  fila.appendChild(celdaAcciones);

  tablaEquipos.appendChild(fila);

  contadorId++;

  nombreEquipo.value = "";
  colorEquipo.value = "#000000";
}
