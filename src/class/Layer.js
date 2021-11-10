import Decimal from "../lib/decimal.js";
import Resource from "./contents/Rescouce.js";
import Upgrade from "./contents/Upgrade.js";
import Upgrades from "./contents/Upgrades.js";
import nameToKey from "../util/nameToKey.js";
import errorHandler from "../util/errorHandler.js";

const attachableContents = { Upgrade, Upgrades };
const attachableContentsTypes = Object.keys(attachableContents);
/**
 * @typedef AttachedContentInstances
 * @property {Upgrade} Upgrade
 * @property {Upgrades} Upgrades
 */
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
 * @property {import("./contents/Upgrade.js").UpgradeConstructor} Upgrade
 * @property {import("./contents/Upgrades.js").UpgradesConstructor} Upgrades
 */



/**
 * @typedef LayerSave
 * @property {Decimal[]} Upgrade
 * @property {Decimal[][]} Upgrades
 */



/**
 * @typedef LayerOptions
 * @property {Resource} mainResource
 * @property {string} name
 */

class Layer {
  /** @param {LayerOptions} options */
  constructor(options) {
    this.name = options.name;
    this.key = nameToKey(options.name.replace(/ /g, "_").toLowerCase());
    this.mainResource = options.mainResource;
    /** @type {AttachedContents} */
    this.attachedContents = Object.fromEntries(attachableContentsTypes.map(e => [e, []]));
    
    /** @type {LayerSave} */
    this.defaultSave = Object.fromEntries(attachableContentsTypes.map(e => [e, []]));

    // Exceptions
    if (!this.mainResource || !(this.mainResource instanceof Resource)) errorHandler("Invaild Resource passed");
  }

  /**
   * @template {AttachableContentsTypes} T
   * @param {T} type 
   * @param {AttachedContentsConstructorTypes[T]} options 
   */
  attachContent(type, options) {
    const contentToAttach = new attachableContents[type](options);
    this.attachedContents[type].push(contentToAttach);

    if (contentToAttach instanceof Upgrade) { 
      this.defaultSave.Upgrade.push(new Decimal(0));
    } else if (contentToAttach instanceof Upgrades) {
      this.defaultSave.Upgrades.push(Array.from({length: contentToAttach.upgrades.length}, _ => new Decimal(0)));
    }

    return this;
  }
}

export default Layer;

// const SpotkyCoin = new Resource({
//   name: "Spotky Coin"
// });
// const ForestSampleLayer = new Layer({
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
//         "Linear", {
//           start: 10,
//           increment: 5
//         }
//       ],
//       [
//         "Exponential", {
//           start: 100,
//           mul: 1.1
//         }
//       ]
//     ]
//   });
// console.log(ForestSampleLayer);

