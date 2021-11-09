import nameToKey from "../../util/nameToKey.js";

/**
 * @typedef ResourceOptions
 * @property {string} name
 */

class Resource {
  /** @param {ResourceOptions} options */
  constructor(options) {
    this.name = options.name;
    this.key = nameToKey(this.name.replace(/ /g, "_").toLowerCase());
  }
}

export default Resource;
