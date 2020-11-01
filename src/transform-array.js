const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) throw new Error();

  let copyArr = arr.map((x) => x);
  const deletedElement = "deleted_element";
  let arrResult = [];

  for (let i = 0; i < copyArr.length; i++) {
    switch (copyArr[i]) {
      case "--discard-next": {
        copyArr[i + 1] = deletedElement;
        i++;
        break;
      }
      case "--discard-prev": {
        if (i !== 0 && copyArr[i - 1] !== deletedElement) {
          copyArr[i - 1] = deletedElement;
          arrResult.pop();
        }
        break;
      }
      case "--double-next": {
        if (i != copyArr.length - 1) arrResult.push(copyArr[i + 1]);
        break;
      }
      case "--double-prev": {
        if (i !== 0 && copyArr[i - 1] !== deletedElement) {
          arrResult.push(copyArr[i - 1]);
        }
        break;
      }
      default:
        arrResult.push(copyArr[i]);
    }
  }

  return arrResult;
};
