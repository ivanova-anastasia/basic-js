const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let currentThis = this;
    return (
      1 +
      (arr instanceof Array
        ? arr.reduce(function (max, item) {
            return Math.max(max, currentThis.calculateDepth(item));
          }, 0)
        : -1)
    );
  }
};
