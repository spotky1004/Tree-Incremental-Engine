import Decimal from "../../lib/decimal.js";
import nameToKey from "../../util/nameToKey.js";

/**
 * @typedef ResourceOptions
 * @property {string} name
 * @property {string} [dispalyName]
 * @property {string | number} [initialAmount] - Set initial amount of this resource
 */

class Resource {
  /** @param {ResourceOptions} options */
  constructor(options) {
    this.name = options.name;
    this.dispalyName = options.dispalyName ?? options.name;
    this.key = nameToKey(this.name.replace(/ /g, "_").toLowerCase());

    this.initialAmount = new Decimal(options.initialAmount ?? 0);
  }
}

export default Resource;
