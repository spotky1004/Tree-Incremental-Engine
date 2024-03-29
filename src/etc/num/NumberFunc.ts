import StagedNumber, { createStagedNumber, StagedNumberInput } from "./StagedNumber";
import Decimal from "decimal.js";
import type { NDecimal } from "../../typings/util";

interface NumCallbacks<P> {
  calc: (level: Decimal, param: P) => NDecimal;
  sum?: (from: Decimal, to: Decimal) => NDecimal;
  reverseCalc?: (value: Decimal, param: P) => NDecimal;
}

export type NumInput<P> = NDecimal | NumCallbacks<P> | StagedNumber | StagedNumberInput;
export type NumValue<P> = NDecimal | NumCallbacks<P> | StagedNumber;

export default class NumberFunc<P> {
  value: NumValue<P>;

  constructor(value: NumInput<P>) {
    if (
      typeof value === "object" && "stages" in value &&
      !(value instanceof StagedNumber)
    ) {
      value = createStagedNumber(value);
    }
    this.value = value;
  }

  calc(x: NDecimal, param: P) {
    const value = this.value;
    if (value instanceof StagedNumber) {
      return value.calc(x);
    } else if (typeof value === "number") {
      return new Decimal(value);
    } else if ("calc" in value) {
      return value.calc(new Decimal(x), param);
    } else {
      return value;
    }
  }

  reverseCalc(result: NDecimal, param: P) {
    const value = this.value;
    if (value instanceof StagedNumber) {
      return value.reverseCalc(result);
    } else if (typeof value === "number") {
      return Infinity;
    } else if ("calc" in value) {
      return value.reverseCalc ? value.reverseCalc(new Decimal(result), param) : 1;
    } else {
      return Infinity;
    }
  }
}
