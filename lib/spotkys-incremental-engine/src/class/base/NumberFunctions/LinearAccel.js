import Decimal from "../../../lib/decimal.js";

/**
 * @typedef LinearAccelConstructor
 * @property {number | string} start
 * @property {number | string} accel
 * @property {number | string} incrementBase
 */

const defaultOptions = {
  start: 0,
  accel: 1,
  incrementBase: 1,
};

class LinearAccel {
  /** @param {LinearAccelConstructor} options */
  constructor(options) {
    options = {...defaultOptions, ...options};
    this.start = new Decimal(options.start);
    this.accel = new Decimal(options.accel);
    this.incrementBase = new Decimal(options.incrementBase);
  }
}

export default LinearAccel;
