import Upgrade from "./Upgrade.js";

/**
 * @typedef {import("./Upgrade.js").UpgradeConstructor[]} UpgradesConstructor
 */

class Upgrades {
  /** @param {UpgradesConstructor[]} upgrades */
  constructor(upgrades) {
    /** @type {Upgrade[]} */
    this.upgrades = upgrades.map(upgrade => new Upgrade(upgrade));

    this.titles = this.upgrades.map(upgrade => upgrade.title);
    this.descriptions = this.upgrades.map(upgrade => upgrade.description);
    this.costs = this.upgrades.map(upgrade => upgrade.cost);
    this.rebuyables = this.upgrades.map(upgrade => upgrade.rebuyable);
  }
}

export default Upgrades;
