"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const StagedNumber_1 = __importStar(require("./StagedNumber"));
const decimal_js_1 = __importDefault(require("decimal.js"));
class NumberFunc {
    value;
    constructor(value) {
        if (typeof value === "object" && "stages" in value &&
            !(value instanceof StagedNumber_1.default)) {
            value = (0, StagedNumber_1.createStagedNumber)(value);
        }
        this.value = value;
    }
    calc(x, param) {
        const value = this.value;
        if (value instanceof StagedNumber_1.default) {
            return value.calc(x);
        }
        else if (typeof value === "number") {
            return new decimal_js_1.default(value);
        }
        else if ("calc" in value) {
            return value.calc(new decimal_js_1.default(x), param);
        }
        else {
            return value;
        }
    }
    reverseCalc(result, param) {
        const value = this.value;
        if (value instanceof StagedNumber_1.default) {
            return value.reverseCalc(result);
        }
        else if (typeof value === "number") {
            return Infinity;
        }
        else if ("calc" in value) {
            return value.reverseCalc ? value.reverseCalc(new decimal_js_1.default(result), param) : 1;
        }
        else {
            return Infinity;
        }
    }
}
exports.default = NumberFunc;
