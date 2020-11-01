const CustomError = require("../extensions/custom-error");

let countHanoiMoves = (diskNumber) => {
  if (diskNumber === 0) return 0;
  return 2 * countHanoiMoves(diskNumber - 1) + 1;
};

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let countDisks = countHanoiMoves(disksNumber);
  let timeSeconds = Math.floor((3600 / turnsSpeed) * countDisks);
  return { turns: countDisks, seconds: timeSeconds };
};
