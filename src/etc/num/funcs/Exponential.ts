import FuncBase, { FuncBaseOptions } from "./FuncBase";
import Decimal from "decimal.js";
import type { NDecimal } from "@util-types";

export interface ExponentialOptions extends FuncBaseOptions {
  base?: NDecimal;
}

export default class Exponential extends FuncBase {
  base: Decimal;

  constructor(options: ExponentialOptions) {
    super(options);
    this.base = new Decimal(options.base ?? 1);
  }

  calcValue(x: NDecimal) {
    const { start, mul, pow, base } = this;

    return start.mul(mul).mul(base.pow(x)).pow(pow);
  }

  calcX(value: NDecimal) {
    const { start, mul, pow, base } = this;
    value = new Decimal(value);

    return value.pow(pow.pow(-1)).div(mul).div(start).log(base);
  }
}
