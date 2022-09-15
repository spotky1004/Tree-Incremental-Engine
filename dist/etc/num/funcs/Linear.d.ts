import FuncBase, { FuncBaseOptions } from "./FuncBase";
import Decimal from "decimal.js";
import type { NDecimal } from "../../../typings/util";
export interface LinearOptions extends FuncBaseOptions {
    inc?: NDecimal;
}
export default class Linear extends FuncBase {
    inc: Decimal;
    constructor(options: LinearOptions);
    calcValue(x: NDecimal): Decimal;
    calcX(value: NDecimal): Decimal;
}
