import Decimal from "../lib/decimal.js";

const numberCheckRegex = new RegExp(/^[0-9]+(\.[0-9]+)?(e[0-9]+)?$/);

/** 
 * @param {T} value
 * @param {boolean} focus - Focus to change to Decimal (excpet, Decimal & Array & Object)
 * @return {T}
 * @template {*} T
 */
function decimalify(value, focus=true) {
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
    focus ||
    numberCheckRegex.test(value+"") ||
    typeof value === "number"
  ) {
    return new Decimal(value);
  } else {
    return value;
  }
}

export default decimalify;
