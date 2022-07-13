import {
  sumNumbers,
  restNumbers,
  multiplyNumbers,
  divisionNumbers,
  squareRoot,
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
});
