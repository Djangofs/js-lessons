const splitString = require('./split-string');

const reverseString = (string) => {
  if (typeof string === "string") {
    let reversedString = "";
    splitString(string).forEach(letter => {
      reversedString = letter + reversedString;
    });
    return reversedString;
  }
  return new Error("Function: reverseString only accepts string input");
};

const reverseStringRefactor = (string) => {
  if (typeof string === "string") {
    return string.split("").reverse().join("");
  }
  return new Error("Function: reverseString only accepts string input");
};

module.exports = { reverseString, reverseStringRefactor,  };