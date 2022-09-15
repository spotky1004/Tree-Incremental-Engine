"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const errMsg_1 = __importDefault(require("../data/errMsg"));
class ContentBase {
    type;
    game;
    id;
    name;
    onUpdate;
    displayCondition;
    element;
    constructor(options) {
        this.type = "ContentBase";
        this.id = options.id;
        this.name = options.name ?? null;
        this.onUpdate = options.onUpdate ?? null;
        this.displayCondition = options.displayCondition ?? null;
        this.element = null;
    }
    init(game) {
        this.game = game;
    }
    tick(dt) {
        dt;
    }
    createElement() {
    }
    update() {
        const game = this.game;
        if (!game) {
            throw new Error(errMsg_1.default.game.notInit());
        }
        if (this.onUpdate) {
            void this.onUpdate(this, game);
        }
    }
    addChildsToContent(contents) {
        contents;
    }
    getChildIds() {
        return [];
    }
    applySavedata(data) {
        const game = this.game;
        if (!game) {
            throw new Error(errMsg_1.default.game.notInit());
        }
        void data;
        this.update();
    }
}
exports.default = ContentBase;
