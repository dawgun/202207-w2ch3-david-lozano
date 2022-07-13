const questions = [
    {
        letter: "a",
        content: [
            { answer: "abducir", letra:"EMPIEZA POR A.", question: "Dicho de una supuesta criatura extraterrestre: Apoderarse de alguien."},
            { answer: "arteria", letra:"EMPIEZA POR A.", question: "Conducto por donde va la sangre desde el corazón a las demás partes del cuerpo." }
        ]
    },
    {
        letter: "b",
        content: [
            { answer: "bingo", letra:"EMPIEZA POR B.", question: "Juego que ha sacado de quicio a todos los 'Skylabers' en las sesiones de precurso."},
            { answer: "bilis", letra:"EMPIEZA POR B.", question: "Líquido amargo de color amarillo verdoso producido por el hígado y que ayuda a la digestión de los alimentos." }
        ]
    },
    {
        letter: "c",
        content: [
            { answer: "churumbel", letra:"EMPIEZA POR C.", question: "Niño, crío, bebé."},
            { answer: "cereza", letra:"EMPIEZA POR C.", question: "Fruto del cerezo de color rojo oscuro." }
        ]
    },
    {
        letter: "d",
        content: [
            { answer: "diarrea", letra:"EMPIEZA POR D.", question: "Anormalidad en la función del aparato digestivo caracterizada por frecuentes evacuaciones y su consistencia líquida."},
            { answer: "dieresis", letra:"EMPIEZA POR D.", question: "Signo ortográfico que se coloca encima de la u para indicar que esta letra ha de pronunciarse." }
        ]
    },
    {
        letter: "e",
        content: [
            { answer: "ectoplasma", letra:"EMPIEZA POR E.", question: "Gelatinoso y se encuentra debajo de la membrana plasmática. Los cazafantasmas medían su radiación."},
            { answer: "estria", letra:"EMPIEZA POR E.", question: "Línea que se forma en la piel cuando ésta se ha estirado excesivamente." }
        ]
    },
    {
        letter: "f",
        content: [
            { answer: "facil", letra:"EMPIEZA POR F.", question: "Que no requiere gran esfuerzo, capacidad o dificultad."},
            { answer: "fisiologia", letra:"EMPIEZA POR F.", question: "Ciencia que estudia las funciones de los órganos de los seres vivos." }
        ]
    },
    {
        letter: "g",
        content: [
            { answer: "galaxia", letra:"EMPIEZA POR G.", question: "Conjunto enorme de estrellas, polvo interestelar, gases y partículas."},
            { answer: "guitarra", letra:"EMPIEZA POR G.", question: "Instrumento musical con seis cuerdas que hacemos sonar con los dedos." }
        ]
    },
    {
        letter: "h",
        content: [
            { answer: "harakiri", letra:"EMPIEZA POR H.", question: "Suicidio ritual japonés por desentrañamiento."},
            { answer: "hermano", letra:"EMPIEZA POR H.", question: "¿Cómo se llama la persona que tiene el mismo padre y la misma madre que tú?" }
        ]
    },
    {
        letter: "i",
        content: [
            { answer: "iglesia", letra:"EMPIEZA POR I.", question: "Templo cristiano."},
            { answer: "invisible", letra:"EMPIEZA POR I.", question: "Añade un prefijo a la palabra visible para obtener lo contrario y tendrás…" }
        ]
    },
    {
        letter: "j",
        content: [
            { answer: "jabali", letra:"EMPIEZA POR J.", question: "Variedad salvaje del cerdo que sale en la película 'El Rey León', de nombre Pumba."},
            { answer: "jabon", letra:"EMPIEZA POR J.", question: "Se utiliza para limpiar el cuerpo." }
        ]
    },
    {
        letter: "k",
        content: [
            { answer: "kamikaze", letra:"EMPIEZA POR K.", question: "Persona que se juega la vida realizando una acción temeraria."},
            { answer: "koala", letra:"EMPIEZA POR K.", question: "Animal parecido a un oso pequeño y que podemos encontrar en Australia." }
        ]
    },
    {
        letter: "l",
        content: [
            { answer: "licantropo", letra:"EMPIEZA POR L.", question: "Hombre lobo."},
            { answer: "libreria", letra:"EMPIEZA POR L.", question: "Lugar en el que se compran libros." }
        ]
    },
    {
        letter: "m",
        content: [
            { answer: "misantropo", letra:"EMPIEZA POR M.", question: "Persona que huye del trato con otras personas o siente gran aversión hacia ellas."},
            { answer: "comba", letra:"CONTIENE LA M.", question: "Juego que consiste en saltar por encima de una cuerda que se hace pasar por debajo de los pies y sobre la cabeza de quien salta." }
        ]
    },
    {
        letter: "n",
        content: [
            { answer: "necedad", letra:"EMPIEZA POR N.", question: "Demostración de poca inteligencia."},
            { answer: "naranja", letra:"EMPIEZA POR N.", question: "Del campo semántico de los colores y el color de una fruta con la que podemos hacer zumo." }
        ]
    },
    {
        letter: "ñ",
        content: [
            { answer: "señal", letra:"CONTIENE LA Ñ.", question: "Indicio que permite deducir algo de lo que no se tiene un conocimiento directo."},
            { answer: "niño", letra:"CONTIENE LA Ñ.", question: "Persona que tiene pocos años." }
        ]
    },
    {
        letter: "o",
        content: [
            { answer: "orco", letra:"EMPIEZA POR O.", question: "Humanoide fantástico de apariencia terrible y bestial, piel de color verde creada por el escritor Tolkien."},
            { answer: "oscuro", letra:"EMPIEZA POR O.", question: "El antónimo de claro es..." }
        ]
    },
    {
        letter: "p",
        content: [
            { answer: "protoss", letra:"EMPIEZA POR P.", question: "Raza ancestral tecnológicamente avanzada que se caracteriza por sus grandes poderes psíonicos del videojuego StarCraft."},
            { answer: "panadero", letra:"EMPIEZA POR P.", question: "¿Cómo se llama la persona que vende en una panadería?" }
        ]
    },
    {
        letter: "q",
        content: [
            { answer: "queso", letra:"EMPIEZA POR Q.", question: "Producto obtenido por la maduración de la cuajada de la leche."},
            { answer: "equilatero", letra:"CONTIENE LA Q.", question: "Triángulo que tiene todos sus lados iguales." }
        ]
    },
    {
        letter: "r",
        content: [
            { answer: "raton", letra:"EMPIEZA POR R.", question: "Roedor."},
            { answer: "rana", letra:"EMPIEZA POR R.", question: "El renacuajo es la cría de la... " }
        ]
    },
    {
        letter: "s",
        content: [
            { answer: "stackoverflow", letra:"EMPIEZA POR S.", question: "Comunidad salvadora de todo desarrollador informático."},
            { answer: "sosa", letra:"EMPIEZA POR S.", question: "Lo contrario de “La sopa está salada” es: “La sopa está...”" }
        ]
    },
    {
        letter: "t",
        content: [
            { answer: "terminator", letra:"EMPIEZA POR T.", question: "Película del director James Cameron que consolidó a Arnold Schwarzenegger como actor en 1984."},
            { answer: "tarta", letra:"EMPIEZA POR T.", question: "Pastel grande que no suele faltar en los cumpleaños." }
        ]
    },
    {
        letter: "u",
        content: [
            { answer: "unamuno", letra:"EMPIEZA POR U.", question: "Escritor y filósofo español de la generación del 98 autor del libro 'Niebla' en 1914."},
            { answer: "usar", letra:"EMPIEZA POR U.", question: "Sinónimo de utilizar." }
        ]
    },
    {
        letter: "v",
        content: [
            { answer: "vikingos", letra:"EMPIEZA POR V.", question: "Nombre dado a los miembros de los pueblos nórdicos originarios de Escandinavia, famosos por sus incursiones y pillajes en Europa."},
            { answer: "vaso", letra:"EMPIEZA POR V.", question: "Recipiente que sirve para beber." }
        ]
    },
    {
        letter: "w",
        content: [
            { answer: "sandwich", letra:"CONTIENE LA W.", question: "Emparedado hecho con dos rebanadas de pan entre las cuales se coloca jamón y queso."},
            { answer: "waterpolo", letra:"EMPIEZA POR W.", question: "Juego practicado en una piscina entre dos equipo, que consiste en introducir el balón en la portería contraria." }
        ]
    },
    {
        letter: "x",
        content: [
            { answer: "botox", letra:"CONTIENE LA X.", question: "Toxina bacteriana utilizada en cirujía estética."},
            { answer: "xilofono", letra:"EMPIEZA POR X.", question: "Instrumento musical formado por láminas de diferentes tamaños, que suenan al golpearlas." }
        ]
    },
    {
        letter: "y",
        content: [
            { answer: "peyote", letra:"CONTIENE LA Y.", question: "Pequeño cáctus conocido por sus alcaloides psicoactivos utilizado de forma ritual y medicinal por indígenas americanos."},
            { answer: "yegua", letra:"EMPIEZA POR Y.", question: "Hembra del caballo." }
        ]
    },
    {
        letter: "z",
        content: [
            { answer: "zen", letra:"EMPIEZA POR Z.", question: "Escuela de budismo que busca la experiencia de la sabiduría más allá del discurso racional."},
            { answer: "zapato", letra:"EMPIEZA POR Z.", question: "Calzado que nos ponemos en los pies para caminar." }
        ]
    }
]

const letterList = document.querySelectorAll('.palabra');
const startButton = document.getElementById('comenzar');
const answerButton = document.getElementById('botonresponder');
const pasapalabraButton = document.getElementById('botonpasapalabra');
const repeatGame = document.getElementById('jugardenuevo');
const continueButton = document.getElementById('continuarfallo');

let gameFinished = false;
let downloadTimer;

const questionListPasapalabra = () => {

    const alphabet = 'abcdefghijklmnñopqrstuvwxyz';
    const questionNumber = 2;
    let finalQuestions = [];

    for(i = 0; i < alphabet.length; i++) {
        let letter = alphabet[i]
        let preguntaRandom = Math.floor(Math.random() * questionNumber);
        let content = questions.find(question=> question.letter === alphabet[i]).content[preguntaRandom];
        finalQuestions[i] = new questionGenerator(letter, content);
    }
    return finalQuestions;
}

function questionGenerator (letter, content) {

    return {
    letter : letter,
    letra : content.letra,
    question : content.question,
    answer : content.answer,
    status : 0
    }
}

let finalQuestions = questionListPasapalabra();

const countDown = () => {

    downloadTimer = setInterval(function() {
    let timeleft = document.getElementById('tiempo').innerHTML;
    if(timeleft <= 0 || gameFinished) {
        clearInterval(downloadTimer);
        finalGame();
        return;
    }
    document.getElementById('tiempo').innerHTML--;
    },1000);
}

const nextQuestion = () => {

    if (finalQuestions.length === 0) { return gameFinished = true };
    document.getElementById('letraseleccionada').innerHTML = finalQuestions[0].letra;
    document.getElementById('pregunta').innerHTML = finalQuestions[0].question;
    document.getElementById('palabraRespondida').value = '';
}

const wordAnswered = () => {

    const wordFix = (str) => { return str.normalize("NFD").replace(/([^n\u0300-\u036f]|n(?!\u0303(?![\u0300-\u036f])))[\u0300-\u036f]+/gi,"$1").normalize().toLowerCase().trim() };

    letterList.forEach((letraid) => {
        if (finalQuestions[0].letter === letraid.id) {
            if (finalQuestions[0].answer === (wordFix(document.getElementById('palabraRespondida').value))) {
                letraid.classList.add('palabra-acertada');
                document.getElementById('aciertos').innerHTML++;
            } else {
                letraid.classList.add('palabra-fallida');
                document.getElementById('falladas').innerHTML++;
                answerFailed();
            } 
        }
    })
    finalQuestions.shift();
    document.getElementById('restantes').innerHTML--;
    nextQuestion();
}

const answerFailed = () => {

    clearInterval(downloadTimer);
    document.getElementById('letrafallada').innerHTML = (finalQuestions[0].letter).toUpperCase();
    document.getElementById('respuestacorrecta').innerHTML = (finalQuestions[0].answer).toUpperCase();
    document.getElementById('preguntasyrespuestas').style.display = 'none';
    document.getElementById('pantallafallo').style.display = 'block';
}

const finalGame = () => {
    
    document.getElementById('preguntasyrespuestas').style.display = 'none';
    document.getElementById('paciertosfinal').innerHTML = document.getElementById('aciertos').innerHTML;
    document.getElementById('pfallosfinal').innerHTML = document.getElementById('falladas').innerHTML;
    document.getElementById('ptiemporestante').innerHTML = document.getElementById('tiempo').innerHTML;
    document.getElementById('finalpartida').style.display = 'block';
}

startButton.addEventListener('click', () => {

    document.getElementById('iniciopasapalabra').style.display = 'none';
    document.getElementById('preguntasyrespuestas').style.display = 'block';
    document.getElementById('circulocentral').style.backgroundColor = 'inherit';
    nextQuestion();
    countDown();
})

answerButton.addEventListener('click', () => {

    wordAnswered();
})

document.addEventListener('keydown', (tecla) => {

    if (tecla.code === 'Enter') {
        if(document.getElementById('preguntasyrespuestas').style.display === 'block') {
            wordAnswered();
        } else if (document.getElementById('pantallafallo').style.display === 'block'){
            document.getElementById('pantallafallo').style.display = 'none';
            document.getElementById('preguntasyrespuestas').style.display = 'block';
            countDown();
        }
    }
})

pasapalabraButton.addEventListener('click',() => {

    const letraPasada = finalQuestions[0];
    finalQuestions.shift();
    finalQuestions.push(letraPasada);
    nextQuestion();
})

continueButton.addEventListener('click', () => {
    
    document.getElementById('pantallafallo').style.display = 'none';
    document.getElementById('preguntasyrespuestas').style.display = 'block';
    countDown()
})

repeatGame.addEventListener('click',() => {

    finalQuestions = questionListPasapalabra();
    document.getElementById('preguntasyrespuestas').style.display = 'block';
    document.getElementById('finalpartida').style.display = 'none';
    document.getElementById('restantes').innerHTML = 27;
    document.getElementById('falladas').innerHTML = 0;
    document.getElementById('aciertos').innerHTML = 0;
    document.getElementById('tiempo').innerHTML = 150;
    letterList.forEach((letraid) => {
        letraid.classList.remove('palabra-acertada');
        letraid.classList.remove('palabra-fallida');
    })
    gameFinished = false;
    finalQuestions = questionListPasapalabra();
    nextQuestion();
    countDown();
})