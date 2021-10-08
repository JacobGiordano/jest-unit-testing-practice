const capitalize = string => {
  let capitalized = string.slice(0, 1).toUpperCase();
  let remainder = string.slice(1, string.length);
  return capitalized + remainder;
}

export default capitalize;