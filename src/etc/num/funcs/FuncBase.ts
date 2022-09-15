import Decimal from "decimal.js";
import type { NDecimal } from "../../../typings/util";

export interface FuncBaseOptions {
  start?: NDecimal;
  mul?: NDecimal;
  pow?: NDecimal;
}

export default class FuncBase {
  start: Decimal;
  mul: Decimal;
  pow: Decimal;

  constructor(options: FuncBaseOptions) {
    this.start = new Decimal(options.start ?? 0);
    this.mul = new Decimal(options.mul ?? 1);
    this.pow = new Decimal(options.pow ?? 1);
  }

  calcValue(x: NDecimal) {
    const { start, mul, pow } = this;
    x = new Decimal(x);

    return start.mul(mul).pow(pow);
  }

  calcX(value: NDecimal) {
    const { start, mul, pow } = this;
    value = new Decimal(value);

    if (start.mul(mul).pow(pow).eq(value)) {
      return new Decimal(Infinity);
    } else {
      return new Decimal(NaN);
    }
  }
}
