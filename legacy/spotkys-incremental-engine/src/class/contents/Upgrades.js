import Upgrade from "./Upgrade.js";
import Resource from "./Rescouce.js";
import errorHandler from "../../util/errorHandler.js";

/**
 * @typedef UpgradesConstructor
 * @property {import("./Upgrade.js").UpgradeConstructor[]} upgrades
 * @property {Resource} [resource]
 */

class Upgrades {
  /** @param {UpgradesConstructor} options */
  constructor(options) {
    // Exceptions
    if (options.resource && !(options.resource instanceof Resource)) errorHandler("Invaild Resource passed");

    /** @type {Upgrade[]} */
    this.upgrades = options.upgrades.map(upgrade => {
      if (options.resource) upgrade = {...upgrade, resource: options.resource};
      return new Upgrade(upgrade);
    });

    this.titles = this.upgrades.map(upgrade => upgrade.title);
    this.descriptions = this.upgrades.map(upgrade => upgrade.description);
    this.costs = this.upgrades.map(upgrade => upgrade.cost);
    this.rebuyables = this.upgrades.map(upgrade => upgrade.rebuyable);
  }
}

export default Upgrades;
