const CustomError = require('../extensions/custom-error');

module.exports = function repeater(str, options) {
  const defaultSeparator = '+';
  const defaultAdditionSeparator = '|';

  let additionString =
    options.addition === undefined
      ? ''
      : getAdditionString(
          String(options.addition),
          options.additionRepeatTimes,
          options.additionSeparator,
          defaultAdditionSeparator
        );

  return getAdditionString(
    String(str + additionString),
    options.repeatTimes,
    options.separator,
    defaultSeparator
  );
};

const getAdditionString = (
  string,
  repeatTimes,
  separator,
  defaultSeparator
) => {
  if (repeatTimes === undefined || repeatTimes < 2) return string;

  return new Array(repeatTimes)
    .fill(string)
    .join(separator === undefined ? defaultSeparator : separator);
};
