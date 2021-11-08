/**
 * @typedef LayerConstructor
 * @property {string} name
 * @property {string} [key]
 */

class Layer {
  /** @param {LayerConstructor} options */
  constructor(options) {
    this.name = options.name;
    this.key = options.key ?? options.name.replace(/ /g, "_").toLowerCase();
  }
}

export default Layer;
