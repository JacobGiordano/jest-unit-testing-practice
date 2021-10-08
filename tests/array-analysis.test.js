import arrayAnalysis from "../code/array-analysis";

test("Take an array of numbers and returns an object with the average, min, max, and count of numbers", () => {
  expect(arrayAnalysis([1,8,3,4,2,6])).toEqual({ average: 4, min: 1, max: 8, length: 6 });
});