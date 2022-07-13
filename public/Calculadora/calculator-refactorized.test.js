import {
  sumNumbers,
  restNumbers,
  multiplyNumbers,
  divisionNumbers,
  squareRoot,
  numbersCalculator,
  checkNumbersInput,
} from "./calculator-refactorized";

describe("Given a aritmetic function", () => {
  describe("When it's called and it recieves the numbers of 2 and 2", () => {
    test("Then it should the sum be 4", () => {
      const firstNumber = 2;
      const secondNumber = 2;
      const expectedReturn = 4;

      const numberReturned = sumNumbers(firstNumber, secondNumber);

      expect(numberReturned).toBe(expectedReturn);
    });
  });

  describe("When it's called and it recieves the numbers of 6 and 2", () => {
    test("Then it should rest and be 4", () => {
      const firstValue = 6;
      const secondValue = 2;
      const expectedReturn = 4;

      const numberReturned = restNumbers(firstValue, secondValue);

      expect(numberReturned).toBe(expectedReturn);
    });
  });

  describe("When it's called and it recieves the numbers of 5 and 2", () => {
    test("Then it should the multiply be 10", () => {
      const firstValue = 5;
      const secondValue = 2;
      const expectedReturn = 10;

      const numberReturned = multiplyNumbers(firstValue, secondValue);

      expect(numberReturned).toBe(expectedReturn);
    });
  });

  describe("When it's called and it recieves the numbers of 10 and 2", () => {
    test("Then it should the division be 5", () => {
      const firstValue = 10;
      const secondValue = 2;
      const expectedReturn = 5;

      const numberReturned = divisionNumbers(firstValue, secondValue);

      expect(numberReturned).toBe(expectedReturn);
    });
  });

  describe("When it's called and it recieves the number 9", () => {
    test("Then it should the squareRoot be 3", () => {
      const uniqueNumber = 9;
      const expectedReturn = 3;

      const numberReturned = squareRoot(uniqueNumber);

      expect(numberReturned).toBe(expectedReturn);
    });
  });

  describe("When it's called and it recieves the number 2.344245 and 2.544343", () => {
    test("Then it should be 4.888", () => {
      const firstNumber = 2.344245;
      const secondNumber = 2.544343;
      const expectedReturn = 4.888;

      const numberReturned = sumNumbers(firstNumber, secondNumber);

      expect(numberReturned).toBe(expectedReturn);
    });
  });

  describe("When it's called and it recieves the number 8 and 4", () => {
    test("Then it should be an array [12,4,32,2]", () => {
      const firstNumber = 8;
      const secondNumber = 4;
      const firstNumberExpectedReturn = 12;
      const secondNumberExpectedReturn = 4;
      const thirdNumberExpectedReturn = 32;
      const fourthNumberExpectedReturn = 2;

      const numberListReturned = numbersCalculator(firstNumber, secondNumber);

      expect(numberListReturned).toContain(firstNumberExpectedReturn);
      expect(numberListReturned).toContain(secondNumberExpectedReturn);
      expect(numberListReturned).toContain(thirdNumberExpectedReturn);
      expect(numberListReturned).toContain(fourthNumberExpectedReturn);
    });
  });

  describe("When it's called and it recieves an array with only number 25", () => {
    test("Then it should the squareRoot be 5", () => {
      const uniqueNumberArray = [25];
      const expectedReturn = 5;

      const numberReturned = checkNumbersInput(uniqueNumberArray);

      expect(numberReturned).toBe(expectedReturn);
    });
  });

  describe("When it's called and it recieves the numbers 9 and 3 into an array", () => {
    test("Then it should an array [12,6,27,3]", () => {
      const listNumbers = [9, 3];

      const numberListReturned = checkNumbersInput(listNumbers);

      const firstNumberExpectedReturn = 12;
      const secondNumberExpectedReturn = 6;
      const thirdNumberExpectedReturn = 27;
      const fourthNumberExpectedReturn = 3;

      expect(numberListReturned).toContain(firstNumberExpectedReturn);
      expect(numberListReturned).toContain(secondNumberExpectedReturn);
      expect(numberListReturned).toContain(thirdNumberExpectedReturn);
      expect(numberListReturned).toContain(fourthNumberExpectedReturn);
    });
  });
});
