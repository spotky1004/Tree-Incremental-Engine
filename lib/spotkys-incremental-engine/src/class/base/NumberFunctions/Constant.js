import Decimal from "../../../lib/decimal.js";

/**
 * @typedef ConstantConstructor
 * @property {number | string} value
 */

const defaultOptions = {
  value: 0,
};

class Constant {
  /** @param {ConstantConstructor} options */
  constructor(options) {
    options = {...defaultOptions, ...options};
    this.value = new Decimal(options.value);
  }
}

export default Constant;
