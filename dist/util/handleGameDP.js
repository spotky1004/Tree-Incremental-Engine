"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const handleDynamicParam_1 = __importDefault(require("./handleDynamicParam"));
const errMsg_1 = __importDefault(require("../data/errMsg"));
const gameDPErrMsg = errMsg_1.default.dynamic.missingParam("Game");
function handleGameDP(gameDP, game) {
    return (0, handleDynamicParam_1.default)(gameDP, game, gameDPErrMsg);
}
exports.default = handleGameDP;
