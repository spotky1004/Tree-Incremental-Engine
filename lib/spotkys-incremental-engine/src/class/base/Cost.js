import Decimal from "../../lib/decimal.js";
import StagedNumberFunction from "./StagedNumberFunction.js";
import Resource from "../contents/Rescouce.js";
import errorHandler from "../../util/errorHandler.js";

/**
 * @typedef {number | string | import("./StagedNumberFunction.js").StagedNumberFunctionConstructorChunk[]} CostFunc
 */
/**
 * @typedef CostConstructorChunk
 * @property {Resource} resource - Required resource to buy
 * @property {CostFunc} cost - Cost function
 */
/**
 * @typedef {CostConstructorChunk[]} CostConstructor
 */

class Cost {
  /** @param {CostConstructor} option */
  constructor(...option) {
    /** @type {{resource: Resource, func: StagedNumberFunction}[]} */
    this.costs = option.map(cost => ({
      resource: cost.resource,
      func: new StagedNumberFunction(...cost.cost)
    }));
    /** @type {Map<string, StagedNumberFunction>} */
    this.costsMap = new Map(this.costs.map(e => [e.resource.key, e.func]));

    // Exception
    let resourceKeys = [...this.costs.map(e => e.resource.key)];
    if (resourceKeys.length !== [...new Set(resourceKeys)].length) errorHandler("Cannot use same Resource more than once");
  }

  calculateCost(input) {
    /** @type {Object.<string, Decimal>} */
    let cost = {};
    for (const costFunc of this.costsMap) {
      cost[costFunc[0]] = costFunc[1].evaluate(input);
    }
    return cost;
  }
}

export default Cost;

// let inputs = [1, 2, 3, 4, 5, 10, 11, 12, 999, 1000, 123234, 3456635473];
// inputs.forEach(v => 
//   console.log(`${v} =>`, new Cost({
//       resource: new Resource({
//         name: "Spotky Coin"
//       }),
//       cost: [
//         [
//           "linear", {
//             start: 0,
//             increment: 1
//           }
//         ],
//         [
//           "linearAccel", {
//             start: 10,
//             accel: 1,
//             incrementBase: 1,
//           }
//         ],
//         "999" /** Constant */
//       ]
//     }).calculateCost(v)
//   )
// );
