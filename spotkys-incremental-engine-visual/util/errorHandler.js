/**
 * @param {string} message 
 */
function errorHandler(message) {
  throw new Error(`[SpotkysIncrementalEngineVisualError] ${message}`);
}

export default errorHandler
