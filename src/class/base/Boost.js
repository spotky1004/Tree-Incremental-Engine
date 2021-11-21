/**
 * ##############################################
 * Abandoned, will replace with better thing...
 * ##############################################
 */

import Decimal from "../../lib/decimal";
import Resource from "../contents/Rescouce.js";
import errorHandler from "../../util/errorHandler.js";

const OperatorPriority = {
  pow: 0,
  log2: 0,
  log10: 0,
  mul: 1,
  div: 1,
  add: 2,
  sub: 3
};
const operators = Object.keys(OperatorPriority);
/**
 * @typedef BoostConstructor
 * @property {Resource} resource - Resource to boost
 * @property {keyof typeof OperatorPriority} operator - Operator to calculate, default "mul"
 * @property {number | string} input - Static input
 * @property {number} [priority] - Low -> faster, default 10, 0 ~ 100, Follow reversed math priority if same priority
 * @property {BoostConstructor} [boostedBy] - Boosted by other booster
 */

class Boost {
  /** @param {BoostConstructor} options */
  constructor(options) {
    if (!operators.includes) errorHandler(`Invalid operater. Available operators: ${operators.join}`)

    /** @type {Resource} */
    this.resource = options.resource;
    /** @type {string} */
    this.operator = options.operator ?? "mul";
    /** @type {number} */
    this.priority = Math.max(0, Math.min(100, Number(options.priority ?? 10)));
    /** @type {Decimal} */
    this.input = new Decimal(input);
    /**
     * id to reconize booster, don't modify
     * @type {string}
     */
    this._id = Math.floor(Math.random() * 16**10).toString(16).padStart(10, "0");
    this.boostedBy = options.boostedBy ? new Boost(options.boostedBy) : undefined;
  }

  /** @param {Booster[]} boosters */
  static sortBoosters(boosters) {

  }

  get id() {
    return this._id;
  }

  get getValues(input) {
    return {
      resourceKey: this.resource.key,
      priority: this.priority*100 + OperatorPriority[this.operator],
    }
  }

  get isValid() {
    return Boolean(this.resource);
  }
}

export default Boost;

new Boost({
  operator: ""
})
