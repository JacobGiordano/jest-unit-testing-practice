import calculator from "../code/calculator";

test("calculator object has add, subtract, divide, and multiply methods", () => {
  expect(calculator.add(2, 2)).toBe(4);
  expect(calculator.subtract(10, 7)).toBe(3);
  expect(calculator.divide(20, 2)).toBe(10);
  expect(calculator.multiply(5, 4)).toBe(20);
});