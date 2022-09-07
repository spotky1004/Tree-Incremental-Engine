import FuncBase, { FuncBaseOptions } from "./FuncBase";
import Decimal from "decimal.js";
import type { NDecimal } from "@util-types";

export interface LinearOptions extends FuncBaseOptions {
  inc?: NDecimal;
}

export default class Linear extends FuncBase {
  inc: Decimal;

  constructor(options: LinearOptions) {
    super(options);
    this.inc = new Decimal(options.inc ?? 1);
  }

  calcValue(x: NDecimal) {
    const { start, mul, pow, inc } = this;

    return start.add(inc.mul(new Decimal(x))).mul(mul).pow(pow);
  }

  calcX(value: NDecimal) {
    const { start, mul, pow, inc } = this;
    value = new Decimal(value);

    return value.pow(pow.pow(-1)).div(mul).sub(start).div(inc);
  }
}
