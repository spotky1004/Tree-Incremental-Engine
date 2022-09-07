import FuncBase, { FuncBaseOptions } from "./FuncBase";
import Decimal from "decimal.js";
import type { NDecimal } from "@util-types";
export interface ConstantOptions extends FuncBaseOptions {
}
export default class Constant extends FuncBase {
    constructor(options: ConstantOptions);
    calcValue(x: NDecimal): Decimal;
    calcX(value: NDecimal): Decimal;
}
