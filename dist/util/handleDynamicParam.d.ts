import type { DynamicParam } from "@util-types";
export default function handleDynamicParam<T, P>(dynamic: DynamicParam<T, P>, param?: P, errMsg?: string): T;
