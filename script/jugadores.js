let nombreJugador = document.getElementById("inputNombreJugador");
let dniJugador = document.getElementById("inputDniJugador");
let edadJugador = document.getElementById("inputEdadJugador");
let posicionJugador = document.getElementById("inputPosicionJugador");
let equipoJugador = document.getElementById("inputEquipoJugador");
let numeroJugador = document.getElementById("inputNumeroJugador");
let tablaJugadores = document.getElementById("tablaJugadores");
let botonAgregar = document.getElementById("btnAgregarJugador");
let contadorId = 1;
let jugadorEditando = null;

botonAgregar.addEventListener("click", agregarJugador);

function agregarJugador() {
  if (
    nombreJugador.value === "" ||
    dniJugador.value === "" ||
    edadJugador.value === "" ||
    posicionJugador.value === "" ||
    equipoJugador.value === "" ||
    numeroJugador.value === ""
  ) {
    alert("Por favor Complete Todos los campos");
    return;
  }

  if (jugadorEditando !== null) {
    jugadorEditando.celdaNombre.textContent = nombreJugador.value;
    jugadorEditando.celdaDni.textContent = dniJugador.value;
    jugadorEditando.celdaEdad.textContent = edadJugador.value;
    jugadorEditando.celdaPosicion.textContent = posicionJugador.value;
    jugadorEditando.celdaEquipo.textContent = equipoJugador.value;
    jugadorEditando.celdaNumero.textContent = numeroJugador.value;

    ((jugadorEditando = null), (botonAgregar.textContent = "Agregar Jugador"));
    nombreJugador.value = "";
    dniJugador.value = "";
    edadJugador.value = "";
    posicionJugador.value = "";
    equipoJugador.value = "";
    numeroJugador.value = "";
    return;
  }
  let fila = document.createElement("tr");

  let celdaId = document.createElement("td");
  celdaId.textContent = contadorId;

  let celdaNombre = document.createElement("td");
  celdaNombre.textContent = nombreJugador.value;

  let celdaDni = document.createElement("td");
  celdaDni.textContent = dniJugador.value;

  let celdaEdad = document.createElement("td");
  celdaEdad.textContent = edadJugador.value;

  let celdaPosicion = document.createElement("td");
  celdaPosicion.textContent = posicionJugador.value;

  let celdaEquipo = document.createElement("td");
  celdaEquipo.textContent = equipoJugador.value;

  let celdaNumero = document.createElement("td");
  celdaNumero.textContent = numeroJugador.value;

  let celdaAcciones = document.createElement("td");

  let botonEditar = document.createElement("button");
  botonEditar.textContent = "Editar";
  botonEditar.classList.add("btn", "btn-warning", "me-2");

  let botonEliminar = document.createElement("button");
  botonEliminar.textContent = "Eliminar";
  botonEliminar.classList.add("btn", "btn-danger", "me-2");

  botonEliminar.addEventListener("click", function () {
    let confirmar = confirm("Estas seguro de eliminar el jugador?");
    if (confirmar) {
      fila.remove();
    }
  });

  fila.appendChild(celdaId);
  fila.appendChild(celdaNombre);
  fila.appendChild(celdaDni);
  fila.appendChild(celdaEdad);
  fila.appendChild(celdaPosicion);
  fila.appendChild(celdaEquipo);
  fila.appendChild(celdaNumero);
  fila.appendChild(celdaAcciones);

  celdaAcciones.appendChild(botonEditar);
  botonEditar.addEventListener("click", function () {
    nombreJugador.value = celdaNombre.textContent;
    edadJugador.value = celdaEdad.textContent;
    dniJugador.value = celdaDni.textContent;
    posicionJugador.value = celdaPosicion.textContent;
    equipoJugador.value = celdaEquipo.textContent;
    numeroJugador.value = celdaNumero.textContent;

    jugadorEditando = {
      celdaId: celdaId,
      celdaNombre: celdaNombre,
      celdaDni: celdaDni,
      celdaEdad: celdaEdad,
      celdaPosicion: celdaPosicion,
      celdaEquipo: celdaEquipo,
      celdaNumero: celdaNumero,
    };
    botonAgregar.textContent = "Guardar Jugador";
  });

  celdaAcciones.appendChild(botonEliminar);
  tablaJugadores.appendChild(fila);
  contadorId++;

  nombreJugador.value = "";
  dniJugador.value = "";
  edadJugador.value = "";
  posicionJugador.value = "";
  equipoJugador.value = "";
  numeroJugador.value = "";
}
