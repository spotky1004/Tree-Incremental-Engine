"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Game_1 = __importDefault(require("../core/Game"));
const Resource_1 = __importDefault(require("../core/Resource"));
const conetnet_1 = __importDefault(require("./conetnet"));
const num_1 = __importDefault(require("./num"));
const Tree = {
    Game: Game_1.default,
    Resource: Resource_1.default,
    conetnet: conetnet_1.default,
    num: num_1.default
};
exports.default = Tree;
