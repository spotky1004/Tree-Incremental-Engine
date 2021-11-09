import Constant from "./Constant.js";
import Linear from "./Linear.js";
import LinearAccel from "./LinearAccel.js";
import Exponential from "./Exponential.js";

/**
 * @typedef FunctionsConstructorTypes
 * @property {import("./Constant.js").ConstantConstructor} Constant
 * @property {import("./Linear.js").LinearConstructor} Linear
 * @property {import("./LinearAccel.js").LinearAccelConstructor} LinearAccel
 * @property {import("./Exponential.js").ExponentialConstructor} Exponential
 */
/**
 * @typedef AttachedContentInstances
 * @property {Constant} Constant
 * @property {Linear} Linear
 * @property {LinearAccel} LinearAccel
 * @property {Exponential} Exponential
 */

export {
  Constant,
  Linear,
  LinearAccel,
  Exponential,
};
