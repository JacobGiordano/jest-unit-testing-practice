import reverseString from "../code/reverseString"

test("reverse a given string", () => {
  expect(reverseString("hello")).toBe("olleh");
});