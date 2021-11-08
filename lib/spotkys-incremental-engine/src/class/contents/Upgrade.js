import Cost from "../base/Cost.js";

/**
 * @typedef UpgradeOption
 * @property {string} [title] - Title of the upgrade
 * @property {string} [description] - Description of the upgrade 
 * @property {import("../base/Cost.js").CostConstructor | import("../base/Cost.js").CostConstructorChunk} cost - Cost function or Constant
 * @property {boolean} [rebuyable] - Force set rebuyable
 */
/**
 * @typedef {UpgradeOption} UpgradeConstructor
 */

class Upgrade {
  /** @param {UpgradeConstructor} options */
  constructor(options) {
    if (!Array.isArray(options.cost)) options.cost = [options.cost];

    this.title = options.title;
    this.description = options.description;
    this.cost = new Cost(...options.cost);
    this.rebuyable = Boolean(this.cost.costs[0].func.functions[0].type !== "constant" || options.rebuyable); // ...
  }
}

export default Upgrade;

// import Resource from "./Rescouce.js";
// 
// const SpotkyCoin = new Resource({
//   name: "Spotky Coin"
// });
// const upgradeTree = new Upgrade({
//   title: "Grow Faster!",
//   description: "Boost 🌲's production by +1",
//   cost: {
//     resource: SpotkyCoin,
//     cost: [
//       [
//         "linear", {
//           start: 10,
//           increment: 5
//         },
//         "expo", {
//           start: 100,
//           mul: 1.1
//         }
//       ]
//     ]
//   }
// });
// console.log(upgradeTree);
