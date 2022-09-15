"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const FuncBase_1 = __importDefault(require("./FuncBase"));
const decimal_js_1 = __importDefault(require("decimal.js"));
class Exponential extends FuncBase_1.default {
    base;
    constructor(options) {
        super(options);
        this.base = new decimal_js_1.default(options.base ?? 1);
    }
    calcValue(x) {
        const { start, mul, pow, base } = this;
        return start.mul(mul).mul(base.pow(x)).pow(pow);
    }
    calcX(value) {
        const { start, mul, pow, base } = this;
        value = new decimal_js_1.default(value);
        return value.pow(pow.pow(-1)).div(mul).div(start).log(base);
    }
}
exports.default = Exponential;
