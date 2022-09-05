import StagedNumber from "./StagedNumber";

interface NumCallbacks<P> {
  calc: (level: Decimal, param: P) => NDecimal;
  reverseCalc?: (value: Decimal, param: P) => NDecimal;
}

export type NumValue<P> = NDecimal | NumCallbacks<P> | StagedNumber;

export default class NumberFunc<P> {
  value: NumValue<P>;

  constructor(value: NumValue<P>) {
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
      return 1;
    } else if ("calc" in value) {
      return value.reverseCalc ? value.reverseCalc(new Decimal(result), param) : 1;
    } else {
      return 1;
    }
  }
}
