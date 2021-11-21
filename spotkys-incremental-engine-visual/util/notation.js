import Decimal from "../lib/decimal.js";

/**
 * @param {number | string | Decimal} value 
 * @param {number} [places] 
 * @returns {string}
 */
function notation(value, places=2) {
  let v = new Decimal(value);

  const sign = v.gt(0) ? 1 : -1;
  const log = Decimal.log10(Decimal.max(1, v));
  v = v.abs();

  let formated = "";
  if (v.lt(1e6)) {
    const decimalPlacesSub = log.floor().toNumber();
    const decimalPlaces = Math.max(Math.floor(log), places - decimalPlacesSub)+1;
    formated = v.toPrecision(decimalPlaces);
  } else {
    formated = v.toPrecision(places+1).split("+").join("");
  }
  
  if (sign === -1) formated = "-" + formated;
  return formated;
}

export default notation;
