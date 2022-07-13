var primerNumero = "1332.232323"
var segundoNumero = "1.2"
var raizResultado = []
var numResultado = []


if (!isNaN(primerNumero) && !segundoNumero){
    raizCuadrada(primerNumero)
}   else if (!isNaN(primerNumero) && !isNaN(segundoNumero)){
        numCalculadora(primerNumero, segundoNumero)
}   else {
        console.log("Escribe solo numeros o un punto en vez de coma")
    } 

// Raiz cuadrada cuando solo hay un numero

function raizCuadrada(num1){
    raizResultado.push(Math.floor(Math.sqrt(num1)*1000)/1000)
    console.log("La raiz cuadrada de " + num1 + " es " + raizResultado[0])
    }

// Operaciones matematicas cuando hay dos numeros

function numCalculadora(num1, num2) {
    numResultado.push(Math.floor((Number(num1) + Number(num2))*1000)/1000)
    numResultado.push(Math.floor((Number(num1) - Number(num2))*1000)/1000)
    numResultado.push(Math.floor((Number(num1) * Number(num2))*1000)/1000)
    numResultado.push(Math.floor((Number(num1) / Number(num2))*1000)/1000)
    console.log("La suma de " + num1 + " y " + num2 + " es " + numResultado[0])
    console.log("La resta de " + num1 + " y " + num2 + " es " + numResultado[1])
    console.log("La multiplicación de " + num1 + " y " + num2 + " es " + numResultado[2])
    console.log("La división de " + num1 + " y " + num2 + " es " + numResultado[3])
 }
