type NDecimal = number | Decimal;
type NumberData = number | string;
type DynamicParam<T, P> = T extends Function ? unknown : ((param: P) => T) | T;
