"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Layer_1 = __importDefault(require("../contents/Layer"));
const Upgrade_1 = __importDefault(require("../contents/Upgrade"));
const UpgradeList_1 = __importDefault(require("../contents/UpgradeList"));
const content = {
    Upgrade: Upgrade_1.default,
    UpgradeList: UpgradeList_1.default,
    Layer: Layer_1.default,
};
exports.default = content;
