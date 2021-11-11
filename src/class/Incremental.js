import Decimal from "../lib/decimal.js";
import IncrementalStore from "./IncrementalStore.js";
import Layer from "./Layer.js";
import Resource from "./contents/Rescouce.js";
import defaultConfig from "../defaultConfig.js";
import mergeObject from "../util/mergeObject.js";
import errorHandler from "../util/errorHandler.js";

/**
 * @typedef DefaultSave
 * @property {Object.<string, Decimal>} resources
 * @property {Object.<string, import("./Layer.js").LayerSave>} layers
 */

class Incremental {
  constructor(config) {
    this.store = new IncrementalStore(this);

    /** @type {defaultConfig} */
    this.config = mergeObject(config, defaultConfig);
    /** @type {Resource[]} */
    this.resources = [];
    /** @type {Map<string, Resource>} */
    this.resourceMap = new Map([]);
    /** @type {Layer[]} */
    this.layers = [];
    /** @type {Map<string, Layer>} */
    this.layerMap = new Map([]);

    /** @type {DefaultSave} */
    this.defaultSave = {
      resources: {},
      layers: {}
    };
    /** @type {DefaultSave} */
    this.save = {};
    this.store.updateSave();
  }

  /** @param {Resource} resource  */
  attachResource(resource) {
    if (!(resource instanceof Resource)) errorHandler('Invaild Resource passed');
    if (this.resourceMap.has(resource.key)) errorHandler(`Resource ${resource.key} already exists`);

    this.resources.push(resource);
    this.resourceMap.set(resource.key, resource);
    this.defaultSave.resources[resource.key] = new Decimal(resource.initialAmount);
    this.store.updateSave();

    return this;
  }

  /** @param {Layer} layer */
  attachLayer(layer) {
    if (this.layerMap.has(layer.key)) errorHandler(`This instance already has "${layer.key}" layer`);

    this.layers.push(layer);
    this.layerMap.set(layer.key, layer);
    this.defaultSave.layers[layer.key] = layer.defaultSave;
    this.store.updateSave();
    
    this.attachResource(layer.mainResource);

    return this;
  }
}

export default Incremental;
