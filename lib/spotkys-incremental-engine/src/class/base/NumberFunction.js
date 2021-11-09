import Decimal from "../../lib/decimal.js";
import {
  Constant,
  Linear,
  LinearAccel,
  Exponential,
} from "./NumberFunctions/index.js";
import errorHandler from "../../util/errorHandler.js";

const NumberFunctions = {
  Constant,
  Linear,
  LinearAccel,
  Exponential,
};
/**
 * @typedef {import("./NumberFunctions/index.js").FunctionsConstructorTypes} FunctionsConstructorTypes
 * @typedef {import("./NumberFunctions/index.js").AttachedContentInstances} AttachedContentInstances
 */
const FunctionTypes = Object.keys(NumberFunctions);
/**
 * @typedef {NumberFunctions} IFunctions
 */

const arithmeticSum = (k, d, a) => new Decimal(a).mul(2)
  .add(new Decimal(k).sub(1).mul(new Decimal(d)))
  .mul(new Decimal(k)).div(2);



/**
 * @template {keyof typeof NumberFunctions} T
 */
class NumberFunction {
  /**
   * @param {T} type 
   * @param {FunctionsConstructorTypes[T]} [options] 
   */
  constructor (type, options) {
    if (!FunctionTypes.includes(type)) errorHandler(`Unknown Function type\nAvaiable types: ${FunctionTypes.join(", ")}`);
    this.func = new NumberFunctions[type](options);
  }
  
  static FunctionsDefaultData = NumberFunctions;

  /**
   * @param {Decimal} value 
   * @return {Decimal}
   */
  evaluate(input) {
    input = new Decimal(input);

    if (this.func instanceof Constant) {
      return this.func.value;
    } else if (this.func instanceof Linear) {
      return this.func.start.add(this.func.increment.mul(input))
    } else if (this.func instanceof LinearAccel) {
      return this.func.start.add(arithmeticSum(input, this.func.accel, this.func.incrementBase));
    } else if (this.func instanceof Exponential) {
      return this.func.start.mul(this.func.mul.pow(input))
    }
  }

  reverseEvaluate(result) {
    result = new Decimal(result);

    let output;
    if (this.func instanceof Constant) {
      output = new Decimal(Infinity);
    } else if (this.func instanceof Linear) {
      output = result.sub(this.func.start).div(this.func.increment)
    } else if (this.func instanceof LinearAccel) {
      const sum = arithmeticSum(this.func.incrementBase.div(this.func.accel), this.func.accel, 0);
      output = (result.add(sum).div(this.func.accel).mul(2).sqrt()).sub(sum.div(this.func.accel).mul(2).sqrt()).round();
    } else if (this.func instanceof Exponential) {
      output = result.div(this.func.start).log(this.func.mul);
    }
    return output.floor();
  }
}

export default NumberFunction;
