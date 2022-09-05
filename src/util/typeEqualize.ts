/**
 * Equlize type
 */

interface TypeEnum {
  "string": string;
  "number": number;
  "bigint": BigInt;
  "boolean": boolean;
  "symbol": Symbol;
  "undefined": undefined;
  "object": object;
  "function": Function;
};
type Types = keyof TypeEnum;
function typeCheckerGenerator<T extends Types[]>(types: T) {
  function typeChecker(toCheck: any): toCheck is TypeEnum[T[number]] {
    return types.includes(typeof toCheck);
  }
  return typeChecker;
}

const isCopyableType = typeCheckerGenerator(["number", "boolean", "bigint", "string"]);
export default function typeEqualize<T>(source: T, target: any): T {
  if (source === null) {
    target = null;
  } else if (Array.isArray(source)) {
    if (!Array.isArray(target)) target = [];
    for (let i = 0; i < Math.max(target.length, source.length); i++) {
      target[i] = typeEqualize(source[Math.min(source.length-1, i)], target[i] ?? target[0]);
    }
  } else if (typeof source === "object") {
    if (typeof target !== "object") target = {};

    for (const key in source) {
      target[key] = typeEqualize(source[key], target ? target[key] : undefined);
    }
  } else if (typeof source === "undefined") {
    target = target;
  } else if (isCopyableType(source)) {
    target = source.constructor(target ?? source);
  }

  return target;
}