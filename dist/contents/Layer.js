"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ContentBase_1 = __importDefault(require("./ContentBase"));
class Layer extends ContentBase_1.default {
    type;
    contents;
    constructor(options) {
        super(options);
        this.type = "Layer";
        this.contents = [];
    }
    addContent() {
    }
    softReset() {
    }
    applySavedata() {
    }
}
exports.default = Layer;
