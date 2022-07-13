function juegoBingo() {
    
    let volveraComenzar = true;
    const cantidadNumerosCarton = 15;
    const puntuacionBase = 115;
    const numeroBolasBingo = 90;
    const puntuacionMax = puntuacionBase - cantidadNumerosCarton;

    while (volveraComenzar) {
        let cartonBingo = [];
        let nombreUsuario = bienvenidaRegistroUsuario(puntuacionMax, cantidadNumerosCarton, numeroBolasBingo);
        cartonBingo = generadorCarton(cartonBingo, cantidadNumerosCarton, numeroBolasBingo);
        let listaNumerosGenerados = sacarNuevoNumero(cartonBingo, numeroBolasBingo);
        if (listaNumerosGenerados != undefined) {
            rankingBingo(nombreUsuario, puntuacionBase, listaNumerosGenerados);
        }
        volveraComenzar = repetirBingo();
    }
    alert('Esperamos que vuelva otra vez, muchas gracias');
}

function bienvenidaRegistroUsuario(puntuacionMax, cantidadNumerosCarton, numeroBolasBingo) {

    let nombreUsuario = null;
    alert('Bienvenido al Bingo de David, donde podrá ganar grandes premios');

    while (nombreUsuario === null || nombreUsuario.length === 0) {
        nombreUsuario = prompt("Introduzca su nombre para registrar su puntuación al final del juego");
        if(nombreUsuario === null || nombreUsuario.length === 0) {
            alert('Introduce un nombre para poder continuar');
        }
    }
    
    alert('Te daremos una tarjeta con ' + cantidadNumerosCarton + ' números y el bingo contará con ' + numeroBolasBingo + ' bolas.');
    alert('La puntuación máxima será de ' + puntuacionMax + ' puntos y se irá restando 1 punto por numero extra necesario para completar el cartón');
    alert('Se mostrará al finalizar la partida el top 10 con mejores puntuaciones');
    alert('A continuación le daremos un cartón con los numeros y si no le gusta, podrá cambiarlo');
    return nombreUsuario;
}

function generadorCarton(cartonBingo, cantidadNumerosCarton, numeroBolasBingo) {
    
    while(cartonBingo.length === 0) {
        while(cartonBingo.length < cantidadNumerosCarton) {
            let numeroCarton = Math.floor(Math.random() * numeroBolasBingo) + 1;
            if(cartonBingo.findIndex(obj => obj.numero === numeroCarton) === -1) {
                cartonBingo.push({numero: numeroCarton, encontrado: false});
            } 
        }
        cartonBingo.sort((a,b) => a.numero - b.numero);
        console.log('Se ha generado un nuevo cartón para jugar, estos son tus numeros');
        consoleTableBingo(cartonBingo);
        if (cambiarCarton()) {
            cartonBingo = [];
        }
    }
    return cartonBingo;
} 

function cambiarCarton() {

    let reiniciarCarton = false;
    let nuevoCarton = prompt("¿Quieres generar un nuevo cartón? ('Yes' para generar nuevo cartón)");
    if (nuevoCarton != null && nuevoCarton.toLowerCase() === 'yes') {
        reiniciarCarton = true;
    } else {
        alert('A continuación sacaremos el primer número');
    }
    return reiniciarCarton;
}

function sacarNuevoNumero(cartonBingo, numeroBolasBingo) {

    let listaNumerosGenerados = [];
    let lineaCantada = false;

    while(cartonBingo.every(obj => obj.encontrado) != true) {
    
        let numeroGenerado = Math.floor(Math.random() * numeroBolasBingo) + 1;

        if(listaNumerosGenerados.indexOf(numeroGenerado) === -1) {
            listaNumerosGenerados.push(numeroGenerado);
            alert('El siguiente numero es...' + numeroGenerado) ;

            for (i = 0; i < cartonBingo.length; i++) {
                if(cartonBingo[i].numero === numeroGenerado) {
                    cartonBingo[i].numero = 'X';
                    cartonBingo[i].encontrado = true;
                    alert('Felicidades, tienes el numero ' + numeroGenerado + '!');
                    consoleTableBingo(cartonBingo);
                }
            } 

            switch (comprobadorLineaBingo(lineaCantada, cartonBingo)) {
                case 'Linea':
                    lineaCantada = true;
                    alert("Felicidades has hecho linea");
                case true:
                    if (window.confirm("¿Desea continuar con el juego?")) {} else {return;}
                    break;
                 case false:
                    alert("Felicidades eres el ganador!");
                    break;
            }
        }
    }
    return listaNumerosGenerados;
}

function comprobadorLineaBingo(lineaCantada, cartonBingo) {

    let linea1Bingo = cartonBingo.slice(0,5).every(obj => obj.encontrado);
    let linea2Bingo = cartonBingo.slice(5,10).every(obj => obj.encontrado);
    let linea3Bingo = cartonBingo.slice(10,15).every(obj => obj.encontrado);

        if (linea1Bingo && linea2Bingo && linea3Bingo) {
            return false;
        } else if (!lineaCantada && (linea1Bingo || linea2Bingo || linea3Bingo)) {
            return 'Linea';
        }
    return true;
}


function rankingBingo(nombreUsuario, puntuacionBase, listaNumerosGenerados) {

    ranking = [
    {posicion: 1, nombre: "David", puntuación: 35},
    {posicion: 2, nombre: "Juan", puntuación: 28},
    {posicion: 3, nombre: "Raul", puntuación: 21},
    {posicion: 4, nombre: "Jorge", puntuación: 17},
    {posicion: 5, nombre: "Pedro", puntuación: 12},
    {posicion: 6, nombre: "Ignacio", puntuación: 8},
    {posicion: 7, nombre: "Paco", puntuación: 7},
    {posicion: 8, nombre: "Marc", puntuación: 5},
    {posicion: 9, nombre: "Victor", puntuación: 4}
]

    ranking.push({posicion: "X", nombre:nombreUsuario, puntuación:(puntuacionBase - listaNumerosGenerados.length)});
    ranking.sort((a,b)=>b.puntuación - a.puntuación);

    for (i = 0; i < ranking.length; i++) {
        ranking[i].posicion = (i + 1);
    }
    
    alert("A continuación podrás ver el ranking de los 10 mejores jugadores");
    console.table(ranking.slice(0,10));
}

function repetirBingo() {
    
    let nuevaPartidaBingo = prompt("¿Quieres comenzar una nueva partida? ('Yes' para comenzar de nuevo)");
    if (nuevaPartidaBingo != null && nuevaPartidaBingo.toLowerCase() === 'yes') {
        return true;
    } else {
        return false;
    } 
}

function consoleTableBingo(cartonBingo) {

    let tablaBingo = {
        Linea_1: {
            B: cartonBingo[0].numero,
            I: cartonBingo[1].numero,
            N: cartonBingo[2].numero,
            G: cartonBingo[3].numero,
            O: cartonBingo[4].numero
        },
        Linea_2: {
            B: cartonBingo[5].numero,
            I: cartonBingo[6].numero,
            N: cartonBingo[7].numero,
            G: cartonBingo[8].numero,
            O: cartonBingo[9].numero
        },
        Linea_3: {
            B: cartonBingo[10].numero,
            I: cartonBingo[11].numero,
            N: cartonBingo[12].numero,
            G: cartonBingo[13].numero,
            O: cartonBingo[14].numero
        }
    }  
    return console.table(tablaBingo);
}

juegoBingo();
