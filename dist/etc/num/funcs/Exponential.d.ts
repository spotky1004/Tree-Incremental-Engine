import FuncBase, { FuncBaseOptions } from "./FuncBase";
import Decimal from "decimal.js";
import type { NDecimal } from "../../../typings/util";
export interface ExponentialOptions extends FuncBaseOptions {
    base?: NDecimal;
}
export default class Exponential extends FuncBase {
    base: Decimal;
    constructor(options: ExponentialOptions);
    calcValue(x: NDecimal): Decimal;
    calcX(value: NDecimal): Decimal;
}
