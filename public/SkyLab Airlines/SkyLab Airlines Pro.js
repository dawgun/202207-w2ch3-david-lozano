let nombreUsuario;
let listaVuelo = [];

let vuelos = [
  { id: 0, to: "Bilbao", from: "Barcelona", cost: 1600, scale: false },
  { id: 1, to: "New York", from: "Barcelona", cost: 700, scale: false },
  { id: 2, to: "Los Angeles", from: "Madrid", cost: 1100, scale: true },
  { id: 3, to: "Paris", from: "Barcelona", cost: 210, scale: false },
  { id: 4, to: "Roma", from: "Barcelona", cost: 150, scale: false },
  { id: 5, to: "London", from: "Madrid", cost: 200, scale: false },
  { id: 6, to: "Madrid", from: "Barcelona", cost: 90, scale: false },
  { id: 7, to: "Tokyo", from: "Madrid", cost: 1500, scale: true },
  { id: 8, to: "Shangai", from: "Barcelona", cost: 800, scale: true },
  { id: 9, to: "Sydney", from: "Barcelona", cost: 150, scale: true },
  { id: 10, to: "Tel-Aviv", from: "Madrid", cost: 150, scale: false },
];

function listaDeVuelos(arrayVuelos) {
  listaVuelo = [];

  for (let fly = 0; fly < arrayVuelos.length; fly++) {
    const item = arrayVuelos[fly];
    let msg = `El vuelo con id ${item.id} con origen: ${item.to}, y destino: ${item.from} tiene un coste de ${item.cost}€ y `;
    msg += item.scale ? "realiza escala." : "no realiza ninguna escala.";
    listaVuelo.push(msg);
  }
}

function calcularPrecioMedio(arrayVuelos) {
  let precioMedio = 0;
  for (let fly = 0; fly < arrayVuelos.length; fly++) {
    precioMedio += arrayVuelos[fly].cost;
  }
  return Math.floor((precioMedio / arrayVuelos.length) * 100) / 100;
}

function calcularEscalasVuelo(arrayVuelos) {
  let escalasVuelo = 0;
  for (let fly = 0; fly < arrayVuelos.length; fly++) {
    escalasVuelo += arrayVuelos[fly].scale ? 1 : 0;
  }
  return escalasVuelo;
}

function añadirVuelo() {
  const ultimaid = vuelos[vuelos.length - 1].id + 1;

  const origen = prompt("Escribe el lugar de origen del vuelo");
  if (origen === null || origen === "")
    return alert("Debes escribir algo para continuar");

  const destino = prompt("Escribe el lugar de destino del vuelo");
  if (destino === null || destino === "")
    return alert("Debes escribir algo para continuar");

  const precio = prompt("Escribe el precio del vuelo");
  if (precio === null || precio === "")
    return alert("Debes escribir algo para continuar");

  const escala = prompt(
    "Escribe 1 o mas si hace escala, escribe 0 si no hace escala."
  );
  if (escala === null || escala === "")
    return alert("Debes escribir algo para continuar");

  if (
    !Number.isNaN(origen) ||
    !Number.isNaN(destino) ||
    Number.isNaN(precio) ||
    Number.isNaN(escala)
  ) {
    alert("Has cometido un fallo, vuelve a empezar");
    return true;
  }

  vuelos.push({
    id: ultimaid,
    to: origen,
    from: destino,
    cost: precio,
    scale: escala,
  });
  return true;
}

function eliminarVuelo(idvuelo) {
  vuelos = vuelos.filter((vuelo) => vuelo.id !== idvuelo);
}

function filtradoPrecios(num1) {
  listaVuelo = [];

  for (let fly = 0; fly < vuelos.length; fly++) {
    const item = vuelos[fly];
    if (item.cost <= num1) {
      let msg = `El vuelo con id ${item.id} con origen: ${item.to}, y destino: ${item.from} tiene un coste de ${item.cost}€ y `;
      msg += item.scale ? "realiza escala." : "no realiza ninguna escala.";
      listaVuelo.push(msg);
    }
  }
}

function revisaPrompt() {
  do {
    nombreUsuario = prompt(
      "Por favor, escriba su nombre para poder digirnos hacia usted."
    );
    if (nombreUsuario === null || nombreUsuario === "") {
      alert("Debes escribir algo para continuar");
    }
  } while (nombreUsuario === null || nombreUsuario === "");
  return nombreUsuario;
}

function cuentaUser() {
  const modoUser = prompt(
    "Selecciona entre las siguientes opciones: (Comprar, Precio, Lista, Limpiar, Salir)" +
      "\n\nComprar: Podrás elegir el vuelo que comprar segun la lista actual" +
      "\nPrecio: Actualizará la lista de vuelos segun el valor o menor del precio" +
      "\nLimpiar: Podras quitar el filtro de precios de la lista" +
      "\nLista: Podrás consultar la lista de vuelos" +
      "\nSalir: Saldrás de la aplicación"
  );

  if (modoUser === null) {
    alert(`Que tengas un buen día ${nombreUsuario}`);
    return;
  }
  switch (modoUser.toLowerCase()) {
    case "comprar": {
      const compraVuelo = prompt(
        `Introduzca la id del vuelo que desea comprar.\n\n${listaVuelo.join(
          "\n"
        )}`
      );

      if (
        compraVuelo != null &&
        !Number.isNaN.compraVuelo &&
        compraVuelo !== ""
      ) {
        const vueloSeleccionado = [
          vuelos.find((vuelo) => vuelo.id === Number(compraVuelo)),
        ];
        listaDeVuelos(vueloSeleccionado);
        alert(
          `Gracias por la compra de:\n${listaVuelo.join("\n")}, vuelva pronto.`
        );
        return;
      }
      alert("No ha introducido ninguna id");

      break;
    }
    case "precio": {
      const filtroPrecio = prompt(
        "Introduce el precio maximo deseado para comprar un vuelo"
      );
      if (!Number.isNaN(filtroPrecio) && filtroPrecio !== "") {
        filtradoPrecios(Number(filtroPrecio));
        alert("Lista actualizada");
      } else {
        alert("No has introducido un número");
      }
      break;
    }
    case "limpiar":
      listaDeVuelos(vuelos);
      alert("Han sido retirados el filtros de precio en la lista de vuelos");
      break;
    case "lista":
      alert(listaVuelo.join("\n"));
      break;
    case "salir":
      alert(`Que tengas un buen dia ${nombreUsuario}`);
      return;
    default:
      alert(
        "No existe esta opción, asegurese de escoger la palabra correctamente"
      );
  }

  cuentaUser();
}

function cuentaAdmin() {
  const modoAdmin = prompt(
    "Selecciona entre las siguientes opciones: (Añadir, Eliminar, Lista, Salir)" +
      "\n\nAñadir: Te permitirá añadir un nuevo vuelo" +
      "\nEliminar: Te permitira eliminar un vuelo actual" +
      "\nLista: Lista de los vuelos actuales" +
      "\nSalir: Saldrás de la aplicación"
  );

  if (modoAdmin === null) {
    alert(`Que tengas un buen día ${nombreUsuario}`);
    return;
  }
  switch (modoAdmin.toLowerCase()) {
    case "añadir":
      if (vuelos.length < 15) {
        añadirVuelo();
        listaDeVuelos(vuelos);
        break;
      } else {
        alert(`Ya has alcanzado ${vuelos.length}, ya no puedes añadir mas.`);
        break;
      }
    case "eliminar": {
      const idEliminar = prompt(
        `Selecciona la id del vuelo que deseas eliminar\n\n${listaVuelo.join(
          "\n"
        )}`
      );

      if (idEliminar !== null && idEliminar !== "") {
        eliminarVuelo(Number(idEliminar));
        listaDeVuelos(vuelos);
      } else {
        alert("Debes escribir una id (Número)");
      }
      break;
    }
    case "lista":
      alert(listaVuelo.join("\n"));
      break;
    case "salir":
      alert(`Que tengas un buen dia ${nombreUsuario}`);
      return;
    default:
      alert(
        "No existe esta opción, asegurese de escoger la palabra correctamente"
      );
  }

  cuentaAdmin();
}

function eleccionTipoUsuario() {
  const tipodeUsuario = prompt(
    "Por favor, escoja el tipo de cuenta. (Admin, User)"
  );
  if (tipodeUsuario === null) {
    alert(`Que tengas un buen día ${nombreUsuario}`);
  } else if (tipodeUsuario.toLowerCase() === "admin") {
    cuentaAdmin();
  } else if (tipodeUsuario.toLowerCase() === "user") {
    cuentaUser();
  } else {
    alert("No existe ese tipo de usuario, escoja correctamente");
    eleccionTipoUsuario();
  }
}

function informacionInicio() {
  nombreUsuario = revisaPrompt(nombreUsuario);
  alert(`Bienvenido/a ${nombreUsuario} a las lineas de vuelo SkyLab.`);
  alert(
    "A continuación podrá visualizar los vuelos disponibles para el dia de hoy."
  );

  alert(listaVuelo.join("\n"));
  alert(
    `El precio medio de los vuelos del dia de hoy es de ${calcularPrecioMedio(
      vuelos
    )}€.`
  );
  alert(
    `Además hay un total de ${calcularEscalasVuelo(
      vuelos
    )} vuelos que hacen escala.`
  );
  alert("Y los últimos 5 vuelos del dia de hoy son los siguientes:");
  alert(listaVuelo.slice(-5, listaVuelo.length).join("\n"));

  eleccionTipoUsuario();
}

informacionInicio();
listaDeVuelos(vuelos);
