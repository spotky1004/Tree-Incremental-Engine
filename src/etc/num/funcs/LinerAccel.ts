import FuncBase, { FuncBaseOptions } from "./FuncBase";

export interface LinearAccelOptions extends FuncBaseOptions {
  inc?: NDecimal;
  acc?: NDecimal;
}

function arithmeticSum(n: Decimal, d: Decimal, a: Decimal) {
  return a.mul(2)
    .add(n.sub(1).mul(d))
    .mul(n.div(2));
}

export default class LinearAccel extends FuncBase {
  inc: Decimal;
  acc: Decimal;

  constructor(options: LinearAccelOptions) {
    super(options);
    this.inc = new Decimal(options.inc ?? 1);
    this.acc = new Decimal(options.acc ?? 1);
  }

  calcValue(x: NDecimal) {
    const { start, mul, pow, inc, acc } = this;
    x = new Decimal(x);

    return start.add(arithmeticSum(x, acc, inc)).mul(mul).pow(pow);
  }

  calcX(value: NDecimal) {
    const { start, mul, pow, inc, acc } = this;
    value = new Decimal(value);

    // y = (sum (a + kd), k = 0 to n - 1) = n/2(2a + (n - 1)d)
    // n = +-sqrt(2/d(y - a^2/d^2 + a/d - 1/4)) - a/d + 1/2

    const valueSign = Decimal.sign(value);
    const sumValue = value.abs().pow(pow.pow(-1)).mul(valueSign).div(mul).sub(start);
    const sign = Decimal.sign(sumValue);

    return sumValue.abs().sub(inc.pow(2).div(acc.mul(2))).add(inc.div(2)).sub(1/4).mul(new Decimal(2).div(acc)).sqrt().mul(sign).sub(inc.div(acc)).add(1/2);
  }
}
