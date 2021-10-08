import caesar from "../code/caesar-cipher";

test("calling caesar encodes a string in place, keeping capitalizaton and punctuation", () => {
  expect(caesar("Shhhhhh! This is a SECRET message, yo!", 5)).toBe("Xmmmmmm! Ymnx nx f XJHWJY rjxxflj, dt!");
});