"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Constant_1 = __importDefault(require("./funcs/Constant"));
const Exponential_1 = __importDefault(require("./funcs/Exponential"));
const Linear_1 = __importDefault(require("./funcs/Linear"));
const LinerAccel_1 = __importDefault(require("./funcs/LinerAccel"));
const funcs = {
    "const": Constant_1.default,
    "exp": Exponential_1.default,
    "linear": Linear_1.default,
    "acc": LinerAccel_1.default
};
exports.default = funcs;
