function calculadoraPro() {
  let añadirNumero;
  const listaNumeros = [];
  const numResultado = [];

  function raizCuadrada(primerNumero, resultadoTotal) {
    resultadoTotal.push(Math.floor(Math.sqrt(primerNumero) * 1000) / 1000);
    alert(`La raiz cuadrada de ${primerNumero} es ${resultadoTotal[0]}`);
  }

  function numCalculadora(listaDeNumeros, resultadoTotal) {
    let sumTotal = listaDeNumeros[0];
    let resTotal = listaDeNumeros[0];
    let mulTotal = listaDeNumeros[0];
    let divTotal = listaDeNumeros[0];

    for (let pos = 1; pos < listaDeNumeros.length; pos++) {
      sumTotal += listaDeNumeros[pos];
      resTotal -= listaDeNumeros[pos];
      mulTotal *= listaDeNumeros[pos];
      divTotal /= listaDeNumeros[pos];
    }

    resultadoTotal.push(Math.floor(sumTotal * 1000) / 1000);
    resultadoTotal.push(Math.floor(resTotal * 1000) / 1000);
    resultadoTotal.push(Math.floor(mulTotal * 1000) / 1000);
    resultadoTotal.push(Math.floor(divTotal * 1000) / 1000);

    alert(
      `Para los números ${listaDeNumeros}\nLa suma total es ${resultadoTotal[0]}\nLa resta total es ${resultadoTotal[1]}\nLa multiplicación total es ${resultadoTotal[2]}\nLa división total es ${resultadoTotal[3]}`
    );
  }

  function nuevaOperacion() {
    const reset = prompt(
      "¿Quieres realizar una nueva operación? (Responde Si o No)"
    );

    if (reset == null) {
      alert("Que tengas un buen día");
    } else {
      switch (reset.toLowerCase()) {
        case "si":
          calculadoraPro();
          break;
        case "no":
          alert("Que tengas un buen día");
          break;
        default:
          alert("No respondiste correctamente");
          nuevaOperacion();
          break;
      }
    }
  }

  añadirNumero = prompt("Añade un numero");

  while (añadirNumero !== null) {
    if (!Number.isNaN(añadirNumero) && añadirNumero.length !== 0) {
      listaNumeros.push(Number(añadirNumero));
    } else {
      alert(
        "Escribe solo numeros enteros o con decimales usando un punto en vez de coma"
      );
    }
    añadirNumero = prompt("Añade un numero");
  }

  if (listaNumeros.length === 0) {
    alert("No has introducido ningun número");
  } else if (listaNumeros.length === 1) {
    raizCuadrada(listaNumeros[0], numResultado);
  } else {
    numCalculadora(listaNumeros, numResultado);
  }
  nuevaOperacion();
}

calculadoraPro();
