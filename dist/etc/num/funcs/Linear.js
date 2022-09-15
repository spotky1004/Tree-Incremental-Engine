"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const FuncBase_1 = __importDefault(require("./FuncBase"));
const decimal_js_1 = __importDefault(require("decimal.js"));
class Linear extends FuncBase_1.default {
    inc;
    constructor(options) {
        super(options);
        this.inc = new decimal_js_1.default(options.inc ?? 1);
    }
    calcValue(x) {
        const { start, mul, pow, inc } = this;
        return start.add(inc.mul(new decimal_js_1.default(x))).mul(mul).pow(pow);
    }
    calcX(value) {
        const { start, mul, pow, inc } = this;
        value = new decimal_js_1.default(value);
        return value.pow(pow.pow(-1)).div(mul).sub(start).div(inc);
    }
}
exports.default = Linear;
