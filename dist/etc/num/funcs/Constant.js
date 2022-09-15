"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const FuncBase_1 = __importDefault(require("./FuncBase"));
const decimal_js_1 = __importDefault(require("decimal.js"));
class Constant extends FuncBase_1.default {
    constructor(options) {
        super(options);
    }
    calcValue(x) {
        const { start, mul, pow } = this;
        x;
        return start.mul(mul).pow(pow);
    }
    calcX(value) {
        const { start, mul, pow } = this;
        if (start.mul(mul).pow(pow).eq(value)) {
            return new decimal_js_1.default(Infinity);
        }
        else {
            return new decimal_js_1.default(NaN);
        }
    }
}
exports.default = Constant;
