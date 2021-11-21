import Decimal from "../lib/decimal.js";

function mergeObject(target, source) {
  target = target ?? {};
  for (const i in source) {
    if (source[i] instanceof Decimal) {
      target[i] = new Decimal(target[i] ?? source[i]);
    } else if (Array.isArray(source[i])) {
      target[i] = mergeArray(target[i], source[i])
    } else if (typeof source[i] === "object") {
      target[i] = mergeObject(target[i], source[i]);
    } else {
      target[i] = source[i].constructor(target[i] ?? source[i]);
    }
  }
  return target;
}
function mergeArray(target, source) {
  target = target ?? [];
  for (let i = 0, l = source.length; i < l; i++) {
    if (source[i] instanceof Decimal) {
      target[i] = new Decimal(target[i] ?? source[i]);
    } else if (Array.isArray(source[i])) {
      target[i] = mergeArray(target[i], source[i]);
    } else if (typeof source[i] === "object") {
      target[i] = mergeObject(target[i], source[i]);
    } else {
      target[i] = source[i].constructor(target[i] ?? source[i]);
    }
  }
  return target;
}

export default mergeObject;
