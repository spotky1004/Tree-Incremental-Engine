import { AnyFunc, FuncTypes, FuncOptions } from "./funcs";
import Decimal from "decimal.js";
import type { NDecimal } from "@util-types";
declare type ConditionType = "x" | "value";
declare type StagedNumberInputChunk<T extends FuncTypes> = [condition: NDecimal, type: T, options: FuncOptions[T]];
export interface StagedNumberInput {
    type: ConditionType;
    stages: StagedNumberInputChunk<FuncTypes>[];
}
export declare function createStagedNumber(input: StagedNumberInput): StagedNumber;
export default class StagedNumber {
    readonly conditionType: ConditionType;
    stages: [condition: NDecimal, func: AnyFunc][];
    private stageReqsX;
    private stageReqsValue;
    constructor(conditionType: ConditionType);
    calc(x: NDecimal): Decimal;
    reverseCalc(value: NDecimal): Decimal;
    addStage<T extends FuncTypes>(condition: NDecimal, type: T, options: FuncOptions[T]): this;
}
export {};
