import nameToKey from "../../util/nameToKey.js";

/**
 * @typedef LayerConstructor
 * @property {string} name
 */

class Layer {
  /** @param {LayerConstructor} options */
  constructor(options) {
    this.name = options.name;
    this.key = nameToKey(options.name.replace(/ /g, "_").toLowerCase());

    this.defaultSave = {};
  }
}

export default Layer;
