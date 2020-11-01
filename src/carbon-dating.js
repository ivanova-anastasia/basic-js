const CustomError = require('../extensions/custom-error');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  if (typeof sampleActivity !== String || sampleActivity > MODERN_ACTIVITY)
    return false;
  let k = 0.693 / HALF_LIFE_PERIOD;
  let t = Math.log2(MODERN_ACTIVITY / Number(sampleActivity)) / k;
  return t;
};
