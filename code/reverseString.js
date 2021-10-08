const reverseString = string => {
  const stringArray = string.split("");
  const reversedArray = stringArray.reverse();
  const reversedString = reversedArray.join("");
  return reversedString;
}

export default reverseString;