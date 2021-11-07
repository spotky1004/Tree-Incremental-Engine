import Decimal from "../lib/decimal.js";

const numberCheckRegex = new RegExp(/^[0-9]+(\.[0-9]+)?(e[0-9]+)?$/);

/** 
 * @param {T} value
 * @return {T}
 * @template {*} T
 */
function decimalify(value) {
  if (value instanceof Decimal) {
    return value;
  } else if (Array.isArray(value)) {
    return value.map(decimalify);
  } else if (typeof value === "object") {
    value = {...value};
    for (let key in value) {
      value[key] = decimalify(value[key]);
    }
    return value;
  } else if (
    numberCheckRegex.test(value+"") ||
    typeof value === "number"
  ) {
    return new Decimal(value);
  } else {
    return value;
  }
}

export default decimalify;
