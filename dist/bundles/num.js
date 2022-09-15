"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Cost_1 = __importDefault(require("../etc/Cost"));
const NumberFunc_1 = __importDefault(require("../etc/num/NumberFunc"));
const StagedNumber_1 = __importDefault(require("../etc/num/StagedNumber"));
const Constant_1 = __importDefault(require("../etc/num/funcs/Constant"));
const Exponential_1 = __importDefault(require("../etc/num/funcs/Exponential"));
const Linear_1 = __importDefault(require("../etc/num/funcs/Linear"));
const LinerAccel_1 = __importDefault(require("../etc/num/funcs/LinerAccel"));
const num = {
    Cost: Cost_1.default,
    NumberFunc: NumberFunc_1.default,
    StagedNumber: StagedNumber_1.default,
    funcs: {
        Constant: Constant_1.default,
        Exponential: Exponential_1.default,
        Linear: Linear_1.default,
        LinearAccel: LinerAccel_1.default
    }
};
exports.default = num;
