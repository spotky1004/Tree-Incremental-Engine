/**
 * @param {string} name
 * @return {string} 
 */
function nameToKey(name) {
  let key = name.replace(/[ +]/g, "_").replace(/[^A-z0-9_]/g, "").toLowerCase();
  if (key.length === 0) key = `unknown_${name.split("").map(e => e.charCodeAt(0).toString(16).padStart(4, "0")).join("")}`;
  return key;
}

export default nameToKey;
