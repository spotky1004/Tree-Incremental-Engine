import StagedNumber, { StagedNumberInput } from "./StagedNumber";
import Decimal from "decimal.js";
import type { NDecimal } from "@util-types";
interface NumCallbacks<P> {
    calc: (level: Decimal, param: P) => NDecimal;
    sum?: (from: Decimal, to: Decimal) => NDecimal;
    reverseCalc?: (value: Decimal, param: P) => NDecimal;
}
export declare type NumInput<P> = NDecimal | NumCallbacks<P> | StagedNumber | StagedNumberInput;
export declare type NumValue<P> = NDecimal | NumCallbacks<P> | StagedNumber;
export default class NumberFunc<P> {
    value: NumValue<P>;
    constructor(value: NumInput<P>);
    calc(x: NDecimal, param: P): NDecimal;
    reverseCalc(result: NDecimal, param: P): NDecimal;
}
export {};
