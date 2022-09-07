import type Decimal from "decimal.js";

export type NDecimal = number | Decimal;
export type NumberData = number | string;
export type DynamicParam<T, P> = T extends Function ? unknown : ((param: P) => T) | T;
