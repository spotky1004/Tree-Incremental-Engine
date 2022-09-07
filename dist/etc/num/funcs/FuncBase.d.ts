import Decimal from "decimal.js";
import type { NDecimal } from "@util-types";
export interface FuncBaseOptions {
    start?: NDecimal;
    mul?: NDecimal;
    pow?: NDecimal;
}
export default class FuncBase {
    start: Decimal;
    mul: Decimal;
    pow: Decimal;
    constructor(options: FuncBaseOptions);
    calcValue(x: NDecimal): Decimal;
    calcX(value: NDecimal): Decimal;
}
