/**
 * @typedef ResourceOptions
 * @property {string} name
 * @property {string} [key]
 */

class Resource {
  /** @param {ResourceOptions} options */
  constructor(options) {
    this.name = options.name;
    this.key = options.key ?? this.name.replace(/ /g, "_").toLowerCase();
  }
}

export default Resource;
