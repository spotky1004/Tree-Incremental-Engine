import Decimal from "../../lib/decimal.js";
import decimalify from "../../util/decimalify.js";
import errorHandler from "../../util/errorHandler.js";

const Functions = {
  constant: {
    start: 0
  },
  linear: {
    start: 0,
    increment: 1
  },
  linearAccel: {
    start: 0,
    accel: 1,
    incrementBase: 1
  },
  expo: {
    start: 1,
    mul: 2
  }
};
const FunctinTypes = Object.keys(Functions);
/**
 * @typedef {Functions} IFunctions
 */

const arithmeticSum = (k, d, a) => new Decimal(a).mul(2)
  .add(new Decimal(k).sub(1).mul(new Decimal(d)))
  .mul(new Decimal(k)).div(2);



/**
 * @template {keyof typeof Functions} T
 */
class NumberFunction {
  /**
   * @param {T} type 
   * @param {IFunctions[T]} [options] 
   */
  constructor (type, options) {
    if (!FunctinTypes.includes(type)) errorHandler(`Unknown Function type\nAvaiable types: ${FunctinTypes.join(", ")}`);
    /** @type {keyof typeof Functions} */
    this.type = type;
    /** @type {Functions[T]} */
    this.options = decimalify({...Functions[type], ...options});
  }
  
  static FunctionsDefaultData = Functions;

  /**
   * @param {Decimal} value 
   * @return {Decimal}
   */
  evaluate(input) {
    input = new Decimal(input);
    const initialValue = new Decimal(this.options.start);
    const options = this.options;

    switch (this.type) {
      case "constant":
        return initialValue;
      case "linear":
        return initialValue.add(options.increment.mul(input));
      case "linearAccel":
        return initialValue.add(arithmeticSum(input, options.accel, options.incrementBase));
      case "expo":
        return initialValue.mul(options.mul.pow(input));
    }
  }

  reverseEvaluate(result) {
    result = new Decimal(result);
    const initialValue = new Decimal(this.options.start);
    const options = this.options;

    let output;
    switch (this.type) {
      case "constant":
        output = new Decimal(Infinity);
        break;
      case "linear":
        output = result.sub(initialValue).div(options.increment);
        break;
      case "linearAccel":
        const sum = arithmeticSum(options.incrementBase.div(options.accel), options.accel, 0);
        output = (result.add(sum).div(options.accel).mul(2).sqrt()).sub(sum.div(options.accel).mul(2).sqrt()).round();
        break;
      case "expo":
        output = result.div(options.start).log(options.mul);
        break;
    }
    return output.floor();
  }
}

export default NumberFunction;
