import capitalize from "../code/capitalize";

test("capitalizes first character of a string", () => {
  expect(capitalize("hello")).toBe("Hello");
});