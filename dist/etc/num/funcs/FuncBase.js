"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const decimal_js_1 = __importDefault(require("decimal.js"));
class FuncBase {
    start;
    mul;
    pow;
    constructor(options) {
        this.start = new decimal_js_1.default(options.start ?? 0);
        this.mul = new decimal_js_1.default(options.mul ?? 1);
        this.pow = new decimal_js_1.default(options.pow ?? 1);
    }
    calcValue(x) {
        const { start, mul, pow } = this;
        x = new decimal_js_1.default(x);
        return start.mul(mul).pow(pow);
    }
    calcX(value) {
        const { start, mul, pow } = this;
        value = new decimal_js_1.default(value);
        if (start.mul(mul).pow(pow).eq(value)) {
            return new decimal_js_1.default(Infinity);
        }
        else {
            return new decimal_js_1.default(NaN);
        }
    }
}
exports.default = FuncBase;
