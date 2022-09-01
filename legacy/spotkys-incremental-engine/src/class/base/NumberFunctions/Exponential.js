import Decimal from "../../../lib/decimal.js";

/**
 * @typedef ExponentialConstructor
 * @property {number | string} start
 * @property {number | string} mul
 */

const defaultOptions = {
  start: 1,
  mul: 2
};

class Exponential {
  /** @param {ExponentialConstructor} options */
  constructor(options) {
    options = {...defaultOptions, ...options};
    this.start = new Decimal(options.start);
    this.mul = new Decimal(options.mul);
  }
}

export default Exponential;
