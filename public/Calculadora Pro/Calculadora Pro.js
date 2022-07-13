calculadoraPro();

function calculadoraPro() {
    
    let añadirNumero;
    let listaNumeros = [];
    let numResultado = [];

    añadirNumero = prompt("Añade un numero");

    while(añadirNumero !== null) {
        if (!isNaN(añadirNumero) && añadirNumero.length !== 0) {
            listaNumeros.push(Number(añadirNumero));
        } else {
            alert("Escribe solo numeros enteros o con decimales usando un punto en vez de coma");
        }
        añadirNumero = prompt("Añade un numero");
    }

    if (listaNumeros.length == 0) {
        alert("No has introducido ningun número");
    } else if (listaNumeros.length == 1) {
        raizCuadrada(listaNumeros[0], numResultado);
    } else {
        numCalculadora(listaNumeros, numResultado);
    } 
    nuevaOperacion();
} 

function raizCuadrada(num1, numResultado) {
    numResultado.push(Math.floor(Math.sqrt(num1)*1000)/1000);
    alert("La raiz cuadrada de " + num1 + " es " + numResultado[0]);
}

function numCalculadora(listaNumeros, numResultado) {

    let sumTotal = listaNumeros[0];
    let resTotal = listaNumeros[0];
    let mulTotal = listaNumeros[0];
    let divTotal = listaNumeros[0];
        
    for (pos = 1; pos < listaNumeros.length; pos++){
        sumTotal += listaNumeros[pos];
        resTotal -= listaNumeros[pos];
        mulTotal *= listaNumeros[pos];
        divTotal /= listaNumeros[pos];
    }

    numResultado.push(Math.floor(sumTotal*1000)/1000);
    numResultado.push(Math.floor(resTotal*1000)/1000);
    numResultado.push(Math.floor(mulTotal*1000)/1000);
    numResultado.push(Math.floor(divTotal*1000)/1000);

    alert("Para los números " +listaNumeros+
    "\nLa suma total es " + numResultado[0] + 
    "\nLa resta total es " + numResultado[1] +
    "\nLa multiplicación total es " + numResultado[2] +
    "\nLa división total es " + numResultado[3]);
}

function nuevaOperacion() {

    let reset = prompt("¿Quieres realizar una nueva operación? (Responde Si o No)");
    
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