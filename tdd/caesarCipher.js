const letters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

export default function caesarCipher(string, shiftAmount) {
  const input = string.split("");
  const output = [];

  input.forEach((letter) => {
    let returnLetter = findReturnLetter(letter.toLowerCase(), shiftAmount);
    if (isUpperCase(letter)) {
      returnLetter = returnLetter.toUpperCase();
    }
    output.push(returnLetter);
  });

  const outputString = output.join("");
  return outputString;
}

const isUpperCase = function (letter) {
  if (letter === letter.toUpperCase()) {
    return true;
  } else {
    return false;
  }
};

const findReturnLetter = function (letter, shiftAmount) {
  const index = letters.indexOf(letter);
  if (index == -1) return letter;

  let returnIndex = index + shiftAmount + 1; // account for array starting at 0, but "a" is letter 1;
  if (returnIndex > 26) returnIndex = returnIndex - 26; // convert back to array indexing;

  let returnLetter = letters.at(returnIndex - 1);
  return returnLetter;
};
