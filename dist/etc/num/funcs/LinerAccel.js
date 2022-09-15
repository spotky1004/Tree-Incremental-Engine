"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const FuncBase_1 = __importDefault(require("./FuncBase"));
const decimal_js_1 = __importDefault(require("decimal.js"));
function arithmeticSum(n, d, a) {
    return a.mul(2)
        .add(n.sub(1).mul(d))
        .mul(n.div(2));
}
class LinearAccel extends FuncBase_1.default {
    inc;
    acc;
    constructor(options) {
        super(options);
        this.inc = new decimal_js_1.default(options.inc ?? 1);
        this.acc = new decimal_js_1.default(options.acc ?? 1);
    }
    calcValue(x) {
        const { start, mul, pow, inc, acc } = this;
        x = new decimal_js_1.default(x);
        return start.add(arithmeticSum(new decimal_js_1.default(x).sub(1), acc, inc)).mul(mul).pow(pow);
    }
    calcX(value) {
        const { start, mul, pow, inc, acc } = this;
        value = new decimal_js_1.default(value);
        // y = (sum (a + kd), k = 0 to n - 1) = n/2(2a + (n - 1)d)
        // n = +-sqrt(2/d(y - a^2/d^2 + a/d - 1/4)) - a/d + 1/2
        const valueSign = decimal_js_1.default.sign(value);
        const sumValue = value.abs().pow(pow.pow(-1)).mul(valueSign).div(mul).sub(start);
        const sign = decimal_js_1.default.sign(sumValue);
        return sumValue.abs().sub(inc.pow(2).div(acc.mul(2))).add(inc.div(2)).sub(1 / 4).mul(new decimal_js_1.default(2).div(acc)).sqrt().mul(sign).sub(inc.div(acc)).add(1 / 2);
    }
}
exports.default = LinearAccel;
