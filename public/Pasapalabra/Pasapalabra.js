const questions = [
  {
    letter: "a",
    content: [
      {
        answer: "abducir",
        question:
          "CON LA A. Dicho de una supuesta criatura extraterrestre: Apoderarse de alguien.",
      },
      {
        answer: "arteria",
        question:
          "CON LA A. Conducto por donde va la sangre desde el corazón a las demás partes del cuerpo.",
      },
    ],
  },
  {
    letter: "b",
    content: [
      {
        answer: "bingo",
        question:
          "CON LA B. Juego que ha sacado de quicio a todos los 'Skylabers' en las sesiones de precurso.",
      },
      {
        answer: "bilis",
        question:
          "CON LA B. Líquido amargo de color amarillo verdoso producido por el hígado y que ayuda a la digestión de los alimentos.",
      },
    ],
  },
  {
    letter: "c",
    content: [
      { answer: "churumbel", question: "CON LA C. Niño, crío, bebé." },
      {
        answer: "cereza",
        question: "CON LA C. Fruto del cerezo de color rojo oscuro.",
      },
    ],
  },
  {
    letter: "d",
    content: [
      {
        answer: "diarrea",
        question:
          "CON LA D. Anormalidad en la función del aparato digestivo caracterizada por frecuentes evacuaciones y su consistencia líquida.",
      },
      {
        answer: "dieresis",
        question:
          "CON LA D. Signo ortográfico que se coloca encima de la u para indicar que esta letra ha de pronunciarse.",
      },
    ],
  },
  {
    letter: "e",
    content: [
      {
        answer: "ectoplasma",
        question:
          "CON LA E. Gelatinoso y se encuentra debajo de la membrana plasmática. Los cazafantasmas medían su radiación.",
      },
      {
        answer: "estria",
        question:
          "CON LA E. Línea que se forma en la piel cuando ésta se ha estirado excesivamente.",
      },
    ],
  },
  {
    letter: "f",
    content: [
      {
        answer: "facil",
        question:
          "CON LA F. Que no requiere gran esfuerzo, capacidad o dificultad.",
      },
      {
        answer: "fisiologia",
        question:
          "CON LA F. Ciencia que estudia las funciones de los órganos de los seres vivos.",
      },
    ],
  },
  {
    letter: "g",
    content: [
      {
        answer: "galaxia",
        question:
          "CON LA G. Conjunto enorme de estrellas, polvo interestelar, gases y partículas.",
      },
      {
        answer: "guitarra",
        question:
          "CON LA G. Instrumento musical con seis cuerdas que hacemos sonar con los dedos.",
      },
    ],
  },
  {
    letter: "h",
    content: [
      {
        answer: "harakiri",
        question: "CON LA H. Suicidio ritual japonés por desentrañamiento.",
      },
      {
        answer: "hermano",
        question:
          "CON LA H. ¿Cómo se llama la persona que tiene el mismo padre y la misma madre que tú?",
      },
    ],
  },
  {
    letter: "i",
    content: [
      { answer: "iglesia", question: "CON LA I. Templo cristiano." },
      {
        answer: "invisible",
        question:
          "CON LA I. Añade un prefijo a la palabra visible para obtener lo contrario y tendrás…",
      },
    ],
  },
  {
    letter: "j",
    content: [
      {
        answer: "jabali",
        question:
          "CON LA J. Variedad salvaje del cerdo que sale en la película 'El Rey León', de nombre Pumba.",
      },
      {
        answer: "jabon",
        question: "CON LA J. Se utiliza para limpiar el cuerpo.",
      },
    ],
  },
  {
    letter: "k",
    content: [
      {
        answer: "kamikaze",
        question:
          "CON LA K. Persona que se juega la vida realizando una acción temeraria.",
      },
      {
        answer: "koala",
        question:
          "CON LA K. Animal parecido a un oso pequeño y que podemos encontrar en Australia.",
      },
    ],
  },
  {
    letter: "l",
    content: [
      { answer: "licantropo", question: "CON LA L. Hombre lobo." },
      {
        answer: "libreria",
        question: "CON LA L. Lugar en el que se compran libros.",
      },
    ],
  },
  {
    letter: "m",
    content: [
      {
        answer: "misantropo",
        question:
          "CON LA M. Persona que huye del trato con otras personas o siente gran aversión hacia ellas.",
      },
      {
        answer: "comba",
        question:
          "CONTIENE LA M. Juego que consiste en saltar por encima de una cuerda que se hace pasar por debajo de los pies y sobre la cabeza de quien salta.",
      },
    ],
  },
  {
    letter: "n",
    content: [
      {
        answer: "necedad",
        question: "CON LA N. Demostración de poca inteligencia.",
      },
      {
        answer: "naranja",
        question:
          "CON LA N. Del campo semántico de los colores y el color de una fruta con la que podemos hacer zumo.",
      },
    ],
  },
  {
    letter: "ñ",
    content: [
      {
        answer: "señal",
        question:
          "CONTIENE LA Ñ. Indicio que permite deducir algo de lo que no se tiene un conocimiento directo.",
      },
      {
        answer: "niño",
        question: "CONTIENE LA Ñ. Persona que tiene pocos años.",
      },
    ],
  },
  {
    letter: "o",
    content: [
      {
        answer: "orco",
        question:
          "CON LA O. Humanoide fantástico de apariencia terrible y bestial, piel de color verde creada por el escritor Tolkien.",
      },
      { answer: "oscuro", question: "CON LA O. El antónimo de claro es..." },
    ],
  },
  {
    letter: "p",
    content: [
      {
        answer: "protoss",
        question:
          "CON LA P. Raza ancestral tecnológicamente avanzada que se caracteriza por sus grandes poderes psíonicos del videojuego StarCraft.",
      },
      {
        answer: "panadero",
        question:
          "CON LA P. ¿Cómo se llama la persona que vende en una panadería?",
      },
    ],
  },
  {
    letter: "q",
    content: [
      {
        answer: "queso",
        question:
          "CON LA Q. Producto obtenido por la maduración de la cuajada de la leche.",
      },
      {
        answer: "equilatero",
        question: "CONTIENE LA Q. Triángulo que tiene todos sus lados iguales.",
      },
    ],
  },
  {
    letter: "r",
    content: [
      { answer: "raton", question: "CON LA R. Roedor." },
      {
        answer: "rana",
        question: "CON LA R. El renacuajo es la cría de la... ",
      },
    ],
  },
  {
    letter: "s",
    content: [
      {
        answer: "stackoverflow",
        question:
          "CON LA S. Comunidad salvadora de todo desarrollador informático.",
      },
      {
        answer: "sosa",
        question:
          "CON LA S. Lo contrario de “La sopa está salada” es: “La sopa está...”",
      },
    ],
  },
  {
    letter: "t",
    content: [
      {
        answer: "terminator",
        question:
          "CON LA T. Película del director James Cameron que consolidó a Arnold Schwarzenegger como actor en 1984.",
      },
      {
        answer: "tarta",
        question:
          "CON LA T. Pastel grande que no suele faltar en los cumpleaños.",
      },
    ],
  },
  {
    letter: "u",
    content: [
      {
        answer: "unamuno",
        question:
          "CON LA U. Escritor y filósofo español de la generación del 98 autor del libro 'Niebla' en 1914.",
      },
      { answer: "usar", question: "CON LA U. Sinónimo de utilizar." },
    ],
  },
  {
    letter: "v",
    content: [
      {
        answer: "vikingos",
        question:
          "CON LA V. Nombre dado a los miembros de los pueblos nórdicos originarios de Escandinavia, famosos por sus incursiones y pillajes en Europa.",
      },
      {
        answer: "vaso",
        question: "CON LA V. Recipiente que sirve para beber.",
      },
    ],
  },
  {
    letter: "w",
    content: [
      {
        answer: "sandwich",
        question:
          "CONTIENE LA W. Emparedado hecho con dos rebanadas de pan entre las cuales se coloca jamón y queso.",
      },
      {
        answer: "waterpolo",
        question:
          "CON LA W. Juego practicado en una piscina entre dos equipo, que consiste en introducir el balón en la portería contraria.",
      },
    ],
  },
  {
    letter: "x",
    content: [
      {
        answer: "botox",
        question:
          "CONTIENE LA X. Toxina bacteriana utilizada en cirujía estética.",
      },
      {
        answer: "xilofono",
        question:
          "CONT LA X. Instrumento musical formado por láminas de diferentes tamaños, que suenan al golpearlas.",
      },
    ],
  },
  {
    letter: "y",
    content: [
      {
        answer: "peyote",
        question:
          "CONTIENE LA Y. Pequeño cáctus conocido por sus alcaloides psicoactivos utilizado de forma ritual y medicinal por indígenas americanos.",
      },
      { answer: "yegua", question: "CON LA Y. Hembra del caballo." },
    ],
  },
  {
    letter: "z",
    content: [
      {
        answer: "zen",
        question:
          "CON LA Z. Escuela de budismo que busca la experiencia de la sabiduría más allá del discurso racional.",
      },
      {
        answer: "zapato",
        question: "CON LA Z. Calzado que nos ponemos en los pies para caminar.",
      },
    ],
  },
];

function bienvenidaPasapalabra() {
  alert(
    "Bienvenido al Pasapalabra de David, donde podrás ganar grandes sumas de dinero"
  );
  alert(
    "El juego trata de responder correctamente 27 palabras que cada una contendrá una palabra del abecedario."
  );
  alert(
    "Al final del juego entrarás en el ranking donde verás los 10 mejores participantes según las palabras acertadas"
  );
}

function registroUsuario() {
  let nombreUsuario;

  do {
    nombreUsuario = prompt(
      "Introduzca su nombre para registrar su puntuación al final del juego"
    );
    if (nombreUsuario === null || nombreUsuario.length === 0) {
      alert("Introduce un nombre para poder continuar");
    }
  } while (nombreUsuario === null || nombreUsuario.length === 0);
  return nombreUsuario;
}

function GeneradorPreguntasPasapalabra(letter, content) {
  return {
    letter,
    question: content.question,
    answer: content.answer,
    status: 0,
  };
}

function ListaPreguntasPasapalabra() {
  const abecedario = "abcdefghijklmnñopqrstuvwxyz";
  const numeroPreguntas = 2;
  const preguntasFinales = [];

  for (let i = 0; i < abecedario.length; i++) {
    const preguntaRandom = Math.floor(Math.random() * numeroPreguntas);
    const letter = abecedario[i];
    const content = questions.find(
      (question) => question.letter === abecedario[i]
    ).content[preguntaRandom];
    preguntasFinales[i] = new GeneradorPreguntasPasapalabra(letter, content);
  }
  return preguntasFinales;
}

function preguntasRespuestas(preguntasFinales) {
  const opcionesPasapalabra =
    "\n\nPasapalabra: Respondes más tarde\nEnd: Terminas la partida actual";
  let respuestasAcertadas = 0;
  let respuestasFalladas = 0;
  let respuestaPasapalabra;
  const ajustesPalabra = (str) =>
    str
      .normalize("NFD")
      .replace(
        /([^n\u0300-\u036f]|n(?!\u0303(?![\u0300-\u036f])))[\u0300-\u036f]+/gi,
        "$1"
      )
      .toLowerCase()
      .trim();

  while (preguntasFinales.findIndex((obj) => obj.status === 0) !== -1) {
    for (let i = 0; i < preguntasFinales.length; i++) {
      if (preguntasFinales[i].status === 0) {
        do {
          respuestaPasapalabra = prompt(
            preguntasFinales[i].question + opcionesPasapalabra
          );
          if (
            respuestaPasapalabra === null ||
            respuestaPasapalabra.length === 0
          ) {
            alert("Por favor, debes responder algo");
          }
        } while (
          respuestaPasapalabra === null ||
          respuestaPasapalabra.length === 0
        );

        switch (ajustesPalabra(respuestaPasapalabra)) {
          case preguntasFinales[i].answer:
            alert("¡Respuesta correcta!");
            preguntasFinales[i].status = 1;
            respuestasAcertadas++;
            break;
          case "pasapalabra":
            alert("Procederemos a la siguiente letra");
            break;
          case "end":
            alert(
              `Has acertado un total de ${respuestasAcertadas} palabras, pero como no has terminado el juego, no entrarás en el ranking`
            );
            return false;
          default:
            alert(
              `¡Respuesta incorrecta! La respuesta correcta era ${preguntasFinales[i].answer}`
            );
            preguntasFinales[i].status = -1;
            respuestasFalladas++;
        }
      }
    }
  }
  alert(
    `Has acertado un total de ${respuestasAcertadas} palabras, y has fallado un total de ${respuestasFalladas}.`
  );
  return respuestasAcertadas;
}

function rankingPasapalabra(nombreUsuario, respuestasAcertadas) {
  const ranking = [
    { posicion: 1, nombre: "David", aciertos: 21 },
    { posicion: 2, nombre: "Juan", aciertos: 18 },
    { posicion: 3, nombre: "Raul", aciertos: 16 },
    { posicion: 4, nombre: "Jorge", aciertos: 14 },
    { posicion: 5, nombre: "Pedro", aciertos: 12 },
    { posicion: 6, nombre: "Ignacio", aciertos: 10 },
    { posicion: 7, nombre: "Paco", aciertos: 7 },
    { posicion: 8, nombre: "Marc", aciertos: 5 },
    { posicion: 9, nombre: "Victor", aciertos: 4 },
  ];

  ranking.push({
    posicion: "X",
    nombre: nombreUsuario,
    aciertos: respuestasAcertadas,
  });
  ranking.sort((a, b) => b.aciertos - a.aciertos);

  for (let i = 0; i < ranking.length; i++) {
    ranking[i].posicion = i + 1;
  }

  alert("A continuación podrás ver el ranking de los 10 mejores jugadores");
  console.table(ranking);
}

function repetirPasapalabra() {
  const nuevaPartidaPasapalabra = prompt(
    "¿Quieres comenzar una nueva partida? ('Yes' para comenzar de nuevo)"
  );
  if (
    nuevaPartidaPasapalabra != null &&
    nuevaPartidaPasapalabra.toLowerCase() === "yes"
  ) {
    return true;
  }
  return false;
}

function juegoPasapalabra() {
  let volveraComenzar = true;

  while (volveraComenzar) {
    bienvenidaPasapalabra();
    const nombreUsuario = registroUsuario();
    const preguntasFinales = ListaPreguntasPasapalabra();
    const respuestasAcertadas = preguntasRespuestas(preguntasFinales);
    if (typeof respuestasAcertadas === "number") {
      rankingPasapalabra(nombreUsuario, respuestasAcertadas);
    }
    volveraComenzar = repetirPasapalabra();
  }
  alert("Esperamos que vuelvas otra vez, muchas gracias");
}

juegoPasapalabra();
