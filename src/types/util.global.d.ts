type NDecimal = number | Decimal;
type NumberData = number | string;
type StrictMode<T, S extends boolean> = T | (S extends true ? never : undefined);
type DynamicParam<T, P> = T extends Function ? unknown : ((param: P) => T) | T;
