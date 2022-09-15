import type { DynamicParam } from "../typings/util";
export default function handleDynamicParam<T, P>(dynamic: DynamicParam<T, P>, param?: P, errMsg?: string): T;
