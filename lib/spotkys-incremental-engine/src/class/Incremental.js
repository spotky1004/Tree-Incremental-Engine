import Layer from "./layers/Layer.js";
import BasicLayer from "./layers/BasicLayer.js";
import defaultConfig from "../defaultConfig.js";
import mergeObject from "../util/mergeObject.js";
import errorHandler from "../util/errorHandler.js";

/** @typedef {Layer | BasicLayer} AnyLayer */

class Incremental {
  constructor(config) {
    /** @type {defaultConfig} */
    this.config = mergeObject(config, defaultConfig);
    /** @type {AnyLayer[]} */
    this.layers = [];
    /** @type {Map<string, AnyLayer>} */
    this.layersMap = new Map([]);
  }

  /** @param {AnyLayer} layer */
  attachLayer(layer) {
    if (this.layersMap.has(layer.key)) errorHandler(`This instance already has "${layer.key}" layer`);

    this.layers.push(layer);
    this.layersMap[layer.key] = layer; 

    return this;
  }
}

export default Incremental;
