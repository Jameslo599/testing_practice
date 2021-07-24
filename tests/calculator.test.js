import calculator from "../code/calculator";

test("calculator add two numbers", () => {
  expect(calculator.add(5, 9)).toBe(14);
});

test("calculator subtract two numbers", () => {
  expect(calculator.subtract(5, 9)).toBe(-4);
});

test("calculator multiply two numbers", () => {
  expect(calculator.multiply(5, 9)).toBe(45);
});

test("calculator divide two numbers", () => {
  expect(calculator.divide(5, 5)).toBe(1);
});
