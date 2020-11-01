const CustomError = require("../extensions/custom-error");

const findCountCats = (arr) => arr.filter((cats) => cats === "^^").length;

module.exports = function countCats(matrix) {
  return matrix.map(findCountCats).reduce((a, b) => a + b, 0);
};
