const CustomError = require("../extensions/custom-error");

const getNameFirstLetter = (str) => {
  if (typeof str === "string" || str instanceof String) {
    return str.trim()[0].toUpperCase();
  } else return "";
};

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    let firstChar = getNameFirstLetter(members);
    if (firstChar.length > 0) {
      return firstChar;
    } else {
      return false;
    }
  }
  let arrFirstChars = members
    .map((name) =>
      typeof name === "string" || name instanceof String
        ? name.trim()[0].toUpperCase()
        : ""
    )
    .sort()
    .join("")
    .trim();
  return arrFirstChars.length > 0 ? arrFirstChars : false;
};
