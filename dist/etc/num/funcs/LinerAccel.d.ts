import FuncBase, { FuncBaseOptions } from "./FuncBase";
import Decimal from "decimal.js";
import type { NDecimal } from "../../../typings/util";
export interface LinearAccelOptions extends FuncBaseOptions {
    inc?: NDecimal;
    acc?: NDecimal;
}
export default class LinearAccel extends FuncBase {
    inc: Decimal;
    acc: Decimal;
    constructor(options: LinearAccelOptions);
    calcValue(x: NDecimal): Decimal;
    calcX(value: NDecimal): Decimal;
}
