"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createStagedNumber = void 0;
const funcs_1 = __importDefault(require("./funcs"));
const decimal_js_1 = __importDefault(require("decimal.js"));
;
function createStagedNumber(input) {
    const { type, stages } = input;
    const stagedNumber = new StagedNumber(type);
    for (const stage of stages) {
        void stagedNumber.addStage(...stage);
    }
    return stagedNumber;
}
exports.createStagedNumber = createStagedNumber;
class StagedNumber {
    conditionType;
    stages;
    stageReqsX;
    stageReqsValue;
    constructor(conditionType) {
        this.conditionType = conditionType;
        this.stages = [];
        this.stageReqsX = [];
        this.stageReqsValue = [];
    }
    calc(x) {
        const xd = new decimal_js_1.default(x);
        let idx = this.stageReqsX.findIndex(c => xd.lt(c)) - 1;
        idx = idx === -2 ? this.stages.length - 1 : Math.max(0, idx);
        const offset = this.stageReqsX[idx] ?? 0;
        const func = this.stages[idx][1];
        return func.calcValue(xd.sub(offset));
    }
    reverseCalc(value) {
        const valued = new decimal_js_1.default(value);
        let idx = this.stageReqsValue.findIndex(c => valued.lt(c)) - 1;
        idx = idx === -2 ? this.stages.length - 1 : Math.max(0, idx);
        const offset = this.stageReqsX[idx] ?? 0;
        const func = this.stages[idx][1];
        return decimal_js_1.default.max(offset, func.calcX(value).add(offset));
    }
    addStage(condition, type, options) {
        const func = funcs_1.default[type];
        this.stages.push([condition, new func(options)]);
        this.stages.sort(([a], [b]) => new decimal_js_1.default(a).comparedTo(b));
        if (this.conditionType === "x") {
            this.stageReqsX = this.stages.map(([c]) => new decimal_js_1.default(c));
            this.stageReqsValue = this.stages.map(([, f], i) => {
                const xReq = this.stageReqsX[i + 1] ?? Infinity;
                return f.calcValue(xReq);
            });
        }
        else {
            this.stageReqsX = this.stages.map(([c], i) => {
                const last = this.stages[i - 1];
                if (!last)
                    return new decimal_js_1.default(0);
                const func = last[1];
                return func.calcX(c);
            });
            this.stageReqsValue = this.stages.map(([c]) => new decimal_js_1.default(c));
        }
        return this;
    }
}
exports.default = StagedNumber;
