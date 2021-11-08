import Layer from "./Layer.js";
import Resource from "../contents/Rescouce.js";
import Upgrade from "../contents/Upgrade.js";
import Upgrades from "../contents/Upgrades.js";
import errorHandler from "../../util/errorHandler.js";

const attachableContents = { Upgrade, Upgrades };
const attachableContentsTypes = Object.keys(attachableContents);
/**
 * @typedef {keyof typeof attachableContents} AttachableContentsTypes
 */
/**
 * @typedef AttachedContents
 * @property {Upgrade[]} Upgrade
 * @property {Upgrades[]} Upgrades
 */
/**
 * @typedef AttachedContentsConstructorTypes
 * @property {import("../contents/Upgrade.js").UpgradeConstructor} Upgrade
 * @property {import("../contents/Upgrades.js").UpgradesConstructor} Upgrades
 */


/**
 * @typedef BasicLayerExtraOptions
 * @property {Resource} mainResource
 */
/**
 * @typedef {import("./Layer.js").LayerConstructor & BasicLayerExtraOptions} BasicLayerConstructor
 */

class BasicLayer extends Layer {
  /** @param {BasicLayerConstructor} options */
  constructor(options) {
    super(options);

    this.mainResource = options.mainResource;
    /** @type {AttachedContents} */
    this.attachedContents = Object.fromEntries(attachableContentsTypes.map(e => [e, []]));

    // Exceptions
    if (!this.mainResource || !(this.mainResource instanceof Resource)) errorHandler("Invaild Resource passed");
  }

  /**
   * @template {AttachableContentsTypes} T
   * @param {T} type 
   * @param {AttachedContentsConstructorTypes[T]} options 
   */
  attachContent(type, options) {
    this.attachedContents[type].push(new attachableContents[type](options));

    return this;
  }
}

export default BasicLayer;

// const SpotkyCoin = new Resource({
//   name: "Spotky Coin"
// });
// const ForestSampleLayer = new BasicLayer({
//   mainResource: SpotkyCoin,
//   name: "Forest Layer"
// })
//   .attachContent("Upgrades", {
//     resource: SpotkyCoin,
//     upgrades: [
//       {
//         title: "Faster grow!",
//         description: "🌲 production x2",
//         cost: "10"
//       },
//       {
//         title: "Fastest grow!",
//         description: "🌲 production x2",
//         cost: "1000"
//       },
//     ],
//   })
//   .attachContent("Upgrade", {
//     title: "Bigger forest",
//     description: "Make forest bigger to boost 🌲 production by x1.5",
//     resource: SpotkyCoin,
//     cost: [
//       [
//         "linear", {
//           start: 10,
//           increment: 5
//         }
//       ],
//       [
//         "expo", {
//           start: 100,
//           mul: 1.1
//         }
//       ]
//     ]
//   });
// console.log(ForestSampleLayer);
// console.log(ForestSampleLayer.attachedContents.Upgrade[0].cost.calculateCost(50));
// console.log(ForestSampleLayer.attachedContents.Upgrades[0].upgrades[0].cost.costs[0].func.functions[0].options.start); // ...

