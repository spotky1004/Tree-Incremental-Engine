import Decimal from "../lib/decimal.js";
import Layer from "./Layer.js";
import Resource from "./contents/Rescouce.js";
import Incremental from "./Incremental.js";
import errorHandler from "../util/errorHandler.js";
import mergeObject from "../util/mergeObject.js";

/** @type {keyof typeof Decimal} */
const DecimalOperators = Object.keys(Decimal);

/** Do things that requires/change savefile */
class IncrementalStore {
  /** @param {Incremental} incremental */
  constructor(incremental) {
    if (!(incremental instanceof Incremental)) errorHandler(`Invaild Incrementla passed`);

    /** @type {Incremental} */
    this.incremental = incremental;
    /** @type {import("./Incremental.js").DefaultSave} */
    this.save = {};
  }

  updateSave() {
    this.save = mergeObject(this.save, this.incremental.defaultSave);
  }

  /**
   * @template {Resource} T
   * @param {T} resource 
   * @param {string | number} input 
   * @param {DecimalOperators} operator - default: "add"
   * @return {Decimal} Amount of resource
   */
  changeResourceAmount(resource, input, operator="add") {
    if (arguments.length < 3) errorHandler(`Expected 3 arguments to passed. Got ${arguments.length}.`);
    if (!(resource instanceof Resource)) errorHandler("Invaild Resource passed");
    if (!DecimalOperators.includes(operator)) errorHandler("Invaild operator");

    this.save[resource.key] = this.save[resource.key][operator](input);
    return this.save[resource.key];
  }

  /**
   * @param {Layer} layer - Layer that have upgrade
   * @param {"Upgrade" | "Upgrades"} type - "Upgrade" or "Upgrades", type of the upgrade to buy
   * @param {number} index - Index of the "Upgrade" or "Upgrades"
   * @param {number} [childIndex] - If "Upgrades", this represents this index or the upgrade in "Upgrades"
   * @param {boolean} [dontBuy] - If true, won't buy upgrade and just return status
   * @return {boolean} - If true, can buy this upgrade
   */
  buyUpgrade(layer, type, index, childIndex, dontBuy=false) {
    if (type === "Upgrade" && arguments.length < 3) errorHandler(`Expected 3 arguments to passed. Got ${arguments.length}.`);
    if (type === "Upgrades" && arguments.length < 4) errorHandler(`Expected 4 arguments to passed. Got ${arguments.length}.`);
    if (!(Layer instanceof Layer)) errorHandler("Invaild Layer passed");
    if (!["Upgrade", "Upgrades"].includes(type)) errorHandler(`Unknown upgrade type\nAvaiavle types: ${["Upgrade", "Upgrades"].join(", ")}`);

    const layerSave = this.save.layers[layer.key];

    /** @type {import("./contents/Upgrade.js").default} */
    let upgradeToBuy, upgradeHave;
    if (type === "Upgrade") {
      upgradeToBuy = layer.attachedContents.Upgrade[index];
      upgradeHave = layerSave.Upgrade[index];
    } else if (type === "Upgrades") {
      const upgrades = layer.attachedContents.Upgrades[index];
      if (typeof upgrades === "undefined") errorHandler(`Upgrades #${index} isn't exist in layer ${layer}`);
      upgradeToBuy = upgrades[childIndex];
      upgradeHave = layerSave.Upgrades[index][childIndex];
    }
    if (typeof upgradeToBuy === "undefined") errorHandler(`Upgrade #${index} isn't exist in layer ${layer}`);

    if (!upgradeToBuy.rebuyable && upgradeHave.gt(1)) return false;
    const cost = upgradeToBuy.calculateCost(upgradeHave);
    for (const resourceKey in cost) {
      if (this.save.resources[resourceKey].lt(cost[resourceKey])) return false;
    }

    if (!dontBuy) {
      for (const resourceKey in cost) {
        this.changeResourceAmount(
          this.incremental.resourceMap.get(resourceKey),
          "sub",
          cost[resourceKey]
        );
        this.save
      }
      if (type === "Upgrade") {
        layerSave.Upgrade[index] = layerSave.Upgrade[index].add(1);
      } else if (type === "Upgrades") {
        layerSave.Upgrades[index][childIndex] = layerSave.Upgrades[index][childIndex].add(1);
      }
    }

    return true;
  }

  /**
   * @param {Layer} layer - Layer that have upgrade
   * @param {"Upgrade" | "Upgrades"} type - "Upgrade" or "Upgrades", type of the upgrade to buy
   * @param {number} index - Index of the "Upgrade" or "Upgrades"
   * @param {number} [childIndex] - If "Upgrades", this represents this index or the upgrade in "Upgrades"
   * @return {boolean} - If true, can buy this upgrade
   */
  canBuyUpgrade(layer, type, index, childIndex) {
    return buyUpgrade(layer, type, index, childIndex, true);
  }
}

export default IncrementalStore;
