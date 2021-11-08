import Decimal from "../../lib/decimal.js";
import NumberFunction from "./NumberFunction.js";
import decimalify from "../../util/decimalify.js";
import errorHandler from "../../util/errorHandler.js";

/**
 * @typedef {...[
 *  keyof typeof NumberFunction.FunctionsDefaultData,
 *  typeof NumberFunction.FunctionsDefaultData[keyof typeof NumberFunction.FunctionsDefaultData]
 * ]} StagedNumberFunctionConstructorChunk
 */

class StagedNumberFunction {
  /**
   * @param {(StagedNumberFunctionConstructorChunk | number | string)[]} args 
   */
  constructor(...args) {
    if (args.every(e => typeof e === "string")) args = [args.join("")];
    /** @type {NumberFunction[]} */
    this.functions = decimalify([...args]).map(data => {
      if (["number", "string"].includes(typeof data) || data instanceof Decimal) {
        data = [
          "constant",
          {
            start: new Decimal(data)
          }
        ];
      }
      return new NumberFunction(...data);
    });
    let constantAppeared = false;
    this.singularPoints = [new Decimal(0)];
    for (let i = 0; i < this.functions.length-1; i++) {
      if (constantAppeared) errorHandler("Constant function must be located at the end");

      const func = this.functions[i];
      if (["number", "string"].includes(typeof func)) {
        this.singularPoints.push(new Decimal(Infinity));
        staticAppeared = true;
      } else {
        this.singularPoints.push(this.singularPoints[i].add(func.reverseEvaluate(this.functions[i+1].options.start)));
      }
    }

    // Exceptions
    if (this.functions.length === 0) errorHandler("Function must has 1 or more stage");
    let lastBreakPoint = this.singularPoints[0];
    for (let i = 1; i < this.singularPoints.length; i++) {
      if (lastBreakPoint > this.singularPoints[i]) errorHandler("Mixed function singular point");
      lastBreakPoint = this.singularPoints[i];
    }
  }

  evaluate(input) {
    input = new Decimal(input);
    const stage = [new Decimal(-Infinity), ...this.singularPoints, new Decimal(Infinity)]
      .findIndex(e => e.gt(input)) - 2;
    const point = this.singularPoints[stage];
    const func = this.functions[stage];
    
    
    if (func instanceof Decimal) return func; // Constant function
    return func.evaluate(input.sub(point));
  }
}

export default StagedNumberFunction;

// console.log(new StagedNumberFunction(
//   [
//     "linear", {
//       start: 0,
//       increment: 1
//     }
//   ],
//   [
//     "linear", {
//       start: 10,
//       increment: 2
//     }
//   ],
//   [
//     "linear", {
//       start: 50,
//       increment: 3
//     }
//   ]
// ).evaluate(20));
