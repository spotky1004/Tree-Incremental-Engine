import defaultConfig from "./defaultConfig";
import mergeObject from "./util/mergeObject";

export default class Incremental {
  constructor(config) {
    /** @type {defaultConfig} */
    this.config = mergeObject(config, defaultConfig);
  }
}
