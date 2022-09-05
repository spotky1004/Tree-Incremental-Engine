export default function handleDynamicParam<T, P>(dynamic: DynamicParam<T, P>, param?: P, errMsg?: string): T {
  let result: T;
  if (typeof dynamic === "function") {
    if (!param) throw new Error(errMsg ?? `Missing param for dynamicParam`);
    result = dynamic(param);
  } else {
    result = dynamic as T;
  }
  return result;
}
