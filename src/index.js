const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
};

function decode(expr) {
  let arrayOfNumber = [];
  let symbol = "";
  let arrayOfSymbols = [];
  for (let i = 0; i < expr.length; i = i + 10) {
    arrayOfNumber.push(expr.substring(i, i + 10));
  }
  arrayOfNumber.forEach((string) => {
    if (string === "**********") {
      symbol = " ";
      arrayOfSymbols.push(symbol);
    } else {
      for (let j = 0; j < 10; j = j + 2) {
        if (string.substring(j, j + 2) === "00") {
          symbol = symbol + "";
        } else if (string.substring(j, j + 2) === "11") {
          symbol = symbol + "-";
        } else if (string.substring(j, j + 2) === "10") {
          symbol = symbol + ".";
        }
      }
      arrayOfSymbols.push(symbol);
    }
    symbol = "";
    return arrayOfSymbols;
  });
  let result = "";
  let letter = "";
  arrayOfSymbols.forEach(function (string) {
    if (string == " ") {
      letter = " ";
    } else {
      letter = MORSE_TABLE[string];
    }
    result = result + letter;
    letter = "";

    return result;
  });
  return result;
}

module.exports = {
  decode,
};
