// HEAVILY influenced by DalyIng's reply here:
// https://gist.github.com/EvanHahn/2587465
// because this lesson is supposed to be about unit testing…
// not writing a Caesar cipher from scratch:

const shiftChar = (letter, shift, asciiCode) => {
  return String.fromCharCode(((letter.charCodeAt() - asciiCode + shift) % 26) + asciiCode);
}

const caesar = (string, shift) => {
  return string
    .replace(/[a-z]/g, char => shiftChar(char, shift, 97))
    .replace(/[A-Z]/g, char => shiftChar(char, shift, 65));
}

export default caesar;