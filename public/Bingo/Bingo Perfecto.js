function cambiarCarton() {
  let reiniciarCarton = false;
  const nuevoCarton = prompt(
    "¿Quieres generar un nuevo cartón? ('Yes' para generar nuevo cartón)"
  );
  if (nuevoCarton != null && nuevoCarton.toLowerCase() === "yes") {
    reiniciarCarton = true;
  } else {
    alert("A continuación sacaremos el primer número");
  }
  return reiniciarCarton;
}

function consoleTableBingo(cartonDelBingo) {
  const tablaBingo = {
    Linea_1: {
      B: cartonDelBingo[0].numero,
      I: cartonDelBingo[1].numero,
      N: cartonDelBingo[2].numero,
      G: cartonDelBingo[3].numero,
      O: cartonDelBingo[4].numero,
    },
    Linea_2: {
      B: cartonDelBingo[5].numero,
      I: cartonDelBingo[6].numero,
      N: cartonDelBingo[7].numero,
      G: cartonDelBingo[8].numero,
      O: cartonDelBingo[9].numero,
    },
    Linea_3: {
      B: cartonDelBingo[10].numero,
      I: cartonDelBingo[11].numero,
      N: cartonDelBingo[12].numero,
      G: cartonDelBingo[13].numero,
      O: cartonDelBingo[14].numero,
    },
  };
  return console.table(tablaBingo);
}

function comprobadorLineaBingo(lineaCantada, cartonBingo) {
  const linea1Bingo = cartonBingo.slice(0, 5).every((obj) => obj.encontrado);
  const linea2Bingo = cartonBingo.slice(5, 10).every((obj) => obj.encontrado);
  const linea3Bingo = cartonBingo.slice(10, 15).every((obj) => obj.encontrado);

  if (linea1Bingo && linea2Bingo && linea3Bingo) {
    return false;
  }
  if (!lineaCantada && (linea1Bingo || linea2Bingo || linea3Bingo)) {
    return "Linea";
  }
  return true;
}

function bienvenidaRegistroUsuario(
  puntuacionMax,
  cantidadNumerosCarton,
  numeroBolasBingo
) {
  let nombreUsuario = null;
  alert("Bienvenido al Bingo de David, donde podrá ganar grandes premios");

  while (nombreUsuario === null || nombreUsuario.length === 0) {
    nombreUsuario = prompt(
      "Introduzca su nombre para registrar su puntuación al final del juego"
    );
    if (nombreUsuario === null || nombreUsuario.length === 0) {
      alert("Introduce un nombre para poder continuar");
    }
  }

  alert(
    `Te daremos una tarjeta con ${cantidadNumerosCarton} números y el bingo contará con ${numeroBolasBingo} bolas.`
  );
  alert(
    `La puntuación máxima será de ${puntuacionMax} puntos y se irá restando 1 punto por numero extra necesario para completar el cartón`
  );
  alert(
    "Se mostrará al finalizar la partida el top 10 con mejores puntuaciones"
  );
  alert(
    "A continuación le daremos un cartón con los numeros y si no le gusta, podrá cambiarlo"
  );
  return nombreUsuario;
}

function generadorCarton(
  cartonDelBingo,
  cantidadNumerosCarton,
  numeroBolasBingo
) {
  while (cartonDelBingo.length === 0) {
    while (cartonDelBingo.length < cantidadNumerosCarton) {
      const numeroCarton = Math.floor(Math.random() * numeroBolasBingo) + 1;
      if (
        cartonDelBingo.findIndex((obj) => obj.numero === numeroCarton) === -1
      ) {
        cartonDelBingo.push({ numero: numeroCarton, encontrado: false });
      }
    }
    cartonDelBingo.sort((a, b) => a.numero - b.numero);
    console.log(
      "Se ha generado un nuevo cartón para jugar, estos son tus numeros"
    );
    consoleTableBingo(cartonDelBingo);
    if (cambiarCarton()) {
      cartonDelBingo = [];
    }
  }
  return cartonDelBingo;
}

function sacarNuevoNumero(cartonDelBingo, numeroBolasBingo) {
  const listaNumerosGenerados = [];
  let lineaCantada = false;

  while (cartonDelBingo.every((obj) => obj.encontrado) !== true) {
    const numeroGenerado = Math.floor(Math.random() * numeroBolasBingo) + 1;

    if (listaNumerosGenerados.indexOf(numeroGenerado) === -1) {
      listaNumerosGenerados.push(numeroGenerado);
      alert(`El siguiente numero es...${numeroGenerado}`);

      for (let i = 0; i < cartonDelBingo.length; i++) {
        if (cartonDelBingo[i].numero === numeroGenerado) {
          cartonDelBingo[i].numero = "X";
          cartonDelBingo[i].encontrado = true;
          alert(`Felicidades, tienes el numero ${numeroGenerado}!`);
          consoleTableBingo(cartonDelBingo);
        }
      }

      switch (comprobadorLineaBingo(lineaCantada, cartonDelBingo)) {
        case "Linea": {
          lineaCantada = true;
          alert("Felicidades has hecho linea");
          break;
        }
        case true: {
          if (window.confirm("¿Desea continuar con el juego?")) {
            alert("El juego continuará");
          } else {
            return;
          }
          break;
        }
        case false: {
          alert("Felicidades eres el ganador!");
          break;
        }
        default:
          break;
      }
    }
  }
  return listaNumerosGenerados;
}

function rankingBingo(nombreUsuario, puntuacionBase, listaNumerosGenerados) {
  const ranking = [
    { posicion: 1, nombre: "David", puntuación: 35 },
    { posicion: 2, nombre: "Juan", puntuación: 28 },
    { posicion: 3, nombre: "Raul", puntuación: 21 },
    { posicion: 4, nombre: "Jorge", puntuación: 17 },
    { posicion: 5, nombre: "Pedro", puntuación: 12 },
    { posicion: 6, nombre: "Ignacio", puntuación: 8 },
    { posicion: 7, nombre: "Paco", puntuación: 7 },
    { posicion: 8, nombre: "Marc", puntuación: 5 },
    { posicion: 9, nombre: "Victor", puntuación: 4 },
  ];

  ranking.push({
    posicion: "X",
    nombre: nombreUsuario,
    puntuación: puntuacionBase - listaNumerosGenerados.length,
  });
  ranking.sort((a, b) => b.puntuación - a.puntuación);

  for (let i = 0; i < ranking.length; i++) {
    ranking[i].posicion = i + 1;
  }

  alert("A continuación podrás ver el ranking de los 10 mejores jugadores");
  console.table(ranking.slice(0, 10));
}

function repetirBingo() {
  const nuevaPartidaBingo = prompt(
    "¿Quieres comenzar una nueva partida? ('Yes' para comenzar de nuevo)"
  );
  if (nuevaPartidaBingo != null && nuevaPartidaBingo.toLowerCase() === "yes") {
    return true;
  }
  return false;
}

function juegoBingo() {
  let volveraComenzar = true;
  const cantidadNumerosCarton = 15;
  const puntuacionBase = 115;
  const numeroBolasBingo = 90;
  const puntuacionMax = puntuacionBase - cantidadNumerosCarton;

  while (volveraComenzar) {
    let cartonBingo = [];
    const nombreUsuario = bienvenidaRegistroUsuario(
      puntuacionMax,
      cantidadNumerosCarton,
      numeroBolasBingo
    );
    cartonBingo = generadorCarton(
      cartonBingo,
      cantidadNumerosCarton,
      numeroBolasBingo
    );
    const listaNumerosGenerados = sacarNuevoNumero(
      cartonBingo,
      numeroBolasBingo
    );
    if (listaNumerosGenerados !== undefined) {
      rankingBingo(nombreUsuario, puntuacionBase, listaNumerosGenerados);
    }
    volveraComenzar = repetirBingo();
  }
  alert("Esperamos que vuelva otra vez, muchas gracias");
}

juegoBingo();
