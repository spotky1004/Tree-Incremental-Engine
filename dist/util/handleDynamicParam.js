"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function handleDynamicParam(dynamic, param, errMsg) {
    let result;
    if (typeof dynamic === "function") {
        if (!param)
            throw new Error(errMsg ?? `Missing param for dynamicParam`);
        result = dynamic(param);
    }
    else {
        result = dynamic;
    }
    return result;
}
exports.default = handleDynamicParam;
