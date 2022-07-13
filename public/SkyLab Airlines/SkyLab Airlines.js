let precioMedio = 0;
let escalasVuelo = 0;
let listaVuelo = [];
const ultimosVuelos = [];

const vuelos = [
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

function inicioVuelo() {
  let nombreUsuario;

  do {
    nombreUsuario = prompt(
      "Por favor, escriba su nombre para poder digirnos hacia usted."
    );
    if (nombreUsuario === null) {
      return alert("Esperemos que otro dia le agraden mas nuestros servicios");
    }
    if (nombreUsuario.length === 0) {
      alert("Debes escribir algun caracter para poder dirigirnos a usted");
    }
  } while (nombreUsuario.length === 0);

  alert(`Bienvenido/a ${nombreUsuario} a las lineas de vuelo SkyLab.`);
  alert(
    "A continuación podrá visualizar los vuelos disponibles para el dia de hoy."
  );

  alert(listaVuelo.join("\n"));
  alert(`El precio medio de los vuelos del dia de hoy es de ${precioMedio}€.`);
  alert(`Además hay un total de ${escalasVuelo} vuelos que hacen escala.`);
  alert("Y los últimos 5 vuelos del dia de hoy son los siguientes:");
  alert(ultimosVuelos.join("\n"));
  alert(
    "Esperamos que nuestros servicios le hayan sido de agrado y repita con nosotros en otra ocasión."
  );
  return true;
}

function calculaVuelos() {
  precioMedio = 0;
  escalasVuelo = 0;
  listaVuelo = [];

  for (let fly = 0; fly < vuelos.length; fly++) {
    const item = vuelos[fly];
    let msg = `El vuelo con origen: ${item.to}, y destino: ${item.from} tiene un coste de ${item.cost}€ y `;
    msg += item.scale ? "realiza escala." : "no realiza ninguna escala.";
    listaVuelo.push(msg);
    precioMedio += item.cost;
    escalasVuelo += item.scale ? 1 : 0;
  }
  precioMedio = Math.floor((precioMedio / vuelos.length) * 100) / 100;
}

function listaultimosVuelos() {
  for (let fly = vuelos.length - 5; fly < vuelos.length; fly++) {
    const item1 = vuelos[fly];
    ultimosVuelos.push(
      `Vuelo con origen: ${item1.to}, y destino: ${item1.from}.`
    );
  }
}

function actualizacionVuelos() {
  calculaVuelos();
  listaultimosVuelos();
}

inicioVuelo();
actualizacionVuelos();
