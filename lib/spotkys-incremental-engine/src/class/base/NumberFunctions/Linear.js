import Decimal from "../../../lib/decimal.js";

/**
 * @typedef LinearConstructor
 * @property {number | string} start
 * @property {number | string} increment
 */

const defaultOptions = {
  start: 0,
  increment: 1
};

class Linear {
  /** @param {LinearConstructor} options */
  constructor(options) {
    options = {...defaultOptions, ...options};
    this.start = new Decimal(options.start);
    this.increment = new Decimal(options.increment);
  }
}

export default Linear;
