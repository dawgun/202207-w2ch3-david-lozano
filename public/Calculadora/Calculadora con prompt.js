const listaNumeros = [];
const raizResultado = [];
const numResultado = [];
let añadirNumero;

while (añadirNumero !== null && listaNumeros.length < 2) {
  añadirNumero = prompt("Añade un numero");

  if (añadirNumero === null) {
  } else if (!isNaN(añadirNumero) && añadirNumero.length !== 0) {
    listaNumeros.push(Number(añadirNumero));
  } else {
    alert(
      "Escribe solo numeros enteros o con decimales usando un punto en vez de coma"
    );
  }
}

if (listaNumeros.length === 0) {
  alert("No has introducido ningun número");
} else if (listaNumeros.length == 1) {
  raizCuadrada(listaNumeros[0]);
} else {
  numCalculadora(listaNumeros[0], listaNumeros[1]);
}

function raizCuadrada(num1) {
  raizResultado.push(Math.floor(Math.sqrt(num1) * 1000) / 1000);
  console.log(`La raiz cuadrada de ${num1} es ${raizResultado[0]}`);
}

function numCalculadora(num1, num2) {
  numResultado.push(Math.floor((Number(num1) + Number(num2)) * 1000) / 1000);
  numResultado.push(Math.floor((Number(num1) - Number(num2)) * 1000) / 1000);
  numResultado.push(Math.floor(Number(num1) * Number(num2) * 1000) / 1000);
  numResultado.push(Math.floor((Number(num1) / Number(num2)) * 1000) / 1000);
  console.log(`La suma de ${num1} y ${num2} es ${numResultado[0]}`);
  console.log(`La resta de ${num1} y ${num2} es ${numResultado[1]}`);
  console.log(`La multiplicación de ${num1} y ${num2} es ${numResultado[2]}`);
  console.log(`La división de ${num1} y ${num2} es ${numResultado[3]}`);
}
