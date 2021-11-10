import Cost from "../base/Cost.js";
import Resource from "./Rescouce.js";
import errorHandler from "../../util/errorHandler.js";

/**
 * @typedef UpgradeOption
 * @property {string} [title] - Title of the upgrade
 * @property {string} [description] - Description of the upgrade 
 * @property {Resource} [resource] - Required resource to buy upgrade (works if there's only one resource)
 * @property {import("../base/Cost.js").CostConstructor | import("../base/Cost.js").CostConstructorChunk} cost - Cost function or Constant
 * @property {boolean} [rebuyable] - Force set rebuyable
 */
/**
 * @typedef {UpgradeOption} UpgradeConstructor
 */

class Upgrade {
  /** @param {UpgradeConstructor} options */
  constructor(options) {
    // Executions
    if (!options.cost) errorHandler("options.cost is required");

    // Fix options.cost
    if (
      typeof options.cost === "string" ||
      (
        Array.isArray(options.cost) &&
        !options.cost[0].hasOwnProperty("cost")
      )
    ) {
      if (!options.resource || !(options.resource instanceof Resource)) errorHandler("Invaild resource passed (or, options.resource is required)");
      options.cost = {
        resource: options.resource,
        cost: options.cost
      }
    }
    if (!Array.isArray(options.cost)) options.cost = [options.cost];

    this.title = options.title;
    this.description = options.description;
    this.cost = new Cost(...options.cost);
    this.rebuyable = Boolean(this.cost.costs[0].func.functions[0].type !== "constant" || options.rebuyable); // ...
  }

  calculateCost(input) {
    return this.cost.calculateCost(input);
  }
}

export default Upgrade;

// const SpotkyCoin = new Resource({
//   name: "Spotky Coin"
// });
// const upgradeTree = new Upgrade({
//   title: "Grow Faster!",
//   description: "Boost 🌲's production by +1",
//   resource: SpotkyCoin,
//   cost: [
//     [
//       "Linear", {
//         start: 10,
//         increment: 5
//       }
//     ],
//     [
//       "Exponential", {
//         start: 100,
//         mul: 1.1
//       }
//     ]
//   ]
// });
// console.log(upgradeTree);
