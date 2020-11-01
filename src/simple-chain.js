const CustomError = require("../extensions/custom-error");

const chainMaker = {
  arr: new Array(),

  getLength() {
    return this.arr.length;
  },
  addLink(value = "") {
    this.arr.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if (
      !Number.isInteger(position) ||
      typeof this.arr[position - 1] === "undefined"
    ) {
      this.arr.splice(0, this.arr.length);
      throw new Error();
    }
    this.arr.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.arr.reverse();
    return this;
  },
  finishChain() {
    let strChain = this.arr.join("~~");
    this.arr.splice(0, this.arr.length);
    return strChain;
  },
};

module.exports = chainMaker;
