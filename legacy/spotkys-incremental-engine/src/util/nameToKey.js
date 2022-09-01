/**
 * @param {string} name
 * @return {string} 
 */
function nameToKey(name) {
  let key = name.replace(/[ +]/g, "_").toLowerCase();
  return key;
}

export default nameToKey;
