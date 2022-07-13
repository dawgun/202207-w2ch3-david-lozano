let nombreUsuario;
let listaVuelo = [];

let vuelos = [
    { id:0, to:'Bilbao', from:'Barcelona', cost:1600, scale:false },
    { id:1, to: 'New York', from: 'Barcelona', cost: 700, scale: false },
    { id:2, to: 'Los Angeles', from: 'Madrid', cost: 1100, scale: true },
    { id:3, to: 'Paris', from: 'Barcelona', cost: 210, scale: false },
    { id:4, to: 'Roma', from: 'Barcelona', cost: 150, scale: false },
    { id:5, to: 'London', from: 'Madrid', cost: 200, scale: false },
    { id:6, to: 'Madrid', from: 'Barcelona', cost: 90, scale: false },
    { id:7, to: 'Tokyo', from: 'Madrid', cost: 1500, scale: true },
    { id:8, to: 'Shangai', from: 'Barcelona', cost: 800, scale: true },
    { id:9, to: 'Sydney', from: 'Barcelona', cost: 150, scale: true },
    { id:10, to: 'Tel-Aviv', from: 'Madrid', cost: 150, scale: false }
];

informacionInicio();

function informacionInicio() {

    nombreUsuario = revisaPrompt(nombreUsuario)
    alert("Bienvenido/a " + nombreUsuario + " a las lineas de vuelo SkyLab.");
    alert("A continuación podrá visualizar los vuelos disponibles para el dia de hoy.");
        
    listaDeVuelos(vuelos);
        
    alert(listaVuelo.join('\n'));
    alert("El precio medio de los vuelos del dia de hoy es de " + calcularPrecioMedio(vuelos) + "€.");
    alert("Además hay un total de " + calcularEscalasVuelo(vuelos) + " vuelos que hacen escala.");
    alert("Y los últimos 5 vuelos del dia de hoy son los siguientes:");
    alert(listaVuelo.slice(-5,listaVuelo.length).join('\n'));
    
    eleccionTipoUsuario();
}

function listaDeVuelos(arrayVuelos) {

    listaVuelo = [];

    for (fly = 0; fly < arrayVuelos.length; fly++) {
        let item = arrayVuelos[fly];
        let msg = "El vuelo con id " + item.id + " con origen: " + item.to + ", y destino: " + item.from + " tiene un coste de " + item.cost + "€ y ";
        msg += item.scale ? "realiza escala." : "no realiza ninguna escala.";
        listaVuelo.push(msg);
    }
} 

function calcularPrecioMedio(arrayVuelos) {

    let precioMedio = 0;
    for (fly = 0; fly < arrayVuelos.length; fly++) {
        precioMedio += arrayVuelos[fly].cost;
    }
    return (Math.floor(precioMedio / arrayVuelos.length*100)/100);
}

function calcularEscalasVuelo(arrayVuelos) {

    let escalasVuelo = 0;
    for (fly = 0; fly < arrayVuelos.length; fly++) {
        escalasVuelo += arrayVuelos[fly].scale ? 1 : 0;
    }
    return escalasVuelo;
}

function eleccionTipoUsuario() {

    let tipodeUsuario = prompt("Por favor, escoja el tipo de cuenta. (Admin, User)");
    if (tipodeUsuario === null) {
        alert("Que tengas un buen día " + nombreUsuario);
    } else if (tipodeUsuario.toLowerCase() == "admin") {
        cuentaAdmin();
    } else if (tipodeUsuario.toLowerCase() == "user") {
        cuentaUser();
    } else {
        alert("No existe ese tipo de usuario, escoja correctamente");
        eleccionTipoUsuario();
    }
}

function cuentaAdmin() {

    let modoAdmin = prompt("Selecciona entre las siguientes opciones: (Añadir, Eliminar, Lista, Salir)" +
    "\n\nAñadir: Te permitirá añadir un nuevo vuelo" +
    "\nEliminar: Te permitira eliminar un vuelo actual" +   
    "\nLista: Lista de los vuelos actuales" +
    "\nSalir: Saldrás de la aplicación");

    if (modoAdmin === null) {
        alert("Que tengas un buen día " + nombreUsuario);
        return;
    } else {
        switch (modoAdmin.toLowerCase()) {
            case "añadir":
                if (vuelos.length < 15) {
                    añadirVuelo();
                    listaDeVuelos(vuelos);              
                    break;
                } else {
                    alert("Ya has alcanzado " + vuelos.length + ", ya no puedes añadir mas." )
                    break;
                }
            case "eliminar":
                let idEliminar = prompt("Selecciona la id del vuelo que deseas eliminar\n\n" + listaVuelo.join('\n'));
                (idEliminar !== null && idEliminar !== '') ? (eliminarVuelo(Number(idEliminar)), listaDeVuelos(vuelos)) : alert('Debes escribir una id (Número)');
                break;
            case "lista":
                alert(listaVuelo.join('\n'));
                break;
            case "salir":
                alert("Que tengas un buen dia " + nombreUsuario);
                return;
            default:
                alert("No existe esta opción, asegurese de escoger la palabra correctamente");
        }
    }
    cuentaAdmin();
}

function cuentaUser() {

    let modoUser = prompt("Selecciona entre las siguientes opciones: (Comprar, Precio, Lista, Limpiar, Salir)" +
    "\n\nComprar: Podrás elegir el vuelo que comprar segun la lista actual" +
    "\nPrecio: Actualizará la lista de vuelos segun el valor o menor del precio" +
    "\nLimpiar: Podras quitar el filtro de precios de la lista" +
    "\nLista: Podrás consultar la lista de vuelos" +
    "\nSalir: Saldrás de la aplicación");

    if (modoUser === null) {
        alert("Que tengas un buen día " + nombreUsuario);
        return;
    } else {
        switch (modoUser.toLowerCase()) {
            case "comprar":
                let compraVuelo = prompt("Introduzca la id del vuelo que desea comprar\n\n" + listaVuelo.join('\n'));
                if (compraVuelo != null && !isNaN.compraVuelo && compraVuelo != '') {
                    let vueloSeleccionado = [vuelos.find(vuelo => vuelo.id === Number(compraVuelo))];
                    listaDeVuelos(vueloSeleccionado);
                    alert("Gracias por la compra de:\n" +listaVuelo.join('\n')+ ", vuelva pronto.");
                    return;
                } else {alert('No ha introducido ninguna id')};
                break;
            case "precio":
                let filtroPrecio = prompt("Introduce el precio maximo deseado para comprar un vuelo");
                !isNaN(filtroPrecio) && filtroPrecio != '' ? (filtradoPrecios(Number(filtroPrecio)), alert('Lista actualizada')) : alert("No has introducido un número");
                break;
            case "limpiar":
                listaDeVuelos(vuelos);
                alert("Han sido retirados el filtros de precio en la lista de vuelos");
                break;
            case "lista":
                alert(listaVuelo.join('\n'));
                break;
            case "salir":
                alert("Que tengas un buen dia " + nombreUsuario);
                return;
            default:
                alert("No existe esta opción, asegurese de escoger la palabra correctamente");
        }
    }
    cuentaUser();
}

function añadirVuelo() {
   
    let ultimaid = vuelos[vuelos.length - 1].id + 1;

    let origen = prompt("Escribe el lugar de origen del vuelo");
    if(origen === null || origen === '') return alert('Debes escribir algo para continuar');

    let destino = prompt("Escribe el lugar de destino del vuelo");
    if(destino === null ||destino === '') return alert('Debes escribir algo para continuar');

    let precio = prompt("Escribe el precio del vuelo");
    if(precio === null ||precio === '') return alert('Debes escribir algo para continuar');

    let escala = prompt("Escribe 1 o mas si hace escala, escribe 0 si no hace escala.");
    if(escala === null ||escala === '') return alert('Debes escribir algo para continuar');

    if ( !isNaN(origen) || !isNaN(destino) || isNaN(precio) ||  isNaN(escala) ) {
        alert("Has cometido un fallo, vuelve a empezar");
        return;
    }

    vuelos.push({ id: ultimaid, to: origen, from: destino, cost: precio, scale: escala}); 
}

function eliminarVuelo(idvuelo) {
    vuelos = vuelos.filter(function(vuelos) {
        return vuelos.id !== idvuelo;
    });
}

function filtradoPrecios(num1) {
    listaVuelo = [];

    for (fly = 0; fly < vuelos.length; fly++) {
        let item = vuelos[fly];
        if (item.cost <= num1) {
            let msg = "El vuelo con id " + item.id + " con origen: " + item.to + ", y destino: " + item.from + " tiene un coste de " + item.cost + "€ y ";
            msg += item.scale ? "realiza escala." : "no realiza ninguna escala.";
            listaVuelo.push(msg);
        }
    }
}

function revisaPrompt(variable) {
 
    do { 
        variable = prompt("Por favor, escriba su nombre para poder digirnos hacia usted.");
        if (variable === null || variable === '' ) {
            alert('Debes escribir algo para continuar');
        } else {
            return variable;
        } 
    } while (variable === null || variable === '');
}