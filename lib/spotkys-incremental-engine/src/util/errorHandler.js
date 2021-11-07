/**
 * @param {string} message 
 */
function errorHandler(message) {
  throw new Error(`[SpotkysIncrementalEngineError] ${message}`);
}

export default errorHandler
