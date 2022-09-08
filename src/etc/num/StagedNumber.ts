import funcs, { AnyFunc, FuncTypes, FuncOptions } from "./funcs";
import Decimal from "decimal.js"; 
import type { NDecimal } from "@typings/util";

type ConditionType = "x" | "value";

type StagedNumberInputChunk<T extends FuncTypes> = [condition: NDecimal, type: T, options: FuncOptions[T]];
export interface StagedNumberInput {
  type: ConditionType;
  stages: StagedNumberInputChunk<FuncTypes>[];
};

export function createStagedNumber(input: StagedNumberInput) {
  const { type, stages } = input;
  const stagedNumber = new StagedNumber(type);
  for (const stage of stages) {
    void stagedNumber.addStage(...stage);
  }
  return stagedNumber;
}

export default class StagedNumber {
  readonly conditionType: ConditionType;
  stages: [condition: NDecimal, func: AnyFunc][];
  private stageReqsX: Decimal[];
  private stageReqsValue: Decimal[];

  constructor(conditionType: ConditionType) {
    this.conditionType = conditionType;
    this.stages = [];
    this.stageReqsX = [];
    this.stageReqsValue = [];
  }

  calc(x: NDecimal) {
    const xd = new Decimal(x);

    let idx = this.stageReqsX.findIndex(c => xd.lt(c)) - 1;
    idx = idx === -2 ? this.stages.length - 1 : Math.max(0, idx);
    
    const offset = this.stageReqsX[idx] ?? 0;
    const func = this.stages[idx][1];
    return func.calcValue(xd.sub(offset));
  }

  reverseCalc(value: NDecimal) {
    const valued = new Decimal(value);

    let idx = this.stageReqsValue.findIndex(c => valued.lt(c)) - 1;
    idx = idx === -2 ? this.stages.length - 1 : Math.max(0, idx);

    const offset = this.stageReqsX[idx] ?? 0;
    const func = this.stages[idx][1];
    return Decimal.max(offset, func.calcX(value).add(offset));
  }

  addStage<T extends FuncTypes>(condition: NDecimal, type: T, options: FuncOptions[T]) {
    const func = funcs[type];
    this.stages.push([condition, new func(options)]);
    this.stages.sort(([a], [b]) => new Decimal(a).comparedTo(b));

    if (this.conditionType === "x") {
      this.stageReqsX = this.stages.map(([c]) => new Decimal(c));
      this.stageReqsValue = this.stages.map(([,f], i) => {
        const xReq = this.stageReqsX[i + 1] ?? Infinity;
        return f.calcValue(xReq);
      });
    } else {
      this.stageReqsX = this.stages.map(([c], i) => {
        const last = this.stages[i - 1];
        if (!last) return new Decimal(0);
        const func = last[1];
        return func.calcX(c);
      });
      this.stageReqsValue = this.stages.map(([c]) => new Decimal(c));
    }

    return this;
  }
}
