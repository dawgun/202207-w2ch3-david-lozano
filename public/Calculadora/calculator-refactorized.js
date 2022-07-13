const sumNumbers = (firstNumber, secondNumber) =>
  Math.floor((Number(firstNumber) + Number(secondNumber)) * 1000) / 1000;

const restNumbers = (firstNumber, secondNumber) =>
  Math.floor((Number(firstNumber) - Number(secondNumber)) * 1000) / 1000;

const multiplyNumbers = (firstNumber, secondNumber) =>
  Math.floor(Number(firstNumber) * Number(secondNumber) * 1000) / 1000;

const divisionNumbers = (firstNumber, secondNumber) =>
  Math.floor((Number(firstNumber) / Number(secondNumber)) * 1000) / 1000;

const squareRoot = (uniqueNumber) =>
  Math.floor(Math.sqrt(uniqueNumber) * 1000) / 1000;

function numCalculator(firstNumber, secondNumber) {
  const operationsResult = [];

  operationsResult[0] = sumNumbers(firstNumber, secondNumber);
  operationsResult[1] = restNumbers(firstNumber, secondNumber);
  operationsResult[2] = multiplyNumbers(firstNumber, secondNumber);
  operationsResult[3] = divisionNumbers(firstNumber, secondNumber);

  return operationsResult;
}

const inputNumbers = () => {
  const numbersList = [];
  let questionNumber;

  while (questionNumber !== null && numbersList.length < 2) {
    questionNumber = prompt("Añade un numero");

    if (questionNumber === null) {
      alert("Que tengas un buen dia");
    } else if (!Number.isNaN(questionNumber) && questionNumber.length !== 0) {
      numbersList.push(Number(questionNumber));
    } else {
      alert(
        "Escribe solo numeros enteros o con decimales usando un punto en vez de coma"
      );
    }
  }
  return numbersList;
};

const checkNumbersInput = (listNumbers) => {
  if (listNumbers.length === 0) {
    alert("No has introducido ningun número");
  } else if (listNumbers.length === 1) {
    const squareRootResult = squareRoot(listNumbers[0]);
    return squareRootResult;
  } else {
    const operationsListResult = numCalculator(listNumbers[0], listNumbers[1]);
    return operationsListResult;
  }
  return "La calculadora se ha acabado, que pase un buen dia";
};

const mainCalculator = () => {
  const numberListCompleted = inputNumbers();
  checkNumbersInput(numberListCompleted);
};

mainCalculator();
