import FuncBase, { FuncBaseOptions } from "./FuncBase";
import Decimal from "decimal.js";
import type { NDecimal } from "@util-types";

export interface ConstantOptions extends FuncBaseOptions {
}

export default class Constant extends FuncBase {
  constructor(options: ConstantOptions) {
    super(options);
  }

  calcValue(x: NDecimal) {
    const { start, mul, pow } = this;
    x;

    return start.mul(mul).pow(pow);
  }

  calcX(value: NDecimal) {
    const { start, mul, pow } = this;

    if (start.mul(mul).pow(pow).eq(value)) {
      return new Decimal(Infinity);
    } else {
      return new Decimal(NaN);
    }
  }
}
